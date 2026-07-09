# GSAP Animation System

## Estado actual

GSAP ya esta integrado como sistema centralizado y opcional. La capa de movimiento se activa en cliente, respeta `prefers-reduced-motion` y no oculta contenido si JavaScript falla.

## Archivos creados

- [src/lib/animations/index.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/index.ts)
- [src/lib/animations/reducedMotion.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/reducedMotion.ts)
- [src/lib/animations/scrollTrigger.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/scrollTrigger.ts)
- [src/lib/animations/heroIntro.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/heroIntro.ts)
- [src/lib/animations/revealOnScroll.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/revealOnScroll.ts)
- [src/lib/animations/imageReveal.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/imageReveal.ts)
- [src/lib/animations/visualPanels.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/visualPanels.ts)
- [src/lib/animations/parallaxSoft.ts](/C:/Users/USUARIO/Documents/Berrozpe/src/lib/animations/parallaxSoft.ts)
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
- Reveal de visual grande: `data-animate="image-reveal"`
- Panel sobre visual: `data-animate="visual-panel"`
- Parallax suave: `data-animate="soft-parallax"`
- Menu movil: `details[data-mobile-menu]` y `[data-mobile-menu-panel]`

## Comportamiento implementado

### `heroIntro`

- Entrada suave de label y linea editorial.
- Entrada principal del `h1` o `h2`.
- Entrada del primer parrafo.
- Entrada del bloque CTA si existe.
- Trigger reversible en ida y vuelta.

### `revealOnScroll`

- `opacity` a `1`.
- desplazamiento vertical a `0`.
- duracion corta.
- reversible en ida y vuelta.

### `staggerGroup`

- Anima grids y listas marcadas con `data-animate-group`.
- Opera sobre hijos `data-animate="stagger"`.
- Se usa en servicios, FAQ, legales, paneles y cards relacionadas.
- reversible en ida y vuelta.

### `lineReveal`

- Expande la linea horizontal de labels editoriales.
- No depende del texto para funcionar.
- reversible en ida y vuelta.

### `ctaMotion`

- Reveal del bloque CTA.
- Microinteraccion ligera en enlaces y botones internos.
- reversible en ida y vuelta.

### `imageReveal`

- Reveal suave para visuales grandes.
- `clip-path` editorial ligero.
- `opacity` y desplazamiento corto.
- reversible en ida y vuelta.

### `visualPanels`

- Entrada suave del panel de texto superpuesto sobre visuales.
- Pensado para `VisualAsset`.
- reversible en ida y vuelta.

### `parallaxSoft`

- Desplazamiento vertical leve y `scale` sutil.
- Desactivado en viewport compacto.
- No se aplica con `prefers-reduced-motion`.
- Bidireccional por `scrub`.

### `mobileMenuMotion`

- Apertura y cierre del panel del menu movil.
- Respeta el fallback nativo de `details/summary`.
- No impide el uso del menu si no hay JS.
- Excepcion: no usa ScrollTrigger porque es una interaccion manual, no de scroll.

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
- En mobile no se aplica `soft-parallax`.
- El contenido sigue visible sin estados previos ocultos.

## ScrollTrigger

- Registro centralizado en `scrollTrigger.ts`.
- No se registran triggers duplicados gracias a los marcadores `data-motion-ready`.
- Tras la inicializacion se ejecuta `ScrollTrigger.refresh()`.
- Toggle bidireccional por defecto:
  - `play reverse play reverse`
- Parallax:
  - usa `scrub`
  - queda desactivado en mobile compacto
- Menu movil:
  - queda fuera del sistema bidireccional por ser interactivo

## Reglas de uso

- No usar la animacion para ocultar informacion necesaria.
- No introducir scroll-jacking.
- No crear dependencias de layout en la timeline.
- Mantener duraciones cortas y consistentes.
- Registrar nuevos hooks en este documento y en `src/lib/animations/`.
- No revertir campos del formulario mientras el usuario interactua con ellos.
- En mobile priorizar claridad y evitar parallax fuerte.

## Checklist QA

- `npm run build`
- Verificar que siguen generandose 45 paginas.
- Verificar `sitemap-index.xml`.
- Verificar que `/` redirige a `/es/`.
- Verificar selector de idioma en home y detalle de servicio.
- Verificar que las paginas sin hooks no lanzan errores.
- Verificar reduced motion y fallback sin JS.
- Verificar que la ida y vuelta no deja elementos bloqueados ni invisibles.
- Verificar que el menu movil no queda atrapado.
- Verificar visualmente en `390x844`, `430x932`, `768x1024`, `1366x768`, `1440x900` y `1920x1080`.
