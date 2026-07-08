# AGENTS

## Objetivo

Mantener una base tecnica estatica, rapida y minimalista para `instalberrozpe.com` usando Astro, TypeScript, Tailwind CSS y GSAP.

## Reglas obligatorias

- Leer `README.md` y `/docs` antes de cambios amplios.
- No inventar servicios, cifras, clientes, certificaciones, marcas, anos ni garantias.
- Todo el contenido editable debe vivir en `/content`.
- Cada servicio debe mantenerse en su propio archivo dentro de `/content/services`.
- No escribir copy comercial dentro de componentes, layouts ni utilidades.
- Respetar el despliegue estatico: la salida final es `/dist`.
- Mantener separadas las secciones importantes del home en contenido y componentes distintos.

## Donde tocar cada cosa

- `content/`: textos, metadatos, servicios y legales.
- `src/components/`: piezas reutilizables y secciones.
- `src/layouts/`: layout base y SEO comun.
- `src/lib/`: carga y validacion de contenido.
- `docs/`: documentacion operativa para agentes.

## Validacion minima

- `npm run build` debe pasar antes de cerrar una tarea.
- Si se cambia contenido legal o SEO, revisar las paginas afectadas.
- Si se agregan servicios, comprobar el listado y la ruta individual.
