# Despliegue en SiteGround

## Build

```bash
npm install
npm run build
```

La salida final queda en `dist/`.

## Publicacion

1. Generar `dist/` localmente.
2. Subir solo el contenido de `dist/` al directorio publico del hosting en SiteGround.
3. Mantener una copia de seguridad del contenido anterior antes de reemplazarlo.

## Verificaciones recomendadas

- Carga del home.
- Rutas de servicios publicadas.
- Rutas legales.
- Canonical apuntando a `https://instalberrozpe.com`.
- Enlaces de telefono y email tras completar `content/site/settings.json`.
