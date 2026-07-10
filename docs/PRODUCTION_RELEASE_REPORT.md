# Production Release Report

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
- En esta sesion:
  - no se ha podido verificar de forma independiente la bandeja de entrada de produccion
  - por tanto queda confirmada la respuesta correcta del handler, pero no la recepcion final en inbox desde herramientas propias de esta sesion
- Estado operativo:
  - no hay bloqueo tecnico visible en servidor
  - falta solo la confirmacion externa de bandeja para cerrar la trazabilidad end-to-end en produccion

## Validacion funcional observada

- WhatsApp visible en la version publicada
- Google Maps abre como enlace externo, sin iframe vivo por defecto
- bloque de resenas agregado visible con `4,9` y `67 resenas`
- banner y preferencias de cookies presentes
- redirecciones legacy principales ya servidas por `.htaccess`

## Alcance de la QA visual de produccion

- Se verifico que la version de produccion ya sirve el HTML final correcto y las rutas principales responden.
- No se ha completado en esta sesion una matriz manual exhaustiva de todos los breakpoints pedidos sobre produccion.

## Estado final

- Produccion publicada con la build estatica nueva
- WordPress legacy retirado de `public_html`
- SEO tecnico base operativo
- Handler PHP operativo
- Pendientes reales antes de cerrar la publicacion al `100%`:
  - confirmacion visual de llegada del correo de produccion en `david@instalberrozpe.com`
  - pasada manual responsive final si se quiere cerrar QA visual exhaustivo en dominio real
