# Google Maps Integration

## Estado

- Fecha: `2026-07-09`
- Componente: `src/components/GoogleMapBlock.astro`
- Fuente de verdad:
  - `content/shared/contact.json`
  - `content/locales/{locale}/map.json`

## Direccion confirmada

- `Carrer de l'Antiga, 68, 17300 Blanes, Girona`

## URL externa activa

- `https://www.google.com/maps/search/?api=1&query=Carrer%20de%20l%27Antiga%2C%2068%2C%2017300%20Blanes%2C%20Girona`

## Ubicaciones activas

- Home:
  - bloque compacto en `src/components/ContactCTA.astro`
- Contacto:
  - bloque completo en `src/pages/[locale]/[...segments].astro`
- Footer:
  - enlace simple en `src/components/SiteFooter.astro`

## Variantes soportadas

- `full`
- `compact`
- `footer`

Props preparados:

- `locale`
- `variant`
- `showLiveMap`
- `mapUrl`
- `embedUrl`
- `address`
- `content`

## Politica de privacidad y cookies

- No se carga iframe de Google Maps por defecto.
- No se inserta contenido de terceros antes del consentimiento.
- La web usa un fallback visual propio y un enlace externo verificado.
- No se ha anadido una categoria nueva de cookies porque no existe un mapa vivo activo en esta fase.

## Pendientes

- Confirmar si en una fase futura se quiere un iframe vivo.
- Si se activa:
  - definir una `embedUrl` segura y estable
  - decidir categoria de consentimiento de terceros
  - validar impacto legal y de rendimiento
  - probar mobile y desktop de nuevo

## QA recomendado

- Verificar que el CTA de Google Maps abre la ubicacion correcta.
- Verificar que el bloque de contacto no empuja el formulario por debajo del primer scroll util en mobile.
- Verificar que footer, cookie banner y WhatsApp no colisionan visualmente.
