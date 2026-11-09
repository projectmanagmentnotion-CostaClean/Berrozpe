# SMTP Contact Form Plan

## Estado actual

- Este documento pasa a ser un plan de contingencia y mejora futura.
- No bloquea la publicacion.
- `mail()` ya quedo validado en staging real con entrega confirmada a `david@instalberrozpe.com`.

## Situacion confirmada

- El formulario de staging en SiteGround devuelve `200 OK`.
- `mail()` no devuelve `false`.
- No hay error `500` en el handler.
- La entrega real fue confirmada visualmente en Gmail:
  - destinatario: `david@instalberrozpe.com`
  - asunto: `[Instal Berrozpe][ES] Nuevo formulario de contacto`
  - llegaron dos correos de prueba

## Cuando aplicar este plan

- Solo si en produccion aparece alguno de estos sintomas:
  - baja entregabilidad
  - mensajes en spam de forma recurrente
  - inconsistencias entre `mail()` y la recepcion real
  - necesidad de mayor trazabilidad tecnica

## Opcion recomendada si hiciera falta

- Sustituir el envio por `mail()` por SMTP autenticado del propio dominio en SiteGround.
- Mantener:
  - `Reply-To` con el email del cliente
  - destinatario final `david@instalberrozpe.com`

## Cuenta remitente recomendada del dominio

- Preferida si existe y esta operativa:
  - `comercial@instalberrozpe.com`
- Alternativa conservadora si se decide reutilizar la cuenta principal:
  - `david@instalberrozpe.com`

## Configuracion necesaria

- Host SMTP:
  - consultar `Site Tools > Email > Accounts > Mail Configuration`
  - segun la base oficial de SiteGround, el servidor SMTP se obtiene ahi y suelen usarse puertos seguros `465` o `587`
- Usuario SMTP:
  - la cuenta remitente elegida del dominio
- Password SMTP:
  - contraseña real de esa cuenta
- Cifrado:
  - SSL/TLS o STARTTLS segun la configuracion exacta que muestre SiteGround
- Headers:
  - `From`: cuenta remitente autenticada del dominio
  - `Reply-To`: email saneado del cliente
  - `Content-Type: text/plain; charset=UTF-8`

## Cambios recomendados en codigo si se activa

- Mantener todas las validaciones actuales:
  - privacidad
  - honeypot
  - email
  - telefono
  - servicio permitido
- Sustituir solo la capa de envio.
- Si se implementa con libreria SMTP:
  - no hardcodear credenciales en repositorio
  - leerlas desde variables o archivo de configuracion fuera de versionado
- Mejoras recomendadas:
  - registrar internamente si la entrega SMTP fue aceptada o rechazada
  - devolver `500` real si el transporte SMTP falla
  - conservar el mensaje actual de exito solo si el transporte confirma aceptacion

## Riesgos

- Requiere disponer de:
  - cuenta de correo operativa
  - contraseña segura
  - acceso a la configuracion SMTP real de SiteGround
- Si se usa una cuenta distinta a la mostrada publicamente:
  - debe seguir siendo una cuenta legitima del dominio
- Si no se protege bien la configuracion:
  - puede exponerse una credencial sensible

## Pasos si se necesitara en el futuro

1. Confirmar qué cuenta remitente del dominio se va a usar.
2. Obtener desde SiteGround la configuracion exacta de `Mail Configuration`.
3. Implementar transporte SMTP autenticado en el handler.
4. Subir solo el nuevo `form-handler.php` o un ZIP nuevo de `dist/` al staging.
5. Reenviar una prueba real.
6. Confirmar:
   - `200 OK`
   - recepcion en bandeja principal o spam
   - remitente correcto
   - `Reply-To` correcto
7. Solo entonces sustituir `mail()` en produccion.
