# Instal Berrozpe

Base técnica de la nueva web estática de `instalberrozpe.com`, preparada para desplegar `dist/` en SiteGround.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- GSAP instalado

## Principios del proyecto

- No inventar contenido comercial ni datos legales.
- Todo el contenido editable vive en `/content`.
- Los datos compartidos viven en `content/shared/`.
- Los textos traducibles viven en `content/locales/{locale}/`.
- Los componentes no incluyen copy comercial hardcodeado.
- La build es estática y el despliegue se hace subiendo solo `/dist`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
/
|-- assets-source/
|-- content/
|   |-- shared/
|   `-- locales/
|       |-- es/
|       |-- ca/
|       |-- en/
|       `-- de/
|-- docs/
|-- public/
`-- src/
    |-- components/
    |-- data/
    |-- layouts/
    |-- lib/
    |-- pages/
    `-- styles/
```

## Flujo editorial

1. Editar datos comunes solo en `content/shared/`.
2. Editar traducciones solo en `content/locales/{locale}/`.
3. Mantener los 4 idiomas sincronizados en estructura y contenido base.
4. Revisar placeholders legales antes de publicar.
5. Ejecutar `npm run build`.
6. Subir el contenido de `/dist` al hosting de SiteGround cuando exista validación de despliegue.

## Documentación

- [AGENTS.md](./AGENTS.md)
- [Arquitectura](./docs/architecture.md)
- [Inventario de contenido](./docs/01_CONTENT_INVENTORY.md)
- [Sitemap](./docs/02_SITEMAP.md)
- [Arquitectura de información](./docs/03_INFORMATION_ARCHITECTURE.md)
- [Redirecciones](./docs/04_REDIRECTS.md)
- [Inventario de assets](./docs/05_ASSET_INVENTORY.md)
- [Documento maestro de contenido, SEO y estructura](./docs/CONTENT_SEO_STRUCTURE_MASTER.md)
- [SEO local y hreflang](./docs/SEO_LOCAL.md)
- [Legales RGPD y cookies](./docs/LEGAL_RGPD_COOKIES.md)
