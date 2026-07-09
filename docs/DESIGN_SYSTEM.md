# Design System

## Direccion visual

- Editorial technical premium.
- Minimalista, clara y aireada.
- Alto contraste sobre base clara corporativa.
- Titulares grandes con ritmo editorial.
- Bloques amplios, bordes finos y superficies suaves.
- Navegacion simple, CTA visibles y lectura limpia en movil.

## Principios

1. El contenido manda sobre el ornamento.
2. Cada seccion debe respirar y tener un foco claro.
3. Los servicios deben entenderse rapido sin sobrecarga visual.
4. La estetica debe transmitir empresa tecnica seria, no plantilla generica.
5. Todo bloque debe seguir siendo legible sin JavaScript.

## Paleta corporativa confirmada

- Naranja corporativo: `#ff7700`
- Azul corporativo: `#045cb4`
- Neutro principal: `#1e293b`
- Neutro secundario: `#334155`
- Fondo claro: `#f9fafb`

## Tokens base

- Fondo: `--color-bg`
- Fondo elevado: `--color-bg-elevated`
- Superficie: `--color-surface`
- Borde: `--color-border`
- Texto principal: `--color-text`
- Texto secundario: `--color-text-muted`
- Acento principal: `--color-accent`
- Acento secundario: `--color-secondary`
- Tinta de acento: `--color-ink`

Definidos en [src/styles/global.css](/C:/Users/USUARIO/Documents/Berrozpe/src/styles/global.css).

## Tipografia

- Display: serif editorial en `--font-display`
- Body: sans legible en `--font-body`
- Labels y microcopy: uppercase con tracking amplio

## Layout

- Contenedor central reutilizable: [src/components/Container.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Container.astro)
- Seccion base: [src/components/Section.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Section.astro)
- Jerarquia: numero de seccion + micro-label + titular grande + cuerpo

## Componentes UI

- Boton: [src/components/Button.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/Button.astro)
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
- VisualAsset

Todas consumen `content/` o props, sin copy comercial embebido.

## Sistema visual del sprint

- Cada bloque principal puede apoyarse en un visual grande por seccion.
- Los visuales actuales salen de `content/shared/visuals.json`.
- La pieza comun para renderizarlos es [src/components/VisualAsset.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/components/VisualAsset.astro).
- Si no existe fotografia real confirmada, se usa un placeholder corporativo temporal documentado.
- Los `alt` de estos visuales describen el asset como composicion temporal, sin afirmar trabajos reales no verificados.

## Composicion premium aplicada

- Home hero a dos columnas con visual grande editorial.
- Servicios con cards mas visuales y portada individual por servicio.
- Sobre nosotros con bloque visual amplio previo al contenido.
- Contacto con visual corporativo, datos estructurados y formulario separado.
- CTA final con bloque amplio y soporte visual.

## Responsive

- Mobile-first desde 360px
- Titulares escalados con `clamp`
- CTA con altura minima tocable
- Grids que colapsan a una columna en movil y se expanden progresivamente

## Accesibilidad

- `focus-visible` visible global
- Contraste alto
- Botones con minimo `44px`
- Menu movil basado en `details/summary`
- Contenido visible aunque no haya JS

## Estado GSAP-ready

- `data-animate="hero"`
- `data-animate="reveal"`
- `data-animate="stagger"`
- `data-animate="line"`
- `data-animate="cta"`
- `data-animate-group` en grids y listas
