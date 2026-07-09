# Arquitectura

## Objetivo

Base Astro estatica preparada para SiteGround, con routing multidioma real, `hreflang`, selector de idioma, contenido modular sincronizado y sistema GSAP centralizado no dependiente del contenido.

## Capas

- `content/shared/`: datos comunes, redirects y equivalencias de servicios.
- `content/locales/{locale}/`: navegacion, home, SEO, servicios y legales.
- `src/lib/content.ts`: catalogo central de locales, rutas, alternates y fallbacks.
- `src/lib/animations/`: sistema centralizado de movimiento por hooks.
- `src/scripts/animations.ts`: bootstrap cliente seguro y opcional.
- `src/pages/index.astro`: redireccion tecnica `/ -> /es/`.
- `src/pages/[locale]/index.astro`: homes localizados.
- `src/pages/[locale]/[...segments].astro`: paginas internas localizadas.

## Routing actual

- `/` redirige a `/es/`
- `/es/`, `/ca/`, `/en/`, `/de/`
- indice de servicios por idioma
- 3 servicios por idioma
- sobre nosotros por idioma
- contacto por idioma
- 4 legales por idioma

## SEO tecnico

- canonical por URL final localizada
- `hreflang` por pagina en `es`, `ca`, `en`, `de`
- `x-default` a la variante espanola equivalente
- `@astrojs/sitemap` generando el sitemap final

## Motion tecnico

- hooks por `data-animate` y `data-animate-group`
- reduced motion en `src/lib/animations/reducedMotion.ts`
- sin ocultar contenido antes de hidratar
- fallback nativo para menu movil con `details/summary`

## Restricciones vigentes

1. No hay copy comercial hardcodeado en componentes.
2. La produccion no se toca desde esta base.
3. Cualquier cambio de estructura debe mantenerse sincronizado en los cuatro idiomas.
4. No se cambian rutas, slugs ni hreflang sin actualizar contenido y documentacion.
5. La paleta corporativa confirmada debe mantenerse consistente en tokens globales.
