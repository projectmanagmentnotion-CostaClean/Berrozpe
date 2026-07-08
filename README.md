# Instal Berrozpe

Base tecnica de la nueva web estatica de `instalberrozpe.com`, preparada para desplegar `dist/` en SiteGround.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- GSAP

## Principios del proyecto

- No inventar contenido comercial ni datos legales.
- Todo el contenido editable vive en `/content`.
- Cada servicio tiene su archivo individual en `/content/services`.
- Los componentes no incluyen textos comerciales hardcodeados.
- La build es estatica y el despliegue se hace subiendo solo `/dist`.

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
|-- assets-source/         # Material fuente no publico
|-- content/               # Contenido editable del sitio
|   |-- home/
|   |-- legal/
|   |-- services/
|   `-- site/
|-- docs/                  # Documentacion para agentes y mantenimiento
|-- public/                # Activos publicos finales
`-- src/
    |-- components/
    |-- data/
    |-- layouts/
    |-- lib/
    |-- pages/
    `-- styles/
```

## Flujo editorial

1. Editar contenido solo dentro de `/content`.
2. Mantener los servicios en archivos individuales.
3. Revisar placeholders legales antes de publicar.
4. Ejecutar `npm run build`.
5. Subir el contenido de `/dist` al hosting de SiteGround.

## Documentacion

- [AGENTS.md](./AGENTS.md)
- [Arquitectura](./docs/architecture.md)
- [Modelo de contenido](./docs/content-model.md)
- [Despliegue en SiteGround](./docs/deployment-siteground.md)
- [Reglas editoriales y RGPD](./docs/editorial-rules.md)
