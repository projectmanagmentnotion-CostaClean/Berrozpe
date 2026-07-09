# GSAP Animation System

## Estado actual

GSAP ya esta integrado como sistema centralizado y opcional. La capa de movimiento se activa en cliente, respeta `prefers-reduced-motion` y no oculta contenido si JavaScript falla.

## Archivos creados

- [src/lib/animations/index.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/index.ts)
- [src/lib/animations/reducedMotion.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/reducedMotion.ts)
- [src/lib/animations/heroIntro.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/heroIntro.ts)
- [src/lib/animations/revealOnScroll.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/revealOnScroll.ts)
- [src/lib/animations/staggerGroup.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/staggerGroup.ts)
- [src/lib/animations/lineReveal.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/lineReveal.ts)
- [src/lib/animations/ctaMotion.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/ctaMotion.ts)
- [src/lib/animations/mobileMenuMotion.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/mobileMenuMotion.ts)
- [src/lib/animations/refreshAnimations.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/refreshAnimations.ts)
- [src/scripts/animations.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/scripts/animations.ts)

## Hooks disponibles

- Hero: `data-animate="hero"`
- Reveal individual: `data-animate="reveal"`
- Linea editorial: `data-animate="line"`
- CTA: `data-animate="cta"`
- Elemento escalonado: `data-animate="stagger"`
- Grupo de escalonado: `data-animate-group`
- Menu movil: `details[data-mobile-menu]` y `[data-mobile-menu-panel]`

## Comportamiento implementado

### `heroIntro`

- Entrada suave de label y linea editorial.
- Entrada principal del `h1` o `h2`.
- Entrada del primer parrafo.
- Entrada del bloque CTA si existe.
- Escalonado de tarjetas hijas si el hero contiene items `stagger`.

### `revealOnScroll`

- `opacity` a `1`.
- desplazamiento vertical a `0`.
- duracion corta.
- una sola vez por seccion.

### `staggerGroup`

- Anima grids y listas marcadas con `data-animate-group`.
- Opera sobre hijos `data-animate="stagger"`.
- Se usa en servicios, FAQ, legales, paneles y cards relacionadas.

### `lineReveal`

- Expande la linea horizontal de labels editoriales.
- No depende del texto para funcionar.

### `ctaMotion`

- Reveal del bloque CTA.
- Microinteraccion ligera en enlaces y botones internos.

### `mobileMenuMotion`

- Apertura y cierre del panel del menu movil.
- Respeta el fallback nativo de `details/summary`.
- No impide el uso del menu si no hay JS.

## Integracion

- Entrada de cliente: [src/scripts/animations.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/scripts/animations.ts)
- Carga en layout: [src/layouts/BaseLayout.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/layouts/BaseLayout.astro)
- Hooks usados en:
  - [src/pages/[locale]/index.astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/index.astro)
  - [src/pages/[locale]/[...segments].astro](/C:/Users/USUARIO/Documents/Berrozpe/src/pages/[locale]/[...segments].astro)
  - componentes de seccion y menu movil

## Reduced motion

- `reducedMotion.ts` protege el build estatico y el runtime.
- Si no hay DOM o `matchMedia`, el sistema reduce movimiento por defecto.
- Si el usuario pide menos movimiento, GSAP no se inicializa.
- El contenido sigue visible sin estados previos ocultos.

## Reglas de uso

- No usar la animacion para ocultar informacion necesaria.
- No introducir scroll-jacking.
- No crear dependencias de layout en la timeline.
- Mantener duraciones cortas y consistentes.
- Registrar nuevos hooks en este documento y en `src/lib/animations/`.

## Checklist QA

- `npm run build`
- Verificar que siguen generandose 45 paginas.
- Verificar `sitemap-index.xml`.
- Verificar que `/` redirige a `/es/`.
- Verificar selector de idioma en home y detalle de servicio.
- Verificar que las paginas sin hooks no lanzan errores.
- Verificar reduced motion y fallback sin JS.
