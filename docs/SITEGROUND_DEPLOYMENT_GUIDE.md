# SITEGROUND DEPLOYMENT GUIDE — Instal Berrozpe

## Objetivo

Publicar la nueva web en el mismo dominio `instalberrozpe.com` y en el mismo hosting SiteGround sin romper producción ni perder SEO.

## Regla principal

El repositorio GitHub es la fuente de desarrollo. SiteGround solo recibe el build final.

No se debe subir el proyecto fuente completo a SiteGround.

## Build

Comando previsto:

```bash
npm run build
```

Carpeta generada:

```txt
dist/
```

## Archivos que sí se suben a SiteGround

Subir únicamente el contenido de `dist/`:

```txt
index.html
servicios/
contacto/
sobre-nosotros/
aviso-legal/
politica-privacidad/
politica-cookies/
terminos-condiciones/
assets/
sitemap.xml
robots.txt
favicon.svg
.htaccess
form-handler.php si aplica
```

## Archivos que no se suben a SiteGround

```txt
src/
content/
docs/
node_modules/
package.json
package-lock.json
AGENTS.md
README.md
.git/
.github/
assets-source/
```

## Raíz probable en SiteGround

Normalmente:

```txt
public_html/
```

O una carpeta específica asignada al dominio en Site Tools.

## Proceso de staging

Antes de publicar en producción, crear una versión de prueba:

Opción recomendada:

```txt
staging.instalberrozpe.com
```

Alternativa:

```txt
instalberrozpe.com/nueva/
```

## Protección del staging

Staging debe tener:

- `noindex`.
- No enviar sitemap a Google.
- Preferiblemente contraseña desde SiteGround.

## Backup antes de publicar

Antes de reemplazar producción:

- Descargar copia completa de la web actual.
- Guardar `.htaccess` actual.
- Guardar imágenes actuales.
- Exportar base de datos si la web actual usa WordPress.
- Guardar copia local y copia externa.

## Publicación final

1. Generar build final.
2. Revisar `dist/`.
3. Hacer backup final de producción.
4. Vaciar o mover archivos antiguos de la raíz pública.
5. Subir contenido de `dist/`.
6. Comprobar home.
7. Comprobar servicios.
8. Comprobar contacto.
9. Comprobar formulario.
10. Comprobar HTTPS.
11. Comprobar `.htaccess`.
12. Comprobar redirecciones 301.
13. Enviar sitemap a Search Console.
14. Monitorizar errores 404.

## Redirecciones 301

Ejemplo:

```apache
Redirect 301 /inicio/ /
Redirect 301 /contact/ /contacto/
Redirect 301 /electricity-and-home-automation/ /servicios/electricidad/
Redirect 301 /plumbing-and-climate/ /servicios/lampisteria/
Redirect 301 /alarms-and-cameras/ /servicios/alarmas/
```

## Formulario

Si se usa PHP en SiteGround:

- Confirmar que `form-handler.php` está en la ruta correcta.
- Confirmar email destinatario.
- Probar envío real.
- Revisar spam.
- Validar que no envía sin checkbox de privacidad.

## SSL

Comprobar:

```txt
https://instalberrozpe.com
https://www.instalberrozpe.com
```

Ambas variantes deben funcionar o redirigir correctamente.

## Checklist final

- [ ] Build generado.
- [ ] Solo `dist/` preparado para subir.
- [ ] Backup completo hecho.
- [ ] Staging probado.
- [ ] Formulario probado.
- [ ] Redirecciones revisadas.
- [ ] HTTPS activo.
- [ ] Sitemap enviado.
- [ ] Producción revisada en móvil.
- [ ] Producción revisada en desktop.
- [ ] Search Console revisada.
