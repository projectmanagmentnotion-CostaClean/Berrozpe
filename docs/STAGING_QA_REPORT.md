# Staging QA Report

## Fecha

- `2026-07-10`

## URL de staging usada

- SiteGround staging real: `https://staging.instalberrozpe.com`
- Validacion previa equivalente: `http://127.0.0.1:4323`

## Commit probado

- Build subida al staging: `3bb759a`
- HEAD actual del repositorio al cerrar este QA: `0c48a55`

## Que se subio

- ZIP subido al staging:
  - `dist/qa-artifacts/staging-dist-3bb759a.zip`
- El ZIP se extrajo en `staging.instalberrozpe.com/public_html`.
- Se movio el contenido para que la raiz del staging no quedara anidada dentro de una carpeta intermedia.
- Se eliminaron del staging:
  - `Default.html`
  - carpeta vacia `staging-dist-3bb759a/`
  - `staging-dist-3bb759a.zip`

## Confirmacion de alcance

- El paquete subido contiene solo salida generada de `dist/`.
- No incluye `src/`, `content/`, `docs/`, `node_modules/`, `package.json`, `README.md`, `AGENTS.md` ni `.git/`.

## Resultado de build

- `npm run build`: correcto antes de preparar el ZIP
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

## Resultado de subida y estructura real

- La raiz real de `staging.instalberrozpe.com/public_html` contiene directamente:
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
  - `images/`
  - `og/`
- No quedo una carpeta `dist/` en la raiz publica del staging.

## Resultado de rutas

- Rutas revisadas en staging real:
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
  - `/` redirige a `/es/`
  - sin bucles de redireccion detectados
  - assets, CSS y JS cargan correctamente
  - selector de idioma presente y con equivalencias correctas en home, contacto y detalle de servicio
  - `hreflang` completo con `5` entradas por pagina (`es`, `ca`, `en`, `de`, `x-default`)
  - no se detecto overflow horizontal en los breakpoints revisados
- Decision SEO actual en staging:
  - `canonical` apunta a `https://instalberrozpe.com/...`
  - `hreflang` y `x-default` tambien apuntan a dominio de produccion
  - esto mantiene la coherencia final prevista, pero Lighthouse penaliza el staging al estar ademas bloqueado para indexacion

## Resultado de .htaccess

- `.htaccess` presente y validado en servidor real
- Resultado real:
  - `/` redirige correctamente a `/es/`
  - `/_astro/` sirve assets sin bloqueo
  - `/sitemap-index.xml` y `/robots.txt` no se rompen
  - `/form-handler.php` no queda bloqueado
  - sin errores `500` detectados
- Redirects legacy comprobados en Apache real:
  - `/alarmas-y-camaras-2/` -> `/es/servicios/alarmas-y-camaras/`
  - `/contact/` -> `/en/contact/`
  - `/inici/` -> `/ca/`

## Resultado de formulario

- `form-handler.php` existe y se ejecuta en SiteGround real.
- Comprobaciones reales:
  - `HEAD /form-handler.php`: `405 Method Not Allowed`
  - cabecera `X-Httpd-Modphp: 1` presente
  - formulario visible y usable en `https://staging.instalberrozpe.com/es/contacto/`
  - envio visual realizado desde navegador:
    - nombre: `Prueba staging Instal Berrozpe`
    - email: `test@example.com`
    - telefono: `676000000`
    - servicio: `electricidad-y-domotica`
    - mensaje: `Prueba real desde staging SiteGround. Confirmar entrega a david@instalberrozpe.com.`
    - privacidad aceptada
  - respuesta visual tras envio:
    - `Tu consulta se ha enviado correctamente.`
  - POST JSON valido directo al handler:
    - `200 OK`
    - `{"success":true,"message":"The form was sent."}`
  - POST sin privacidad:
    - `422 Unprocessable Entity`
    - error backend en `privacy`
  - POST con email invalido:
    - `422 Unprocessable Entity`
    - error backend en `email`
  - nueva prueba directa final:
    - fecha/hora respuesta servidor: `2026-07-10 10:57:27 GMT`
    - fecha/hora segunda prueba directa: `2026-07-10 11:00:44 GMT`
    - remitente usado en campo cliente: `comercial@instalberrozpe.com`
    - marca de mensaje para rastreo:
      - `QA-2026-07-10T105727Z`
    - ambas devolvieron:
      - `200 OK`
      - `{"success":true,"message":"The form was sent."}`
- Resultado actual:
  - PHP real validado
  - validaciones backend reales validadas
  - `mail()` devuelve exito desde el handler
  - recepcion final en la bandeja de `david@instalberrozpe.com` sigue sin poder confirmarse desde esta sesion
- Consecuencia:
  - mientras no se confirme llegada real en inbox o spam, produccion no debe publicarse

## Resultado de recepcion real

- Estado:
  - `No confirmado`
- Lo que si esta confirmado:
  - el handler responde `200`
  - `mail()` no devuelve `false`
  - no hay error `500`
- Lo que no se ha podido confirmar de forma verificable en esta sesion:
  - bandeja principal de `david@instalberrozpe.com`
  - spam
  - promociones/otros
  - logs internos o trazas de entrega de SiteGround sobre ese mensaje
- Bloqueo real:
  - no ha sido posible acceder de forma estable y verificable a la bandeja o a logs de entrega desde las herramientas disponibles en esta sesion
- Decision:
  - la web sigue `No apta para produccion` hasta confirmar recepcion real en el buzón

## Diagnostico tecnico de correo

- `From` actual del handler:
  - `Instal Berrozpe <david@instalberrozpe.com>`
- `Reply-To` actual del handler:
  - email del cliente enviado en el formulario
- Riesgo actual:
  - `mail()` puede devolver exito aunque el mensaje no llegue finalmente al buzón
  - el flujo actual no aporta trazabilidad de entrega ni error SMTP real
- DNS publico observado:
  - MX:
    - `mx10.antispam.mailspamprotection.com`
    - `mx20.antispam.mailspamprotection.com`
    - `mx30.antispam.mailspamprotection.com`
  - SPF:
    - `v=spf1 +a +mx +ip4:34.175.144.49 include:instalberrozpe.com.spf.auto.dnssmarthost.net ~all`
  - DMARC:
    - `v=DMARC1; p=none; aspf=r; adkim=r;`
  - DKIM:
    - no se ha podido confirmar el selector publico desde esta sesion
- Lectura tecnica:
  - `From` usa una direccion del propio dominio, lo cual es correcto como base
  - `Reply-To` separado tambien es correcto para no suplantar al cliente en `From`
  - SPF y MX existen
  - DMARC esta en modo `p=none`, por lo que no protege entrega ni reporte con una politica estricta
  - sin confirmacion de DKIM y sin acceso a logs, no puede cerrarse la entregabilidad real

## Resultado de WhatsApp

- Numero detectado en la interfaz: `34676043389`
- Mensaje prellenado revisado en:
  - `es`
  - `ca`
  - `en`
  - `de`
- Resultado:
  - links presentes en home, servicios, contacto, sobre nosotros y footer
  - numero y mensaje correcto detectados en:
    - `es`: `Hola Instal Berrozpe, me interesan vuestros servicios.`
    - `ca`: `Hola Instal Berrozpe, m'interessen els vostres serveis.`
    - `en`: `Hello Instal Berrozpe, I am interested in your services.`
    - `de`: `Hallo Instal Berrozpe, ich interessiere mich fur Ihre Leistungen.`
  - color y logo corporativo de WhatsApp visibles en staging
  - en la revision responsive realizada no tapa el formulario
  - en la revision responsive realizada no compite de forma grave con el banner de cookies

## Resultado de cookies

- `robots.txt` del staging se edito en SiteGround a:
  - `User-agent: *`
  - `Disallow: /`
- Banner y modal presentes en staging real
- Flujo probado:
  - reapertura desde `Preferencias de cookies`
  - `Rechazar opcionales`
  - persistencia al recargar: el banner no reaparece
  - categorias visibles en modal:
    - `Necesarias`: activa y deshabilitada
    - `Preferencias`: no premarcada
    - `Analiticas`: no premarcada
    - `Marketing`: no premarcada
- Resultado:
  - rechazo tan facil como aceptacion
  - no hay `iframe` cargados
  - no se detectan terceros no necesarios cargados por defecto
  - el enlace permanente para reabrir preferencias existe en el footer

## Resultado de Google Maps

- URL confirmada:
  - `https://www.google.com/maps/search/?api=1&query=Carrer%20de%20l%27Antiga%2C%2068%2C%2017300%20Blanes%2C%20Girona`
- Resultado:
  - links presentes en home, contacto y footer
  - la direccion visible coincide con la confirmada
  - no se carga iframe de Google Maps por defecto
  - bloque compacto y bloque de contacto visibles en staging real

## Resultado de resenas

- Valor visible agregado: `4,9/5`
- Numero visible agregado: `67 resenas`
- URL de resena confirmada:
  - `https://g.page/r/CagAPRsZ3RSuEBM/review`
- Resultado:
  - no hay testimonios escritos inventados
  - no hay nombres inventados
  - no hay `Review` schema individual en el HTML revisado
  - `aggregateRating` en schema:
    - `ratingValue: 4.9`
    - `reviewCount: 67`
    - `bestRating: 5`

## Resultado sitemap y robots

- `https://staging.instalberrozpe.com/sitemap-index.xml`: accesible
- `https://staging.instalberrozpe.com/sitemap-0.xml`: accesible
- `https://staging.instalberrozpe.com/robots.txt`: accesible
- Comprobaciones:
  - sin URLs localhost en sitemap
  - sin rutas fuente
  - sitemap apunta a `https://instalberrozpe.com`
  - el staging no expone sitemap en `robots.txt`
  - `robots.txt` del staging ahora bloquea indexacion mientras siga en QA

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
  - header, menu movil, selector, cookies, WhatsApp y mapas presentes
  - no se detectaron colisiones graves de WhatsApp o cookies en las rutas revisadas

## Resultado Lighthouse

- Entorno usado:
  - staging real `https://staging.instalberrozpe.com`
- Resultados:
  - `/es/`
    - Performance: `97`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `66`
  - `/es/contacto/`
    - Performance: `99`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `69`
  - `/es/servicios/electricidad-y-domotica/`
    - Performance: `97`
    - Accessibility: `96`
    - Best Practices: `100`
    - SEO: `69`
- Artefactos guardados:
  - `dist/qa-artifacts/lighthouse-staging-es-home.json`
  - `dist/qa-artifacts/lighthouse-staging-es-contacto.json`
  - `dist/qa-artifacts/lighthouse-staging-es-electricidad.json`
- Incidencia:
  - el runner de Lighthouse en Windows devuelve un `EPERM` al limpiar su carpeta temporal
  - los JSON si se generaron correctamente
  - la penalizacion SEO en staging corresponde a `Page is blocked from indexing`, coherente con el `Disallow: /` temporal

## Resultado de schema y SEO tecnico

- `canonical` de home staging:
  - `https://instalberrozpe.com/es/`
- `hreflang` presentes:
  - `es`
  - `ca`
  - `en`
  - `de`
  - `x-default`
- `LocalBusiness` presente
- `aggregateRating` presente con:
  - `4.9`
  - `67`
- Punto a revisar:
  - `areaServed` incluye `Blanes` y `areas cercanas`

## Errores encontrados

- No se ha podido comprobar la recepcion final del correo dentro de la bandeja real de `david@instalberrozpe.com` desde esta sesion.
- El schema `LocalBusiness` sigue incluyendo `areaServed` con `areas cercanas`, dato que debe revisarse editorialmente si se quiere una fuente de verdad estrictamente confirmada.
- Las canonical y hreflang del staging apuntan a produccion por decision SEO final; es correcto para el sitio publicado, pero no sirve como URL canonica propia del entorno de pruebas.

## Correcciones realizadas

- No se hicieron cambios de codigo ni de produccion.
- En SiteGround staging se corrigio la estructura publica al extraer el ZIP.
- En SiteGround staging se actualizo `robots.txt` a `Disallow: /` para evitar indexacion durante QA.

## Pendientes antes de produccion

- Confirmar llegada real del formulario en:
  - bandeja principal
  - spam
  - promociones u otros si aplica
- Si no llega el correo, preparar SMTP autenticado antes de produccion
- Revisar [SMTP_CONTACT_FORM_PLAN.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/SMTP_CONTACT_FORM_PLAN.md) si sigue sin poder confirmarse la entrega
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos
- Validacion legal definitiva antes de produccion
- Revisar si `areaServed` debe reducirse a datos estrictamente confirmados

## Estado final

- `No apto para produccion todavia`
- Motivo:
  - falta confirmacion de recepcion real del correo en inbox
  - quedan pendientes editoriales y legales menores antes de publicar
