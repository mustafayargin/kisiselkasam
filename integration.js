(function () {
  "use strict";

  const RECORDS_KEY = "kisisel-kasa-v3-local-records";
  const ACTIVITY_KEY = "kisisel-kasa-v3-activities";
  const EMPTY_UI = JSON.stringify({ hesaplar: [], kartlar: [], projeler: [], notlar: [], belgeler: [] });
  const nativeSetItem = Storage.prototype.setItem;
  let currentVault = { accounts: {}, projects: {}, cards: {}, secureNotes: {}, documents: {} };
  let vaultReady = false;
  let saveTimer = null;
  nativeSetItem.call(localStorage, RECORDS_KEY, EMPTY_UI);
  nativeSetItem.call(localStorage, ACTIVITY_KEY, "[]");

  const palette = (index) => [
    ["#14532d", "#16834c"],
    ["#172554", "#2563eb"],
    ["#3b1d66", "#7c3aed"],
    ["#5f1724", "#a83f55"],
    ["#111827", "#374151"],
  ][index % 5];

  const stripHtml = (value) => {
    const node = document.createElement("div");
    node.innerHTML = value || "";
    return (node.textContent || "").trim();
  };

  const legacyToUi = (vault) => ({
    hesaplar: Object.entries(vault.accounts || {}).map(([id, item]) => ({
      id,
      name: item.name || item.provider || "Hesap",
      username: item.fullEmail || item.email || "",
      password: item.password || "",
      bg: "#1B4DD8",
      emoji: item.icon || "🔐",
      lastUsed: "Firebase",
      strength: "Şifreli",
      strengthLevel: 4,
    })),
    kartlar: Object.entries(vault.cards || {}).map(([id, item], index) => {
      const colors = item.c1 && item.c2 ? [item.c1, item.c2] : palette(index);
      return {
        id,
        bank: item.bank || item.name || "Kart",
        holder: item.holder || item.name || "KART SAHİBİ",
        number: String(item.number || "").replace(/\D/g, ""),
        expiry: item.expiry || "--/--",
        type: item.type || "Kart",
        cvv: item.cvv || "---",
        c1: colors[0],
        c2: colors[1],
      };
    }),
    projeler: Object.entries(vault.projects || {}).map(([id, item]) => ({
      id,
      name: item.title || item.name || "Proje",
      url: (item.connections || []).find((connection) => connection[3])?.[3] || "https://",
      desc: item.description || "",
      services: (item.connections || []).map((connection) => ({
        name: connection[1] || "Bağlantı",
        account: connection[2] || item.account || "",
        password: "",
        url: connection[3] || "#",
      })),
      notes: stripHtml(item.notes || ""),
      updated: "Firebase",
    })),
    notlar: Object.entries(vault.secureNotes || {}).map(([id, item], index) => ({
      id,
      title: item.title || "Güvenli Not",
      content: item.content || "",
      date: "Firebase",
      category: item.tag || "Kişisel",
      accent: ["#d97706", "#7c3aed", "#1B4DD8", "#16a34a", "#E05A3A"][index % 5],
      pinned: !!item.pinned,
    })),
    belgeler: Object.entries(vault.documents || {}).map(([id, item]) => ({ id, ...item })),
  });

  const uiToLegacy = (records) => {
    const next = structuredClone(currentVault || {});
    next.accounts = Object.fromEntries((records.hesaplar || []).map((item) => {
      const old = currentVault.accounts?.[item.id] || item.legacy || {};
      return [item.id, {
        ...old,
        name: item.name,
        provider: old.provider || "Üyelik Hesabı",
        providerKey: old.providerKey || "email",
        email: item.username,
        fullEmail: item.username,
        password: item.password,
        badge: "ŞİFRELİ",
        icon: old.icon || "H",
        iconClass: old.iconClass || "mail",
        services: old.services || ["Henüz bağlantı yok"],
      }];
    }));
    next.cards = Object.fromEntries((records.kartlar || []).map((item) => {
      const old = currentVault.cards?.[item.id] || item.legacy || {};
      return [item.id, {
        ...old,
        name: old.name || item.bank,
        bank: item.bank,
        type: item.type || "Kart",
        holder: item.holder,
        number: String(item.number || "").replace(/\D/g, ""),
        expiry: item.expiry,
        cvv: item.cvv,
        c1: item.c1,
        c2: item.c2,
      }];
    }));
    next.projects = Object.fromEntries((records.projeler || []).map((item) => {
      const old = currentVault.projects?.[item.id] || item.legacy || {};
      return [item.id, {
        ...old,
        title: item.name,
        description: item.desc,
        logo: old.logo || item.name.slice(0, 2).toLocaleUpperCase("tr"),
        cover: old.cover || "network",
        connections: (item.services || []).map((service) => [
          service.name.slice(0, 2).toLocaleUpperCase("tr"),
          service.name,
          service.account || "",
          service.url && service.url !== "#" ? service.url : "",
        ]),
        notes: `<p>${String(item.notes || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n/g, "<br>")}</p>`,
      }];
    }));
    next.secureNotes = Object.fromEntries((records.notlar || []).map((item) => {
      const old = currentVault.secureNotes?.[item.id] || item.legacy || {};
      return [item.id, { ...old, title: item.title, tag: item.category, content: item.content, pinned: !!item.pinned }];
    }));
    next.documents = Object.fromEntries((records.belgeler || []).map((item) => {
      const old = currentVault.documents?.[item.id] || {};
      return [item.id, {
        ...old,
        name: item.name || old.name || "Belge",
        type: item.type || old.type || "Belge",
        note: item.note || item.notes || old.note || "",
        fileName: item.fileName || old.fileName || "",
        mimeType: item.mimeType || old.mimeType || "",
        isImage: item.isImage ?? old.isImage ?? false,
        isPdf: item.isPdf ?? old.isPdf ?? false,
        url: item.url || old.url || "",
      }];
    }));
    return next;
  };

  const queueSave = (records) => {
    if (!vaultReady) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      const data = uiToLegacy(records);
      currentVault = data;
      document.dispatchEvent(new CustomEvent("vault-save-request", {
        detail: { requestId: `ui-${Date.now()}`, data },
      }));
    }, 180);
  };

  Storage.prototype.setItem = function (key, value) {
    if (this === localStorage && key === RECORDS_KEY) {
      nativeSetItem.call(this, key, EMPTY_UI);
      try { queueSave(JSON.parse(value)); } catch {}
      return;
    }
    if (this === localStorage && key === ACTIVITY_KEY) {
      nativeSetItem.call(this, key, "[]");
      return;
    }
    nativeSetItem.call(this, key, value);
  };

  function createGate() {
    if (document.getElementById("kasaSecurityGate")) return;
    const gate = document.createElement("div");
    gate.id = "kasaSecurityGate";
    gate.innerHTML = `
      <div class="security-gate-card">
        <div class="security-logo"><span>◆</span></div>
        <p class="security-eyebrow">KİŞİSEL KASA</p>
        <h1 id="securityGateTitle">Güvenli dijital yaşam</h1>
        <p id="securityGateText">Firebase bağlantısı hazırlanıyor…</p>
        <div id="securityUser" class="security-user hidden"></div>
        <div id="securityLoginActions">
          <button id="securityGoogleButton" class="security-primary"><b>G</b><span>Google ile güvenli giriş</span></button>
        </div>
        <form id="securityPasswordForm" class="hidden">
          <label>Ana parola<input id="securityPassword" type="password" minlength="10" autocomplete="current-password" required></label>
          <label id="securityConfirmLabel" class="hidden">Ana parola tekrar<input id="securityPasswordConfirm" type="password" minlength="10" autocomplete="new-password"></label>
          <button class="security-primary" type="submit">Kasayı Aç</button>
          <button id="securityRecoverOpen" class="security-link" type="button">Ana parolamı unuttum</button>
        </form>
        <form id="securityRecoveryForm" class="hidden">
          <label>Kurtarma anahtarı<input id="securityRecoveryCode" autocomplete="off"></label>
          <label>Yeni ana parola<input id="securityNewPassword" type="password" minlength="10"></label>
          <label>Yeni parola tekrar<input id="securityNewPasswordConfirm" type="password" minlength="10"></label>
          <button class="security-primary" type="submit">Parolayı Yenile</button>
          <button id="securityRecoveryBack" class="security-link" type="button">Geri dön</button>
        </form>
        <p id="securityGateError" class="security-error"></p>
        <div class="security-badges"><span>AES-256-GCM</span><span>Firebase</span><span>Şifreli</span></div>
      </div>`;
    document.body.appendChild(gate);

    const passwordForm = gate.querySelector("#securityPasswordForm");
    const recoveryForm = gate.querySelector("#securityRecoveryForm");
    gate.querySelector("#securityGoogleButton").onclick = () =>
      document.dispatchEvent(new CustomEvent("firebase-sign-in-request"));
    passwordForm.onsubmit = (event) => {
      event.preventDefault();
      const password = gate.querySelector("#securityPassword").value;
      const confirmation = gate.querySelector("#securityPasswordConfirm").value;
      if (gate.dataset.isNew === "true" && password !== confirmation) return showError("Ana parolalar eşleşmiyor");
      document.dispatchEvent(new CustomEvent("vault-unlock-request", { detail: { password } }));
    };
    gate.querySelector("#securityRecoverOpen").onclick = () => {
      passwordForm.classList.add("hidden");
      recoveryForm.classList.remove("hidden");
    };
    gate.querySelector("#securityRecoveryBack").onclick = () => {
      recoveryForm.classList.add("hidden");
      passwordForm.classList.remove("hidden");
    };
    recoveryForm.onsubmit = (event) => {
      event.preventDefault();
      const newPassword = gate.querySelector("#securityNewPassword").value;
      if (newPassword !== gate.querySelector("#securityNewPasswordConfirm").value) return showError("Yeni parolalar eşleşmiyor");
      document.dispatchEvent(new CustomEvent("vault-recover-request", { detail: { code: gate.querySelector("#securityRecoveryCode").value, newPassword } }));
    };
  }

  const gate = () => document.getElementById("kasaSecurityGate");
  const showError = (message) => {
    const target = document.getElementById("securityGateError");
    if (target) target.textContent = message || "İşlem tamamlanamadı";
  };

  document.addEventListener("firebase-auth-ready", (event) => {
    createGate();
    const user = event.detail;
    window.kasaCurrentUser = user || null;
    const target = document.getElementById("securityUser");
    if (user) {
      target.classList.remove("hidden");
      target.textContent = `${user.displayName || "Kasa Sahibi"} · ${user.email || ""}`;
      document.getElementById("securityLoginActions").classList.add("hidden");
      document.getElementById("securityGateText").textContent = "Google hesabın doğrulandı. Şifreli kasan hazırlanıyor…";
    } else {
      document.getElementById("securityGateText").textContent = "Kasanı açmak için Google hesabınla doğrulama yap.";
    }
  });
  document.addEventListener("firebase-authenticated", () => {
    document.getElementById("securityLoginActions")?.classList.add("hidden");
    document.getElementById("securityGateText").textContent = "Google doğrulandı. Ana parolan bekleniyor…";
  });
  document.addEventListener("vault-password-required", (event) => {
    createGate();
    const isNew = !event.detail?.exists;
    gate().classList.remove("hidden");
    gate().dataset.isNew = String(isNew);
    document.getElementById("securityPasswordForm").classList.remove("hidden");
    document.getElementById("securityConfirmLabel").classList.toggle("hidden", !isNew);
    document.getElementById("securityRecoverOpen").classList.toggle("hidden", isNew);
    document.getElementById("securityGateTitle").textContent = isNew ? "Yeni kasanı oluştur" : "Kasanı aç";
    document.getElementById("securityGateText").textContent = isNew ? "En az 10 karakterlik güçlü bir ana parola belirle." : "Şifreli verilerini çözmek için ana parolanı gir.";
  });
  document.addEventListener("vault-loaded", (event) => {
    currentVault = event.detail || currentVault;
    vaultReady = true;
    const records = legacyToUi(currentVault);
    nativeSetItem.call(localStorage, RECORDS_KEY, EMPTY_UI);
    window.dispatchEvent(new CustomEvent("kasa-records-loaded", { detail: records }));
    gate()?.classList.add("hidden");
  });
  document.addEventListener("vault-error", (event) => showError(event.detail));
  document.addEventListener("firebase-auth-error", (event) => showError(event.detail));
  document.addEventListener("recovery-code-created", async (event) => {
    const code = event.detail?.code || "";
    await window.kasaDialog?.({ title: "Kurtarma Anahtarın", message: `Bu anahtarı çevrimdışı ve güvenli bir yerde sakla:\n\n${code}`, confirmText: "Kaydettim" });
  });
  document.addEventListener("vault-saved", () => window.dispatchEvent(new CustomEvent("kasa-firebase-saved")));
  document.addEventListener("DOMContentLoaded", createGate);
})();
