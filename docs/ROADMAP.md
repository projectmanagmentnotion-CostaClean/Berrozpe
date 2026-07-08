# ROADMAP — Renovación InstalBerrozpe.com

## Objetivo

Renovar `instalberrozpe.com` con Codex + GitHub, manteniendo el mismo dominio y hosting SiteGround.

La web debe ser minimalista, profesional, rápida, SEO local, mobile-first, modular, documentada, con GSAP y preparada para RGPD.

---

## Fase 0 — Preparación

### Objetivo
Crear la base del repositorio y normas del proyecto.

### Tareas

- Crear repo GitHub.
- Crear `README.md`.
- Crear `AGENTS.md`.
- Crear carpeta `/docs`.
- Definir stack.
- Definir workflow Codex.
- Confirmar que producción no se toca hasta tener staging aprobado.

### Entregables

- Repo inicial.
- Documentación base.
- Normas de agentes.

---

## Fase 1 — Auditoría de la web actual

### Objetivo
Extraer contenido real sin inventar nada.

### Tareas

- Revisar URLs actuales.
- Extraer servicios reales.
- Extraer textos actuales.
- Extraer datos de contacto.
- Extraer imágenes reales.
- Detectar textos incorrectos.
- Detectar problemas SEO.
- Detectar páginas legales existentes.

### Entregables

- `docs/01_CONTENT_INVENTORY.md`
- `docs/02_SITEMAP.md`
- Lista de redirecciones 301.
- Inventario de assets.

---

## Fase 2 — Sitemap y arquitectura

### Objetivo
Definir la nueva estructura antes de diseñar.

### Sitemap base

```txt
/
├── /servicios/
│   ├── /servicios/electricidad/
│   ├── /servicios/domotica/
│   ├── /servicios/lampisteria/
│   ├── /servicios/aire-acondicionado/
│   ├── /servicios/calefaccion/
│   ├── /servicios/calderas/
│   ├── /servicios/energia-solar-fotovoltaica/
│   ├── /servicios/energia-solar-termica/
│   ├── /servicios/asesoria-energetica/
│   ├── /servicios/alarmas/
│   └── /servicios/camaras-cctv-ip/
├── /sobre-nosotros/
├── /contacto/
├── /aviso-legal/
├── /politica-privacidad/
├── /politica-cookies/
└── /terminos-condiciones/
```

### Entregables

- Arquitectura de información.
- Sitemap final.
- Navegación principal.
- Footer.
- Mapa de enlaces internos.

---

## Fase 3 — Proyecto técnico

### Objetivo
Crear la web base con Astro, TypeScript, Tailwind y GSAP.

### Tareas

- Crear proyecto Astro.
- Instalar TypeScript.
- Instalar Tailwind.
- Instalar GSAP.
- Configurar rutas.
- Crear layout base.
- Crear estructura `/content`, `/src`, `/public`, `/assets-source`.

### Entregables

- Proyecto Astro funcional.
- `npm run dev` funcional.
- `npm run build` funcional.

---

## Fase 4 — Contenido modular

### Objetivo
Separar cada parte editable en archivos individuales.

### Estructura prevista

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

### Entregables

- Servicios separados.
- Contacto separado.
- Legal separado.
- SEO separado.
- Páginas con contenido externo a componentes.

---

## Fase 5 — Sistema de diseño

### Objetivo
Crear diseño minimalista, aireado y responsive.

### Tareas

- Crear tokens.
- Crear `Container`.
- Crear `Section`.
- Crear `Button`.
- Crear `Card`.
- Crear `Badge`.
- Crear sistema de espaciados.
- Crear reglas responsive.

### Entregables

- `docs/DESIGN_SYSTEM.md`
- Componentes UI base.
- Normas de botones, cards y secciones.

---

## Fase 6 — Páginas principales

### Objetivo
Construir la web visible.

### Páginas

- Inicio.
- Servicios.
- Detalle de cada servicio.
- Sobre nosotros.
- Contacto.
- Aviso legal.
- Política de privacidad.
- Política de cookies.
- Términos y condiciones.

### Entregables

- Home completa.
- 11 páginas de servicios.
- Contacto funcional visualmente.
- Legales visibles.

---

## Fase 7 — SEO local

### Objetivo
Optimizar para Blanes y Girona.

### Tareas

- Titles únicos.
- Meta descriptions únicas.
- H1 únicos.
- Canonicals.
- Open Graph.
- Schema LocalBusiness.
- Schema Service.
- Schema FAQ.
- Sitemap.
- Robots.
- Redirecciones 301.

### Entregables

- `docs/SEO_LOCAL.md`
- SEO técnico implementado.
- Sitemap y robots.
- `.htaccess` con redirecciones.

---

## Fase 8 — Formulario y RGPD

### Objetivo
Preparar formulario legal y seguro.

### Tareas

- Crear formulario.
- Añadir checkbox obligatorio.
- Añadir texto legal.
- Añadir validación frontend.
- Añadir validación backend.
- Añadir honeypot antispam.
- Preparar handler compatible con SiteGround.

### Entregables

- `docs/LEGAL_RGPD_COOKIES.md`
- `docs/FORMS_AND_DATA.md`
- Formulario compatible con producción.

---

## Fase 9 — GSAP

### Objetivo
Añadir animaciones profesionales y accesibles.

### Tareas

- Crear sistema de animaciones.
- Crear `reducedMotion`.
- Crear hero intro.
- Crear reveal de secciones.
- Crear stagger de cards.
- Revisar móvil.

### Entregables

- `docs/GSAP_ANIMATION_SYSTEM.md`
- Animaciones suaves.
- Accesibilidad respetada.

---

## Fase 10 — QA

### Objetivo
Validar antes de publicar.

### Revisiones

- Lint.
- Build.
- Responsive.
- SEO.
- Accesibilidad.
- Enlaces.
- Formularios.
- Redirecciones.
- Sitemap.
- Robots.
- Velocidad.

### Entregables

- `docs/QA_FINAL.md`
- Build final.
- Lista de correcciones.

---

## Fase 11 — Staging SiteGround

### Objetivo
Probar sin tocar producción.

### Opciones

- `staging.instalberrozpe.com`
- `instalberrozpe.com/nueva/`

### Reglas

- Staging con noindex.
- No enviar sitemap staging a Google.
- Probar todo antes de publicación final.

### Entregables

- Staging revisado.
- Cliente aprobado.

---

## Fase 12 — Publicación final

### Objetivo
Sustituir la web actual en el mismo dominio.

### Proceso

1. Backup completo de la web actual.
2. Build final.
3. Subir solo `dist/` a SiteGround.
4. Activar `.htaccess`.
5. Probar redirecciones.
6. Probar formulario.
7. Probar HTTPS.
8. Enviar sitemap a Search Console.
9. Monitorizar errores.

### Entregables

- Web publicada.
- Dominio conservado.
- Hosting conservado.
- SEO protegido.

---

## Fase 13 — Post-publicación

### Objetivo
Ajustar con datos reales.

### Tareas

- Revisar Search Console.
- Revisar 404.
- Revisar formularios.
- Revisar velocidad.
- Revisar indexación.
- Añadir mejoras futuras confirmadas.

### Entregables

- Informe post-publicación.
- Plan de optimización continua.
