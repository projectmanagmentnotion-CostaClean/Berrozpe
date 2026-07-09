# AGENTS

## Objetivo

Mantener una base tecnica estatica, rapida y minimalista para `instalberrozpe.com` usando Astro, TypeScript, Tailwind CSS y GSAP instalado, pero sin animacion dependiente del contenido si falla JavaScript o si aplica reduced motion.

## Reglas obligatorias

- Leer `README.md` y `/docs` antes de cambios amplios.
- No inventar servicios, cifras, clientes, certificaciones, marcas, anos ni garantias.
- Todo el contenido editable debe vivir en `/content`.
- Los datos compartidos deben vivir en `content/shared/`.
- Los textos traducibles deben vivir en `content/locales/{locale}/`.
- Cada servicio debe mantenerse en su propio archivo por idioma.
- No escribir copy comercial dentro de componentes, layouts ni utilidades.
- Respetar el despliegue estatico: la salida final es `/dist`.
- Mantener separadas las secciones importantes del home en contenido y componentes distintos.
- Ningun idioma puede quedar desincronizado respecto a los otros tres.
- Si un dato sigue pendiente, debe mantenerse pendiente en todos los idiomas o en `content/shared/`.
- No cambiar rutas, slugs ni equivalencias de idioma sin actualizar documentacion y helpers.

## Donde tocar cada cosa

- `content/shared/`: datos canonicos comunes, contacto, indices y redirects.
- `content/locales/`: navegacion, home, SEO, servicios y legales por idioma.
- `src/components/`: piezas reutilizables y secciones sin copy hardcodeado.
- `src/layouts/`: layout base y SEO comun.
- `src/lib/`: carga, validacion de contenido y utilidades de animacion.
- `src/scripts/`: entrypoints de cliente.
- `docs/`: documentacion operativa para agentes.

## Regla documental

- Cualquier cambio de contenido, SEO, sitemap, rutas, legales o assets debe mantener actualizado `docs/CONTENT_SEO_STRUCTURE_MASTER.md`.

## Validacion minima

- `npm run build` debe pasar antes de cerrar una tarea.
- Si se cambia contenido legal o SEO, revisar las paginas afectadas.
- Si se agregan o modifican servicios, comprobar que la estructura se mantiene sincronizada en `es`, `ca`, `en` y `de`.
- Si se toca routing, revisar `hreflang`, selector de idioma, sitemap y redireccion `/ -> /es/`.
