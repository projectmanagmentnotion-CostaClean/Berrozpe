# SEO Local

## Objetivo

Preparar una base SEO local y multidioma coherente para `es`, `ca`, `en` y `de`, sin activar aún el routing público completo.

## Reglas

- `es` es el locale por defecto.
- Cada página debe tener referencia hreflang para `es`, `ca`, `en` y `de`.
- Las URLs canónicas y alternas se definen desde `content/locales/{locale}/seo.json`.
- No debe existir una página en un idioma sin su equivalente estructural en los otros tres.

## Estructura de hreflang

Se define por grupos de página:

- `home`
- `services`
- `about`
- `contact`
- `legalNotice`
- `privacy`
- `cookies`
- `terms`

Cada grupo contiene los cuatro alternates absolutos.

## SEO local confirmado

Datos que sí pueden alimentar el SEO local:

- Marca: `Instal Berrozpe`
- Localidad: `Blanes`
- Región: `Girona`
- Dirección auditada: `C/ Antiga nº 68, Baixos, 17300 Blanes (Girona)`
- Teléfonos auditados: `676 04 33 89` y `872 986 161`

## SEO local pendiente

No usar como dato cerrado hasta confirmación:

- Email principal
- Cobertura exacta por municipios o comarcas
- Antigüedad/experiencia exacta
- Certificaciones
- Garantías

## Recomendación de implementación

1. Mantener `SeoHead.astro` conectado a `seo.json`.
2. Añadir `x-default` apuntando al locale por defecto.
3. Cuando se active routing multidioma real, alinear los `href` de hreflang con las rutas publicadas.
4. No crear meta descripciones distintas por idioma que cambien el alcance real del contenido.
