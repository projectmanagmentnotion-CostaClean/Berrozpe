# Arquitectura

## Objetivo

Base Astro estática preparada para SiteGround, con routing multidioma real, `hreflang`, selector de idioma y contenido modular sincronizado.

## Capas

- `content/shared/`: datos comunes, redirects y equivalencias de servicios.
- `content/locales/{locale}/`: navegación, home, SEO, servicios y legales.
- `src/lib/content.ts`: catálogo central de locales, rutas, alternates y fallbacks.
- `src/pages/index.astro`: redirección técnica `/ -> /es/`.
- `src/pages/[locale]/index.astro`: homes localizados.
- `src/pages/[locale]/[...segments].astro`: páginas internas localizadas.

## Routing actual

- `/` redirige a `/es/`
- `/es/`, `/ca/`, `/en/`, `/de/`
- Índice de servicios por idioma
- 3 servicios por idioma
- Sobre nosotros por idioma
- Contacto por idioma
- 4 legales por idioma

## SEO técnico

- Canonical por URL final localizada
- `hreflang` por página en `es`, `ca`, `en`, `de`
- `x-default` a la variante española equivalente
- `@astrojs/sitemap` generando el sitemap final

## Restricciones vigentes

1. No hay copy comercial hardcodeado en componentes.
2. GSAP sigue instalado pero no activado.
3. La producción no se toca desde esta base.
4. Cualquier cambio de estructura debe mantenerse sincronizado en los cuatro idiomas.
