# Despliegue en SiteGround

## Build

```bash
npm install
npm run build
```

La salida final queda en `dist/`.

## Publicación

1. Generar `dist/` localmente.
2. Subir solo el contenido de `dist/` al directorio público del hosting en SiteGround.
3. Mantener una copia de seguridad del contenido anterior antes de reemplazarlo.

## Verificaciones recomendadas

- Carga del home.
- Rutas de servicios.
- Rutas legales.
- Canonical apuntando a `https://instalberrozpe.com`.
- Hreflang generado para `es`, `ca`, `en` y `de`.
- Datos de contacto servidos desde `content/shared/contact.json`.
