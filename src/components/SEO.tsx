import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_ROUTES, LOCAL_BUSINESS_JSON_LD } from '../lib/seo-config';

export default function SEO() {
  const { pathname } = useLocation();
  const config = SEO_ROUTES[pathname] ?? SEO_ROUTES['/'];

  useEffect(() => {
    document.title = config.title;

    setMeta('description', config.description);
    setMeta('og:title', config.title, true);
    setMeta('og:description', config.description, true);
    setMeta('og:url', config.canonical, true);
    setMeta('og:type', 'website', true);

    setCanonical(config.canonical);
    setJsonLd(LOCAL_BUSINESS_JSON_LD);
  }, [pathname, config]);

  return null;
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: object) {
  const id = 'json-ld-localbusiness';
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    (el as HTMLScriptElement).type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
