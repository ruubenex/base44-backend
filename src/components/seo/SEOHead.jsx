import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const DOMAIN = 'https://camcal.site';

const seoMeta = {
  pt: {
    title: 'CamCal - Conte calorias tirando uma foto | IA Nutricional',
    description: 'Aponte a câmera, escaneie o alimento e deixe nossa IA calcular calorias, proteínas, carboidratos e gorduras instantaneamente. 85% de precisão.',
    keywords: 'contar calorias, IA nutricional, scanner de alimentos, dieta, emagrecimento, macros, proteínas, app de saúde, CamCal, medir calorias com foto',
    ogLocale: 'pt_BR',
    hreflang: 'pt',
  },
  en: {
    title: 'CamCal - Count Calories by Taking a Photo | AI Nutrition',
    description: 'Point your camera, scan your food and let our AI calculate calories, proteins, carbs and fats instantly. 85% accuracy — best on the market.',
    keywords: 'calorie counter, AI nutrition, food scanner, diet, weight loss, macros, protein, health app, CamCal, count calories with photo',
    ogLocale: 'en_US',
    hreflang: 'en',
  },
  fr: {
    title: 'CamCal - Comptez les calories en prenant une photo | IA Nutrition',
    description: 'Pointez votre caméra, scannez votre repas et laissez notre IA calculer calories, protéines, glucides et lipides instantanément. 85% de précision.',
    keywords: 'compteur de calories, IA nutrition, scanner alimentaire, régime, perte de poids, macros, protéines, app santé, CamCal',
    ogLocale: 'fr_FR',
    hreflang: 'fr',
  },
  es: {
    title: 'CamCal - Cuenta calorías tomando una foto | IA Nutricional',
    description: 'Apunta la cámara, escanea tu comida y deja que nuestra IA calcule calorías, proteínas, carbohidratos y grasas instantáneamente. 85% de precisión.',
    keywords: 'contador de calorías, IA nutricional, escáner de alimentos, dieta, adelgazar, macros, proteínas, app de salud, CamCal',
    ogLocale: 'es_ES',
    hreflang: 'es',
  },
  it: {
    title: 'CamCal - Conta le calorie scattando una foto | IA Nutrizione',
    description: 'Punta la fotocamera, scansiona il cibo e lascia che la nostra IA calcoli calorie, proteine, carboidrati e grassi istantaneamente. 85% di precisione.',
    keywords: 'contacalorie, IA nutrizione, scanner alimentare, dieta, dimagrire, macro, proteine, app salute, CamCal',
    ogLocale: 'it_IT',
    hreflang: 'it',
  },
  de: {
    title: 'CamCal - Kalorien zählen mit einem Foto | KI Ernährung',
    description: 'Richten Sie die Kamera aus, scannen Sie Ihr Essen und lassen Sie unsere KI Kalorien, Proteine, Kohlenhydrate und Fette sofort berechnen. 85% Genauigkeit.',
    keywords: 'Kalorienzähler, KI Ernährung, Lebensmittelscanner, Diät, Abnehmen, Makros, Protein, Gesundheits-App, CamCal',
    ogLocale: 'de_DE',
    hreflang: 'de',
  },
};

function getCanonicalUrl(lang) {
  if (lang === 'pt') return DOMAIN + '/';
  return `${DOMAIN}/${lang}`;
}

function generateJsonLd(lang) {
  const meta = seoMeta[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        'name': 'CamCal',
        'url': DOMAIN,
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'iOS, Android, Web',
        'description': meta.description,
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '50000',
          'bestRating': '5',
        },
        'featureList': [
          'AI Food Scanner',
          'Calorie Counter',
          'Macro Tracking',
          'Personalized Meal Plans',
          'Exercise Plans',
          'BMI Tracking',
          'Friends Ranking',
          'Daily Challenges',
        ],
        'screenshot': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/40080aa2e_IMG_8533.png',
        'image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/c7a7b0d56_logo250-invisible.png',
        'inLanguage': meta.hreflang,
      },
      {
        '@type': 'Organization',
        'name': 'CamCal',
        'url': DOMAIN,
        'logo': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69838e5237519a0f64a3cf05/c7a7b0d56_logo250-invisible.png',
        'sameAs': [
          'https://www.instagram.com/camcal.ia/',
          'https://camcal.pro/',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'availableLanguage': ['Portuguese', 'English', 'French', 'Spanish', 'Italian', 'German'],
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': getFaqEntries(lang),
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'CamCal',
            'item': DOMAIN,
          },
        ],
      },
    ],
  };
}

function getFaqEntries(lang) {
  // Import translations dynamically would add complexity, so we use a lightweight approach
  const faqData = {
    pt: [
      { q: 'Como funciona o escaneamento de alimentos?', a: 'Basta abrir o app, apontar a câmera para o seu prato e tirar uma foto. Nossa IA analisa a imagem em segundos.' },
      { q: 'Qual a precisão do CamCal?', a: 'Nossa IA tem 85% de precisão - a melhor do mercado.' },
      { q: 'O app é gratuito?', a: 'O CamCal oferece funcionalidades gratuitas. Para acesso completo, oferecemos planos acessíveis.' },
    ],
    en: [
      { q: 'How does food scanning work?', a: 'Just open the app, point the camera at your plate and take a photo. Our AI analyzes the image in seconds.' },
      { q: 'How accurate is CamCal?', a: 'Our AI has 85% accuracy - the best on the market.' },
      { q: 'Is the app free?', a: 'CamCal offers free features. For full access, we offer affordable plans.' },
    ],
    fr: [
      { q: 'Comment fonctionne le scan d\'aliments ?', a: 'Ouvrez l\'app, pointez la caméra vers votre assiette et prenez une photo. Notre IA analyse l\'image en secondes.' },
      { q: 'Quelle est la précision de CamCal ?', a: 'Notre IA a 85% de précision - la meilleure du marché.' },
      { q: 'L\'app est-elle gratuite ?', a: 'CamCal propose des fonctionnalités gratuites. Pour un accès complet, nous proposons des plans abordables.' },
    ],
    es: [
      { q: '¿Cómo funciona el escaneo de alimentos?', a: 'Abre la app, apunta la cámara a tu plato y toma una foto. Nuestra IA analiza la imagen en segundos.' },
      { q: '¿Cuál es la precisión de CamCal?', a: 'Nuestra IA tiene 85% de precisión - la mejor del mercado.' },
      { q: '¿La app es gratuita?', a: 'CamCal ofrece funcionalidades gratuitas. Para acceso completo, ofrecemos planes accesibles.' },
    ],
    it: [
      { q: 'Come funziona la scansione degli alimenti?', a: 'Apri l\'app, punta la fotocamera sul piatto e scatta una foto. La nostra IA analizza l\'immagine in pochi secondi.' },
      { q: 'Qual è la precisione di CamCal?', a: 'La nostra IA ha l\'85% di precisione - la migliore sul mercato.' },
      { q: 'L\'app è gratuita?', a: 'CamCal offre funzionalità gratuite. Per l\'accesso completo, offriamo piani accessibili.' },
    ],
    de: [
      { q: 'Wie funktioniert das Scannen von Lebensmitteln?', a: 'Öffnen Sie die App, richten Sie die Kamera auf Ihren Teller und machen Sie ein Foto. Unsere KI analysiert das Bild in Sekunden.' },
      { q: 'Wie genau ist CamCal?', a: 'Unsere KI hat 85% Genauigkeit - die beste auf dem Markt.' },
      { q: 'Ist die App kostenlos?', a: 'CamCal bietet kostenlose Funktionen. Für den vollen Zugang bieten wir erschwingliche Pläne an.' },
    ],
  };

  return (faqData[lang] || faqData.en).map(({ q, a }) => ({
    '@type': 'Question',
    'name': q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': a,
    },
  }));
}

export default function SEOHead() {
  const { lang } = useLanguage();
  const meta = seoMeta[lang];
  const canonical = getCanonicalUrl(lang);
  const jsonLd = generateJsonLd(lang);
  const ogImage = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d21689b8-2128-4663-b6d8-f57b1780e688/id-preview-f66e04c4--f2a6f9c7-9324-4320-9dfd-37d30e3dadaf.lovable.app-1771977603626.png';

  useEffect(() => {
    // Dynamic html lang
    document.documentElement.lang = meta.hreflang;

    // Title
    document.title = meta.title;

    // Helper to set/create meta tags
    const setMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMeta('name', 'description', meta.description);
    setMeta('name', 'keywords', meta.keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'author', 'CamCal');
    setMeta('name', 'theme-color', '#f97316');

    // Open Graph
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', meta.ogLocale);
    setMeta('property', 'og:site_name', 'CamCal');

    // OG locale alternates
    Object.values(seoMeta).forEach((m) => {
      if (m.hreflang !== meta.hreflang) {
        setMeta('property', `og:locale:alternate`, m.ogLocale);
      }
    });

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', ogImage);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    // Hreflang tags
    // Remove old ones first
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    Object.keys(seoMeta).forEach((code) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', seoMeta[code].hreflang);
      link.setAttribute('href', getCanonicalUrl(code));
      document.head.appendChild(link);
    });

    // x-default hreflang
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', DOMAIN + '/');
    document.head.appendChild(xDefault);

    // JSON-LD
    let scriptEl = document.querySelector('script[data-seo="camcal"]');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.setAttribute('type', 'application/ld+json');
      scriptEl.setAttribute('data-seo', 'camcal');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLd);

  }, [lang, meta, canonical, jsonLd]);

  return null;
}
