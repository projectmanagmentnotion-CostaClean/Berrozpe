# CODEX WORKFLOW — Instal Berrozpe

## Principio de trabajo

Codex debe trabajar por bloques pequeños y controlados. No debe mezclar contenido, diseño, SEO, legal, animaciones y deploy en un único cambio grande salvo que el sprint lo exija.

## Flujo estándar

1. Leer `AGENTS.md`.
2. Leer la documentación relacionada con la tarea.
3. Revisar archivos existentes antes de crear nuevos.
4. Modificar solo las capas necesarias.
5. Ejecutar validaciones.
6. Actualizar documentación si cambia el sistema.
7. Hacer commit descriptivo.

## Capas del proyecto

```txt
/content       Contenido editable
/src           Componentes, layouts, lógica y estilos
/public        Archivos públicos finales o estáticos
/docs          Documentación del proyecto
/assets-source Assets originales no optimizados
```

## Prompts seguros para Codex

### Modificar solo contenido

```txt
Modifica únicamente archivos dentro de /content. No toques componentes, estilos, rutas, configuración, SEO técnico ni formulario.
```

### Modificar solo diseño

```txt
Modifica únicamente componentes visuales, tokens y clases de diseño. No cambies contenido, rutas, SEO ni lógica del formulario.
```

### Modificar solo SEO

```txt
Modifica únicamente /content/seo, helpers SEO, schema, sitemap, robots y metadatos. No cambies diseño ni contenido comercial visible salvo titles y descriptions.
```

### Modificar solo GSAP

```txt
Modifica únicamente /src/lib/animations y las llamadas necesarias a animaciones. No cambies contenido, SEO, formulario ni rutas.
```

### Modificar solo formulario

```txt
Trabaja solo en /src/components/forms, /src/lib/forms, /public/form-handler.php y documentación legal relacionada.
```

## Validaciones obligatorias

Antes de cerrar un bloque:

```bash
npm run lint
npm run build
```

Si aún no existe el proyecto técnico, documentar que las validaciones quedan pendientes para el sprint técnico.

## Commits recomendados

```txt
setup: create Astro base
docs: add project roadmap
content: add services content structure
design: add base design system
seo: add local SEO metadata
forms: add RGPD contact form
animations: add GSAP reveal system
deploy: add SiteGround deployment guide
qa: fix responsive issues
```

## Regla de seguridad

No modificar producción directamente. El repo es la fuente de verdad. SiteGround solo recibe el build final generado.
