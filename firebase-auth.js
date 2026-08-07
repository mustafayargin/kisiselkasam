import {initializeApp} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js';
import {getAuth,GoogleAuthProvider,onAuthStateChanged,setPersistence,browserLocalPersistence,signInWithPopup} from 'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js';

const firebaseConfig={
  apiKey:'AIzaSyBN6JnGRn1p37lCsdtavqaryqr3JfF4yYE',
  authDomain:'kisisel-kasa.firebaseapp.com',
  projectId:'kisisel-kasa',
  storageBucket:'kisisel-kasa.firebasestorage.app',
  messagingSenderId:'432687211408',
  appId:'1:432687211408:web:d6a252b049c8ea135c4915'
};

const firebaseApp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const provider=new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
window.firebaseAuthState={auth,user:null};

function emit(name,detail){document.dispatchEvent(new CustomEvent(name,{detail}))}
function friendlyError(error){
  const code=error?.code||'';
  if(code.includes('popup-closed-by-user'))return 'Google giriş penceresi kapatıldı';
  if(code.includes('popup-blocked'))return 'Tarayıcı giriş penceresini engelledi';
  if(code.includes('unauthorized-domain'))return 'Bu adres Firebase yetkili alanlarına eklenmemiş';
  if(code.includes('network-request-failed'))return 'İnternet bağlantısı kurulamadı';
  return 'Google girişi tamamlanamadı';
}

await setPersistence(auth,browserLocalPersistence);
onAuthStateChanged(auth,user=>{
  window.firebaseAuthState.user=user;
  emit('firebase-auth-ready',user?{uid:user.uid,email:user.email,displayName:user.displayName,photoURL:user.photoURL}:null);
});

document.addEventListener('firebase-sign-in-request',async()=>{
  try{
    const result=auth.currentUser?{user:auth.currentUser}:await signInWithPopup(auth,provider);
    const user=result.user;
    window.firebaseAuthState.user=user;
    emit('firebase-authenticated',{uid:user.uid,email:user.email,displayName:user.displayName,photoURL:user.photoURL});
  }catch(error){
    emit('firebase-auth-error',friendlyError(error));
  }
});
