# Staging SiteGround Checklist

## Build

- Ejecutar `npm run build`
- Confirmar 45 paginas generadas
- Confirmar presencia de `dist/form-handler.php`, `dist/.htaccess`, `dist/robots.txt`, `dist/sitemap-index.xml` y `dist/sitemap-0.xml`

## Contacto y conversion

- Probar envio real del formulario hacia `david@instalberrozpe.com`
- Revisar spam
- confirmar si SiteGround acepta `mail()`
- valorar SMTP si `mail()` falla
- verificar fallback sin JS

## WhatsApp

- Verificar enlace `wa.me` con mensaje prellenado correcto en los 4 idiomas
- Verificar boton flotante visible
- Verificar que no tapa el banner de cookies
- Verificar que no tapa el formulario

## Mapa y reseñas

- Verificar boton de Google Maps con la direccion confirmada
- Verificar reseñas visibles `4,9` y `67 reseñas`
- Verificar boton `Dejar reseña en Google`
- Confirmar que no aparecen reseñas escritas inventadas

## SEO

- Verificar `canonical`
- Verificar `hreflang`
- Verificar sitemap y `robots.txt`
- Verificar ausencia de `Review` schema individual

## Cookies

- Banner visible
- Rechazo tan facil como aceptacion
- Modal configurable
- Enlace permanente para reabrir preferencias
