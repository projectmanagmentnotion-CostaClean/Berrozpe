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
- Direccion confirmada: `Carrer de l'Antiga, 68, 17300 Blanes, Girona`
- Telefonos auditados: `676 04 33 89` y `872 986 161`
- Email principal confirmado: `david@instalberrozpe.com`
- Google Maps:
  - URL externa confirmada en `content/shared/contact.json`
  - bloque local visible en home y contacto
  - enlace simple en footer

## Datos confirmados para schema y SEO local

- Razon social: `Instal Berrozpe S.L.`
- CIF/NIF: `B55326813`
- `LocalBusiness.name`: `Instal Berrozpe`
- `LocalBusiness.legalName`: `Instal Berrozpe S.L.`
- `LocalBusiness.taxID`: `B55326813`
- `telephone` del schema: `872 986 161`
- `email` del schema: `david@instalberrozpe.com`
- `areaServed` conservador:
  - `Blanes`
  - `Arenys`
  - `Lloret de Mar`

## Datos todavia pendientes

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

## Schema local

- `LocalBusiness` emitido desde `SeoHead.astro`
- helper central: `getLocalBusinessSchema(...)`
- `aggregateRating` visible y permitido en home y contacto
- Datos usados:
  - `ratingValue: 4.9`
  - `reviewCount: 67`
  - `bestRating: 5`
- No se emite `Review` schema individual.
- No se anaden coordenadas no confirmadas.
- No se fuerza `GeoCoordinates`.
- La presencia del mapa se resuelve con direccion textual y enlace verificado a Google Maps.
- El schema ya soporta `legalName` y `taxID` con datos confirmados por cliente.

## Descubrimiento

- Documento operativo adicional:
  - [DISCOVERY_AND_INDEXING.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/DISCOVERY_AND_INDEXING.md)

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

## Estrategia final de copy SEO

- Fecha de cierre editorial: `2026-07-09`
- Idiomas cerrados: `es`, `ca`, `en`, `de`
- Enfoque:
  - home con lectura rapida de actividad, ubicacion, servicios y contacto
  - servicios con resumen corto, alcance claro y CTA no agresiva
  - contacto como punto de entrada para usuarios que aun dudan entre servicios
  - sobre nosotros como bloque de confianza sin claims no auditados

## Keywords finales por idioma

- `es`
  - instalaciones en Blanes
  - instalaciones en Girona
  - electricidad y domotica Blanes
  - lampisteria y climatizacion Blanes
  - alarmas y camaras Blanes
  - empresa de instalaciones Blanes
- `ca`
  - installacions a Blanes
  - installacions a Girona
  - electricitat i domotica
  - lampisteria i climatitzacio
  - alarmes i cameres
- `en`
  - technical installations in Blanes
  - installation company in Blanes/Girona
  - electrical and home automation
  - plumbing and climate control
  - alarms and CCTV/IP cameras
- `de`
  - technische Installationen in Blanes
  - Installationsfirma in Blanes/Girona
  - Elektro und Smart Home
  - Sanitaar und Klimatechnik
  - Alarmanlagen und Kameras

## Reglas finales de anchors internos

- Evitar anchors vagos como `click here`.
- Priorizar intencion clara:
  - ver servicios
  - solicitar presupuesto
  - conocer la empresa
  - pedir orientacion
  - ver servicios relacionados
- Mantener la promesa moderada:
  - sin urgencia falsa
  - sin descuentos inventados
  - sin resultados no confirmados

## Titles y metas revisados

- Home:
  - titulo y descripcion localizados con foco en Blanes/Girona y empresa de instalaciones
- Servicios:
  - titulo propio por servicio con keyword principal y localidad
  - descripcion propia por servicio sin duplicacion literal
- Sobre nosotros:
  - foco en empresa de instalaciones en Blanes
- Contacto:
  - foco en contacto directo y servicios principales
- Legales:
  - SEO basico definitivo con datos fiscales confirmados
