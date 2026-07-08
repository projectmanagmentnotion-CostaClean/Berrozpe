# LEGAL, RGPD Y COOKIES — Instal Berrozpe

## Objetivo

Preparar la web para recoger consultas mediante formulario respetando normativa europea de protección de datos y buenas prácticas de privacidad.

## Aviso importante

Este documento no sustituye una revisión legal profesional. Sirve como guía técnica y funcional para implementar correctamente formulario, privacidad, cookies y consentimiento.

## Páginas legales necesarias

```txt
/aviso-legal/
/politica-privacidad/
/politica-cookies/
/terminos-condiciones/
```

## Formulario de contacto

Campos mínimos:

```txt
Nombre
Email
Teléfono
Servicio solicitado
Mensaje
Checkbox obligatorio de privacidad
```

## Checkbox obligatorio

Texto:

```txt
He leído y acepto la Política de Privacidad.
```

Reglas:

- No debe venir premarcado.
- Debe ser obligatorio.
- Debe enlazar a `/politica-privacidad/`.
- Si no se acepta, no se envía el formulario.

## Texto legal bajo formulario

```txt
Responsable: Instal Berrozpe.
Finalidad: responder a tu solicitud de información o presupuesto.
Legitimación: consentimiento del usuario.
Destinatarios: no se cederán datos a terceros salvo obligación legal o proveedores necesarios para gestionar la solicitud.
Derechos: puedes acceder, rectificar y eliminar tus datos, así como ejercer otros derechos reconocidos por la normativa aplicable.
Más información en la Política de Privacidad.
```

## Validación técnica

Debe existir:

- Validación frontend.
- Validación backend.
- Honeypot antispam.
- Mensajes de error accesibles.
- Mensaje de éxito claro.
- No guardar más datos de los necesarios.

## SiteGround

Opción inicial recomendada:

```txt
Formulario Astro/HTML + handler PHP en SiteGround
```

Archivos previstos:

```txt
src/components/forms/ContactForm.astro
src/components/forms/PrivacyConsent.astro
src/lib/forms/validation.ts
public/form-handler.php
```

## Seguridad mínima

- SSL activo.
- No exponer credenciales en frontend.
- Validar email.
- Sanitizar entradas.
- Limitar longitud de campos.
- Honeypot oculto.
- Rechazar envíos sin consentimiento.

## Cookies

Si la web usa solo cookies técnicas, la política debe explicarlo.

Si se añaden herramientas como Analytics, píxeles, mapas embebidos, chat o terceros, debe revisarse si hace falta banner de cookies y consentimiento granular.

## Google Maps

Si se embebe mapa, revisar implicaciones de terceros/cookies. Alternativa más privada: enlace externo a Google Maps en lugar de iframe.

## Checklist legal antes de publicar

- [ ] Aviso legal creado.
- [ ] Política de privacidad creada.
- [ ] Política de cookies creada.
- [ ] Términos y condiciones creados si aplica.
- [ ] Checkbox privacidad obligatorio.
- [ ] Checkbox no premarcado.
- [ ] Texto legal bajo formulario.
- [ ] Enlace visible a privacidad.
- [ ] SSL activo.
- [ ] Formulario probado.
- [ ] No se recogen datos innecesarios.
- [ ] No hay cookies de terceros sin revisar.
