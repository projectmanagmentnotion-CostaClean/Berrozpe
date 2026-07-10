# Production Release Checklist

## Estado actual

- Fecha de publicacion real: `2026-07-10`
- Dominio en produccion: `https://instalberrozpe.com`
- Backup previo conservado sin tocar:
  - `public_html-backup-2026-07-10-prelaunch.zip.zip`
- ZIP publicado:
  - `production-dist-f978e0e.zip`

## Antes de subir

- Backup del sitio anterior
- Export local de `dist/`
- Legales finales cerrados y sincronizados en `es`, `ca`, `en` y `de`
- Datos fiscales confirmados:
  - `Instal Berrozpe S.L.`
  - `B55326813`
  - `Antiga 68 bajos de Blanes`
- `areaServed` de schema ajustado a `Blanes`, `Arenys` y `Lloret de Mar`
- Confirmar pruebas del formulario en staging

## Subida

- Subir solo `dist/`
- No subir `src/`, `content/`, `docs/`
- Resultado real:
  - ZIP subido a `public_html`
  - SiteGround lo extrajo primero dentro de `production-dist-f978e0e/`
  - el contenido se movio a la raiz real de `public_html`
  - se eliminaron los archivos WordPress legacy de `public_html`
  - el backup previo no se modifico

## Verificacion inmediata

- `/` redirige a `/es/`
- Home, servicios y contacto disponibles en los 4 idiomas
- WhatsApp abre correctamente
- Google Maps abre correctamente
- Bloque de mapa visible y estable en home y contacto
- Enlace de ubicacion visible en footer
- Boton de resenas abre la URL confirmada
- Formulario responde correctamente en produccion
- Estado real confirmado:
  - `/` -> `301` a `/es/`
  - `/es/` -> `200 OK`
  - `robots.txt` -> `200 OK`
  - `sitemap-index.xml` -> `200 OK`
  - `sitemap-0.xml` -> `200 OK`
  - `form-handler.php` por `GET` -> `405 Method Not Allowed`
  - `form-handler.php` por `POST` -> `200 OK`
  - HTML final servido desde la build estatica nueva
  - `canonical` y `hreflang` activos en las paginas localizadas revisadas
  - estructura publica final en `public_html`:
    - `index.html`
    - `es/`
    - `ca/`
    - `en/`
    - `de/`
    - `_astro/`
    - `sitemap-index.xml`
    - `sitemap-0.xml`
    - `robots.txt`
    - `.htaccess`
    - `form-handler.php`

## Post publicacion

- Repetir o confirmar visualmente la llegada del correo en `david@instalberrozpe.com`
- Alta o revision en Search Console
- Alta o revision en Bing Webmaster Tools
- Revisar indexacion inicial y 404
- Verificar responsive final en una pasada manual completa si se quiere cerrar QA visual exhaustivo de produccion
