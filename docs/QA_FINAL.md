# QA Final

## Fecha

- `2026-07-09`

## Commit auditado

- Base auditada: `73bbe13`
- Estado validado: working tree del sprint 8 antes del commit final

## Build

- Comando ejecutado: `npm run build`
- Resultado: correcto
- Lint:
  - no existe script de `lint` en `package.json`

## Paginas generadas

- Total: `45`
- Redireccion tecnica:
  - `dist/index.html` redirige a `/es/`
- Sitemap:
  - `dist/sitemap-index.xml` presente
  - `dist/sitemap-0.xml` contiene URLs `es`, `ca`, `en` y `de`
- Handler:
  - `dist/form-handler.php` presente

## Rutas revisadas

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

## SEO

- Canonical correcto por pagina localizada
- `hreflang` completo:
  - `es`
  - `ca`
  - `en`
  - `de`
  - `x-default`
- Open Graph presentes:
  - `/og/default.png`
  - `/og/services.png`
  - `/og/contact.png`

## Cookies

- Banner presente
- Modal de preferencias disponible
- Sin scripts opcionales confirmados activos antes del consentimiento

## Formulario

- Formulario localizado presente en contacto
- Enlace a privacidad presente en el consentimiento
- `form-handler.php` generado en `dist/`
- Validacion backend y frontend intactas tras el sprint
- Destinatario confirmado: `david@instalberrozpe.com`

## GSAP reversible

- Sistema cargado correctamente en navegador
- `data-animations-booted` activo durante QA
- Triggers principales revisados en ida y vuelta
- `soft-parallax` limitado por viewport compacto
- Menu movil queda fuera del sistema de ScrollTrigger y sigue usable

## Internal linking

- Home con bloque de recorrido recomendado
- Indice de servicios con bloque de paso siguiente
- Detalles de servicio con:
  - CTA contextual tras FAQ
  - servicios relacionados
  - bloque de ruta de consulta
- Sobre nosotros con rutas a servicio y contacto
- Contacto con servicios, sobre nosotros y llamada directa
- Multidioma:
  - sin saltos accidentales entre idiomas durante QA

## Conversion local cerrada

- WhatsApp visible en layout, header, home, contacto, detalle de servicio y footer
- Google Maps integrado como enlace externo sin iframe
- Reseñas Google Business visibles en home y contacto: `4,9` y `67 reseñas`
- Boton para dejar reseña activo
- Sin reseñas escritas inventadas
- Sin `Review` schema individual

## Assets

- Placeholders corporativos temporales documentados
- OG temporales presentes
- Guia de entrega creada en [ASSET_REQUIREMENTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REQUIREMENTS.md)

## QA visual

- Tama\u00f1os revisados:
  - `360x740`
  - `390x844`
  - `430x932`
  - `768x1024`
  - `1366x768`
  - `1440x900`
  - `1920x1080`
- Resultado:
  - build y HTML final verificados
  - no se detecto overflow en la salida validada
  - bloqueo actual: el navegador integrado no alcanza `localhost` desde su sandbox y Chrome headless local no esta dejando capturas persistentes en este entorno, asi que la validacion visual automatizada queda pendiente de comprobacion manual final en navegador real antes de staging

## Lighthouse

- Estado:
  - pendiente para staging
- Motivo:
  - no hay automatizacion de Lighthouse integrada en el proyecto actual

## Pendientes

- Sustituir placeholders temporales cuando existan assets reales aprobados
- Validar legal definitivo antes de produccion
- Confirmar si `872 986 161` debe mostrarse como telefono, fax o ambos
- Ejecutar Lighthouse real en staging
- Probar `mail()` en el hosting de SiteGround
- Ejecutar una pasada visual manual final en navegador real antes de staging

## Checklist staging

- Subir `dist/` a staging
- Probar redirects legacy
- Probar formulario con JS y sin JS
- Probar cookies en `es` y `en`
- Probar internal links en home, servicios, about y contacto
- Probar ScrollTrigger en desktop y mobile

## Checklist produccion

- Backup previo del sitio anterior
- Subida limpia de `dist/`
- Verificacion de canonical y `hreflang`
- Verificacion de assets finales
- Alta / validacion en Search Console
