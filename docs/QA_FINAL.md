# QA Final

## Fecha

- `2026-07-09`
- `2026-07-10`

## Commit auditado

- Base auditada: `73bbe13`
- Estado validado: working tree posterior con ajustes finales de copy, conversion local, WhatsApp y Google Maps
- Ultimo commit validado para pre-staging SiteGround: `3bb759a`
- HEAD actual al cerrar el QA real de staging: `0c48a55`

## Build

- Comando ejecutado: `npm run build`
- Resultado: correcto
- Lint:
  - no existe script de `lint` en `package.json`
- Paquete de staging local:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- Staging real validado:
  - `https://staging.instalberrozpe.com`

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

- Canonical correcto por pagina localizada en la version final publicada
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
- Nota staging:
  - el entorno `staging.instalberrozpe.com` mantiene canonical y hreflang apuntando a `https://instalberrozpe.com`
  - el staging queda bloqueado por `robots.txt` con `Disallow: /`, por eso Lighthouse SEO baja en ese entorno

## Cookies

- Banner presente
- Modal de preferencias disponible
- Sin scripts opcionales confirmados activos antes del consentimiento
- Google Maps sin iframe vivo ni carga automatica de terceros
- En staging real:
  - reapertura desde footer validada
  - rechazo y persistencia tras recarga validados
  - categorias opcionales no premarcadas

## Formulario

- Formulario localizado presente en contacto
- Enlace a privacidad presente en el consentimiento
- `form-handler.php` generado en `dist/`
- Validacion backend y frontend intactas tras el sprint
- Destinatario confirmado: `david@instalberrozpe.com`
- En staging real:
  - PHP activo
  - POST valido devuelve exito
  - validaciones negativas devuelven `422`
  - pruebas directas finales:
    - `2026-07-10 10:57:27 GMT`
    - `2026-07-10 11:00:44 GMT`
    - ambas con `200 OK`
  - correo recibido correctamente en Gmail
  - asunto confirmado:
    - `[Instal Berrozpe][ES] Nuevo formulario de contacto`
  - mail() queda validado en staging real

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
  - comprobacion responsive ejecutada en navegador sobre las rutas criticas pedidas
  - sin overflow horizontal detectado
  - `hreflang`, canonical, WhatsApp, Google Maps y preferencias de cookies presentes en las comprobaciones realizadas
  - staging real revisado en `es`, `ca`, `en` y `de`

## Pendientes

- Sustituir placeholders temporales cuando existan assets reales aprobados
- Repetir una prueba de formulario tras publicar

## SiteGround staging real

- URL:
  - `https://staging.instalberrozpe.com`
- Estado:
  - creado como subdominio separado de produccion
  - ZIP `staging-dist-3bb759a.zip` subido y extraido
  - raiz publica corregida sin carpeta `dist/`
  - SSL operativo
  - `robots.txt` temporal con `Disallow: /`
- Resultado QA:
  - `/` redirige a `/es/`
  - `.htaccess` no rompe assets, sitemap, robots ni PHP
  - sitemap y robots accesibles
  - formulario responde correctamente
  - correo recibido correctamente
  - WhatsApp, cookies, Google Maps y resenas visibles
  - Lighthouse real:
    - `/es/`: `97 / 96 / 100 / 66`
    - `/es/contacto/`: `99 / 96 / 100 / 69`
    - `/es/servicios/electricidad-y-domotica/`: `97 / 96 / 100 / 69`
  - SEO de Lighthouse penalizado por bloqueo temporal de indexacion del staging

## Cierre

- Estado general:
  - staging real validado y apto para publicacion
- Legal:
  - revision legal autorizada por cliente el `2026-07-10`
  - datos fiscales confirmados y aplicados en contenido y SEO
