# Design System

## Dirección visual

- Editorial technical premium.
- Minimalista, clara y aireada.
- Alto contraste sobre base oscura fría.
- Titulares grandes con ritmo editorial.
- Bloques amplios, bordes finos y superficies suaves.
- Navegación simple, CTA visibles y lectura limpia en móvil.

## Principios

1. El contenido manda sobre el ornamento.
2. Cada sección debe respirar y tener un foco claro.
3. Los servicios deben entenderse rápido sin sobrecarga visual.
4. La estética debe transmitir empresa técnica seria, no plantilla genérica.
5. Todo bloque debe seguir siendo legible sin JavaScript.

## Tokens base

- Fondo: `--color-bg`
- Fondo elevado: `--color-bg-elevated`
- Superficie: `--color-surface`
- Borde: `--color-border`
- Texto principal: `--color-text`
- Texto secundario: `--color-text-muted`
- Acento: `--color-accent`
- Tinta de acento: `--color-ink`

Definidos en [src/styles/global.css](/C:/Users/USUARIO/Documents/Berrozpe/src/styles/global.css).

## Tipografía

- Display: serif editorial en `--font-display`
- Body: sans legible en `--font-body`
- Labels y microcopy: uppercase con tracking amplio

## Layout

- Contenedor central reutilizable: [src/components/Container.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Container.astro)
- Sección base: [src/components/Section.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Section.astro)
- Jerarquía: número de sección + micro-label + titular grande + cuerpo

## Componentes UI

- Botón: [src/components/Button.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Button.astro)
- Card: [src/components/Card.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Card.astro)
- Badge: [src/components/Badge.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Badge.astro)
- EditorialLabel: [src/components/EditorialLabel.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/EditorialLabel.astro)
- SectionNumber: [src/components/SectionNumber.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/SectionNumber.astro)
- BigTextBlock: [src/components/BigTextBlock.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/BigTextBlock.astro)
- LanguageSwitcher: [src/components/LanguageSwitcher.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/LanguageSwitcher.astro)
- MobileMenu: [src/components/MobileMenu.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/MobileMenu.astro)

## Secciones

- Hero
- ServicesGrid
- StatementSection
- ProcessSection
- WhyChooseUs
- ContactCTA
- FAQSection
- ContactSection

Todas consumen `content/` o props, sin copy comercial embebido.

## Responsive

- Mobile-first desde 360px
- Titulares escalados con `clamp`
- CTA con altura mínima tocable
- Grids que colapsan a una columna en móvil y se expanden progresivamente

## Accesibilidad

- `focus-visible` visible global
- Contraste alto
- Botones con mínimo `44px`
- Menú móvil basado en `details/summary`
- Contenido visible aunque no haya JS

## Estado GSAP-ready

- `data-animate="hero"`
- `data-animate="reveal"`
- `data-animate="stagger"`
- `data-animate="line"`
- `data-animate="cta"`
- `data-animate-group` en grids y listas
