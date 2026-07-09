# SEO Local

## Estado tecnico actual

- Canonical por pagina apuntando a su propia URL localizada.
- `hreflang` completo en `es`, `ca`, `en`, `de` y `x-default`.
- Selector de idioma enlazando a la pagina equivalente, no siempre a la home.
- Sitemap estatico generado por Astro con las URLs finales de los cuatro idiomas.

## Fuente de verdad

- Paginas estaticas: `content/locales/{locale}/seo.json`
- Servicios equivalentes: `content/shared/services-index.json`
- Visuales y OG temporales: `content/shared/visuals.json`
- Helpers SEO: [src/lib/content.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/content.ts)
- Head comun: [src/components/SeoHead.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/SeoHead.astro)

## Hreflang

Los grupos estaticos definidos son:

- `home`
- `services`
- `about`
- `contact`
- `legalNotice`
- `privacy`
- `cookies`
- `terms`

Los detalles de servicio no se hardcodean en `seo.json`; salen de `services-index.json` mediante `serviceId`.

## Politica de raiz

- `/` existe solo como redireccion controlada a `/es/`.
- `x-default` resuelve a la URL espanola equivalente.
- El sitemap incluye la raiz tecnica y todas las rutas finales localizadas.

## Datos locales confirmados reutilizables

- Marca: `Instal Berrozpe`
- Localidad: `Blanes`
- Region: `Girona`
- Direccion auditada: `C/ Antiga nº 68, Baixos, 17300 Blanes (Girona)`
- Telefonos auditados: `676 04 33 89` y `872 986 161`
- Email principal confirmado: `david@instalberrozpe.com`

## Datos todavia pendientes

- Cobertura exacta por municipios o comarcas
- Antiguedad/experiencia exacta
- Certificaciones
- Garantias

## Open Graph actual

- Home, sobre nosotros y legales: `/og/default.png`
- Servicios indice y detalle: `/og/services.png`
- Contacto: `/og/contact.png`

Estado:

- OG corporativos temporales, sin fotos reales no verificadas.
- `SeoHead.astro` ya emite `og:title`, `og:description`, `og:image`, `canonical`, `hreflang` y `x-default`.
