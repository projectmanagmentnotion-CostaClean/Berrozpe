# Crawl Links AI Audit

## Fecha

- `2026-07-13`

## Alcance

- auditoria tecnica de rastreo, enlazado, follow/nofollow, canonical, hreflang, schema y descubrimiento para motores de busqueda y crawlers IA
- sin deploy en este sprint
- con comprobacion separada entre:
  - produccion actual `https://instalberrozpe.com`
  - build local nueva en `dist/`

## Produccion actual verificada

### Root y robots

- `https://instalberrozpe.com/` responde `301` a `https://instalberrozpe.com/es/`
- `https://instalberrozpe.com/robots.txt` responde `200 OK`
- `robots.txt` permite indexacion:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://instalberrozpe.com/sitemap-index.xml`

### Sitemap correcto

- `https://instalberrozpe.com/sitemap-index.xml` responde `200 OK`
- `https://instalberrozpe.com/sitemap-0.xml` responde `200 OK`
- `sitemap-index.xml` apunta a `sitemap-0.xml`
- `sitemap-0.xml` contiene URLs canonicas de `es`, `ca`, `en` y `de`
- no hay `localhost`
- no hay `staging`
- no hay URLs antiguas de WordPress en el sitemap actual

### Sitemap antiguo WordPress

- `https://instalberrozpe.com/sitemap_index.xml` responde `404 Not Found`
- conclusion:
  - no existe sitemap antiguo vivo en produccion
  - sigue siendo recomendable retirarlo de Google Search Console si sigue dado de alta historicamente
  - en repo queda preparado un redirect legacy seguro:
    - `/sitemap_index.xml` -> `/sitemap-index.xml`
  - ese redirect aun no esta publicado porque este sprint no hace deploy

### Rutas minimas comprobadas en produccion

- `https://instalberrozpe.com/es/` -> `200 OK`
- `https://instalberrozpe.com/es/servicios/` -> `200 OK`
- `https://instalberrozpe.com/es/servicios/electricidad-y-domotica/` -> `200 OK`
- `https://instalberrozpe.com/es/servicios/lampisteria-y-climatizacion/` -> `200 OK`
- `https://instalberrozpe.com/es/servicios/alarmas-y-camaras/` -> `200 OK`
- `https://instalberrozpe.com/es/sobre-nosotros/` -> `200 OK`
- `https://instalberrozpe.com/es/contacto/` -> `200 OK`
- `https://instalberrozpe.com/ca/` -> `200 OK`
- `https://instalberrozpe.com/en/` -> `200 OK`
- `https://instalberrozpe.com/de/` -> `200 OK`

## Auditoria de build local nueva

### Build

- comando ejecutado:
  - `npm run build`
- resultado:
  - correcto
  - `45` paginas generadas
- no existe script `lint` en `package.json`

### Artefactos verificados en `dist/`

- `dist/index.html`
- `dist/es/`
- `dist/ca/`
- `dist/en/`
- `dist/de/`
- `dist/_astro/`
- `dist/images/`
- `dist/og/`
- `dist/robots.txt`
- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- `dist/.htaccess`
- `dist/form-handler.php`
- `dist/llms.txt`

### Limpieza tecnica

- sin `localhost` en `dist/`
- sin `127.0.0.1` en `dist/`
- sin `staging` en `dist/`

## Enlaces internos auditados

### Zonas cubiertas

- header
- footer
- home
- indice de servicios
- detalle de servicios
- contacto
- sobre nosotros
- legales
- selector de idioma
- CTAs
- cards

### Resultado

- auditoria automatizada sobre las `45` paginas generadas
- `0` enlaces internos con destino inexistente en la build
- `0` referencias a `localhost`
- `0` referencias a `staging`
- `0` paginas indexables con `nofollow`
- anchors internos revisados sin textos vagos detectados en la muestra automatizada

### Decision follow / nofollow

- los enlaces internos normales permanecen `follow`
- no se anade `nofollow` interno
- la raiz tecnica `/` mantiene `noindex, follow` como fallback HTML, mientras el servidor real ya hace `301` a `/es/`

## Enlaces externos auditados

### Dominios detectados en la build

- `wa.me`
- `www.google.com`
- `g.page`

### Tipos cubiertos

- WhatsApp
- Google Maps
- Google Reviews / Google Business
- `mailto:`
- `tel:`
- redes sociales compartidas si se activan desde contenido

### Resultado

- `224` enlaces con `target="_blank"` auditados en HTML generado
- `0` enlaces externos con falta de `noopener noreferrer`
- no se usa `nofollow` en WhatsApp, Google Maps ni Google Reviews
- no se usa `sponsored`
- no se usa `ugc`

### Ajuste aplicado

- `src/components/Button.astro` ahora aplica `rel="noopener noreferrer"` por defecto cuando recibe `target="_blank"` y no se define `rel`

## Indexabilidad

### Rutas minimas verificadas en la build

- `/es/`
- `/es/servicios/`
- `/es/servicios/electricidad-y-domotica/`
- `/es/servicios/lampisteria-y-climatizacion/`
- `/es/servicios/alarmas-y-camaras/`
- `/es/sobre-nosotros/`
- `/es/contacto/`
- `/ca/`
- `/en/`
- `/de/`

### Resultado

- `title` presente
- `meta description` presente
- `canonical` correcto y localizado
- `h1` presente
- `hreflang` completo con `5` alternates:
  - `es`
  - `ca`
  - `en`
  - `de`
  - `x-default`
- sin `noindex` en las rutas indexables auditadas
- `LocalBusiness` activo desde `SeoHead.astro`
- `aggregateRating` solo donde el dato es visible
- Open Graph presente

## Robots, canonical y hreflang

### Robots

- produccion actual:
  - abierto a indexacion
- build nueva:
  - `dist/robots.txt` correcto

### Canonical

- cada ruta auditada apunta a su URL localizada final en `https://instalberrozpe.com`

### Hreflang

- correcto en las rutas minimas revisadas
- `x-default` sigue resolviendo a la variante espanola equivalente

## llms.txt

- creado:
  - `public/llms.txt`
- generado:
  - `dist/llms.txt`
- contenido:
  - informacion factual de empresa, servicios, contacto, idiomas y sitemap
- estado:
  - preparado en repo
  - no publicado todavia porque este sprint no hace deploy

## Bing Webmaster Tools

- siguiente paso operativo recomendado:
  - importar la propiedad desde Google Search Console o verificar el dominio directamente en Bing Webmaster Tools
  - enviar `https://instalberrozpe.com/sitemap-index.xml`
- matiz:
  - cuando se despliegue esta revision, Bing tambien podra descubrir `llms.txt`

## Archivos ajustados en repo

- `public/.htaccess`
- `public/llms.txt`
- `src/components/Button.astro`
- `src/components/SeoHead.astro`
- `src/pages/index.astro`

## Pendientes

- desplegar estos ajustes a produccion en un sprint posterior
- retirar `sitemap_index.xml` de Search Console si sigue cargado historicamente
- enviar o revalidar `sitemap-index.xml` tambien en Bing Webmaster Tools
- comprobar en produccion, tras deploy, que:
  - `https://instalberrozpe.com/llms.txt` responde `200 OK`
  - `https://instalberrozpe.com/sitemap_index.xml` pasa a redirigir a `https://instalberrozpe.com/sitemap-index.xml`
