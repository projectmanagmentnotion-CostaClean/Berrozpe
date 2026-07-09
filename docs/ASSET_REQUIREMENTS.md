# Asset Requirements

## A. Resumen

- Assets ya existentes:
  - placeholders corporativos temporales en `public/images/`
  - OG temporales en `public/og/`
  - inventario legacy auditado de la web actual en [05_ASSET_INVENTORY.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/05_ASSET_INVENTORY.md)
- Assets temporales:
  - hero
  - visuales de servicios
  - visuales de sobre nosotros
  - visual de contacto
  - OG en PNG
- Assets obligatorios antes de produccion:
  - logo vectorial validado
  - favicon definitivo
  - hero real o recurso corporativo real validado
  - al menos una imagen real o recurso corporativo final por cada servicio
  - OG final aprobado
- Assets que pueden esperar a una segunda fase:
  - variantes adicionales por servicio
  - galeria de equipo
  - galeria de vehiculos
  - OG por servicio individual si no se aprueba en esta fase

## B. Logo y marca

- Logo principal horizontal
- Logo version clara
- Logo version oscura
- Isotipo / favicon
- Formato recomendado: `SVG`
- Alternativa: `PNG` transparente `2x`
- Tamano minimo recomendado para logo horizontal:
  - `320px` ancho base
  - exportes retina a `640px`
- Uso previsto:
  - header
  - footer
  - favicon
  - Open Graph

## C. Favicon e iconos

- `favicon.svg`
- `favicon.ico` si se requiere compatibilidad adicional
- `apple-touch-icon.png` `180x180`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- icono maskable si se decide soporte PWA

## D. Open Graph

- OG default
- OG servicios
- OG contacto
- OG por servicio individual solo si se aprueba una segunda fase
- Tamano: `1200x630`
- Formato final recomendado:
  - `WebP`
  - fallback `PNG` si hace falta
- Peso objetivo:
  - ideal `< 250 KB`
  - tolerable `< 350 KB`
- Texto permitido:
  - marca
  - servicio o tipo de pagina
  - localidad si ya esta confirmada
- Paleta:
  - `#ff7700`
  - `#045cb4`
  - `#1e293b`
  - `#334155`
  - `#f9fafb`
- Estado actual:
  - `public/og/default.png`
  - `public/og/services.png`
  - `public/og/contact.png`
  - son PNG temporales

## E. Hero

- Imagen hero desktop
- Imagen hero mobile
- Formatos recomendados:
  - desktop: `1920x1200` o `2400x1400`
  - mobile: `900x1200` o `1080x1350`
  - formato final: `WebP`
  - peso objetivo: `< 300 KB` si es posible
- Debe mostrar uno de estos recursos reales o corporativos validados:
  - fachada
  - equipo
  - vehiculo
  - instalaciones
  - recurso corporativo real aprobado
- No usar stock generico

## F. Servicios

### Electricidad y domotica

- Imagen card
- Imagen hero de detalle
- Imagen secundaria para beneficios o proceso si se aprueba
- Tamanos recomendados:
  - card: `900x700`
  - hero detalle: `1600x1000` o `1920x1100`
  - mobile crop: `900x1100`
- Formato: `WebP`
- Peso objetivo:
  - card `< 180 KB`
  - hero `< 320 KB`
- Alt text recomendado:
  - describir instalacion, cuadro, automatizacion o recurso real validado
  - no afirmar una obra concreta no confirmada
- Nombre SEO recomendado:
  - `instal-berrozpe-electricidad-domotica-blanes.webp`

### Lampisteria y climatizacion

- Imagen card
- Imagen hero de detalle
- Imagen secundaria para beneficios o proceso si se aprueba
- Tamanos recomendados:
  - card: `900x700`
  - hero detalle: `1600x1000` o `1920x1100`
  - mobile crop: `900x1100`
- Formato: `WebP`
- Peso objetivo:
  - card `< 180 KB`
  - hero `< 320 KB`
- Alt text recomendado:
  - describir instalacion de agua, climatizacion o equipo real validado
  - no afirmar marcas, garantias ni casos concretos sin confirmar
- Nombre SEO recomendado:
  - `instal-berrozpe-lampisteria-climatizacion.webp`

### Alarmas y camaras

- Imagen card
- Imagen hero de detalle
- Imagen secundaria para beneficios o proceso si se aprueba
- Tamanos recomendados:
  - card: `900x700`
  - hero detalle: `1600x1000` o `1920x1100`
  - mobile crop: `900x1100`
- Formato: `WebP`
- Peso objetivo:
  - card `< 180 KB`
  - hero `< 320 KB`
- Alt text recomendado:
  - describir camara, teclado o sistema real validado
  - no afirmar vigilancia constante ni integraciones no confirmadas
- Nombre SEO recomendado:
  - `instal-berrozpe-alarmas-camaras-cctv.webp`

## G. Sobre nosotros

- Fachada
- Equipo
- Vehiculo
- Taller / oficina
- Tamanos recomendados:
  - `1600x1000`
  - `1200x900`
  - mobile `900x1100`
- Uso recomendado:
  - portada de sobre nosotros
  - bloque de confianza en home
  - contacto si la fachada es la imagen mas fiable

## H. Contacto

- Fachada o ubicacion real
- Imagen o bloque visual para contacto
- Mapa externo solo si se valida su uso y sus implicaciones de cookies
- Tamanos recomendados:
  - desktop `1600x1000`
  - mobile `900x1100`

## I. Iconografia

- Iconos lineales SVG para:
  - electricidad
  - domotica
  - agua / lampisteria
  - climatizacion
  - alarmas
  - camaras
  - energia / eficiencia si aparece
  - telefono / contacto
  - horario
  - ubicacion
- Estilo:
  - lineal
  - sobrio
  - consistente
- Stroke recomendado:
  - `1.5` o `1.75`
- No mezclar packs visuales distintos

## J. Alt text

- Regla general para `es`, `ca`, `en`, `de`:
  - traducir el alt, no dejarlo en otro idioma
- Usar alt vacio decorativo cuando:
  - el recurso sea puramente ornamental
  - no aporte informacion adicional
- Describir imagen real cuando:
  - ayuda a entender la empresa, el servicio o el contexto
  - la foto representa un recurso propio validado
- No inventar trabajos, clientes, ubicaciones exactas ni resultados no confirmados

## K. Naming

- Convencion:
  - minusculas
  - guiones
  - sin acentos
  - sin espacios
- Ejemplos:
  - `instal-berrozpe-fachada-blanes.webp`
  - `instal-berrozpe-electricidad-domotica-blanes.webp`
  - `instal-berrozpe-lampisteria-climatizacion.webp`
  - `instal-berrozpe-alarmas-camaras-cctv.webp`

## L. Performance

- Formatos:
  - `WebP` preferente
  - `AVIF` opcional si se automatiza bien
  - `SVG` para logo e iconos
- Pesos objetivo:
  - hero `< 300 KB`
  - card `< 180 KB`
  - OG `< 350 KB`
- Lazy loading:
  - activar fuera del primer viewport
- Width / height:
  - siempre que sea viable para evitar CLS
- Responsive images:
  - preparar variantes desktop y mobile cuando haya material real
- Evitar CLS:
  - reservar altura
  - mantener ratios consistentes

## M. Checklist de entrega de assets

### Que debe pedir Anderson al cliente

- logo vectorial si existe
- favicon o isotipo original
- foto real de fachada
- foto real de vehiculo
- foto real de equipo si se aprueba su publicacion
- una imagen real util por cada servicio confirmado
- permiso claro para usar cada asset

### Assets que deben reemplazarse antes de produccion

- hero temporal actual
- visuales temporales de servicios
- visual temporal de sobre nosotros
- visual temporal de contacto
- OG PNG temporales si se aprueba una version final

### Assets que pueden mantenerse temporalmente

- placeholders corporativos para secciones secundarias
- OG comunes si no hay suficiente material real
- iconografia simple mientras no exista sistema final de iconos
