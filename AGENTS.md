# AGENTS

## Objetivo

Mantener una base técnica estática, rápida y minimalista para `instalberrozpe.com` usando Astro, TypeScript, Tailwind CSS y GSAP instalado, pero sin animación activa hasta que se valide el sprint visual correspondiente.

## Reglas obligatorias

- Leer `README.md` y `/docs` antes de cambios amplios.
- No inventar servicios, cifras, clientes, certificaciones, marcas, años ni garantías.
- Todo el contenido editable debe vivir en `/content`.
- Los datos compartidos deben vivir en `content/shared/`.
- Los textos traducibles deben vivir en `content/locales/{locale}/`.
- Cada servicio debe mantenerse en su propio archivo por idioma.
- No escribir copy comercial dentro de componentes, layouts ni utilidades.
- Respetar el despliegue estático: la salida final es `/dist`.
- Mantener separadas las secciones importantes del home en contenido y componentes distintos.
- Ningún idioma puede quedar desincronizado respecto a los otros tres.
- Si un dato sigue pendiente, debe mantenerse pendiente en todos los idiomas o en `content/shared/`.

## Dónde tocar cada cosa

- `content/shared/`: datos canónicos comunes, contacto, índices y redirects.
- `content/locales/`: navegación, home, SEO, servicios y legales por idioma.
- `src/components/`: piezas reutilizables y secciones sin copy hardcodeado.
- `src/layouts/`: layout base y SEO común.
- `src/lib/`: carga y validación de contenido.
- `docs/`: documentación operativa para agentes.

## Validación mínima

- `npm run build` debe pasar antes de cerrar una tarea.
- Si se cambia contenido legal o SEO, revisar las páginas afectadas.
- Si se agregan o modifican servicios, comprobar que la estructura se mantiene sincronizada en `es`, `ca`, `en` y `de`.
