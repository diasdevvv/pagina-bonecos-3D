/**
 * META ADS TRACKING (FOP+) UTILITY
 * Implementação de Rastreamento Meta Ads (Pixel + Advanced Matching + Deduplicação + UTMs + Cross-domain)
 */

// Helper para ler cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Helper para definir cookie
function setCookie(name, value, days = 90) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}

// Helper para gerar Event ID único para deduplicação CAPI / Pixel
export function generateEventId(prefix = 'evt') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Capturar e persistir UTMs e parâmetros Meta (fbclid, fbc, fbp)
export function initMetaTracking() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  
  // Persistência de UTMs e parâmetros de Origem
  const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck'];
  trackingParams.forEach((param) => {
    const val = urlParams.get(param);
    if (val) {
      localStorage.setItem(`meta_track_${param}`, val);
    }
  });

  // Tratar FBCLID e FBC
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    const fbcVal = `fb.1.${Date.now()}.${fbclid}`;
    setCookie('_fbc', fbcVal);
    localStorage.setItem('meta_track_fbclid', fbclid);
    localStorage.setItem('meta_track_fbc', fbcVal);
  }

  // Garantir FBP se não existir
  let fbp = getCookie('_fbp');
  if (!fbp) {
    fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 10000000000)}`;
    setCookie('_fbp', fbp);
  }
  localStorage.setItem('meta_track_fbp', fbp);

  // Disparar evento ViewContent autorizado no carregamento
  trackViewContent();
}

// Obter todos os parâmetros de rastreamento persistidos
export function getPersistedParams() {
  const params = {};
  const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'fbclid', 'fbc', 'fbp'];
  
  trackingKeys.forEach((key) => {
    const val = localStorage.getItem(`meta_track_${key}`) || getCookie(`_${key}`) || getCookie(key);
    if (val) {
      params[key] = val;
    }
  });

  return params;
}

// Disparar ViewContent (Evento Autorizado FOP+)
export function trackViewContent() {
  if (typeof window !== 'undefined' && window.fbq) {
    const eventId = generateEventId('vc');
    window.fbq(
      'track',
      'ViewContent',
      {
        content_name: 'Mundo dos Modelos 3D Estilo LEGO',
        content_category: 'Modelos STL 3D',
        value: 37.90,
        currency: 'BRL'
      },
      { eventID: eventId }
    );
  }
}

// Disparar InitiateCheckout (Evento Autorizado FOP+) e retornar URL decorada
export function trackInitiateCheckout(planName, price, originalUrl) {
  const eventId = generateEventId('ic');

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(
      'track',
      'InitiateCheckout',
      {
        content_name: planName,
        content_category: 'Modelos STL 3D',
        value: price,
        currency: 'BRL'
      },
      { eventID: eventId }
    );
  }

  // Cross-domain tracking: anexar UTMs, identificadores persistentes e event_id à URL do checkout
  try {
    const url = new URL(originalUrl);
    const persisted = getPersistedParams();

    Object.keys(persisted).forEach((key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, persisted[key]);
      }
    });

    // Adicionar event_id para deduplicação no checkout/CAPI
    url.searchParams.set('event_id', eventId);

    return url.toString();
  } catch (err) {
    return originalUrl;
  }
}
