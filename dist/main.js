// ===== CONFIGURACIÓN =====

// Fecha de lanzamiento
const RELEASE_DATE = new Date("2026-11-19T00:00:00");

const ADS_PREFERENCE_KEY = "gta6-ads-enabled";
const LANGUAGE_KEY = "gta6-language";
const THEME_KEY = "gta6-theme";

// ===== TRADUCCIONES (i18n) =====

const translations = {
  es: {
    "nav-countdown": "Cuenta regresiva",
    "disclaimer-title": "SITIO NO OFICIAL",
    "disclaimer-text": "Esta es una página de fans. Para información oficial, visita",
    "countdown-title": "Cuenta regresiva para GTA 6",
    "release-label": "Lanzamiento oficial actual:",
    "release-note": "(según comunicados recientes de Rockstar Games)",
    "days": "Días",
    "hours": "Horas",
    "minutes": "Minutos",
    "seconds": "Segundos",
    "countdown-note": "El contador usa tu hora local. La fecha puede cambiar si Rockstar anuncia un nuevo retraso.",
    "toggle-ads": "Quitar anuncios",
    "toggle-ads-show": "Volver a mostrar anuncios",
    "ad-label": "Publicidad",
    "footer-unofficial": "Sitio web NO oficial.",
    "footer-disclaimer": "Esta es una página creada por fans. Grand Theft Auto, GTA y Rockstar Games son marcas registradas de Take-Two Interactive Software, Inc. Toda la información oficial sobre GTA 6 está disponible en",
    "footer-privacy": "No se almacenan datos personales. Preferencias guardadas en tu navegador (localStorage)."
  },
  en: {
    "nav-countdown": "Countdown",
    "disclaimer-title": "UNOFFICIAL WEBSITE",
    "disclaimer-text": "This is a fan-made page. For official information, visit",
    "countdown-title": "GTA 6 Countdown",
    "release-label": "Official release date:",
    "release-note": "(according to recent Rockstar Games announcements)",
    "days": "Days",
    "hours": "Hours",
    "minutes": "Minutes",
    "seconds": "Seconds",
    "countdown-note": "The countdown uses your local time. The date may change if Rockstar announces a new delay.",
    "toggle-ads": "Hide ads",
    "toggle-ads-show": "Show ads again",
    "ad-label": "Advertisement",
    "footer-unofficial": "UNOFFICIAL website.",
    "footer-disclaimer": "This is a fan-made page. Grand Theft Auto, GTA and Rockstar Games are registered trademarks of Take-Two Interactive Software, Inc. All official information about GTA 6 is available at",
    "footer-privacy": "No personal data is stored. Preferences saved in your browser (localStorage)."
  },
  pt: {
    "nav-countdown": "Contagem regressiva",
    "disclaimer-title": "SITE NÃO OFICIAL",
    "disclaimer-text": "Esta é uma página de fãs. Para informações oficiais, visite",
    "countdown-title": "Contagem regressiva para GTA 6",
    "release-label": "Data de lançamento oficial:",
    "release-note": "(de acordo com anúncios recentes da Rockstar Games)",
    "days": "Dias",
    "hours": "Horas",
    "minutes": "Minutos",
    "seconds": "Segundos",
    "countdown-note": "A contagem usa seu horário local. A data pode mudar se a Rockstar anunciar um novo atraso.",
    "toggle-ads": "Ocultar anúncios",
    "toggle-ads-show": "Mostrar anúncios novamente",
    "ad-label": "Publicidade",
    "footer-unofficial": "Site NÃO oficial.",
    "footer-disclaimer": "Esta é uma página criada por fãs. Grand Theft Auto, GTA e Rockstar Games são marcas registradas da Take-Two Interactive Software, Inc. Todas as informações oficiais sobre GTA 6 estão disponíveis em",
    "footer-privacy": "Nenhum dado pessoal é armazenado. Preferências salvas no seu navegador (localStorage)."
  }
};

let currentLanguage = "es";

function applyTranslations(lang) {
  currentLanguage = lang;
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update ads toggle button text based on current state
  updateAdsButtonText();
}

function initLanguageSelector() {
  const selector = document.getElementById("language-selector");
  if (!selector) return;

  // Detect browser language
  let defaultLang = "es";
  try {
    const browserLang = navigator.language.split("-")[0];
    if (translations[browserLang]) {
      defaultLang = browserLang;
    }
  } catch { }

  // Load saved preference
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved && translations[saved]) {
      defaultLang = saved;
    }
  } catch { }

  selector.value = defaultLang;
  applyTranslations(defaultLang);

  selector.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyTranslations(lang);

    try {
      localStorage.setItem(LANGUAGE_KEY, lang);
    } catch { }
  });
}

// ===== TEMA (THEME TOGGLE) =====

function applyTheme(theme) {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    if (themeToggle) {
      themeToggle.querySelector(".theme-icon").textContent = "☀️";
    }
  } else {
    root.setAttribute("data-theme", "dark");
    if (themeToggle) {
      themeToggle.querySelector(".theme-icon").textContent = "🌙";
    }
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  // Detect system preference
  let defaultTheme = "dark";
  try {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      defaultTheme = "light";
    }
  } catch { }

  // Load saved preference
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      defaultTheme = saved;
    }
  } catch { }

  applyTheme(defaultTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = current === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    try {
      localStorage.setItem(THEME_KEY, newTheme);
    } catch { }
  });

  // Listen for system theme changes
  try {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      const saved = localStorage.getItem(THEME_KEY);
      if (!saved) {
        applyTheme(e.matches ? "light" : "dark");
      }
    });
  } catch { }
}

// ===== CUENTA REGRESIVA =====

function updateCountdown() {
  const now = new Date().getTime();
  const distance = RELEASE_DATE.getTime() - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  if (distance <= 0) {
    daysEl.textContent = "0";
    hoursEl.textContent = "0";
    minutesEl.textContent = "0";
    secondsEl.textContent = "0";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days);
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// ===== CONTROL DE ANUNCIOS (ADS) =====

let adsEnabled = true;

function updateAdsButtonText() {
  const btn = document.getElementById("toggle-ads");
  if (!btn) return;

  const key = adsEnabled ? "toggle-ads" : "toggle-ads-show";
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    btn.textContent = translations[currentLanguage][key];
  }
}

function applyAdsPreference(enabled) {
  adsEnabled = enabled;

  if (enabled) {
    document.body.classList.remove("body-ads-hidden");
  } else {
    document.body.classList.add("body-ads-hidden");
  }

  updateAdsButtonText();
}

function initAdsToggle() {
  const btn = document.getElementById("toggle-ads");
  if (!btn) return;

  try {
    const stored = localStorage.getItem(ADS_PREFERENCE_KEY);
    if (stored === "false") adsEnabled = false;
  } catch { }

  applyAdsPreference(adsEnabled);

  btn.addEventListener("click", () => {
    adsEnabled = !adsEnabled;
    applyAdsPreference(adsEnabled);

    try {
      localStorage.setItem(ADS_PREFERENCE_KEY, String(adsEnabled));
    } catch { }
  });
}

// ===== INICIALIZACIÓN =====

document.addEventListener("DOMContentLoaded", () => {
  // Tema
  initThemeToggle();

  // Idioma
  initLanguageSelector();

  // Iniciar contador
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Ads
  initAdsToggle();
});
