# Staging SiteGround Checklist

## Estado actual

- Ultima validacion local equivalente: `2026-07-10`
- Commit base revisado: `3bb759a`
- SiteGround staging real: `https://staging.instalberrozpe.com`
- Paquete local listo:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- Estado de indexacion del staging:
  - `robots.txt` temporal con `Disallow: /`
- Estado general:
  - staging apto para produccion

## Build

- Ejecutar `npm run build`
- Confirmar 45 paginas generadas
- Confirmar presencia de `dist/form-handler.php`, `dist/.htaccess`, `dist/robots.txt`, `dist/sitemap-index.xml` y `dist/sitemap-0.xml`
- Confirmado en la build usada para el paquete `3bb759a`

## Contacto y conversion

- Envio visual real ejecutado en staging:
  - respuesta de exito visible en navegador
- Handler PHP real validado:
  - `405` en `HEAD`
  - `200` en `POST` valido
  - `422` en validaciones negativas
- Estado actual:
  - `mail()` funciona en staging
  - pruebas directas finales:
    - `2026-07-10 10:57:27 GMT`
    - `2026-07-10 11:00:44 GMT`
    - ambas con `200 OK`
  - recepcion final confirmada en Gmail de `david@instalberrozpe.com`
  - llegaron dos correos de prueba
  - revision de spam deja de ser bloqueo
  - SMTP queda como mejora futura opcional, no requisito para publicar

## WhatsApp

- Verificar enlace `wa.me` con mensaje prellenado correcto en los 4 idiomas
- Verificar boton flotante visible
- Verificar que no tapa el banner de cookies
- Verificar que no tapa el formulario
- Estado actual:
  - validado en `es`, `ca`, `en` y `de`
  - numero correcto: `34676043389`
  - sin colision grave detectada en la revision responsive realizada

## Mapa y resenas

- Verificar boton de Google Maps con la direccion confirmada
- Verificar bloque compacto de mapa en home
- Verificar bloque completo de mapa en contacto
- Verificar enlace de ubicacion en footer
- Confirmar que no se carga iframe de Google Maps antes del consentimiento
- Verificar resenas visibles `4,9` y `67 resenas`
- Verificar boton `Dejar resena en Google`
- Confirmar que no aparecen resenas escritas inventadas
- Estado actual:
  - validado en staging
  - sin iframe
  - resenas agregadas y link de Google Review correctos

## SEO

- Verificar `canonical`
- Verificar `hreflang`
- Verificar sitemap y `robots.txt`
- Verificar ausencia de `Review` schema individual
- Estado actual en staging:
  - `canonical` y `hreflang` presentes y apuntando a dominio de produccion
  - sitemap accesible y sin localhost
  - `robots.txt` del staging bloqueando indexacion temporal
  - schema `LocalBusiness` con `aggregateRating` correcto
  - revisar `areaServed` con `areas cercanas`

## Cookies

- Banner visible
- Rechazo tan facil como aceptacion
- Modal configurable
- Enlace permanente para reabrir preferencias
- Estado actual:
  - banner, modal y reapertura validados en staging real
  - opcionales no premarcadas
  - persistencia confirmada tras recarga
  - sin iframe de terceros
