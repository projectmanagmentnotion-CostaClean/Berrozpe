# Instal Berrozpe — Renovación web

Repositorio para renovar `instalberrozpe.com` manteniendo el mismo dominio y el mismo hosting en SiteGround.

## Objetivo

Crear una web corporativa profesional, minimalista, rápida, SEO local, mobile-first, documentada para agentes IA y preparada para RGPD.

## Stack previsto

- Astro
- TypeScript
- Tailwind CSS
- GSAP
- Contenido modular en `/content`
- Documentación en `/docs`
- Build estático para subir a SiteGround

## Reglas principales

- No inventar contenido, servicios, años, clientes, marcas, certificaciones ni garantías.
- Todo el contenido editable debe vivir en `/content`.
- Cada servicio debe tener su propio archivo.
- No escribir textos comerciales directamente dentro de componentes.
- No tocar producción directamente.
- Solo se sube la carpeta `dist/` generada por `npm run build` a SiteGround.
- Cada bloque de trabajo debe terminar con lint, build y commit.

## Documentación principal

- `AGENTS.md`: normas obligatorias para Codex y futuros agentes.
- `docs/ROADMAP.md`: roadmap completo por fases.
- `docs/CODEX_WORKFLOW.md`: flujo de trabajo con Codex y GitHub.
- `docs/DESIGN_SYSTEM.md`: sistema visual, botones, secciones y responsive.
- `docs/SEO_LOCAL.md`: estrategia SEO local.
- `docs/LEGAL_RGPD_COOKIES.md`: requisitos legales y formulario.
- `docs/GSAP_ANIMATION_SYSTEM.md`: reglas de animaciones.
- `docs/SITEGROUND_DEPLOYMENT_GUIDE.md`: despliegue en SiteGround.
