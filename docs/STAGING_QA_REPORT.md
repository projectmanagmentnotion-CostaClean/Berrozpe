# Staging QA Report

## Fecha

- `2026-07-10`

## URL de staging usada

- SiteGround staging real: `pendiente de provision`
- Validacion previa equivalente: `http://127.0.0.1:4323`

## Commit probado

- `3bb759a`
- `polish: finalize editorial and responsive cleanup before staging`

## Que se subio

- En esta fase no se ha subido nada a SiteGround.
- Se ha generado un paquete local listo para subida con solo artefactos de `dist/`:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`

## Confirmacion de alcance

- El paquete preparado contiene solo salida generada de `dist/`.
- No incluye `src/`, `content/`, `docs/`, `node_modules/`, `package.json`, `README.md`, `AGENTS.md` ni `.git/`.

## Resultado de build

- `npm run build`: correcto
- Paginas generadas: `45`
- `lint`: no existe script en `package.json`
- Artefactos confirmados en `dist/`:
  - `index.html`
  - `es/`
  - `ca/`
  - `en/`
  - `de/`
  - `_astro/`
  - `sitemap-index.xml`
  - `sitemap-0.xml`
  - `robots.txt`
  - `.htaccess`
  - `form-handler.php`
  - `favicon.ico`
  - `favicon.svg`
  - `og/`
  - `images/`

## Resultado de rutas

- Rutas revisadas en preview local:
  - `/`
  - `/es/`
  - `/ca/`
  - `/en/`
  - `/de/`
  - `/es/servicios/`
  - `/es/servicios/electricidad-y-domotica/`
  - `/es/servicios/lampisteria-y-climatizacion/`
  - `/es/servicios/alarmas-y-camaras/`
  - `/es/sobre-nosotros/`
  - `/es/contacto/`
  - `/ca/contacte/`
  - `/en/contact/`
  - `/de/kontakt/`
- Resultado:
  - todas las rutas revisadas cargan sin `404`
  - `canonical` correcto por idioma
  - `hreflang` completo con `5` entradas por pagina (`es`, `ca`, `en`, `de`, `x-default`)
  - selector de idioma presente
  - no se detecto overflow horizontal en los breakpoints revisados

## Resultado de formulario

- `dist/form-handler.php` existe en el build final.
- El preview de Astro sirve `form-handler.php` como archivo estatico y no ejecuta PHP.
- `php` CLI no esta disponible en este equipo, por lo que no se ha podido levantar una comprobacion local real del handler.
- Resultado actual:
  - estructura y destino confirmados en codigo
  - prueba real de POST/PHP/mail pendiente de SiteGround
  - entrega real a `david@instalberrozpe.com` no verificada aun

## Resultado de WhatsApp

- Numero detectado en la interfaz: `34676043389`
- Mensaje prellenado revisado en:
  - `es`
  - `ca`
  - `en`
  - `de`
- Resultado:
  - links presentes en home, servicios, contacto, sobre nosotros y footer
  - color y presencia visual ya validados en sprint previo
  - no se detecto colision grave en preview con el banner de cookies

## Resultado de cookies

- Banner visible
- Configuracion y reapertura presentes
- No se detectan terceros no necesarios cargados por defecto
- Google Maps sigue sin iframe vivo
- Validacion funcional completa en runtime de produccion/staging: pendiente

## Resultado de Google Maps

- URL confirmada:
  - `https://www.google.com/maps/search/?api=1&query=Carrer%20de%20l%27Antiga%2C%2068%2C%2017300%20Blanes%2C%20Girona`
- Resultado:
  - links presentes en home, contacto y footer
  - la direccion visible coincide con la confirmada
  - no se carga iframe de Google Maps por defecto

## Resultado de reseñas

- Valor visible agregado: `4,9/5`
- Numero visible agregado: `67 reseñas`
- URL de reseña confirmada:
  - `https://g.page/r/CagAPRsZ3RSuEBM/review`
- Resultado:
  - no hay testimonios escritos inventados
  - no hay nombres inventados
  - no hay `Review` schema individual previsto en la documentacion actual

## Resultado sitemap y robots

- `dist/sitemap-index.xml`: correcto
- `dist/sitemap-0.xml`: correcto
- `dist/robots.txt`: correcto
- Comprobaciones:
  - sin URLs localhost en sitemap
  - sin rutas fuente
  - sitemap apunta a `https://instalberrozpe.com`
  - `robots.txt` permite indexacion y referencia el sitemap de produccion

## Resultado de .htaccess

- `dist/.htaccess` presente
- Reglas preparadas para:
  - redireccion raiz a `/es/`
  - redirects legacy
- Limitacion actual:
  - no se ha validado en Apache/SiteGround real
  - el preview local no ejecuta `.htaccess`
- Consecuencia:
  - los redirects Apache quedan pendientes de validacion real en staging

## Resultado responsive

- Breakpoints revisados:
  - `360x740`
  - `390x844`
  - `430x932`
  - `768x1024`
  - `1366x768`
  - `1440x900`
  - `1920x1080`
- Resultado:
  - sin overflow horizontal en las paginas minimas pedidas
  - aleman sin rotura detectada
  - header, selector, cookies, WhatsApp y mapas presentes

## Resultado Lighthouse

- Entorno usado:
  - preview local `http://127.0.0.1:4323`
- Resultados:
  - `/es/`
    - Performance: `98`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `100`
  - `/es/contacto/`
    - Performance: `98`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `100`
  - `/es/servicios/electricidad-y-domotica/`
    - Performance: `98`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `100`
- Artefactos guardados:
  - `dist/qa-artifacts/lighthouse-es-home.json`
  - `dist/qa-artifacts/lighthouse-es-contacto.json`
  - `dist/qa-artifacts/lighthouse-es-electricidad.json`
- Incidencia:
  - el runner de Lighthouse en Windows devuelve un `EPERM` al limpiar su carpeta temporal
  - los JSON si se generaron correctamente

## Errores encontrados

- No existe staging real de SiteGround provisionado en el entorno actual.
- No hay acceso ni URL de staging para probar SSL, auth temporal, Apache real y entrega real del formulario.
- `php` CLI no esta disponible localmente para simular el handler antes de SiteGround.
- El preview local no ejecuta `.htaccess` ni PHP, por lo que no valida redirects Apache ni `mail()`.

## Correcciones realizadas

- Ninguna correccion de codigo en este sprint.
- Se genero build final limpio y paquete local verificable de `dist/`.
- Se documento el estado real y los bloqueos de validacion.

## Pendientes antes de produccion

- Crear staging real en SiteGround:
  - `staging.instalberrozpe.com` o `instalberrozpe.com/nueva/`
- Activar SSL
- Proteger staging con contraseña HTTP o `noindex`
- Subir solo `dist/`
- Validar `.htaccess` real
- Validar envio real del formulario a `david@instalberrozpe.com`
- Revisar spam
- Confirmar si `mail()` funciona o si hace falta SMTP
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos
- Validacion legal definitiva antes de produccion

## Estado final

- `No apto para produccion todavia`
- Motivo:
  - falta validacion real en SiteGround del formulario, redirects Apache y staging protegido
