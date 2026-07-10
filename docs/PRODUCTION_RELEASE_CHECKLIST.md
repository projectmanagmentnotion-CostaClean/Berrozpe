# Production Release Checklist

## Antes de subir

- Backup del sitio anterior
- Export local de `dist/`
- Legales finales cerrados y sincronizados en `es`, `ca`, `en` y `de`
- Datos fiscales confirmados:
  - `Instal Berrozpe S.L.`
  - `B55326813`
  - `Antiga 68 bajos de Blanes`
- `areaServed` de schema ajustado a `Blanes`, `Arenys` y `Lloret de Mar`
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

- Repetir prueba real del formulario en produccion
- Alta o revision en Search Console
- Alta o revision en Bing Webmaster Tools
- Revisar indexacion inicial y 404
