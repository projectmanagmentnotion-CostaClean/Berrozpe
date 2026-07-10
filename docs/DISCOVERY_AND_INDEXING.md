# Discovery And Indexing

## Objetivo

Dejar la web estatica preparada para descubrimiento por Google, Bing y crawlers generales sin prometer indexacion garantizada.

## Base tecnica

- HTML estatico generado por Astro en `dist/`
- rutas localizadas en `es`, `ca`, `en` y `de`
- `canonical` por pagina localizada
- `hreflang` completo con `x-default`
- sitemap generado en `dist/sitemap-index.xml` y `dist/sitemap-0.xml`
- `robots.txt` publico en `dist/robots.txt`

## Sitemap

- URL prevista: `https://instalberrozpe.com/sitemap-index.xml`
- Publicado y respondiendo `200 OK` en produccion
- La build genera `45` paginas contando la raiz tecnica `/`
- El sitemap localizado expone `44` URLs indexables reales
- No incluye staging

## Robots

- `User-agent: *`
- `Allow: /`
- referencia a sitemap de produccion
- Publicado y respondiendo `200 OK` en produccion

## Produccion real

- `https://instalberrozpe.com/` redirige a `https://instalberrozpe.com/es/`
- la raiz publica actual ya sirve la build estatica nueva
- `canonical`, `hreflang` y sitemap quedan activos sobre el dominio final

## Internal Linking

- Fuente compartida: `content/shared/internal-links.json`
- Copy localizado: `content/locales/{locale}/internal-links.json`
- Refuerzos activos hacia servicios, contacto, WhatsApp, mapa y reseñas

## Schema

- `LocalBusiness` emitido desde `src/components/SeoHead.astro`
- helper central: `getLocalBusinessSchema(...)`
- `aggregateRating` solo en paginas donde el dato es visible
- sin `Review` schema individual mientras `reviews[]` siga vacio

## Open Graph

- `/og/default.png`
- `/og/services.png`
- `/og/contact.png`

## Recomendaciones tras publicar

- Enviar sitemap a Google Search Console
- Enviar sitemap a Bing Webmaster Tools
- revisar cobertura e indexacion tras publicacion

## Nota sobre motores IA

No existe garantia de indexacion o citacion por motores IA.

La base queda preparada para lectura por crawlers mediante HTML estatico, sitemap, `robots.txt`, `canonical`, `hreflang`, schema, Open Graph y enlaces internos consistentes.
