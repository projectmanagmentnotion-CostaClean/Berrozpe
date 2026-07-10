# Staging SiteGround Checklist

## Estado actual

- Ultima validacion local equivalente: `2026-07-10`
- Commit base revisado: `3bb759a`
- SiteGround staging real: pendiente de provision
- Paquete local listo:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`

## Build

- Ejecutar `npm run build`
- Confirmar 45 paginas generadas
- Confirmar presencia de `dist/form-handler.php`, `dist/.htaccess`, `dist/robots.txt`, `dist/sitemap-index.xml` y `dist/sitemap-0.xml`
- Confirmado en la validacion local del `2026-07-10`

## Contacto y conversion

- Probar envio real del formulario hacia `david@instalberrozpe.com`
- Revisar spam
- Confirmar si SiteGround acepta `mail()`
- Valorar SMTP si `mail()` falla
- Verificar fallback sin JS
- Estado actual:
  - pendiente de SiteGround real
  - `php` no disponible en local y Astro preview no ejecuta el handler

## WhatsApp

- Verificar enlace `wa.me` con mensaje prellenado correcto en los 4 idiomas
- Verificar boton flotante visible
- Verificar que no tapa el banner de cookies
- Verificar que no tapa el formulario

## Mapa y resenas

- Verificar boton de Google Maps con la direccion confirmada
- Verificar bloque compacto de mapa en home
- Verificar bloque completo de mapa en contacto
- Verificar enlace de ubicacion en footer
- Confirmar que no se carga iframe de Google Maps antes del consentimiento
- Verificar resenas visibles `4,9` y `67 resenas`
- Verificar boton `Dejar resena en Google`
- Confirmar que no aparecen resenas escritas inventadas

## SEO

- Verificar `canonical`
- Verificar `hreflang`
- Verificar sitemap y `robots.txt`
- Verificar ausencia de `Review` schema individual
- Estado local actual:
  - `canonical` y `hreflang` correctos en preview
  - sitemap y robots correctos sin URLs localhost

## Cookies

- Banner visible
- Rechazo tan facil como aceptacion
- Modal configurable
- Enlace permanente para reabrir preferencias
- Estado local actual:
  - banner y controles presentes
  - validacion final de persistencia en staging real pendiente
