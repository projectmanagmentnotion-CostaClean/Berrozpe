# 03 Information Architecture

## Objetivo

Definir una arquitectura multidioma sincronizada, mantenible y basada exclusivamente en contenido auditado o marcado como pendiente.

## Estructura por idioma

Cada idioma mantiene exactamente las mismas capas:

- Inicio
- Servicios
- Tres páginas de servicio
- Sobre nosotros
- Contacto
- Aviso legal
- Política de privacidad
- Política de cookies
- Términos y condiciones

## Fuente de verdad

### `content/shared/`

- `site.json`: configuración global, locales soportados y base paths.
- `contact.json`: dirección, teléfonos, emails detectados, horario y pendientes compartidos.
- `services-index.json`: identificador común de servicios y slugs por idioma.
- `redirects.json`: tabla base de redirecciones.

### `content/locales/{locale}/`

- `navigation.json`: navegación y etiquetas UI.
- `home.json`: secciones del home.
- `seo.json`: titles, descriptions, hreflang y alternates.
- `services/*.json`: servicios sincronizados por idioma.
- `legal/*.json`: placeholders legales sincronizados por idioma.

## Regla de sincronía

No se puede:

- añadir un servicio a un idioma sin añadirlo a los otros tres,
- añadir una sección al home de un idioma sin replicarla en los otros tres,
- cerrar un dato pendiente en un idioma y dejarlo abierto en los demás.

## Páginas y contenido

### 1. Inicio

Bloques base:

- `hero`
- `servicesOverview`
- `whyChooseUs`
- `process`
- `contactCta`
- `faqs`

### 2. Servicios

Proporciona un índice común de los tres servicios confirmados.

### 3. Páginas de servicio

Cada servicio comparte la misma estructura de contenido:

- `slug`
- `locale`
- `title`
- `shortTitle`
- `seoTitle`
- `seoDescription`
- `heroTitle`
- `intro`
- `summary`
- `includes`
- `benefits`
- `process`
- `faqs`
- `relatedServices`
- `cta`
- `pendingConfirmation`

### 4. Sobre nosotros

Se apoya en contenido auditado y evita afirmaciones no verificadas.

### 5. Contacto

Consume únicamente `content/shared/contact.json` para datos compartidos.

### 6. Legal

Todos los legales existen en los cuatro idiomas y se marcan como pendientes de revisión jurídica.

## Routing

- `es` sin prefijo.
- `ca`, `en` y `de` con prefijo de idioma.
- Slugs de servicio traducidos y conectados por `serviceId`.

## Riesgos actuales

- Email principal sin confirmar.
- Cobertura geográfica exacta sin confirmar.
- Legales aún no validados.
- Parte del copy auditado contiene claims que deben seguir marcados como pendientes.
