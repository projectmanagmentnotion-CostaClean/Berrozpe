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

Pruebas obligatorias antes de produccion:

- confirmar recepcion real en `david@instalberrozpe.com`
- revisar carpeta de spam
- confirmar si `mail()` funciona correctamente en SiteGround
- preparar SMTP si `mail()` no entrega de forma fiable

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
- El bloque de reseñas muestra `4,9` y `67 reseñas`.
- El boton de reseña abre `https://g.page/r/CagAPRsZ3RSuEBM/review`.
- Los assets OG y visuales existen en `dist/`.
- Los enlaces internos llevan al idioma correcto.
- ScrollTrigger reversible no deja bloques invisibles al subir y bajar.
- El menu movil sigue usable con y sin JS.

## Checklist previo a produccion

- Confirmar que `mail()` funciona en el hosting SiteGround del proyecto.
- Revisar SPF/DKIM/DMARC del dominio si se cambia el remitente tecnico.
- Validar los textos legales finales antes de publicar.
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos.
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
