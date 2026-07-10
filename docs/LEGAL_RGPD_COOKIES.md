# Legales RGPD Cookies

## Estado actual

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
- Validacion backend y envio en `public/form-handler.php`
- Destinatario confirmado del handler: `david@instalberrozpe.com`

## Reglas del formulario

- El checkbox de privacidad es obligatorio y no va premarcado.
- El formulario incluye honeypot oculto sin introducir cookies nuevas.
- Solo se permiten los tres servicios confirmados.
- El enlace legal del checkbox apunta a la politica de privacidad localizada.
- El handler no publica datos fiscales no confirmados y no expone errores sensibles.

## Categorias actuales

- `necessary`: activas siempre
- `preferences`: preparada, sin herramientas confirmadas
- `analytics`: preparada, sin herramientas confirmadas
- `marketing`: preparada, sin herramientas confirmadas

## Scripts bloqueados

- No hay scripts opcionales confirmados activos en esta base.
- El sistema queda preparado para desbloquear scripts diferidos marcados con `data-cookie-category` solo despues del consentimiento correspondiente.

## Estado de publicacion

- Bloqueo legal resuelto.
- Web apta para produccion a nivel legal y RGPD.
- Pendiente post-publicacion:
  - repetir una prueba real del formulario en `instalberrozpe.com`

## Google Maps y terceros

- En esta fase no se carga iframe de Google Maps.
- La web usa:
  - bloque completo con fallback visual y enlace externo en contacto
  - bloque compacto con enlace externo en home
  - enlace simple en footer
- Esto evita carga automatica de terceros y mantiene el consentimiento actual.
- Si en una fase futura se activa un mapa vivo, debera revisarse si procede una categoria opcional especifica para terceros/mapas.

## Conversion y datos confirmados

- Email confirmado para formularios: `david@instalberrozpe.com`
- WhatsApp confirmado: `676 04 33 89`
- Las resenas visibles usan solo la valoracion agregada `4,9` y `67 resenas`
- No hay testimonios escritos cargados ni `Review` schema individual
