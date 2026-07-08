# Arquitectura

## Objetivo

La base esta preparada para una web estatica desplegable en SiteGround subiendo solo `dist/`.

## Capas

- `content/`: unica fuente editable para textos, SEO declarativo y plantillas legales.
- `src/lib/content.ts`: punto unico de carga de contenido.
- `src/components/`: secciones y piezas visuales sin copy comercial embebido.
- `src/layouts/BaseLayout.astro`: layout comun, GSAP global y SEO base.
- `src/pages/`: rutas estaticas de home, servicios y legales.

## Decisiones tecnicas

- `output: "static"` para exportar HTML plano.
- Tailwind via `@tailwindcss/vite` para mantener CSS minimo y rapido.
- GSAP cargado en el layout para animaciones de entrada progresivas.
- SEO tecnico centralizado en `SeoHead.astro`.
- Servicios filtrados por `status` para permitir borradores sin publicarlos.

## Extension futura recomendada

1. Sustituir el servicio de ejemplo por servicios reales en archivos individuales.
2. Completar `content/site/settings.json` con datos reales de negocio.
3. Revisar y validar las paginas legales con asesoria especializada.
4. Anadir imagenes optimizadas en `public/` y sus fuentes en `assets-source/`.
