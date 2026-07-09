# GSAP Animation System

## Estado del sprint

GSAP sigue instalado pero no hay animaciones complejas activas en este sprint. La capa visual se ha dejado preparada para que GSAP se conecte después sin rehacer markup.

## Convenciones activas

- Hero: `data-animate="hero"`
- Reveal individual: `data-animate="reveal"`
- Líneas y labels: `data-animate="line"`
- CTA destacados: `data-animate="cta"`
- Elementos en lista o grid: `data-animate="stagger"`
- Grupo contenedor: `data-animate-group="..."`

## Dónde están los hooks

- Home: [src/pages/[locale]/index.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/index.astro)
- Rutas internas: [src/pages/[locale]/[...segments].astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/[...segments].astro)
- Header/Footer/Layout: [src/layouts/BaseLayout.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/layouts/BaseLayout.astro)
- Componentes de sección: [src/components](/C:/Users/USUARIO/Documents/Berrozpe/src/components)

## Secuencia recomendada para el siguiente sprint

1. Hero: fade/translate suave del bloque principal.
2. Section reveal: entrada vertical corta por bloque.
3. Stagger: cards de servicios, proceso, FAQ y legales.
4. Line: micro-labels y divisores.
5. CTA: acento final sin rebote exagerado.

## Restricciones

- No depender de animación para entender la jerarquía.
- No ocultar contenido si JS falla.
- Mantener tiempos cortos y consistentes.
- Evitar scroll-jacking o efectos experimentales.
- Respetar `prefers-reduced-motion` cuando se active GSAP real.
