# Despliegue en SiteGround

Este archivo queda alineado con `docs/SITEGROUND_DEPLOYMENT_GUIDE.md`.

## Build

```bash
npm install
npm run build
```

La salida final queda en `dist/`.

## Publicacion

1. Generar `dist/` localmente.
2. Subir el contenido de `dist/` al directorio publico del hosting en SiteGround.
3. Mantener una copia de seguridad del contenido anterior antes de reemplazarlo.

## Handler PHP del formulario

- `public/form-handler.php` se copia a `dist/form-handler.php`.
- El destinatario configurado es `david@instalberrozpe.com`.
- El handler valida `POST`, locale, servicio, email, privacidad, honeypot y longitudes.
- Con JS activo responde en JSON.
- Sin JS puede redirigir a la pagina localizada de contacto con `?status=success` o `?status=error`.

## Verificaciones recomendadas

- Carga del home.
- Rutas de servicios.
- Rutas legales.
- Rutas de contacto en `es`, `ca`, `en` y `de`.
- Canonical apuntando a `https://instalberrozpe.com`.
- Hreflang generado para `es`, `ca`, `en` y `de`.
- Datos de contacto servidos desde `content/shared/contact.json`.
- `dist/form-handler.php` presente tras la build.
