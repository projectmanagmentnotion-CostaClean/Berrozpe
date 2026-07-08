# AGENTS.md — Instal Berrozpe

Este documento define las normas obligatorias para Codex y cualquier agente IA que trabaje en este repositorio.

## Objetivo del proyecto

Renovar `instalberrozpe.com` manteniendo el mismo dominio y el mismo hosting SiteGround, con una web estática moderna, rápida, minimalista, SEO local, mobile-first, modular, documentada, con GSAP y preparada para RGPD.

## Regla principal

No inventar información. El agente solo puede estructurar, corregir, optimizar y maquetar contenido real confirmado.

Queda prohibido inventar:

- Servicios.
- Años de experiencia.
- Clientes.
- Marcas.
- Certificaciones.
- Garantías.
- Zonas de servicio no confirmadas.
- Datos legales.
- Emails o teléfonos.
- Reseñas.
- Imágenes de trabajos no reales.

## Arquitectura de contenido

Todo contenido editable debe vivir en `/content`.

Los componentes no deben contener textos comerciales fijos. Deben leer contenido desde archivos de datos.

Estructura prevista:

```txt
content/
├── site.ts
├── company.ts
├── contact.ts
├── navigation.ts
├── services/
├── pages/
├── seo/
└── legal/
```

Cada servicio debe tener su propio archivo individual.

## Diseño

Usar siempre componentes del sistema:

- `Button`
- `Container`
- `Section`
- `Card`
- `Badge`
- `ServiceCard`
- `CTASection`
- `FAQSection`
- `ContactForm`

No crear estilos sueltos si ya existe un componente o token.

El diseño debe ser:

- Minimalista.
- Profesional.
- Aireado.
- Mobile-first.
- Estilo Figma.
- Con jerarquía clara.
- Sin sobrecargar visualmente.

## Responsive

Toda sección debe revisarse en:

- 360px móvil.
- 390px móvil.
- 430px móvil.
- 768px tablet.
- 1366px laptop.
- 1440px desktop.
- 1920px desktop grande.

Los botones deben tener área táctil mínima de 44px y altura recomendada de 48px en móvil.

## SEO

Cada página debe tener:

- `title` único.
- `meta description` única.
- H1 único.
- URL limpia.
- Canonical.
- Open Graph.
- Schema cuando aplique.
- Alt text en imágenes.
- Enlaces internos.

## Legal y RGPD

No activar formulario sin:

- Checkbox obligatorio de aceptación de privacidad.
- Checkbox no premarcado.
- Enlace visible a Política de Privacidad.
- Texto legal bajo el formulario.
- Validación frontend y backend.
- Protección antispam.
- SSL activo en producción.

## GSAP

GSAP debe usarse de forma controlada.

Permitido:

- Fade-in suave.
- Reveal de secciones.
- Stagger de cards.
- Hero intro sutil.
- Microinteracciones discretas.

Prohibido:

- Parallax agresivo.
- Animaciones que mareen.
- Animaciones que bloqueen formularios.
- Texto importante que tarde demasiado en aparecer.
- Efectos excesivos o de plantilla barata.

Obligatorio:

- Respetar `prefers-reduced-motion`.
- No animar elementos críticos del formulario.
- Mantener accesibilidad.

## SiteGround

Producción está en el mismo dominio y hosting SiteGround.

Reglas:

- No tocar producción directamente.
- No subir el proyecto fuente a SiteGround.
- No subir `src/`, `content/`, `docs/`, `.git/`, `node_modules/`, `package.json` ni `assets-source/`.
- Solo subir el contenido generado dentro de `dist/`.
- Crear backup antes de reemplazar la web actual.
- Probar primero en staging.

## Flujo de trabajo obligatorio

Cada bloque de trabajo debe terminar con:

```bash
npm run lint
npm run build
```

Después:

- Corregir errores si existen.
- Actualizar documentación si corresponde.
- Hacer commit descriptivo.
- No dejar cambios grandes mezclados sin explicación.

## Commits

Usar mensajes claros:

```txt
setup: create Astro base
content: add services structure
docs: add SEO local guide
design: add base design system
forms: add RGPD contact form
seo: add schema and sitemap
animations: add GSAP reveal system
qa: fix responsive issues
```

## Criterio final de calidad

La web debe poder mantenerse sección por sección sin romper el resto del sitio.
