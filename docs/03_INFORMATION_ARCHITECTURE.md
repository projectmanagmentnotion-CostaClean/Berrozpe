# 03 Information Architecture

## Decisión de raíz

- `/` no actúa como home de contenido.
- `/` redirige de forma controlada a `/es/`.
- `x-default` apunta a la variante española mientras no exista un selector neutro de entrada.

## Arquitectura de rutas

- Todas las páginas publicables viven bajo prefijo de idioma: `/es/`, `/ca/`, `/en/`, `/de/`.
- El routing consume `content/shared/` para datos comunes y equivalencias de servicios.
- El routing consume `content/locales/{locale}/` para navegación, SEO, home, servicios y legales.

## Capas de contenido

### `content/shared/`

- `site.json`: locales permitidos, paths base y etiquetas.
- `contact.json`: teléfonos, dirección, horario, emails detectados y pendientes.
- `services-index.json`: `serviceId` común y slugs/rutas por idioma.
- `redirects.json`: fuente de verdad de redirecciones legacy.

### `content/locales/{locale}/`

- `navigation.json`: navegación local.
- `home.json`: bloques del home.
- `seo.json`: titles, descriptions y hreflang de páginas estáticas.
- `services/*.json`: detalle de servicio por idioma.
- `legal/*.json`: páginas legales por idioma.

## Helpers de sincronización

- Lista de locales permitidos: `LOCALES` en [src/lib/content.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/content.ts).
- Lista de servicios permitidos: `SERVICE_IDS`.
- Catálogo de rutas por idioma: `getRouteCatalog(locale)`.
- Alternates por página: `getLanguageSwitcherLinksForPage(pageId)`.
- Alternates por servicio: `getLanguageSwitcherLinksForService(serviceId)`.
- Equivalencia de servicio por `serviceId`: `getServiceById()` y `getServiceRouteById()`.
- Fallback seguro: si falta una traducción local, se cae a `es`.

## Páginas renderizadas

- Home localizado: [src/pages/[locale]/index.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/index.astro)
- Rutas internas localizadas: [src/pages/[locale]/[...segments].astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/[...segments].astro)
- Redirección de raíz: [src/pages/index.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/index.astro)
