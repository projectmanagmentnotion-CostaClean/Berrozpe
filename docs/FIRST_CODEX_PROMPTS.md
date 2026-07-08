# FIRST CODEX PROMPTS — Instal Berrozpe

Este documento contiene los primeros prompts que se deben ejecutar con Codex en orden.

---

## Prompt 1 — Crear base técnica

```txt
Lee AGENTS.md, README.md y todos los documentos dentro de /docs antes de tocar archivos.

Crea la base técnica profesional de la nueva web de Instal Berrozpe.

Objetivo:
Renovar instalberrozpe.com manteniendo el mismo dominio y hosting SiteGround, con una web estática moderna, rápida, minimalista, SEO local, RGPD, GSAP y documentación completa para agentes IA.

Stack:
- Astro
- TypeScript
- Tailwind CSS
- GSAP

Reglas:
- No inventes contenido, servicios, años, clientes, certificaciones, marcas ni garantías.
- Todo el contenido editable debe vivir en /content.
- Cada servicio debe tener su archivo individual.
- Cada sección importante debe estar separada.
- No escribas textos comerciales directamente dentro de componentes.
- Prepara build estático para subir solo dist/ a SiteGround.

Entrega:
- Proyecto Astro funcional.
- Tailwind configurado.
- GSAP instalado.
- Estructura /src, /content, /public, /assets-source.
- Componentes base mínimos.
- npm run build correcto.
- Commit descriptivo.
```

---

## Prompt 2 — Auditoría de contenido real

```txt
Audita la web actual de InstalBerrozpe.com y crea un inventario completo del contenido real.

No inventes información.

Extrae:
- Páginas actuales.
- URLs actuales.
- Servicios reales.
- Textos originales.
- Datos de contacto.
- Imágenes y assets.
- Legales actuales.
- Problemas de contenido.
- Problemas SEO.
- Redirecciones 301 necesarias.

Crea:
- docs/01_CONTENT_INVENTORY.md
- docs/02_SITEMAP.md
- docs/03_INFORMATION_ARCHITECTURE.md

No cambies todavía diseño ni código de páginas.
```

---

## Prompt 3 — Contenido modular

```txt
Crea la estructura /content completa usando únicamente contenido real confirmado.

Estructura:
- site.ts
- company.ts
- contact.ts
- navigation.ts
- pages/home.ts
- pages/about.ts
- pages/services.ts
- pages/contact.ts
- services/*.ts
- seo/global.ts
- seo/local-keywords.ts
- legal/*.ts

Cada servicio debe tener su propio archivo.

No escribas textos de negocio dentro de componentes.
No inventes servicios ni datos.
```

---

## Prompt 4 — Sistema visual

```txt
Crea el sistema visual siguiendo docs/DESIGN_SYSTEM.md.

Crea componentes:
- Button
- Container
- Section
- Card
- Badge
- Header
- Footer
- Hero
- ServiceCard
- CTASection
- FAQSection

Diseño:
- Minimalista.
- Profesional.
- Aireado.
- Mobile-first.
- Estilo Figma.

No cambies contenido ni SEO.
Ejecuta lint y build al terminar.
```

---

## Prompt 5 — Páginas

```txt
Construye las páginas principales usando componentes reutilizables y contenido desde /content.

Páginas:
- Inicio.
- Servicios.
- Página dinámica por servicio.
- Sobre nosotros.
- Contacto.
- Aviso legal.
- Política de privacidad.
- Política de cookies.
- Términos y condiciones.

No dupliques textos dentro de componentes.
Ejecuta lint y build al terminar.
```

---

## Prompt 6 — SEO local

```txt
Implementa SEO local siguiendo docs/SEO_LOCAL.md.

Añade:
- Title único.
- Meta description única.
- Canonical.
- Open Graph.
- Schema LocalBusiness.
- Schema Service.
- Schema FAQPage.
- Sitemap.xml.
- Robots.txt.
- .htaccess con redirecciones 301.

No cambies diseño ni contenido comercial salvo metadatos.
Ejecuta lint y build al terminar.
```

---

## Prompt 7 — Formulario RGPD

```txt
Crea formulario de contacto compatible con SiteGround siguiendo docs/LEGAL_RGPD_COOKIES.md.

Debe incluir:
- Nombre.
- Email.
- Teléfono.
- Servicio solicitado.
- Mensaje.
- Checkbox obligatorio de privacidad no premarcado.
- Texto legal bajo formulario.
- Honeypot antispam.
- Validación frontend.
- Validación backend.
- Preparación de public/form-handler.php.

No activar un envío inseguro.
Ejecuta lint y build al terminar.
```

---

## Prompt 8 — GSAP

```txt
Implementa GSAP siguiendo docs/GSAP_ANIMATION_SYSTEM.md.

Crea:
- src/lib/animations/index.ts
- fadeIn.ts
- revealOnScroll.ts
- staggerCards.ts
- heroIntro.ts
- reducedMotion.ts

Usa animaciones suaves y accesibles.
Respeta prefers-reduced-motion.
No animes elementos críticos del formulario.
No afectes SEO ni contenido.
Ejecuta lint y build al terminar.
```

---

## Prompt 9 — QA final

```txt
Ejecuta QA final.

Revisa:
- lint
- build
- responsive mobile/tablet/desktop
- SEO
- accesibilidad
- enlaces
- formulario
- redirecciones
- sitemap
- robots
- guía SiteGround

Corrige errores y crea docs/QA_FINAL.md.
No publiques en producción.
```
