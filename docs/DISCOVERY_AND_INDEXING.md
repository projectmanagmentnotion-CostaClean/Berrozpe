# Discovery And Indexing

## Addendum deploy `2026-07-13`

- deploy SEO/crawl/IA ejecutado en produccion
- commit desplegado:
  - `235978c`
- `llms.txt` publicado en:
  - `https://instalberrozpe.com/llms.txt`
- redirect legacy activo:
  - `https://instalberrozpe.com/sitemap_index.xml` -> `https://instalberrozpe.com/sitemap-index.xml`
- backup previo creado:
  - `public_html-backup-2026-07-13-seo-crawl-ai.zip.zip`
- validacion real:
  - `/` -> `301` a `/es/`
  - `/robots.txt` -> `200 OK`
  - `/sitemap-index.xml` -> `200 OK`
  - `/sitemap-0.xml` -> `200 OK`
  - `/llms.txt` -> `200 OK`

## Addendum `2026-07-13`

- auditoria de crawl, enlaces y descubrimiento IA ejecutada sin deploy
- produccion actual comprobada:
  - `/` -> `301` a `/es/`
  - `robots.txt` -> `200 OK`
  - `sitemap-index.xml` -> `200 OK`
  - `sitemap-0.xml` -> `200 OK`
  - `sitemap_index.xml` legacy -> `404 Not Found`
- la build nueva dejo preparados y luego publicados:
  - `public/llms.txt`
  - redirect legacy en `public/.htaccess`:
    - `/sitemap_index.xml` -> `/sitemap-index.xml`
- auditoria automatizada sobre `dist/`:
  - `45` paginas generadas
  - `0` enlaces internos rotos
  - `0` referencias a `localhost`
  - `0` referencias a `staging`
  - `0` enlaces externos con falta de `noopener noreferrer`
- siguiente paso operativo:
  - alta o importacion de propiedad en Bing Webmaster Tools
  - envio de `https://instalberrozpe.com/sitemap-index.xml`

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
- Sin `Disallow: /`

## Produccion real

- `https://instalberrozpe.com/` redirige a `https://instalberrozpe.com/es/`
- la raiz publica actual ya sirve la build estatica nueva
- `canonical`, `hreflang` y sitemap quedan activos sobre el dominio final
- sitemap sin URLs `localhost`
- sitemap sin URLs de staging
- WordPress antiguo retirado de `public_html`
- backup previo realizado y mantenido
- formulario de produccion confirmado con recepcion real en `david@instalberrozpe.com`

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
- monitorizar indexacion durante los proximos dias

## Nota sobre motores IA

No existe garantia de indexacion o citacion por motores IA.

La base queda preparada para lectura por crawlers mediante HTML estatico, sitemap, `robots.txt`, `canonical`, `hreflang`, schema, Open Graph, enlaces internos consistentes y `llms.txt` ya publicado en produccion.
