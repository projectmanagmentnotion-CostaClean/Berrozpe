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

## Internal linking

### Fuente de verdad

- Relaciones compartidas: `content/shared/internal-links.json`
- Copy multidioma: `content/locales/{locale}/internal-links.json`
- Helpers en [src/lib/content.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/content.ts)

### Mapa por intencion

- Descubrimiento:
  - home hacia los tres servicios
  - indice de servicios hacia cada detalle
  - contacto hacia servicios para usuarios indecisos
- Conversion:
  - detalles de servicio hacia contacto
  - FAQ hacia contacto
  - home, servicios y sobre nosotros hacia contacto
- Confianza:
  - home hacia sobre nosotros
  - servicios hacia sobre nosotros
  - contacto hacia sobre nosotros
- Relacion de servicios:
  - electricidad y domotica <-> alarmas y camaras
  - electricidad y domotica <-> lampisteria y climatizacion
  - lampisteria y climatizacion <-> alarmas y camaras

### Reglas de anchor text

- Usar labels directos y comprensibles.
- No prometer urgencia, descuentos ni resultados no confirmados.
- Mantener anchors localizados en el idioma actual.
- Reutilizar nombres reales de servicio cuando el objetivo sea navegacion directa.

### Reglas multidioma

- Ningun enlace interno puede sacar al usuario de su idioma actual.
- Los servicios relacionados deben resolver por `serviceId`.
- Los enlaces a paginas estaticas deben resolver por helper de rutas localizadas.
