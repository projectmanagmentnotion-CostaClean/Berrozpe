# QA Final

## Fecha

- `2026-07-09`

## Commit auditado

- Base auditada: `73bbe13`
- Estado validado: working tree posterior con ajustes de conversion local, WhatsApp y Google Maps

## Build

- Comando ejecutado: `npm run build`
- Resultado: correcto
- Lint:
  - no existe script de `lint` en `package.json`

## Paginas generadas

- Total: `45`
- Redireccion tecnica:
  - `dist/index.html` redirige a `/es/`
- Sitemap:
  - `dist/sitemap-index.xml` presente
  - `dist/sitemap-0.xml` contiene URLs `es`, `ca`, `en` y `de`
- Archivos tecnicos:
  - `dist/robots.txt` presente
  - `dist/.htaccess` presente
  - `dist/form-handler.php` presente

## Rutas revisadas

- `/es/`
- `/es/servicios/`
- `/es/servicios/electricidad-y-domotica/`
- `/es/sobre-nosotros/`
- `/es/contacto/`
- `/ca/contacte/`
- `/en/contact/`
- `/de/kontakt/`

## SEO

- Canonical correcto por pagina localizada
- `hreflang` completo:
  - `es`
  - `ca`
  - `en`
  - `de`
  - `x-default`
- Open Graph presentes:
  - `/og/default.png`
  - `/og/services.png`
  - `/og/contact.png`

## Cookies

- Banner presente
- Modal de preferencias disponible
- Sin scripts opcionales confirmados activos antes del consentimiento
- Google Maps sin iframe vivo ni carga automatica de terceros

## Formulario

- Formulario localizado presente en contacto
- Enlace a privacidad presente en el consentimiento
- `form-handler.php` generado en `dist/`
- Validacion backend y frontend intactas tras el sprint
- Destinatario confirmado: `david@instalberrozpe.com`

## GSAP reversible

- Sistema cargado correctamente en navegador
- `data-animations-booted` activo durante QA
- Triggers principales revisados en ida y vuelta
- `soft-parallax` limitado por viewport compacto
- Menu movil queda fuera del sistema de ScrollTrigger y sigue usable

## Internal linking

- Home con bloque de recorrido recomendado
- Indice de servicios con bloque de paso siguiente
- Detalles de servicio con CTA contextual tras FAQ y servicios relacionados
- Sobre nosotros con rutas a servicio y contacto
- Contacto con servicios, sobre nosotros y llamada directa
- Multidioma sin saltos accidentales entre idiomas durante QA

## Conversion local cerrada

- WhatsApp visible en layout, header, home, contacto, detalle de servicio y footer
- Google Maps integrado sin iframe vivo:
  - bloque compacto en home
  - bloque completo con fallback visual en contacto
  - enlace simple en footer
- Resenas Google Business visibles en home y contacto: `4,9` y `67 resenas`
- Boton para dejar resena activo
- Sin resenas escritas inventadas
- Sin `Review` schema individual

## Assets

- Placeholders corporativos temporales documentados
- OG temporales presentes
- Guia de entrega creada en [ASSET_REQUIREMENTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REQUIREMENTS.md)

## QA visual

- Tamano objetivo:
  - `360x740`
  - `390x844`
  - `430x932`
  - `768x1024`
  - `1366x768`
  - `1440x900`
  - `1920x1080`
- Estado:
  - build y HTML final verificados
  - el siguiente paso es comprobacion manual real en navegador para confirmar que mapa, WhatsApp y banner de cookies no colisionan en esos viewports

## Pendientes

- Sustituir placeholders temporales cuando existan assets reales aprobados
- Validar legal definitivo antes de produccion
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos
- Ejecutar Lighthouse real en staging
- Probar `mail()` en el hosting de SiteGround
- Ejecutar una pasada visual manual final en navegador real antes de staging
