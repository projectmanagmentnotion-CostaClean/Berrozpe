# Arquitectura

## Objetivo

La base está preparada para una web estática desplegable en SiteGround subiendo solo `dist/`, con contenido modular y sincronizado para `es`, `ca`, `en` y `de`.

## Capas

- `content/shared/`: fuente de verdad común para marca, contacto, índice de servicios y redirects.
- `content/locales/{locale}/`: navegación, home, SEO, servicios y legales por idioma.
- `src/lib/content.ts`: punto único de carga de contenido para la build actual.
- `src/components/`: secciones y piezas visuales sin copy comercial embebido.
- `src/layouts/BaseLayout.astro`: layout común y SEO base.
- `src/pages/`: rutas estáticas actuales de la versión base en español.

## Decisiones técnicas

- `output: "static"` para exportar HTML plano.
- Tailwind vía `@tailwindcss/vite` para mantener CSS mínimo y rápido.
- GSAP permanece instalado pero no activo en este sprint.
- SEO técnico centralizado en `SeoHead.astro`.
- Hreflang preparado desde `content/locales/*/seo.json`.
- Los servicios se conectan entre idiomas mediante `content/shared/services-index.json`.

## Estructura de contenido

```text
content/
|-- shared/
|   |-- site.json
|   |-- contact.json
|   |-- services-index.json
|   `-- redirects.json
`-- locales/
    |-- es/
    |-- ca/
    |-- en/
    `-- de/
```

## Estado actual

- La build pública actual consume la variante `es`.
- Los cuatro idiomas ya tienen estructura sincronizada en contenido.
- El routing multidioma completo queda preparado a nivel de datos, pero no se activa todavía en la interfaz final.

## Reglas de evolución

1. No añadir contenido a un idioma sin replicarlo en los otros tres.
2. No mover datos comunes fuera de `content/shared/`.
3. No activar claims, emails principales o legales definitivos sin validación.
4. No reactivar GSAP hasta el sprint visual correspondiente.
