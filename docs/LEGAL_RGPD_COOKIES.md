# Legales RGPD Cookies

## Estado actual

La base de contenido incluye placeholders legales sincronizados en:

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

## Regla obligatoria

Ningun idioma puede cerrar la revision legal antes que los demas si la fuente de verdad sigue siendo comun y pendiente.

## Contenido permitido en esta fase

- Estructura de secciones
- Avisos de pendiente de revision legal
- Instrucciones para no reutilizar automaticamente datos fiscales o registrales
- Notas de validacion sobre cookies activas y consentimiento
- Categorias opcionales preparadas pero inactivas mientras no haya scripts confirmados

## Contenido no permitido en esta fase

- Publicar como definitivo un CIF/NIF no validado para la nueva web
- Publicar razon social fiscal cerrada sin confirmacion expresa
- Dar por activa una analitica o cookie no comprobada en la nueva version
- Dar por definitivo un canal legal de contacto distinto del email principal sin validacion legal especifica

## Relacion con la auditoria

- La auditoria detecto terminos y cookies heredados en la web actual.
- No se detecto una politica de privacidad visible publicada en el sitio auditado.
- La nueva estructura evita arrastrar automaticamente esos textos como definitivos.

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
