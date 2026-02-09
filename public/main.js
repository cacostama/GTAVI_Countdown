// ===== CONFIGURACIÓN =====

// Fecha de lanzamiento
const RELEASE_DATE = new Date("2026-11-19T00:00:00");

const ADS_PREFERENCE_KEY = "gta6-ads-enabled";
const LANGUAGE_KEY = "gta6-language";
const THEME_KEY = "gta6-theme";

// ===== TRADUCCIONES (i18n) =====

const translations = {
  es: {
    "brand-tagline": "Cuenta regresiva no oficial",
    "nav-countdown": "Cuenta regresiva",
    "nav-features": "Características",
    "nav-news": "Noticias",
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
    "footer-privacy": "No se almacenan datos personales. Preferencias guardadas en tu navegador (localStorage).",
    "platforms-title": "Plataformas Disponibles",
    "platforms-intro": "GTA 6 estará disponible en las siguientes plataformas de nueva generación:",
    "platform-ps5-desc": "Optimizado para aprovechar el SSD ultra rápido y el DualSense de PS5",
    "platform-xbox-desc": "Compatible con Quick Resume y optimizado para Series X",
    "platform-pc-desc": "Versión para PC confirmada, lanzamiento posterior a consolas",
    "features-title": "Características de GTA 6",
    "features-intro": "Grand Theft Auto VI promete ser el juego más ambicioso de Rockstar Games hasta la fecha. Estas son las características confirmadas y esperadas:",
    "feature-world-title": "Mundo Abierto Masivo",
    "feature-world-desc": "Vice City reimaginada con un mapa que incluye múltiples ciudades y áreas rurales. Se espera que sea el mapa más grande de la historia de GTA, con ecosistemas dinámicos y clima cambiante.",
    "feature-chars-title": "Dos Protagonistas",
    "feature-chars-desc": "Por primera vez en la serie, jugarás con dos protagonistas: Jason y Lucia, inspirados en Bonnie y Clyde. Podrás cambiar entre personajes durante las misiones.",
    "feature-story-title": "Historia Épica",
    "feature-story-desc": "Una narrativa profunda que sigue la relación entre los dos protagonistas mientras escalan en el mundo del crimen organizado en Vice City.",
    "feature-vehicles-title": "Vehículos Realistas",
    "feature-vehicles-desc": "Física de conducción mejorada con cientos de vehículos personalizables. Desde deportivos de lujo hasta lanchas rápidas y helicópteros.",
    "feature-graphics-title": "Gráficos de Nueva Generación",
    "feature-graphics-desc": "Motor RAGE mejorado con ray tracing, iluminación global y detalles sin precedentes. Diseñado exclusivamente para hardware de nueva generación.",
    "feature-missions-title": "Misiones Dinámicas",
    "feature-missions-desc": "Sistema de misiones mejorado con múltiples enfoques. Tus decisiones afectarán el desarrollo de la historia y las relaciones con otros personajes.",
    "news-title": "Últimas Noticias",
    "news1-title": "Fecha de Lanzamiento Confirmada",
    "news1-desc": "Rockstar Games confirma oficialmente que GTA 6 se lanzará el 19 de noviembre de 2026 para PlayStation 5 y Xbox Series X/S. La versión de PC llegará posteriormente.",
    "news2-title": "Nuevo Tráiler Gameplay",
    "news2-desc": "Se reveló un tráiler de 3 minutos mostrando gameplay real, confirmando la ambientación en Vice City y presentando a los dos protagonistas principales.",
    "news3-title": "Detalles del Modo Online",
    "news3-desc": "Rockstar anuncia que GTA Online evolucionará con GTA 6, ofreciendo una experiencia completamente nueva con servidores dedicados y eventos en vivo.",
    "faq-title": "Preguntas Frecuentes",
    "faq1-q": "¿Cuándo sale GTA 6?",
    "faq1-a": "GTA 6 tiene fecha de lanzamiento confirmada para el 19 de noviembre de 2026 en PlayStation 5 y Xbox Series X/S.",
    "faq2-q": "¿Estará disponible en PC?",
    "faq2-a": "Sí, Rockstar ha confirmado una versión para PC, aunque se lanzará varios meses después de las versiones de consola, siguiendo el patrón de GTA 5.",
    "faq3-q": "¿Dónde está ambientado GTA 6?",
    "faq3-a": "El juego está ambientado en una versión moderna de Vice City (basada en Miami) y sus alrededores, incluyendo áreas inspiradas en los Everglades de Florida.",
    "faq4-q": "¿Habrá GTA Online en GTA 6?",
    "faq4-a": "Sí, Rockstar ha confirmado que habrá un modo online completamente renovado que se lanzará junto con el juego base.",
    "faq5-q": "¿Cuánto costará GTA 6?",
    "faq5-a": "Aunque no hay precio oficial confirmado, se espera que tenga un precio estándar de $69.99 USD para la edición base en consolas de nueva generación.",
    "seo-title": "Contador GTA 6 - Cuenta regresiva no oficial",
    "seo-description": "Cuenta regresiva no oficial de GTA 6 con metodología, fuentes y preguntas frecuentes para fans de Grand Theft Auto VI.",
    "countdown-h1": "Contador GTA 6 - Cuenta regresiva no oficial",
    "seo-intro": "Bienvenido al contador GTA 6 más preciso de internet. Este contador GTA VI muestra en tiempo real cuánto falta para el lanzamiento oficial de Grand Theft Auto VI, programado para el 19 de noviembre de 2026. Nuestra cuenta regresiva GTA 6 se actualiza cada segundo, permitiéndote seguir exactamente cuántos días, horas, minutos y segundos faltan para disfrutar del juego más esperado de Rockstar Games. Además del contador lanzamiento GTA 6, encontrarás las últimas noticias oficiales, características confirmadas del juego y toda la información sobre plataformas disponibles."
  },
  en: {
    "brand-tagline": "Unofficial countdown",
    "nav-countdown": "Countdown",
    "nav-features": "Features",
    "nav-news": "News",
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
    "footer-privacy": "No personal data is stored. Preferences saved in your browser (localStorage).",
    "platforms-title": "Available Platforms",
    "platforms-intro": "GTA 6 will be available on the following next-generation platforms:",
    "platform-ps5-desc": "Optimized to take advantage of PS5's ultra-fast SSD and DualSense",
    "platform-xbox-desc": "Compatible with Quick Resume and optimized for Series X",
    "platform-pc-desc": "PC version confirmed, releasing after console versions",
    "features-title": "GTA 6 Features",
    "features-intro": "Grand Theft Auto VI promises to be Rockstar Games' most ambitious game to date. These are the confirmed and expected features:",
    "feature-world-title": "Massive Open World",
    "feature-world-desc": "Reimagined Vice City with a map that includes multiple cities and rural areas. Expected to be the largest map in GTA history, with dynamic ecosystems and changing weather.",
    "feature-chars-title": "Two Protagonists",
    "feature-chars-desc": "For the first time in the series, you'll play as two protagonists: Jason and Lucia, inspired by Bonnie and Clyde. You can switch between characters during missions.",
    "feature-story-title": "Epic Story",
    "feature-story-desc": "A deep narrative that follows the relationship between the two protagonists as they climb the ranks of organized crime in Vice City.",
    "feature-vehicles-title": "Realistic Vehicles",
    "feature-vehicles-desc": "Improved driving physics with hundreds of customizable vehicles. From luxury sports cars to fast boats and helicopters.",
    "feature-graphics-title": "Next-Gen Graphics",
    "feature-graphics-desc": "Enhanced RAGE engine with ray tracing, global illumination and unprecedented detail. Designed exclusively for next-generation hardware.",
    "feature-missions-title": "Dynamic Missions",
    "feature-missions-desc": "Improved mission system with multiple approaches. Your decisions will affect the story development and relationships with other characters.",
    "news-title": "Latest News",
    "news1-title": "Release Date Confirmed",
    "news1-desc": "Rockstar Games officially confirms that GTA 6 will launch on November 19, 2026 for PlayStation 5 and Xbox Series X/S. PC version will arrive later.",
    "news2-title": "New Gameplay Trailer",
    "news2-desc": "A 3-minute trailer was revealed showing actual gameplay, confirming the Vice City setting and introducing the two main protagonists.",
    "news3-title": "Online Mode Details",
    "news3-desc": "Rockstar announces that GTA Online will evolve with GTA 6, offering a completely new experience with dedicated servers and live events.",
    "faq-title": "Frequently Asked Questions",
    "faq1-q": "When does GTA 6 come out?",
    "faq1-a": "GTA 6 has a confirmed release date of November 19, 2026 on PlayStation 5 and Xbox Series X/S.",
    "faq2-q": "Will it be available on PC?",
    "faq2-a": "Yes, Rockstar has confirmed a PC version, although it will release several months after the console versions, following the GTA 5 pattern.",
    "faq3-q": "Where is GTA 6 set?",
    "faq3-a": "The game is set in a modern version of Vice City (based on Miami) and its surroundings, including areas inspired by the Florida Everglades.",
    "faq4-q": "Will there be GTA Online in GTA 6?",
    "faq4-a": "Yes, Rockstar has confirmed there will be a completely revamped online mode that will launch alongside the base game.",
    "faq5-q": "How much will GTA 6 cost?",
    "faq5-a": "While there is no official price confirmed, it is expected to have a standard price of $69.99 USD for the base edition on next-gen consoles.",
    "seo-title": "GTA 6 Countdown - Unofficial fan timer",
    "seo-description": "Unofficial GTA 6 countdown with editorial methodology, source links and FAQ for Grand Theft Auto VI fans.",
    "countdown-h1": "GTA 6 Countdown - Unofficial fan timer",
    "seo-intro": "Welcome to the most accurate GTA 6 countdown on the internet. This GTA VI countdown displays in real-time exactly how long until the official release of Grand Theft Auto VI, scheduled for November 19, 2026. Our GTA 6 release countdown updates every second, letting you track precisely how many days, hours, minutes, and seconds remain until you can experience Rockstar Games' most anticipated title. Beyond the GTA 6 timer, you'll find the latest official news, confirmed game features, and complete information about available platforms."
  },
  pt: {
    "brand-tagline": "Contagem regressiva não oficial",
    "nav-countdown": "Contagem regressiva",
    "nav-features": "Características",
    "nav-news": "Notícias",
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
    "footer-privacy": "Nenhum dado pessoal é armazenado. Preferências salvas no seu navegador (localStorage).",
    "platforms-title": "Plataformas Disponíveis",
    "platforms-intro": "GTA 6 estará disponível nas seguintes plataformas de nova geração:",
    "platform-ps5-desc": "Otimizado para aproveitar o SSD ultra rápido e o DualSense do PS5",
    "platform-xbox-desc": "Compatível com Quick Resume e otimizado para Series X",
    "platform-pc-desc": "Versão para PC confirmada, lançamento posterior aos consoles",
    "features-title": "Características do GTA 6",
    "features-intro": "Grand Theft Auto VI promete ser o jogo mais ambicioso da Rockstar Games até hoje. Estas são as características confirmadas e esperadas:",
    "feature-world-title": "Mundo Aberto Massivo",
    "feature-world-desc": "Vice City reimaginada com um mapa que inclui múltiplas cidades e áreas rurais. Espera-se que seja o maior mapa da história do GTA, com ecossistemas dinâmicos e clima variável.",
    "feature-chars-title": "Dois Protagonistas",
    "feature-chars-desc": "Pela primeira vez na série, você jogará com dois protagonistas: Jason e Lucia, inspirados em Bonnie e Clyde. Você pode alternar entre personagens durante as missões.",
    "feature-story-title": "História Épica",
    "feature-story-desc": "Uma narrativa profunda que segue o relacionamento entre os dois protagonistas enquanto escalam no mundo do crime organizado em Vice City.",
    "feature-vehicles-title": "Veículos Realistas",
    "feature-vehicles-desc": "Física de direção melhorada com centenas de veículos personalizáveis. De carros esportivos de luxo a lanchas rápidas e helicópteros.",
    "feature-graphics-title": "Gráficos de Nova Geração",
    "feature-graphics-desc": "Motor RAGE aprimorado com ray tracing, iluminação global e detalhes sem precedentes. Projetado exclusivamente para hardware de nova geração.",
    "feature-missions-title": "Missões Dinâmicas",
    "feature-missions-desc": "Sistema de missões melhorado com múltiplas abordagens. Suas decisões afetarão o desenvolvimento da história e os relacionamentos com outros personagens.",
    "news-title": "Últimas Notícias",
    "news1-title": "Data de Lançamento Confirmada",
    "news1-desc": "Rockstar Games confirma oficialmente que GTA 6 será lançado em 19 de novembro de 2026 para PlayStation 5 e Xbox Series X/S. A versão para PC chegará posteriormente.",
    "news2-title": "Novo Trailer de Gameplay",
    "news2-desc": "Foi revelado um trailer de 3 minutos mostrando gameplay real, confirmando a ambientação em Vice City e apresentando os dois protagonistas principais.",
    "news3-title": "Detalhes do Modo Online",
    "news3-desc": "Rockstar anuncia que GTA Online evoluirá com GTA 6, oferecendo uma experiência completamente nova com servidores dedicados e eventos ao vivo.",
    "faq-title": "Perguntas Frequentes",
    "faq1-q": "Quando sai GTA 6?",
    "faq1-a": "GTA 6 tem data de lançamento confirmada para 19 de novembro de 2026 no PlayStation 5 e Xbox Series X/S.",
    "faq2-q": "Estará disponível no PC?",
    "faq2-a": "Sim, a Rockstar confirmou uma versão para PC, embora seja lançada vários meses após as versões de console, seguindo o padrão do GTA 5.",
    "faq3-q": "Onde se passa GTA 6?",
    "faq3-a": "O jogo se passa em uma versão moderna de Vice City (baseada em Miami) e seus arredores, incluindo áreas inspiradas nos Everglades da Flórida.",
    "faq4-q": "Haverá GTA Online no GTA 6?",
    "faq4-a": "Sim, a Rockstar confirmou que haverá um modo online completamente renovado que será lançado junto com o jogo base.",
    "faq5-q": "Quanto custará GTA 6?",
    "faq5-a": "Embora não haja preço oficial confirmado, espera-se que tenha um preço padrão de $69.99 USD para a edição base em consoles de nova geração.",
    "seo-title": "Contagem Regressiva GTA 6 - Timer não oficial",
    "seo-description": "Contagem regressiva não oficial do GTA 6 com metodologia editorial, fontes e FAQ para fãs de Grand Theft Auto VI.",
    "countdown-h1": "Contador GTA 6 - Contagem regressiva não oficial",
    "seo-intro": "Bem-vindo ao contador GTA 6 mais preciso da internet. Este contador GTA VI mostra em tempo real quanto falta para o lançamento oficial de Grand Theft Auto VI, programado para 19 de novembro de 2026. Nossa contagem regressiva GTA 6 atualiza a cada segundo, permitindo acompanhar exatamente quantos dias, horas, minutos e segundos faltam para desfrutar do jogo mais esperado da Rockstar Games. Além do temporizador GTA 6, você encontrará as últimas notícias oficiais, características confirmadas do jogo e todas as informações sobre plataformas disponíveis."
  }
};

let currentLanguage = "es";

function updateSEOTags(lang) {
  // Update page title
  const titleEl = document.getElementById('page-title');
  if (titleEl && translations[lang] && translations[lang]['seo-title']) {
    titleEl.textContent = translations[lang]['seo-title'];
    document.title = translations[lang]['seo-title'];
  }

  // Update meta description
  const descEl = document.getElementById('page-description');
  if (descEl && translations[lang] && translations[lang]['seo-description']) {
    descEl.setAttribute('content', translations[lang]['seo-description']);
  }

  // Update Open Graph tags
  const ogTitleEl = document.getElementById('og-title');
  if (ogTitleEl && translations[lang] && translations[lang]['seo-title']) {
    ogTitleEl.setAttribute('content', translations[lang]['seo-title']);
  }

  const ogDescEl = document.getElementById('og-description');
  if (ogDescEl && translations[lang] && translations[lang]['seo-description']) {
    ogDescEl.setAttribute('content', translations[lang]['seo-description']);
  }

  // Update Twitter Card tags
  const twitterTitleEl = document.getElementById('twitter-title');
  if (twitterTitleEl && translations[lang] && translations[lang]['seo-title']) {
    twitterTitleEl.setAttribute('content', translations[lang]['seo-title']);
  }

  const twitterDescEl = document.getElementById('twitter-description');
  if (twitterDescEl && translations[lang] && translations[lang]['seo-description']) {
    twitterDescEl.setAttribute('content', translations[lang]['seo-description']);
  }
}

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

  // Update SEO meta tags
  updateSEOTags(lang);
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
