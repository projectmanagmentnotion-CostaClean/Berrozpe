# SEO Local

## Estado técnico actual

- Canonical por página apuntando a su propia URL localizada.
- `hreflang` completo en `es`, `ca`, `en`, `de` y `x-default`.
- Selector de idioma enlazando a la página equivalente, no siempre a la home.
- Sitemap estático generado por Astro con las URLs finales de los cuatro idiomas.

## Fuente de verdad

- Páginas estáticas: `content/locales/{locale}/seo.json`
- Servicios equivalentes: `content/shared/services-index.json`
- Helpers SEO: [src/lib/content.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/content.ts)
- Head común: [src/components/SeoHead.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/SeoHead.astro)

## Hreflang

Los grupos estáticos definidos son:

- `home`
- `services`
- `about`
- `contact`
- `legalNotice`
- `privacy`
- `cookies`
- `terms`

Los detalles de servicio no se hardcodean en `seo.json`; salen de `services-index.json` mediante `serviceId`.

## Política de raíz

- `/` existe solo como redirección controlada a `/es/`.
- `x-default` resuelve a la URL española equivalente.
- El sitemap incluye la raíz técnica y todas las rutas finales localizadas.

## Datos locales confirmados reutilizables

- Marca: `Instal Berrozpe`
- Localidad: `Blanes`
- Región: `Girona`
- Dirección auditada: `C/ Antiga nº 68, Baixos, 17300 Blanes (Girona)`
- Teléfonos auditados: `676 04 33 89` y `872 986 161`

## Datos todavía pendientes

- `primaryEmail`
- Cobertura exacta por municipios o comarcas
- Antigüedad/experiencia exacta
- Certificaciones
- Garantías
