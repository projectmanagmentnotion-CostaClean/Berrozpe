# SiteGround Deployment Guide

## Build

```bash
npm install
npm run build
```

La salida final queda en `dist/`.

## Publicacion estatica

1. Generar `dist/` localmente.
2. Subir el contenido de `dist/` al directorio publico del hosting.
3. Mantener copia de seguridad del sitio anterior antes del reemplazo.

## Flujo de staging recomendado

1. Generar `dist/` local.
2. Subir a un subdominio o carpeta de staging sin indexacion publica.
3. Probar rutas principales en `es`, `ca`, `en` y `de`.
4. Probar redirects definidos en [04_REDIRECTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/04_REDIRECTS.md).
5. Validar cookies, formulario, ScrollTrigger e internal linking antes de tocar produccion.

Estado previo ya disponible en local:

- Build final verificado el `2026-07-10`
- Paquete listo para subida:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- Commit base validado:
  - `3bb759a`
- Resultado de staging real ya ejecutado:
  - `https://staging.instalberrozpe.com`
  - `robots.txt` temporal con `Disallow: /`

## Handler PHP del formulario

- `public/form-handler.php` se copia a `dist/form-handler.php` durante la build.
- El destinatario configurado es `david@instalberrozpe.com`.
- El handler valida en backend:
  - metodo `POST`
  - locale permitido
  - servicio permitido
  - email valido
  - privacidad aceptada
  - honeypot vacio
  - limites de longitud y saneado basico
- Si JavaScript esta activo, el formulario envia por `fetch` y recibe JSON.
- Si JavaScript falla, el navegador puede enviar el `POST` al handler y este redirige a la pagina de contacto localizada con `?status=success` o `?status=error`.

Resultado real confirmado en staging SiteGround:

- `HEAD /form-handler.php`: `405 Method Not Allowed`
- cabecera `X-Httpd-Modphp: 1` presente
- POST valido: `200 OK`
- validaciones negativas: `422`
- `mail()` funciona en staging
- pruebas directas finales:
  - `2026-07-10 10:57:27 GMT`
  - `2026-07-10 11:00:44 GMT`
  - ambas con `200 OK`
- recepcion final confirmada:
  - destinatario `david@instalberrozpe.com`
  - dos correos recibidos en Gmail
  - asunto recibido: `[Instal Berrozpe][ES] Nuevo formulario de contacto`

## Verificaciones recomendadas

- Carga del home y de las 4 paginas de contacto.
- Rutas de servicios y legales.
- Canonical apuntando a `https://instalberrozpe.com`.
- `hreflang` generado para `es`, `ca`, `en` y `de`.
- Selector de idioma intacto en contacto y en detalle de servicio.
- `dist/form-handler.php` presente tras la build.
- El formulario muestra exito y error sin introducir cookies opcionales nuevas.
- WhatsApp abre con mensaje prellenado correcto en cada idioma.
- Google Maps abre la direccion confirmada.
- El bloque de resenas muestra `4,9` y `67 resenas`.
- El boton de resena abre `https://g.page/r/CagAPRsZ3RSuEBM/review`.
- Los assets OG y visuales existen en `dist/`.
- Los enlaces internos llevan al idioma correcto.
- ScrollTrigger reversible no deja bloques invisibles al subir y bajar.
- El menu movil sigue usable con y sin JS.
- Lighthouse local ya ejecutado sobre preview:
  - `/es/`: `98 / 96 / 100 / 100`
  - `/es/contacto/`: `98 / 96 / 100 / 100`
  - `/es/servicios/electricidad-y-domotica/`: `98 / 96 / 100 / 100`
- Lighthouse real en staging:
  - `/es/`: `97 / 96 / 100 / 66`
  - `/es/contacto/`: `99 / 96 / 100 / 69`
  - `/es/servicios/electricidad-y-domotica/`: `97 / 96 / 100 / 69`
- Nota:
  - la bajada de SEO en staging corresponde al `Disallow: /` temporal del staging, no a un fallo de la version final pensada para produccion
- Incidencia conocida:
  - el runner de Lighthouse en Windows puede cerrar con error `EPERM` al borrar su temporal aunque el JSON se haya generado correctamente

## Recomendacion para produccion

- Repetir una prueba real del formulario justo despues de publicar.
- Si la entrega sigue siendo estable:
  - mantener `mail()` como solucion valida
- Si aparece baja entregabilidad, spam o inconsistencias:
  - aplicar [SMTP_CONTACT_FORM_PLAN.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/SMTP_CONTACT_FORM_PLAN.md) como mejora futura opcional

## Checklist previo a produccion

- Confirmar que `mail()` sigue funcionando tras publicar.
- Revisar SPF/DKIM/DMARC del dominio si se cambia el remitente tecnico.
- Validar los textos legales finales antes de publicar.
- Sustituir los placeholders temporales definidos en [ASSET_REQUIREMENTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REQUIREMENTS.md) cuando existan assets reales aprobados.
- Probar enlaces internos desde:
  - home
  - indice de servicios
  - detalle de servicios
  - sobre nosotros
  - contacto
- Probar el formulario con JS activo y fallback sin JS.
- Probar el banner y modal de cookies en al menos `es` y `en`.
- Probar ScrollTrigger en desktop y mobile.
- Usar [STAGING_SITEGROUND_CHECKLIST.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/STAGING_SITEGROUND_CHECKLIST.md) antes de subir a produccion.

## Produccion real ejecutada

- Fecha:
  - `2026-07-10`
- ZIP publicado:
  - `production-dist-f978e0e.zip`
- Backup legacy mantenido:
  - `public_html-backup-2026-07-10-prelaunch.zip.zip`

Flujo real aplicado en SiteGround:

1. Se subio el ZIP a `public_html`.
2. SiteGround lo extrajo inicialmente dentro de `production-dist-f978e0e/`.
3. Se movio el contenido de esa carpeta a la raiz real de `public_html`.
4. Se eliminaron los artefactos WordPress legacy de la raiz publica.
5. La raiz final de `public_html` quedo sirviendo directamente la build estatica.

Validacion real de produccion:

- `/` redirige a `/es/`
- `/es/` responde `200 OK`
- `robots.txt`, `sitemap-index.xml` y `sitemap-0.xml` responden `200 OK`
- `form-handler.php` responde `405` por `GET`
- `form-handler.php` responde `200 OK` por `POST`
- PHP real operativo con `X-Httpd-Modphp: 1`

Matiz importante:

- En esta sesion se ha confirmado la operatividad tecnica del handler en produccion.
- La recepcion final en bandeja ya quedo confirmada externamente:
  - fecha `2026-07-10`
  - destinatario `david@instalberrozpe.com`
  - asunto `[Instal Berrozpe][ES] Nuevo formulario de contacto`
  - remitente visible `Instal Berrozpe a traves de gmadm1019.siteground.biz`
- `mail()` queda validado en produccion.
- SMTP autenticado sigue siendo una mejora futura opcional, no un bloqueo tecnico actual.
