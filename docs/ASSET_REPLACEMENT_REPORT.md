# Asset Replacement Report

## Addendum deploy final a produccion

- Fecha de despliegue final:
  - `2026-07-13`
- ZIP final usado en produccion:
  - `production-dist-final-logo-assets.zip`
- Backup previo creado en SiteGround:
  - `public_html-backup-2026-07-13-final-logo-assets.zip.zip`
- Alcance publicado:
  - logo principal de header con mayor presencia visual
  - ajuste acompanante del logo en footer
  - `favicon.ico`
  - `favicon.svg`
  - `apple-touch-icon.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`
  - `site.webmanifest`
  - OG y assets finales dentro del `dist/` publicado
- Verificacion posterior al deploy:
  - `https://instalberrozpe.com/es/` sirve el HTML nuevo confirmado por respuesta directa del servidor
  - `robots.txt`, `sitemap-index.xml` y `sitemap-0.xml` responden `200 OK`
  - sin carpeta `dist/` ni `qa-artifacts/` en la raiz real de `public_html`
  - cache dinamica purgada en SiteGround tras el reemplazo
- Estado final:
  - assets finales publicados en produccion
  - favicon y branding sincronizados con la version validada
  - QA responsive de produccion completada sin overflow horizontal en los breakpoints revisados

## Fecha

- `2026-07-13`

## Carpeta fuente usada

- `C:\Users\USUARIO\Desktop\instal berrozpe`

## Assets encontrados

- Logos:
  - `logo-instal-berrozpe.svg`
  - `icon-instal-berrozpe.svg`
  - `favicon.svg`
- Open Graph:
  - `default.png`
  - `services.png`
  - `contact.png`
- Fotos reales:
  - `instal-berrozpe-heropremium.webp`
  - `instal-berrozpe-heropremium-mobile.webp`
  - `instal-berrozpe-proceso-editorial.webp`
  - `instal-berrozpe-fachada-blanes.webp`
  - `instal-berrozpe-fachada-blanes-mobile.webp`
  - `instal-berrozpe-contacto-blanes.webp`
  - `instal-berrozpe-equipo.webp`
  - `instal-berrozpe-equipo-mobile.webp`
  - `instal-berrozpe-flota.webp`
  - `instal-berrozpe-electricidad-domotica-detail.webp`
  - `instal-berrozpe-electricidad-domotica.webp`
  - `instal-berrozpe-lampisteria-climatizacion-detail.webp`
  - `instal-berrozpe-lampisteria-climatizacion.webp`
  - `instal-berrozpe-alarmas-camaras-detail.webp`
  - `instal-berrozpe-aarmas-camaras.webp`
- Editable pesado detectado:
  - `instal berrozpe.cdr`

## Assets seleccionados

- Home hero:
  - desktop `instal-berrozpe-heropremium.webp`
  - mobile `instal-berrozpe-heropremium-mobile.webp`
- Home proceso:
  - `instal-berrozpe-proceso-editorial.webp`
- Home confianza / sobre nosotros:
  - desktop `instal-berrozpe-fachada-blanes.webp`
  - mobile `instal-berrozpe-fachada-blanes-mobile.webp`
- Home contacto / contacto:
  - desktop `instal-berrozpe-contacto-blanes.webp`
  - mobile `instal-berrozpe-equipo-mobile.webp`
- Servicio electricidad y domotica:
  - detalle `instal-berrozpe-electricidad-domotica-detail.webp`
  - card `instal-berrozpe-electricidad-domotica.webp`
- Servicio lampisteria y climatizacion:
  - detalle `instal-berrozpe-lampisteria-climatizacion-detail.webp`
  - card `instal-berrozpe-lampisteria-climatizacion.webp`
- Servicio alarmas y camaras:
  - detalle `instal-berrozpe-alarmas-camaras-detail.webp`
  - card `instal-berrozpe-aarmas-camaras.webp`
- Branding:
  - `logo-instal-berrozpe.svg`
  - `icon-instal-berrozpe.svg`
  - `favicon.svg`
- Open Graph:
  - `default.png`
  - `services.png`
  - `contact.png`

## Assets descartados

- `instal berrozpe.cdr`
  - descartado para el repo publico por ser editable pesado y no necesario para la salida estatica
- `instal-berrozpe-equipo.webp`
  - no se ha conectado en paginas visibles; queda conservado en `assets-source/`
- `instal-berrozpe-flota.webp`
  - no se ha conectado en paginas visibles; queda conservado en `assets-source/`

## Assets sustituidos

- `/images/hero/instal-berrozpe-hero-premium.svg`
  - reemplazado por `/images/hero/instal-berrozpe-hero-instalaciones-blanes.webp`
- `/images/hero/instal-berrozpe-proceso-editorial.svg`
  - reemplazado por `/images/hero/instal-berrozpe-proceso-editorial-real.webp`
- `/images/about/instal-berrozpe-fachada-corporativa-temporal.svg`
  - reemplazado por `/images/about/instal-berrozpe-fachada-blanes.webp`
- `/images/contact/instal-berrozpe-contacto-blanes.svg`
  - reemplazado por `/images/contact/instal-berrozpe-contacto-equipo-blanes.webp`
- `/images/services/instal-berrozpe-servicio-electricidad-domotica.svg`
  - reemplazado por `/images/services/instal-berrozpe-electricidad-domotica-blanes.webp`
- `/images/services/instal-berrozpe-lampisteria-climatizacion.svg`
  - reemplazado por `/images/services/instal-berrozpe-lampisteria-climatizacion-blanes.webp`
- `/images/services/instal-berrozpe-alarmas-camaras.svg`
  - reemplazado por `/images/services/instal-berrozpe-alarmas-camaras-cctv-blanes.webp`
- `/og/default.png`, `/og/services.png`, `/og/contact.png`
  - reemplazados por PNG aprobados optimizados desde la carpeta fuente

## Assets que siguen temporales

- Ninguno en `content/shared/visuals.json`
- Los SVG temporales legacy siguen existiendo en `public/images/` como residuo documental, pero ya no se referencian desde la web publica

## Rutas nuevas en public

- `public/branding/logo-instal-berrozpe.svg`
- `public/branding/icon-instal-berrozpe.svg`
- `public/favicon.svg`
- `public/images/hero/instal-berrozpe-hero-instalaciones-blanes.webp`
- `public/images/hero/instal-berrozpe-hero-instalaciones-blanes-mobile.webp`
- `public/images/hero/instal-berrozpe-proceso-editorial-real.webp`
- `public/images/about/instal-berrozpe-fachada-blanes.webp`
- `public/images/about/instal-berrozpe-fachada-blanes-mobile.webp`
- `public/images/contact/instal-berrozpe-contacto-equipo-blanes.webp`
- `public/images/contact/instal-berrozpe-contacto-equipo-blanes-mobile.webp`
- `public/images/services/instal-berrozpe-electricidad-domotica-blanes.webp`
- `public/images/services/instal-berrozpe-electricidad-domotica-blanes-card.webp`
- `public/images/services/instal-berrozpe-lampisteria-climatizacion-blanes.webp`
- `public/images/services/instal-berrozpe-lampisteria-climatizacion-blanes-card.webp`
- `public/images/services/instal-berrozpe-alarmas-camaras-cctv-blanes.webp`
- `public/images/services/instal-berrozpe-alarmas-camaras-cctv-blanes-card.webp`
- `public/images/team/instal-berrozpe-equipo-tecnico.webp`
- `public/images/team/instal-berrozpe-equipo-tecnico-mobile.webp`
- `public/images/vehicles/instal-berrozpe-flota-vehiculos.webp`
- `public/og/default.png`
- `public/og/services.png`
- `public/og/contact.png`

## Pesos aproximados y tamanos finales

- Hero desktop:
  - `1920x1076`
  - `104.7 KB`
- Hero mobile:
  - `1080x1350`
  - `80.2 KB`
- Proceso:
  - `1600x1000`
  - `51.3 KB`
- Fachada desktop:
  - `1600x1000`
  - `173.6 KB`
- Fachada mobile:
  - `900x1100`
  - `155.2 KB`
- Contacto desktop:
  - `1600x1000`
  - `233.1 KB`
- Contacto mobile:
  - `900x1100`
  - `74.0 KB`
- Servicios detalle:
  - electricidad `1600x917`, `37.8 KB`
  - lampisteria `1600x917`, `47.6 KB`
  - alarmas `1600x917`, `89.1 KB`
- Servicios card:
  - electricidad `900x675`, `26.7 KB`
  - lampisteria `900x675`, `22.4 KB`
  - alarmas `900x675`, `17.6 KB`
- OG:
  - entre `168.7 KB` y `168.9 KB`

## Paginas revisadas

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

## QA responsive

- Breakpoints previstos para la revision local:
  - `360x740`
  - `390x844`
  - `430x932`
  - `768x1024`
  - `1366x768`
  - `1440x900`
  - `1920x1080`

## Pendientes

- Verificar visualmente en navegador local todas las rutas y breakpoints anteriores tras el build final.
- Decidir si se eliminan del repo los SVG temporales legacy ya no referenciados.
