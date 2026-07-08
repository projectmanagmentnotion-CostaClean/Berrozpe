# Modelo de contenido

## Regla principal

Todo el contenido editable debe vivir en `/content`.

## Estructura

- `content/site/settings.json`
  - Ajustes globales, SEO base y datos de negocio.
- `content/home/*.json`
  - Cada seccion principal del home en su propio archivo.
- `content/services/*.json`
  - Un archivo por servicio.
  - Campos minimos: `slug`, `status`, `seoTitle`, `seoDescription`, `heroTitle`, `summary`, `body`, `serviceAreaNote`.
- `content/legal/*.json`
  - Paginas legales independientes.

## Publicacion de servicios

1. Duplicar el formato de `content/services/servicio-pendiente.json`.
2. Sustituir el contenido por informacion real validada.
3. Cambiar `status` a `published`.
4. Ejecutar `npm run build`.

## Contenido prohibido en codigo

- Titulares comerciales dentro de componentes.
- Descripciones de servicios dentro de `src/`.
- Datos legales reales dispersos fuera de `content/`.
