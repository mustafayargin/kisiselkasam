import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js';
import {getAuth,GoogleAuthProvider,onAuthStateChanged,setPersistence,browserLocalPersistence,signInWithPopup} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';
import {getFirestore,doc,getDoc,setDoc,serverTimestamp} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js';

const firebaseConfig={apiKey:'AIzaSyBN6JnGRn1p37lCsdtavqaryqr3JfF4yYE',authDomain:'kisisel-kasa.firebaseapp.com',projectId:'kisisel-kasa',storageBucket:'kisisel-kasa.firebasestorage.app',messagingSenderId:'432687211408',appId:'1:432687211408:web:d6a252b049c8ea135c4915'};
const firebaseApp=initializeApp(firebaseConfig),auth=getAuth(firebaseApp),db=getFirestore(firebaseApp),provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
let vaultKey=null,vaultSalt=null,vaultExists=false;
window.firebaseAuthState={auth,user:null};

const enc=new TextEncoder(),dec=new TextDecoder();
const bytesToB64=bytes=>btoa(String.fromCharCode(...bytes));
const b64ToBytes=value=>Uint8Array.from(atob(value),c=>c.charCodeAt(0));
const emit=(name,detail)=>document.dispatchEvent(new CustomEvent(name,{detail}));
function friendlyError(error){const code=error?.code||'';if(code.includes('popup-closed-by-user'))return 'Google giriş penceresi kapatıldı';if(code.includes('popup-blocked'))return 'Tarayıcı giriş penceresini engelledi';if(code.includes('unauthorized-domain'))return 'Bu adres Firebase yetkili alanlarına eklenmemiş';if(code.includes('network-request-failed'))return 'İnternet bağlantısı kurulamadı';if(code.includes('permission-denied'))return 'Firestore erişimi güvenlik kuralı tarafından engellendi';return error?.message||'İşlem tamamlanamadı'}
async function deriveKey(password,salt){const material=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:310000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
async function encryptVault(data){const iv=crypto.getRandomValues(new Uint8Array(12)),cipher=await crypto.subtle.encrypt({name:'AES-GCM',iv},vaultKey,enc.encode(JSON.stringify(data)));return {iv:bytesToB64(iv),cipher:bytesToB64(new Uint8Array(cipher))}}
async function decryptVault(record,key){const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64ToBytes(record.iv)},key,b64ToBytes(record.cipher));return JSON.parse(dec.decode(plain))}
const vaultRef=()=>doc(db,'users',auth.currentUser.uid,'vault','main');

await setPersistence(auth,browserLocalPersistence);
onAuthStateChanged(auth,async user=>{
  window.firebaseAuthState.user=user;emit('firebase-auth-ready',user?{uid:user.uid,email:user.email,displayName:user.displayName,photoURL:user.photoURL}:null);
  if(user){try{const snap=await getDoc(vaultRef());vaultExists=snap.exists();emit('vault-password-required',{exists:vaultExists})}catch(error){emit('firebase-auth-error',friendlyError(error))}}
});
document.addEventListener('firebase-sign-in-request',async()=>{try{const result=auth.currentUser?{user:auth.currentUser}:await signInWithPopup(auth,provider);emit('firebase-authenticated',{uid:result.user.uid,email:result.user.email,displayName:result.user.displayName,photoURL:result.user.photoURL})}catch(error){emit('firebase-auth-error',friendlyError(error))}});
document.addEventListener('vault-unlock-request',async event=>{
  try{
    const password=event.detail?.password||'';if(password.length<10)throw new Error('Ana parola en az 10 karakter olmalı');
    const snap=await getDoc(vaultRef());
    if(snap.exists()){const record=snap.data();vaultSalt=b64ToBytes(record.salt);const key=await deriveKey(password,vaultSalt);const data=await decryptVault(record,key);vaultKey=key;vaultExists=true;emit('vault-loaded',data)}
    else{vaultSalt=crypto.getRandomValues(new Uint8Array(16));vaultKey=await deriveKey(password,vaultSalt);vaultExists=true;const empty={accounts:{},projects:{},cards:{},secureNotes:{},documents:{}};const encrypted=await encryptVault(empty);await setDoc(vaultRef(),{...encrypted,salt:bytesToB64(vaultSalt),version:1,updatedAt:serverTimestamp()});emit('vault-loaded',empty)}
  }catch(error){vaultKey=null;emit('vault-error',error?.name==='OperationError'?'Ana parola yanlış':friendlyError(error))}
});
document.addEventListener('vault-save-request',async event=>{
  if(!vaultKey||!auth.currentUser)return;
  try{const encrypted=await encryptVault(event.detail);if(encrypted.cipher.length>900000)throw new Error('Kasa boyutu Firestore sınırına yaklaştı. Büyük belgeleri küçült.');await setDoc(vaultRef(),{...encrypted,salt:bytesToB64(vaultSalt),version:1,updatedAt:serverTimestamp()});emit('vault-saved')}catch(error){emit('vault-error',friendlyError(error))}
});
