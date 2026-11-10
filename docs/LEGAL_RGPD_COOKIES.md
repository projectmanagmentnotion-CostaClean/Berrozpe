# Legales RGPD Cookies

## Estado previo

La base de contenido legal esta cerrada y sincronizada en:

- `es`
- `ca`
- `en`
- `de`

Tambien existe un sistema propio de consentimiento multidioma con:

- banner global
- modal de preferencias
- almacenamiento propio en `localStorage` y cookie de primera parte
- categorias necesarias siempre activas
- categorias opcionales desactivadas por defecto

## Paginas legales por idioma

Cada idioma contiene:

- `privacy`
- `legal-notice`
- `cookies`
- `terms`

## Cierre legal confirmado

- Revision legal autorizada por cliente: `2026-07-10`
- Razon social confirmada: `Instal Berrozpe S.L.`
- CIF/NIF confirmado: `B55326813`
- Domicilio legal y fiscal confirmado: `Antiga 68 bajos de Blanes`
- Direccion publica normalizada: `Carrer de l'Antiga, 68, 17300 Blanes, Girona`
- Email legal, privacidad y formularios: `david@instalberrozpe.com`
- Telefono fijo confirmado: `872 986 161`
- Movil y WhatsApp confirmados: `676 04 33 89`

## Regla obligatoria

Ningun idioma puede quedar desincronizado respecto a los otros tres cuando se actualicen datos legales, textos de privacidad o politica de cookies.

## Alcance legal publicado

- Aviso legal con titularidad, datos fiscales, contacto y uso informativo del sitio.
- Politica de privacidad con responsable, finalidad, base legal, conservacion y derechos.
- Politica de cookies alineada con el sistema real de consentimiento.
- Terminos y condiciones prudentes, sin precios cerrados ni garantias inventadas.

## Sistema de consentimiento implementado

- Contenido multidioma en `content/locales/{locale}/cookie-consent.json`
- Banner y modal en:
  - `src/components/CookieConsent.astro`
  - `src/components/CookiePreferencesModal.astro`
- Logica de consentimiento en:
  - `src/lib/cookies/consent.ts`
  - `src/scripts/cookie-consent.ts`
- Integracion global en `src/layouts/BaseLayout.astro`
- Enlace permanente de reapertura desde `src/components/SiteFooter.astro`

## Formulario RGPD

- Contenido multidioma del formulario en `content/locales/{locale}/contact.json`
- Componentes:
  - `src/components/ContactForm.astro`
  - `src/components/FormField.astro`
  - `src/components/PrivacyConsent.astro`
- Validacion frontend progresiva en:
  - `src/lib/forms/validation.ts`
  - `src/scripts/contact-form.ts`
- Validacion backend y envio en `api/contact.ts` mediante Resend (la activacion requiere revisar el proveedor y actualizar la informacion de privacidad aplicable)
- Destinatario confirmado del handler: `david@instalberrozpe.com`

## Reglas actuales del formulario

- La cláusula informativa aparece junto al formulario con enlace a la política completa.
- No se exige aceptar la política como condición para enviar una consulta.
- El formulario incluye honeypot oculto sin introducir cookies nuevas.
- Solo se permiten los tres servicios confirmados.
- El enlace a la política de privacidad está localizado.
- El handler no publica datos fiscales no confirmados y no expone errores sensibles.

## Categorias actuales

- `necessary`: activas siempre
- `preferences`: preparada, sin herramientas confirmadas
- `analytics`: preparada, sin herramientas confirmadas
- `marketing`: preparada, sin herramientas confirmadas

## Scripts bloqueados

- No hay scripts opcionales confirmados activos en esta base.
- El sistema queda preparado para desbloquear scripts diferidos marcados con `data-cookie-category` solo despues del consentimiento correspondiente.

## Estado de publicación previo

- El estado anterior a la revisión de noviembre no debe tomarse como una aprobación legal vigente.

## Google Maps y terceros

- La URL de Production consultada el `2026-11-09` sí devolvió un iframe de Google Maps en el HTML de contacto, contrario a lo que decía la política.
- En la rama aislada `codex/seo-legal-final` se ha sustituido el iframe por dirección y enlace externo.
- Ese cambio aún no está publicado. En una visita local sin elección previa se verificó el banner, el rechazo persistente y la aceptación; no aparece iframe de Maps en el HTML de revisión. La captura de red completa quedó pendiente porque el navegador no autorizó CDP.
- Los demás bloques usan:
  - bloque compacto con enlace externo en home
  - enlace simple en footer

## Revisión actual `2026-11-09`

- Rama de revisión independiente basada en el snapshot de Production `1b5f0bcbbe052d8b1a7e6d7f0a5fa2e016a18340`.
- Política de privacidad actualizada en `es`, `ca`, `en` y `de` para describir Vercel (hosting/función), Resend (entrega transaccional) y Google Workspace (buzón), así como bases jurídicas, conservación y transferencias.
- El formulario muestra información básica y enlace a la política sin casilla obligatoria de consentimiento; honeypot, límites y validación del mensaje se conservan.
- La política de cookies describe `berrozpe-cookie-consent` en localStorage y `berrozpe-cookie-consent-cookie` con 180 días. Las opciones aceptar/rechazar tienen el mismo estilo visual.
- El envío real a `info@instalberrozpe.com` se confirmó en Production el `2026-11-09`; la política aún debe revisarse con la configuración contractual y de retención real de las cuentas.
- La inscripción inicial del Registro Mercantil se contrastó con el BORME de 2018 y se añadió a los cuatro avisos legales. Pendiente: David confirma si hay cambios posteriores; revisar acuerdos/subencargados y retención de Workspace; revisión legal profesional antes de publicar.
- En viewport local de `390 × 844`, el panel de preferencias excedía la altura disponible. Se limitó su altura y añadió scroll vertical; después, la acción «Aceptar todo» pudo completarse desde el panel. No se cambió Production.
- No se han realizado cambios en DNS ni en Production.

## Conversion y datos confirmados

- Email confirmado para formularios: `david@instalberrozpe.com`
- WhatsApp confirmado: `676 04 33 89`
- Las resenas visibles usan solo la valoracion agregada `4,9` y `67 resenas`
- No hay testimonios escritos cargados ni `Review` schema individual

## Evidencia y validaciones pendientes — 2026-11-10

- La política oficial de Resend confirma almacenamiento de datos de correo y registros en Estados Unidos y retención de 30 días en Free, Pro y Scale mientras la cuenta está activa: https://resend.com/security/gdpr/. Se actualizó el texto público multidioma para no atribuir un plan tarifario a una cuenta cuyo plan no se ha confirmado.
- En Production se envió una prueba real el 2026-11-10 a `info@instalberrozpe.com`; Resend registró `POST /emails` con respuesta 200 y evento `Delivered`. No se encontró el mensaje en la búsqueda visible del buzón `david@instalberrozpe.com`; falta confirmar la entrega en la bandeja/alias de `info@`.
- El BORME oficial de Girona de 2025 publica para INSTAL BERROZPE S.L. la pérdida del carácter unipersonal, inscripción 3.ª inscrita el 13/01/2025: https://www.boe.es/diario_borme/txt.php?id=BORME-A-2025-11-17&lang=es. El aviso legal no afirma actualmente que exista socio único; el pendiente pide a David confirmar titularidad, administración y domicilio vigentes.
- El asiento inicial citado en los avisos legales corresponde a la inscripción 1.ª (17/07/2018), comprobada en el BORME oficial: https://www.boe.es/diario_borme/txt.php?id=BORME-A-2018-142-17.
- En un origen local limpio y viewport `390 × 844` se verificó la aparición del banner, la equivalencia visual de aceptar/rechazar, la persistencia del rechazo tras recarga y la aceptación desde el panel de preferencias. No se probó una selección parcial ni retirar una aceptación previa; tampoco se repitió en escritorio.
- El preview local en los puertos `4324` y `4325` respondió con timeout tanto desde los procesos de prueba como desde Chrome. Por ello, no se comprobaron las 44 respuestas HTTP ni se capturó la red del navegador. La ausencia de iframe de Maps y de scripts opcionales se verificó solo en el HTML/recursos declarados; no se afirma una inspección de red completa.

