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

## Verificaciones recomendadas

- Carga del home y de las 4 paginas de contacto.
- Rutas de servicios y legales.
- Canonical apuntando a `https://instalberrozpe.com`.
- `hreflang` generado para `es`, `ca`, `en` y `de`.
- Selector de idioma intacto en contacto y en detalle de servicio.
- `dist/form-handler.php` presente tras la build.
- El formulario muestra exito y error sin introducir cookies opcionales nuevas.

## Checklist previo a produccion

- Confirmar que `mail()` funciona en el hosting SiteGround del proyecto.
- Revisar SPF/DKIM/DMARC del dominio si se cambia el remitente tecnico.
- Validar los textos legales finales antes de publicar.
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos.
