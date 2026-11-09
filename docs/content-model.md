# Modelo de contenido

## Regla principal

Todo el contenido editable debe vivir en `/content`.

## Estructura actual

- `content/shared/site.json`
  - Configuración global, locales soportados y base paths.
- `content/shared/contact.json`
  - Dirección, teléfonos, horarios, emails detectados y pendientes.
- `content/shared/services-index.json`
  - Identificador común y slugs por idioma.
- `content/shared/redirects.json`
  - Redirecciones base.
- `content/locales/{locale}/navigation.json`
  - Navegación y etiquetas UI.
- `content/locales/{locale}/home.json`
  - Secciones del home.
- `content/locales/{locale}/seo.json`
  - Titles, descriptions, hreflang y alternates.
- `content/locales/{locale}/services/*.json`
  - Un archivo por servicio y por idioma.
- `content/locales/{locale}/legal/*.json`
  - Un archivo por legal y por idioma.

## Regla de sincronía

1. No crear contenido en un idioma sin replicarlo en los otros tres.
2. No mover datos comunes fuera de `content/shared/`.
3. Si un dato está pendiente, debe permanecer pendiente en todos los idiomas o resolverse en `shared/`.

## Contenido prohibido en código

- Titulares comerciales dentro de componentes.
- Descripciones de servicios dentro de `src/`.
- Datos legales o de contacto reales dispersos fuera de `content/`.
