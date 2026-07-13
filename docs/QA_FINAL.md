# QA Final

## Addendum crawl links AI audit `2026-07-13`

- alcance:
  - auditoria de rastreo, enlazado, follow/nofollow, `llms.txt` y preparacion para Bing
  - sin deploy
- produccion actual comprobada:
  - `/` -> `301` a `/es/`
  - `robots.txt` -> `200 OK`
  - `sitemap-index.xml` -> `200 OK`
  - `sitemap-0.xml` -> `200 OK`
  - `sitemap_index.xml` -> `404 Not Found`
  - rutas minimas `es`, `ca`, `en`, `de` y paginas clave -> `200 OK`
- build local nueva:
  - `npm run build` correcto
  - `45` paginas generadas
  - `dist/llms.txt` presente
  - `dist/robots.txt` presente
  - `dist/sitemap-index.xml` presente
  - `dist/sitemap-0.xml` presente
  - `dist/form-handler.php` presente
  - `dist/.htaccess` presente
  - sin `localhost`
  - sin `staging`
- auditoria automatizada de `dist/`:
  - `0` enlaces internos rotos
  - `0` paginas indexables con `nofollow`
  - `224` enlaces con `target="_blank"` revisados
  - `0` enlaces externos sin `noopener noreferrer`
- cambios dejados listos en repo:
  - `public/llms.txt`
  - redirect legacy `/sitemap_index.xml` -> `/sitemap-index.xml`
  - `Button.astro` con `noopener noreferrer` por defecto en externos
  - fallback HTML de `/` con `noindex, follow`
- pendiente:
  - desplegar estos cambios y revalidar `https://instalberrozpe.com/llms.txt` y el redirect del sitemap legacy en produccion

## Addendum hero CTA hotfix produccion `2026-07-13`

- Hotfix desplegado:
  - `production-dist-hero-cta-hotfix.zip`
- Despliegue real:
  - contenido extraido en carpeta temporal y movido despues a la raiz real de `public_html`
  - ZIP subido y carpeta temporal eliminados al cerrar la operacion
- Rutas validadas en produccion:
  - `/`
  - `/es/`
  - `/es/contacto/`
  - `/es/servicios/`
  - `/es/servicios/electricidad-y-domotica/`
  - `/ca/`
  - `/en/`
  - `/de/`
- Confirmaciones:
  - `/` redirige a `/es/`
  - CTA del hero visible en home publicada
  - header usable
  - selector de idioma usable
  - WhatsApp visible
  - formulario con `action="/form-handler.php"`
  - Google Maps accesible segun implementacion final por enlace externo
  - sin `localhost`
  - sin `staging`
  - sin errores visibles de assets en la comprobacion ejecutada
- Responsive produccion:
  - `390x844`
  - `430x932`
  - `1366x768`
  - `1440x900`
  - resultado:
    - sin overflow horizontal
    - CTA y header no rompen mobile
    - WhatsApp no tapa acciones principales
    - contacto usable
    - home alemana sin rotura de layout

## Addendum deploy final produccion `2026-07-13`

- Objetivo cerrado:
  - deploy final de logo mas grande, favicon/assets corregidos y QA de produccion sobre `https://instalberrozpe.com`
- Build final:
  - `npm run build` correcto
  - `45` paginas generadas
- Backup previo en SiteGround:
  - `public_html-backup-2026-07-13-final-logo-assets.zip.zip`
- ZIP subido y desplegado:
  - `production-dist-final-logo-assets.zip`
- Validacion de archivos publicados:
  - `index.html`, `es/`, `ca/`, `en/`, `de/`, `_astro/`, `images/`, `og/`
  - `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`
  - `.htaccess`, `form-handler.php`
  - `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`
  - `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`
- Validacion HTTP real:
  - `https://instalberrozpe.com/` redirige a `/es/`
  - `https://instalberrozpe.com/robots.txt` responde `200 OK` y permite indexacion
  - `https://instalberrozpe.com/sitemap-index.xml` responde `200 OK`
  - `https://instalberrozpe.com/sitemap-0.xml` responde `200 OK`
- Validacion funcional real en produccion:
  - paginas revisadas:
    - `/es/`
    - `/es/contacto/`
    - `/es/servicios/`
    - `/es/servicios/electricidad-y-domotica/`
    - `/ca/`
    - `/en/`
    - `/de/`
  - logo header visible y mas grande
  - header usable sin romper navegacion
  - selector de idioma usable
  - WhatsApp visible
  - formulario mantiene `action="/form-handler.php"`
  - mapa visible en contacto
  - sin `localhost`
  - sin `staging`
  - sin error `500`
  - sin `404` de assets en las comprobaciones ejecutadas
- Responsive produccion:
  - breakpoints revisados:
    - `390x844`
    - `430x932`
    - `1366x768`
    - `1440x900`
  - resultado:
    - sin overflow horizontal
    - logo no rompe mobile
    - header usable
    - WhatsApp no tapa acciones principales
    - contacto y mapa usables
    - aleman sin rotura de layout
- Nota de verificacion:
  - el servidor sirvio el HTML nuevo en `/es/` segun respuesta directa con `curl`
  - una vista antigua detectada al inicio quedo atribuida a cache y no a un fallo de despliegue

## Addendum 2026-07-13

- Sprint final de copy y usabilidad ejecutado sobre la base publicada.
- Home compactada para lectura mas rapida y sin FAQ redundante.
- Detalle de servicio sin bloque visual repetido de beneficios.
- `BigTextBlock` ajustado para emitir `h1` real en paginas principales no-home.
- CTA de cards, contacto y bloques de conversion afinados en `es`, `ca`, `en` y `de`.
- Validacion local nueva:
  - `npm run build` correcto
  - `45` paginas generadas
  - sin overflow horizontal en `390x844` y `1440x900` para `/es/`, `/es/servicios/`, `/es/servicios/electricidad-y-domotica/`, `/es/contacto/`, `/ca/`, `/en/` y `/de/`
  - `h1` presente en servicios, contacto, detalle de servicio y legales tras el ajuste

## Addendum assets reales 2026-07-13

- `content/shared/visuals.json` ya no referencia placeholders publicos.
- Hero, confianza, proceso, contacto y los tres servicios usan fotografia real optimizada.
- `VisualAsset.astro` ahora admite variante mobile sin depender de JS.
- `ServiceCard.astro` usa variante card dedicada cuando existe.
- `SeoHead.astro` expone `favicon.svg` y `favicon.ico`.
- Documentacion de sustitucion cerrada en [ASSET_REPLACEMENT_REPORT.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REPLACEMENT_REPORT.md).

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
- En produccion real:
  - prueba tecnica `QA-2026-07-10T1518Z` con `200 OK`
  - recepcion final confirmada en `david@instalberrozpe.com`
  - remitente visible:
    - `Instal Berrozpe a traves de gmadm1019.siteground.biz`
  - asunto confirmado:
    - `[Instal Berrozpe][ES] Nuevo formulario de contacto`
  - mail() queda validado tambien en produccion

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

- Assets reales aprobados conectados desde `public/images/`
- OG aprobados presentes en `public/og/`
- Guia de entrega actualizada en [ASSET_REQUIREMENTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REQUIREMENTS.md)

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
  - produccion real revisada en:
    - `/es/`
    - `/es/servicios/`
    - `/es/servicios/electricidad-y-domotica/`
    - `/es/servicios/lampisteria-y-climatizacion/`
    - `/es/servicios/alarmas-y-camaras/`
    - `/es/sobre-nosotros/`
    - `/es/contacto/`
    - `/ca/`
    - `/en/`
    - `/de/`
  - breakpoints finales en produccion:
    - `390x844`
    - `430x932`
    - `768x1024`
    - `1366x768`
    - `1440x900`
  - resultado final:
    - sin overflow horizontal en `50` comprobaciones
    - home alemana sin rotura de layout
    - header, footer, selector de idioma y CTA visibles

## Pendientes

- Enviar sitemap a Search Console si aun no se ha hecho
- Monitorizar indexacion inicial y cobertura
- Decidir si se eliminan del repo los SVG temporales legacy ya no referenciados

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
  - staging real validado
  - produccion publicada en `https://instalberrozpe.com`
  - deploy final logo/assets completado el `2026-07-13`
- Legal:
  - revision legal autorizada por cliente el `2026-07-10`
  - datos fiscales confirmados y aplicados en contenido y SEO
- Produccion real:
  - `public_html` ya sirve la build estatica nueva
  - `/` redirige a `/es/`
  - `robots.txt`, `sitemap-index.xml` y `sitemap-0.xml` activos
  - `form-handler.php` operativo en PHP real y con `POST` valido `200 OK`
  - formulario validado con recepcion real en `david@instalberrozpe.com`
  - `mail()` funcional en produccion
  - QA responsive final completada en dominio real
  - WordPress legacy retirado y backup previo mantenido
  - backup final adicional creado:
    - `public_html-backup-2026-07-13-final-logo-assets.zip.zip`
  - favicon y assets finales desplegados
