# Production Release Checklist

## Antes de subir

- Backup del sitio anterior
- Export local de `dist/`
- Confirmar version final de legales
- Confirmar pruebas del formulario en staging

## Subida

- Subir solo `dist/`
- No subir `src/`, `content/`, `docs/`

## Verificacion inmediata

- `/` redirige a `/es/`
- Home, servicios y contacto disponibles en los 4 idiomas
- WhatsApp abre correctamente
- Google Maps abre correctamente
- Bloque de mapa visible y estable en home y contacto
- Enlace de ubicacion visible en footer
- Boton de resenas abre la URL confirmada
- Formulario llega a `david@instalberrozpe.com`

## Post publicacion

- Alta o revision en Search Console
- Alta o revision en Bing Webmaster Tools
- Revisar indexacion inicial y 404
