# Production Release Report

## Addendum hero CTA hotfix `2026-07-13`

- Hotfix publicado en produccion:
  - `production-dist-hero-cta-hotfix.zip`
- Despliegue real:
  - SiteGround extrajo primero dentro de `production-dist-hero-cta-hotfix/`
  - el contenido se movio despues a la raiz real de `public_html`
  - se sobrescribieron los archivos finales necesarios
  - se eliminaron la carpeta temporal y el ZIP subido al terminar
- Estructura final confirmada en `public_html`:
  - `index.html`
  - `es/`
  - `ca/`
  - `en/`
  - `de/`
  - `_astro/`
  - `images/`
  - `og/`
  - `robots.txt`
  - `sitemap-index.xml`
  - `sitemap-0.xml`
  - `.htaccess`
  - `form-handler.php`
  - favicons y `site.webmanifest` presentes
- QA real posterior al hotfix:
  - `/` redirige a `/es/`
  - home, contacto, servicios, detalle de servicio, `ca`, `en` y `de` cargan correctamente
  - CTA principal del hero visible en produccion
  - formulario mantiene `action="/form-handler.php"`
  - Google Maps sigue resolviendose segun la implementacion final por enlace externo
  - sin `localhost`
  - sin `staging`
  - sin overflow horizontal en `390x844`, `430x932`, `1366x768` y `1440x900`
  - aleman validado sin rotura de layout
- Estado final:
  - hotfix visual de CTA desplegado y validado en `https://instalberrozpe.com`

## Addendum final logo y assets `2026-07-13`

- Build final validada de nuevo antes del despliegue:
  - `npm run build` correcto
  - `45` paginas generadas
- ZIP final desplegado en produccion:
  - `production-dist-final-logo-assets.zip`
- Backup rapido creado en `public_html` antes de reemplazar:
  - `public_html-backup-2026-07-13-final-logo-assets.zip.zip`
- Despliegue real:
  - SiteGround extrajo primero dentro de `production-dist-final-logo-assets/`
  - el contenido se movio a la raiz real de `public_html`
  - no quedo carpeta `dist/` ni `qa-artifacts/` en produccion
  - se elimino el ZIP subido y la carpeta temporal tras el movimiento
- Estructura final confirmada en produccion:
  - `index.html`
  - `es/`
  - `ca/`
  - `en/`
  - `de/`
  - `_astro/`
  - `images/`
  - `og/`
  - `robots.txt`
  - `sitemap-index.xml`
  - `sitemap-0.xml`
  - `.htaccess`
  - `form-handler.php`
  - `favicon.ico`
  - `favicon.svg`
  - `apple-touch-icon.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`
  - `site.webmanifest`
- Cache:
  - purga manual ejecutada en SiteGround SuperCacher para `instalberrozpe.com`
- Verificacion tecnica real posterior al deploy:
  - `/` sigue redirigiendo a `/es/`
  - `robots.txt`, `sitemap-index.xml` y `sitemap-0.xml` responden `200 OK`
  - `curl` sobre `https://instalberrozpe.com/es/` confirmo el HTML nuevo servido desde produccion
  - el HTML publicado incluye el logo SVG `/branding/logo-instal-berrozpe.svg`
  - el `h1` publicado en `/es/` coincide con la version final validada
- QA funcional en produccion:
  - logo principal visible con mayor presencia de marca
  - header equilibrado sin romper nav, idioma ni CTAs
  - footer acompasado con logo ligeramente mayor
  - formulario mantiene `action="/form-handler.php"`
  - WhatsApp visible
  - mapa visible en contacto
  - sin `localhost`
  - sin `staging`
  - sin overflow horizontal en los breakpoints revisados
  - home alemana sin rotura de layout
- Nota operativa:
  - algunas lecturas iniciales en navegador mostraron HTML antiguo por cache
  - el estado real quedo confirmado por purga de cache, URLs con cache-buster y respuesta directa del servidor con `curl`

## Fecha

- `2026-07-10`

## Dominio publicado

- `https://instalberrozpe.com`

## Commit y build base

- Commit de build publicado:
  - `f978e0e`
- ZIP usado en produccion:
  - `production-dist-f978e0e.zip`

## Seguridad previa

- Backup legacy mantenido sin tocar:
  - `public_html-backup-2026-07-10-prelaunch.zip.zip`

## Despliegue real en SiteGround

1. El ZIP de produccion se subio a `public_html`.
2. SiteGround extrajo inicialmente el contenido dentro de `production-dist-f978e0e/`.
3. El contenido extraido se movio desde esa carpeta a la raiz real de `public_html`.
4. Se acepto solo la sobreescritura necesaria de `.htaccess`.
5. Se eliminaron de `public_html` los artefactos WordPress legacy:
   - directorios `wp-admin`, `wp-content`, `wp-includes`
   - `index.php`, `license.txt`, `readme.html`, `xmlrpc.php`
   - resto de ficheros PHP propios de WordPress
   - `production-dist-f978e0e.zip`
   - carpeta temporal `production-dist-f978e0e/`

## Estructura final confirmada en `public_html`

- `.well-known`
- `_astro`
- `ca`
- `de`
- `en`
- `es`
- `images`
- `og`
- `.htaccess`
- `favicon.ico`
- `favicon.svg`
- `form-handler.php`
- `index.html`
- `robots.txt`
- `sitemap-0.xml`
- `sitemap-index.xml`

## Validacion tecnica real

### Cabeceras y rutas

- `https://instalberrozpe.com/`
  - `301 Moved Permanently`
  - `Location: https://instalberrozpe.com/es/`
- `https://instalberrozpe.com/es/`
  - `200 OK`
  - `Last-Modified: Fri, 10 Jul 2026 14:41:48 GMT`
- `https://instalberrozpe.com/robots.txt`
  - `200 OK`
- `https://instalberrozpe.com/sitemap-index.xml`
  - `200 OK`
- `https://instalberrozpe.com/sitemap-0.xml`
  - `200 OK`
- `https://instalberrozpe.com/form-handler.php`
  - `405 Method Not Allowed` por `GET`

### SEO tecnico

- `canonical` correcto en las paginas localizadas revisadas
- `hreflang` completo:
  - `es`
  - `ca`
  - `en`
  - `de`
  - `x-default`
- sitemap publico operativo
- `robots.txt` publico operativo
- la raiz tecnica `/` redirige a `/es/`
- `sitemap-0.xml` expone las `44` URLs localizadas esperadas
- la build sigue generando `45` paginas contando la pagina tecnica de redireccion `/`

### Formulario en produccion

- Prueba tecnica previa ejecutada:
  - `QA-2026-07-10T1457Z`
  - `POST` con `200 OK`
  - respuesta JSON:
    - `{"success":true,"message":"The form was sent."}`
- Prueba tecnica adicional ejecutada:
  - `QA-2026-07-10T1518Z`
  - `POST` con `200 OK`
  - respuesta JSON:
    - `{"success":true,"message":"The form was sent."}`
- Diagnostico confirmado:
  - PHP esta activo en produccion
  - `mail()` no devolvio error en las pruebas tecnicas
  - el handler esta operativo

### Estado de recepcion del correo

- Destinatario configurado:
  - `david@instalberrozpe.com`
- Confirmacion visual externa recibida:
  - fecha: `2026-07-10`
  - asunto: `[Instal Berrozpe][ES] Nuevo formulario de contacto`
  - remitente visible: `Instal Berrozpe a traves de gmadm1019.siteground.biz`
  - idioma: `es`
  - servicio: `Electricidad y domotica`
  - nombre: `Prueba produccion release`
  - email: `comercial@instalberrozpe.com`
  - telefono: `676000000`
  - mensaje: `Prueba final produccion SiteGround QA-2026-07-10T1518Z`
- Estado operativo:
  - el correo de produccion fue recibido correctamente en `david@instalberrozpe.com`
  - `mail()` queda confirmado como funcional en produccion
  - el bloqueo del formulario queda resuelto

## Validacion funcional observada

- WhatsApp visible en la version publicada
- Google Maps abre como enlace externo, sin iframe vivo por defecto
- bloque de resenas agregado visible con `4,9` y `67 resenas`
- banner y preferencias de cookies presentes
- redirecciones legacy principales ya servidas por `.htaccess`

## Alcance de la QA visual de produccion

- Se verifico que la version de produccion ya sirve el HTML final correcto y las rutas principales responden.
- Revision responsive final completada en dominio real con:
  - paginas:
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
  - breakpoints:
    - `390x844`
    - `430x932`
    - `768x1024`
    - `1366x768`
    - `1440x900`
- Resultado:
  - sin overflow horizontal en los `50` casos revisados
  - header y footer presentes
  - selector de idioma visible y usable
  - WhatsApp visible sin invadir la lectura principal
  - banner de cookies presente y no bloqueante tras rechazar opcionales
  - contacto, mapa y CTA visibles en las rutas revisadas
  - la home alemana no rompe el layout en movil ni en desktop

## Estado final

- Produccion publicada con la build estatica nueva
- WordPress legacy retirado de `public_html`
- SEO tecnico base operativo
- Handler PHP operativo
- Formulario de produccion validado con recepcion real
- Backup previo mantenido
- Proyecto publicado y cerrado a nivel tecnico
- Pendientes post-lanzamiento:
  - enviar sitemap a Google Search Console si aun no se ha hecho
  - monitorizar indexacion durante los proximos dias
  - revisar Search Console por errores de cobertura o rastreo
  - SMTP autenticado solo como mejora opcional futura
