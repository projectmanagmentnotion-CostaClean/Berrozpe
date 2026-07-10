# Content SEO Structure Master

## A. Resumen del proyecto

- Dominio: `instalberrozpe.com`
- Hosting previsto: SiteGround
- Tipo de web: Astro estatico
- Build de salida: `dist/`
- Idiomas activos: `es`, `ca`, `en`, `de`
- Estado: base final publicada en produccion el `2026-07-10`

## B. Servicios reales confirmados

- Electricidad y domotica
- Lampisteria y climatizacion
- Alarmas y camaras

Estos tres servicios existen como fuente de verdad en `content/shared/services-index.json` y tienen archivo individual por idioma en `content/locales/{locale}/services/`.

## C. Servicios no confirmados / no crear

- No crear paginas de servicio independientes para reformas, mantenimiento, energias renovables, aire acondicionado, calderas, calefaccion, fotovoltaica, solar termica, CCTV o IP.
- Cuando esos conceptos aparecen en la auditoria, deben tratarse como bloques internos dentro de los tres servicios principales mientras no exista confirmacion editorial adicional.

## D. Datos de contacto

Fuente de verdad: `content/shared/contact.json`

- Direccion confirmada final: `Carrer de l'Antiga, 68`, `17300 Blanes (Girona)`
- Telefonos confirmados:
  - Movil: `676 04 33 89`
  - Fijo correcto: `872 986 161`
- Horario confirmado:
  - ES: `Lunes - Viernes 8:00 a 18:00`
  - CA: `Dilluns a Divendres de 8:00 a 18:00`
  - EN: `Monday - Friday 8:00 to 18:00`
  - DE: `Montag - Freitag 8:00 bis 18:00`
- Emails detectados:
  - `david@instalberrozpe.com`
  - `comercial@instalberrozpe.com`
- `primaryEmail`: `david@instalberrozpe.com`
- WhatsApp derivado: `https://wa.me/34676043389?...`
- URL de Google Maps: `https://www.google.com/maps/search/?api=1&query=Carrer%20de%20l%27Antiga%2C%2068%2C%2017300%20Blanes%2C%20Girona`
- Destinatario del formulario RGPD / handler PHP: `david@instalberrozpe.com`

## E. Estructura multidioma

### `content/shared/`

- `site.json`: dominio, locale por defecto, locales soportados, base paths y etiquetas.
- `contact.json`: direccion, telefonos, horarios, emails detectados, redes y pendientes.
- `services-index.json`: `serviceId` comun y slugs/rutas equivalentes por idioma.
- `redirects.json`: redirects legacy hacia la nueva arboladura multidioma.
- `internal-links.json`: relaciones estrategicas entre descubrimiento, confianza y conversion.

### `content/locales/es/`

- `navigation.json`
- `home.json`
- `internal-links.json`
- `seo.json`
- `services/*.json`
- `legal/*.json`

### `content/locales/ca/`

- Misma estructura y mismos bloques que `es`.

### `content/locales/en/`

- Misma estructura y mismos bloques que `es`.

### `content/locales/de/`

- Misma estructura y mismos bloques que `es`.

Regla operativa:

- Ningun idioma puede ganar o perder servicios, secciones, CTA, legales o datos de contacto respecto a los otros tres.

## F. Rutas finales por idioma

### Home

- `/es/`
- `/ca/`
- `/en/`
- `/de/`

### Indice de servicios

- `/es/servicios/`
- `/ca/serveis/`
- `/en/services/`
- `/de/dienstleistungen/`

### Detalle de servicios

- `electricidad-y-domotica`
  - `/es/servicios/electricidad-y-domotica/`
  - `/ca/serveis/electricitat-i-domotica/`
  - `/en/services/electricity-and-home-automation/`
  - `/de/dienstleistungen/elektrizitaet-und-smart-home/`
- `lampisteria-y-climatizacion`
  - `/es/servicios/lampisteria-y-climatizacion/`
  - `/ca/serveis/lampisteria-i-climatitzacio/`
  - `/en/services/plumbing-and-climate-control/`
  - `/de/dienstleistungen/sanitaer-und-klimatechnik/`
- `alarmas-y-camaras`
  - `/es/servicios/alarmas-y-camaras/`
  - `/ca/serveis/alarmes-i-cameres/`
  - `/en/services/alarms-and-cameras/`
  - `/de/dienstleistungen/alarmanlagen-und-kameras/`

### Sobre nosotros

- `/es/sobre-nosotros/`
- `/ca/sobre-nosaltres/`
- `/en/about-us/`
- `/de/ueber-uns/`

### Contacto

- `/es/contacto/`
- `/ca/contacte/`
- `/en/contact/`
- `/de/kontakt/`

### Legales

- Aviso legal / Impressum
- Politica de privacidad / Datenschutz
- Politica de cookies / Cookies
- Terminos y condiciones / AGB

Todas las rutas definitivas estan reflejadas en `docs/02_SITEMAP.md`.

## G. Sitemap final

- Home por idioma: 4
- Indice de servicios por idioma: 4
- Detalles de servicio: 12
- Sobre nosotros: 4
- Contacto: 4
- Legales: 16
- Total indexable esperado: 44 URLs localizadas
- Ruta tecnica adicional: `/` con redireccion a `/es/`
- Total generado en build actual: 45 paginas
- Idiomas incluidos: `es`, `ca`, `en`, `de`

## H. SEO

### Estado de copy final

- Cierre editorial realizado: `2026-07-09`
- Idiomas revisados: `es`, `ca`, `en`, `de`
- Paginas revisadas:
  - home
  - indice de servicios
  - detalle de los 3 servicios
  - sobre nosotros
  - contacto
  - legales basicos en SEO
- Estado:
  - copy comercial y SEO sincronizado en los cuatro idiomas
  - home, contacto y bloques de conversion recortados para eliminar texto redundante
  - CTA final de servicio separada del bloque de pendientes internos
  - contacto publico limpiado de resumen legal visible y mensajes internos
  - footer, resenas, WhatsApp, mapa e internal linking compactados para priorizar conversion
  - contacto publico limpiado de mensajes internos de validacion
- Pendientes editoriales:
  - repetir una prueba de formulario tras publicar en produccion

### Keywords principales por idioma

- `es`
  - instalaciones en Blanes
  - instalaciones en Girona
  - electricidad y domotica Blanes
  - lampisteria y climatizacion Blanes
  - alarmas y camaras Blanes
  - camaras CCTV/IP Blanes
  - empresa de instalaciones Blanes
- `ca`
  - installacions a Blanes
  - installacions a Girona
  - electricitat i domotica
  - lampisteria i climatitzacio
  - alarmes i cameras
  - cameras CCTV/IP
- `en`
  - technical installations in Blanes
  - installation company in Blanes
  - electrical and home automation
  - plumbing and climate control
  - alarms and CCTV/IP cameras
- `de`
  - technische Installationen in Blanes
  - Installationsfirma in Blanes
  - Elektro und Smart Home
  - Sanitär und Klimatechnik
  - Alarmanlagen und Kameras

### Titles por tipo de pagina

- Home: desde `content/locales/{locale}/seo.json`
- Servicios indice: desde `content/locales/{locale}/seo.json`
- Sobre nosotros: desde `content/locales/{locale}/seo.json`
- Contacto: desde `content/locales/{locale}/seo.json`
- Servicios detalle: desde `content/locales/{locale}/services/*.json`
- Legales: desde `content/locales/{locale}/legal/*.json`

### Meta descriptions

- Fuente compartida por tipo de pagina en `seo.json`
- Fuente por detalle en cada servicio y legal

### Canonicals

- Cada pagina apunta a su propia URL localizada de produccion
- Implementacion comun en `src/components/SeoHead.astro`

### Hreflang

- `es`
- `ca`
- `en`
- `de`
- `x-default`

Servicios:

- Resueltos por `serviceId` desde `content/shared/services-index.json`

Paginas estaticas:

- Resueltas desde `content/locales/{locale}/seo.json`

### x-default

- Apunta a la variante espanola equivalente mientras `/` siga siendo una redireccion tecnica a `/es/`

### Schema previsto o implementado

- El layout ya expone SEO comun y datos del sitio desde `src/lib/content.ts`
- `LocalBusiness` implementado desde `getLocalBusinessSchema(...)`
- `aggregateRating` visible y permitido solo en home y contacto
- nombre legal soportado en schema:
  - `Instal Berrozpe S.L.`
- `taxID` soportado en schema:
  - `B55326813`
- Datos de valoracion confirmados:
  - `4.9`
  - `67 resenas`
- No debe inventarse schema legal, certificaciones o areas de cobertura no confirmadas
- No debe emitirse `Review` schema individual mientras no existan resenas reales cargadas
- `areaServed` conservador en schema:
  - `Blanes`
  - `Arenys`
  - `Lloret de Mar`

### Open Graph

- Debe seguir derivandose del mismo titulo, descripcion y canonical localizados
- No introducir claims o assets OG no auditados
- Activos actuales:
  - `/og/default.png`
  - `/og/services.png`
  - `/og/contact.png`
- Estado actual: composiciones corporativas temporales sin fotografia real verificada

### Internal linking

- Fuente compartida de relaciones: `content/shared/internal-links.json`
- Copy multidioma de enlace y conversion: `content/locales/{locale}/internal-links.json`
- Helpers:
  - `getInternalLinks(...)`
  - `getRelatedServices(...)`
  - `getConversionLinks(...)`
  - `getLocalizedPath(...)`
- Objetivos:
  - descubrimiento de servicios
  - conversion hacia contacto
  - conexion entre servicios relacionados
  - refuerzo de confianza hacia sobre nosotros

## I. Redirecciones

- Fuente de verdad: `content/shared/redirects.json`
- Tabla operativa: `docs/04_REDIRECTS.md`
- Reglas de Apache preparadas para SiteGround: `public/.htaccess`

Principios:

- URLs legacy ES consolidan en `/es/`
- URLs legacy EN consolidan en `/en/`
- URLs legacy CA consolidan en `/ca/`
- Slugs raros como `/alarmas-y-camaras-2/` se normalizan a la ruta final equivalente

## J. Legales

Legales sincronizados en los 4 idiomas:

- Aviso legal
- Politica de privacidad
- Politica de cookies
- Terminos y condiciones

Estado:

- legales sincronizados y cerrados para `es`, `ca`, `en` y `de`
- revision legal autorizada por cliente el `2026-07-10`
- datos fiscales aplicados en contenido y soporte SEO compartido

Datos aplicados:

- razon social:
  - `Instal Berrozpe S.L.`
- CIF/NIF:
  - `B55326813`
- domicilio legal:
  - `Antiga 68 bajos de Blanes`
- direccion publica normalizada:
  - `Carrer de l'Antiga, 68, 17300 Blanes, Girona`
- email legal y de privacidad:
  - `david@instalberrozpe.com`

## J.1 Formulario RGPD

Fuente de verdad multidioma:

- `content/locales/{locale}/contact.json`

Campos activos:

- nombre
- email
- telefono
- servicio solicitado
- mensaje
- privacidad obligatoria
- honeypot

Validacion:

- Frontend progresiva en `src/lib/forms/validation.ts` y `src/scripts/contact-form.ts`
- Backend en `public/form-handler.php`

Controles implementados:

- honeypot oculto
- privacidad obligatoria
- email valido
- telefono opcional con formato razonable
- servicio limitado a los tres servicios confirmados
- limites de longitud y saneado basico
- respuesta JSON para JS activo y redirect con `?status=` para fallback sin JS

Pendiente antes de produccion:

- Repetir o confirmar visualmente la llegada del correo tras la publicacion final en `instalberrozpe.com`

## K. Assets

Fuente principal:

- `docs/05_ASSET_INVENTORY.md`
- `docs/ASSET_REQUIREMENTS.md`

Assets legacy detectados:

- Logos de marca
- Banderas de idioma heredadas
- Visuales de home y servicios en WordPress
- Fotos corporativas y de fachada
- Video de portada del selector legacy

Assets actualmente activos en la nueva web:

- Visuales SVG temporales por seccion y servicio
- OG corporativos temporales
- Inventario sincronizado en `content/shared/visuals.json`
- Guia obligatoria de reemplazo y entrega en `docs/ASSET_REQUIREMENTS.md`

Pendientes de optimizacion:

- PNGs pesados
- Duplicados
- Archivos con texto incrustado o nombres defectuosos

Formatos recomendados:

- `webp` o `avif` para imagen final publica
- `svg` para marca/iconos si existe vector valido
- `jpg` solo cuando la foto lo requiera

Medidas recomendadas:

- Hero/OG: adaptar segun layout final y exportar una variante dedicada
- Cards: exportes consistentes por relacion de aspecto
- Logos: variantes retina y fallback simple

Alt text:

- Debe definirse por asset reutilizado
- No inventar alt comerciales que afirmen servicios no confirmados
- Los placeholders actuales se describen como visual temporal o composicion corporativa temporal

## L. Diseno

Direccion:

- Editorial technical premium
- Base clara, aireada y minimalista
- Sin rediseño completo adicional en este sprint

Paleta corporativa confirmada:

- Naranja corporativo: `#ff7700`
- Azul corporativo: `#045cb4`
- Neutro principal: `#1e293b`
- Neutro secundario: `#334155`
- Fondo claro: `#f9fafb`

Tipografia y espaciados:

- Display editorial en `--font-display`
- Sans legible en `--font-body`
- Labels uppercase con tracking amplio

Responsive:

- Base mobile-first
- CTA con altura tocable
- Grids colapsan a una columna y escalan progresivamente

## M. GSAP

Hooks disponibles:

- `data-animate="hero"`
- `data-animate="reveal"`
- `data-animate="stagger"`
- `data-animate="line"`
- `data-animate="cta"`
- `data-animate="image-reveal"`
- `data-animate="visual-panel"`
- `data-animate="soft-parallax"`
- `data-animate-group`

Animaciones aplicadas:

- `heroIntro`
- `revealOnScroll`
- `imageReveal`
- `visualPanels`
- `parallaxSoft`
- `staggerGroup`
- `lineReveal`
- `ctaMotion`
- `mobileMenuMotion`

Animaciones prohibidas en esta fase:

- Scroll-jacking
- Ocultar contenido sin JS
- Efectos que rompan accesibilidad
- Tiempos lentos o exagerados
- Dependencia visual de la animacion para entender la pagina

Reduced motion:

- Debe respetarse `prefers-reduced-motion`
- Si JS falla o reduced motion esta activo, el contenido sigue visible
- Las animaciones de scroll ahora se comportan en ida y vuelta salvo excepciones interactivas como el menu movil y el parallax suave por `scrub`

## N. Checklist antes de publicar

- `npm run build`
- Revisar 45 paginas generadas
- Revisar `sitemap-index.xml`
- Revisar `robots.txt`
- Revisar `hreflang`
- Revisar canonicals
- Revisar redirects y `.htaccess`
- Revisar selector de idioma
- Revisar internal linking multidioma
- Revisar copy final en `es`, `ca`, `en` y `de`
- Revisar formulario/contacto
- Revisar WhatsApp, mapa y bloque de resenas
- Revisar legales con validacion externa
- Confirmar SSL en SiteGround
- Ejecutar backup previo en SiteGround
- Alta y validacion en Search Console

## N.1 Estado pre-staging SiteGround

- Fecha: `2026-07-10`
- Commit verificado:
  - `3bb759a`
- Build final:
  - correcto
  - 45 paginas generadas
  - sin script de `lint` en `package.json`
- Paquete listo para subida:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- Validacion local equivalente realizada en:
  - `http://127.0.0.1:4323`
- Resultado local:
  - rutas principales cargan
  - `canonical` y `hreflang` correctos
  - sin overflow horizontal en los breakpoints criticos revisados
  - sitemap y robots correctos
  - WhatsApp, mapa, cookies y resenas visibles

## N.2 Estado staging SiteGround real

- Fecha: `2026-07-10`
- URL:
  - `https://staging.instalberrozpe.com`
- Separacion respecto a produccion:
  - staging creado como subdominio independiente
  - sin tocar `public_html` principal de `instalberrozpe.com`
- Paquete desplegado:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- Estado de indexacion temporal:
  - `robots.txt` del staging ajustado a `User-agent: *` + `Disallow: /`
- Validaciones reales cerradas:
  - `/` redirige a `/es/`
  - rutas `es`, `ca`, `en` y `de` cargan
  - `.htaccess` sirve assets, sitemap, robots y PHP sin error `500`
  - redirects legacy validados:
    - `/alarmas-y-camaras-2/` -> `/es/servicios/alarmas-y-camaras/`
  - `/contact/` -> `/en/contact/`
  - `/inici/` -> `/ca/`
  - `form-handler.php` ejecuta PHP real
  - `mail()` devuelve exito a nivel de handler
  - recepcion real confirmada en `david@instalberrozpe.com`
  - cookies, Google Maps, WhatsApp y resenas visibles en staging
  - no hay iframe de terceros cargado por defecto
- Matiz SEO de staging:
  - canonical y `hreflang` del HTML siguen apuntando a `https://instalberrozpe.com`
  - Lighthouse SEO baja en staging porque la pagina esta bloqueada temporalmente para indexacion
- Pendientes:
  - repetir una prueba de formulario tras publicar la version final

## N.3 Estado produccion SiteGround real

- Fecha:
  - `2026-07-10`
- Dominio:
  - `https://instalberrozpe.com`
- Build publicada:
  - `f978e0e`
- ZIP usado:
  - `production-dist-f978e0e.zip`
- Backup legacy mantenido:
  - `public_html-backup-2026-07-10-prelaunch.zip.zip`
- Resultado real:
  - el ZIP se extrajo en SiteGround
  - el contenido se movio a la raiz real de `public_html`
  - WordPress legacy fue retirado de `public_html`
  - la raiz publica final sirve directamente `index.html`, carpetas localizadas, `_astro`, sitemap, `robots.txt`, `.htaccess` y `form-handler.php`
- Validaciones tecnicas cerradas:
  - `/` -> `301` a `/es/`
  - `/es/` -> `200 OK`
  - `robots.txt` -> `200 OK`
  - `sitemap-index.xml` -> `200 OK`
  - `sitemap-0.xml` -> `200 OK`
  - `form-handler.php` por `GET` -> `405`
  - `form-handler.php` por `POST` -> `200 OK`
  - `canonical` y `hreflang` correctos en las paginas localizadas revisadas
  - sitemap localizado operativo con `44` URLs indexables
- Estado del formulario:
  - destinatario configurado: `david@instalberrozpe.com`
  - handler validado a nivel de servidor y `mail()` sin error visible
  - pendiente solo la confirmacion visual externa de llegada a bandeja en produccion si se quiere cierre end-to-end completo

## O. Estado de cookies

- Politica de cookies publicada por idioma en `content/locales/{locale}/legal/cookies.json`
- Banner y modal multidioma con contenido en `content/locales/{locale}/cookie-consent.json`
- Almacenamiento propio del consentimiento en `localStorage` y cookie de primera parte
- Categorias activas:
  - necesarias
- Categorias preparadas pero inactivas:
  - preferencias
  - analiticas
  - marketing
- No hay scripts opcionales confirmados cargandose antes del consentimiento
- Enlace permanente para reabrir preferencias desde el footer
- Google Maps sigue integrado como acceso externo verificado:
  - sin iframe vivo en HTML inicial
  - sin carga automatica de terceros
  - con fallback visual en contacto
  - con enlace compacto en home
  - con enlace simple en footer
- Validacion real en staging:
  - rechazo persistente tras recarga
  - opcionales no premarcadas

## P. Rutas de conversion e internal linking

- Home:
  - descubre los tres servicios
  - refuerza confianza hacia sobre nosotros
  - deriva a contacto
  - muestra resenas agregadas visibles
  - incorpora CTA grande de WhatsApp
- Servicios indice:
  - distribuye al detalle de cada servicio
  - enlaza a contacto
  - enlaza a sobre nosotros
- Servicio detalle:
  - CTA a contacto
  - CTA a WhatsApp
  - enlace al indice de servicios
  - enlace a sobre nosotros
  - bloque de servicios relacionados
  - CTA contextual tras FAQ
- Sobre nosotros:
  - enlace a servicios
  - enlace a contacto
  - servicio destacado
- Contacto:
  - enlace a servicios para usuarios indecisos
  - enlace a sobre nosotros
  - llamada directa por telefono
  - CTA grande de WhatsApp
  - bloque de Google Maps
  - bloque de resenas y solicitud de resena

## Q. Revision editorial final

- Documento de cierre:
  - `docs/COPY_SEO_FINAL_REVIEW.md`
- Objetivo cumplido en esta fase:
  - cerrar el copy visible de produccion sin inventar servicios, certificaciones, garantias, anos ni cobertura no confirmada
- Ajustes estructurales asociados:
  - `cta.title` y `cta.body` anadidos a cada servicio para separar conversion y notas internas
  - bloque de pendientes internos ocultado de la interfaz publica de contacto

## R. WhatsApp, mapa y resenas

- Fuente de verdad compartida:
  - `content/shared/contact.json`
  - `content/shared/reviews.json`
- Contenido localizado:
  - `content/locales/{locale}/whatsapp.json`
  - `content/locales/{locale}/map.json`
  - `content/locales/{locale}/reviews.json`
- Ubicaciones activas:
  - layout flotante
  - header desktop
  - home
  - contacto
  - detalle de servicio
  - footer
- Mapa:
  - `src/components/GoogleMapBlock.astro`
  - `variant="compact"` en home
  - `variant="full"` en contacto
  - `variant="footer"` en footer
  - sin mapa vivo en servicios
- Estado del mapa:
  - URL externa confirmada desde `content/shared/contact.json`
  - direccion textual confirmada: `Carrer de l'Antiga, 68, 17300 Blanes, Girona`
  - sin `embedUrl` ni API key en frontend
  - iframe vivo pendiente hasta disponer de una integracion segura y una categoria real de terceros si llega a activarse
- Regla UX:
  - el CTA flotante no debe tapar banner de cookies ni formulario
  - el bloque de mapa en contacto debe aparecer antes que resenas

## S. Polish final pre-staging

- Fecha de cierre: `2026-07-09`
- Ajustes aplicados:
  - eliminada la duplicacion del bloque editorial principal en home y sobre nosotros
  - acortadas las intros de home, contacto, WhatsApp, mapa, resenas e internal linking en `es`, `ca`, `en` y `de`
  - reducida densidad visual de cards de servicios, footer, CTA de contacto y bloque de mapa
  - el email principal confirmado pasa a ocupar la segunda via de contacto destacada
  - el detalle de servicio elimina resumen repetido bajo hero
- Validacion:
  - `npm run build` correcto
  - 45 paginas generadas
  - `sitemap-index.xml`, `sitemap-0.xml`, `robots.txt`, `.htaccess` y `form-handler.php` presentes en `dist/`
  - sin script de `lint` en `package.json`
