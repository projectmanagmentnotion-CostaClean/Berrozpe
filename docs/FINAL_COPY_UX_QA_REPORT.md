# Final Copy UX QA Report

## Fecha

- `2026-07-13`

## Objetivo

- Revisar copy, ruido visual, jerarquia de CTA y usabilidad general antes del cierre editorial final.

## Paginas revisadas

- `/es/`
- `/es/servicios/`
- `/es/servicios/electricidad-y-domotica/`
- `/es/contacto/`
- `/ca/`
- `/en/`
- `/de/`

## Idiomas revisados

- `es`
- `ca`
- `en`
- `de`

## Cambios de copy realizados

- Home mas corto y directo en los cuatro idiomas.
- CTA principal del footer ajustada a `Contacta con Instal Berrozpe` y equivalentes.
- CTAs internos aclarados en home, indice de servicios y contacto.
- Boton de card de servicio simplificado a `Ver servicio` y equivalentes.
- Heroes y cierres de los tres servicios reescritos con tono mas natural y menos rigido.

## Elementos eliminados o compactados

- Eliminada la FAQ de home por redundante.
- Eliminado el bloque visual repetido de beneficios en detalle de servicio.
- Reducida la longitud de proceso, presentacion y bloques de confianza en home.

## Botones y enlaces revisados

- Header y menu movil.
- Selector de idioma en home, servicios, detalle y contacto.
- CTA de contacto.
- CTA de WhatsApp.
- CTA de servicios.
- Enlace a Google Maps.
- Enlace de resenas desde contacto.
- Footer y preferencias de cookies.

## Problemas encontrados

- Varias paginas principales no estaban emitiendo `h1` real porque `BigTextBlock` renderizaba `h2`.
- El detalle de servicio repetia beneficios en un segundo bloque visual sin aportar informacion nueva.
- El home seguia cargando una FAQ que duplicaba mensajes ya cubiertos por servicios, contacto y proceso.

## Soluciones aplicadas

- `BigTextBlock` ahora soporta `h1` real en paginas de servicios, sobre nosotros, contacto y legales.
- Home simplificado para lectura mas rapida.
- Enlaces de conversion ampliados con WhatsApp y resenas donde el flujo lo justificaba.

## QA responsive

- Comprobado en `390x844` y `1440x900`.
- Sin overflow horizontal en las rutas auditadas.
- Home en `de` validada sin rotura en el titular actualizado.

## QA funcional

- `npm run build` correcto.
- `45` paginas generadas.
- `dist/form-handler.php` presente.
- `dist/sitemap-index.xml` presente.
- `dist/sitemap-0.xml` presente.
- `dist/robots.txt` presente.
- `dist/.htaccess` presente.
- WhatsApp flotante presente en las rutas revisadas.

## Estado final

- Ajustes de copy y usabilidad aplicados en repo.
- Base preparada para usar assets reales aprobados sin hardcodear copy dentro de componentes.
- Listo para commit y push.

## Pendientes

- No se ha redeplegado produccion desde este sprint dentro de esta tarea.
- No se ha repetido una prueba real de envio de formulario sobre el dominio publico para evitar ruido innecesario.
