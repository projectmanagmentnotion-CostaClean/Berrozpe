# Content SEO Structure Master

## A. Resumen del proyecto

- Dominio: `instalberrozpe.com`
- Hosting previsto: SiteGround
- Tipo de web: Astro estatico
- Build de salida: `dist/`
- Idiomas activos: `es`, `ca`, `en`, `de`
- Estado: renovacion en repositorio, sin tocar produccion

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

- Direccion confirmada: `C/ Antiga nº 68, Baixos`, `17300 Blanes (Girona)`
- Telefonos confirmados:
  - Movil: `676 04 33 89`
  - Fijo / telefono-fax detectado: `872 986 161`
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
- Destinatario del formulario RGPD / handler PHP: `david@instalberrozpe.com`

Pendiente:

- Confirmar si el numero `872 986 161` debe mostrarse como telefono, fax o ambos.

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

- Cada pagina apunta a su propia URL localizada
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
- No debe inventarse schema legal, certificaciones o areas de cobertura no confirmadas

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

- Estructura creada como placeholder sincronizado
- Pendiente de revision legal antes de publicar

Datos que faltan confirmar o revisar:

- Identidad fiscal definitiva que deba mostrarse en la nueva web
- Canal legal especifico para reclamaciones si difiere del email principal ya confirmado
- Politica real de cookies y analitica de la nueva version

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

- Validacion legal final del texto de privacidad
- Confirmar si el hosting requiere una cabecera `From` distinta del email destinatario confirmado
- Probar `mail()` en el entorno real de SiteGround

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
- Revisar formulario/contacto
- Revisar legales con validacion externa
- Confirmar SSL en SiteGround
- Ejecutar backup previo en SiteGround
- Alta y validacion en Search Console

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

## P. Rutas de conversion e internal linking

- Home:
  - descubre los tres servicios
  - refuerza confianza hacia sobre nosotros
  - deriva a contacto
- Servicios indice:
  - distribuye al detalle de cada servicio
  - enlaza a contacto
  - enlaza a sobre nosotros
- Servicio detalle:
  - CTA a contacto
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
