# GSAP ANIMATION SYSTEM — Instal Berrozpe

## Objetivo

Usar GSAP para crear una experiencia visual profesional, suave y moderna sin perjudicar rendimiento, SEO ni accesibilidad.

## Instalación prevista

```bash
npm install gsap
```

## Estructura prevista

```txt
src/lib/animations/
├── index.ts
├── fadeIn.ts
├── revealOnScroll.ts
├── staggerCards.ts
├── heroIntro.ts
└── reducedMotion.ts
```

## Animaciones permitidas

- Fade-in suave.
- Reveal de secciones.
- Stagger de tarjetas.
- Hero intro discreto.
- Microinteracciones en botones/cards.

## Animaciones prohibidas

- Parallax agresivo.
- Animaciones que mareen.
- Animaciones que bloqueen interacción.
- Texto principal que tarde demasiado en aparecer.
- Formularios críticos animados de forma molesta.
- Efectos excesivos o estilo plantilla barata.

## Reduced motion

Debe existir helper:

```ts
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```

Toda animación debe comprobar esta preferencia antes de ejecutarse.

## Duraciones recomendadas

```txt
Microinteracciones: 0.15s - 0.25s
Reveal normal: 0.45s - 0.7s
Hero intro: 0.6s - 0.9s
Stagger cards: 0.06s - 0.12s entre elementos
```

## Reglas técnicas

- No animar elementos antes de que sean visibles si afecta CLS.
- No bloquear navegación.
- No ocultar permanentemente contenido si JS falla.
- No depender de animaciones para entender la página.
- Mantener contenido renderizado para SEO.

## Aplicación por sección

### Hero

- Entrada suave del título.
- Entrada suave del subtítulo.
- CTA visible rápido.
- Imagen con movimiento muy sutil si aplica.

### Servicios

- Stagger discreto de cards.
- Hover suave.
- Nada que retrase la lectura.

### Contacto

- No animar campos de forma agresiva.
- Mensajes de error siempre visibles y claros.

## Checklist

- [ ] GSAP instalado.
- [ ] Helpers creados.
- [ ] Reduced motion implementado.
- [ ] Animaciones documentadas.
- [ ] No hay animaciones excesivas.
- [ ] No se rompe mobile.
- [ ] No afecta formulario.
- [ ] No afecta SEO.
