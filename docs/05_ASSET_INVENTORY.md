# 05 Asset Inventory

## Alcance

Inventario de assets detectados en la web actual y de los assets realmente integrados en la nueva base Astro durante el sprint visual. Se usa para distinguir:

- assets legacy detectados pero todavia no migrados;
- assets publicos ya activos en `public/`;
- placeholders corporativos temporales mientras no existan fotos reales confirmadas.

## Video detectado en portada actual

| Asset | URL actual | Uso actual |
| --- | --- | --- |
| Video fondo selector idioma | `https://instalberrozpe.com/wp-content/uploads/2024/10/1538033_Electrician_Repairing_1920x1080.mp4` | Fondo del root `/` |

## Logos e identidad

| Asset | URL actual | Uso actual |
| --- | --- | --- |
| Logo recortado | `https://instalberrozpe.com/wp-content/uploads/2023/07/cropped-reloj-instal-berrozpe-logo.png` | Logo del sitio |
| Logo completo | `https://instalberrozpe.com/wp-content/uploads/2023/07/reloj-instal-berrozpe-logo.png` | Variante de marca |
| Icono | `https://instalberrozpe.com/wp-content/uploads/2023/07/icon-berrozpe.png` | Icono/branding |

## Selector de idioma

| Asset | URL actual |
| --- | --- |
| Bandera ES | `https://instalberrozpe.com/wp-content/uploads/2023/07/bandera-es.png` |
| Bandera EN | `https://instalberrozpe.com/wp-content/uploads/2023/07/bandera-en2.png` |
| Bandera CAT | `https://instalberrozpe.com/wp-content/uploads/2023/07/bandera-cat.png` |

## Visuales principales de home

| Asset | URL actual |
| --- | --- |
| Inicio electricidad | `https://instalberrozpe.com/wp-content/uploads/2023/07/inicio-electricidad.png` |
| Inicio climatizacion | `https://instalberrozpe.com/wp-content/uploads/2023/07/inicio-climatizacion.png` |
| Inicio camara | `https://instalberrozpe.com/wp-content/uploads/2023/07/inicio-camara.png` |
| Portada general | `https://instalberrozpe.com/wp-content/uploads/2023/08/portada-Instal-Berrozpe.jpg` |

## Visuales de servicios

| Asset | URL actual |
| --- | --- |
| Agua | `https://instalberrozpe.com/wp-content/uploads/2023/07/agua-1.png` |
| Agua y climatizacion | `https://instalberrozpe.com/wp-content/uploads/2023/07/agua-y-climatizacion-1.png` |
| Aire acondicionado | `https://instalberrozpe.com/wp-content/uploads/2023/07/aire-acondicionado-1.png` |
| Domotica | `https://instalberrozpe.com/wp-content/uploads/2023/07/domotica-1.png` |
| Asesoria energetica | `https://instalberrozpe.com/wp-content/uploads/2023/07/asesoria-energetica-1.png` |
| Calderas | `https://instalberrozpe.com/wp-content/uploads/2023/07/calderas-1.png` |
| Calefaccion | `https://instalberrozpe.com/wp-content/uploads/2023/07/calefaccion-1.png` |
| Camaras | `https://instalberrozpe.com/wp-content/uploads/2023/07/camaras-1.png` |
| Energia solar termica | `https://instalberrozpe.com/wp-content/uploads/2023/07/energia-solar-termica-berrozpe-1.png` |
| Visual electricidad | `https://instalberrozpe.com/wp-content/uploads/2023/07/reloj-instal-berrozpe-electricitat-1.png` |
| Visual hogar inteligente | `https://instalberrozpe.com/wp-content/uploads/2023/08/reloj-instal-berrozpeHOHAR-INTELIGENTE.png` |
| Visual alarma teclado | `https://instalberrozpe.com/wp-content/uploads/2023/08/reloj-instal-berrozpeteclado.png` |

## Fotos corporativas detectadas

| Asset | URL actual |
| --- | --- |
| Team 1 | `https://instalberrozpe.com/wp-content/uploads/2023/08/instal-berrozpe-team-1.png` |
| Team 2 | `https://instalberrozpe.com/wp-content/uploads/2023/08/instal-berrozpe-team-2.png` |
| Team 3 | `https://instalberrozpe.com/wp-content/uploads/2023/08/instal-berrozpe-team-3.png` |
| Fachada | `https://instalberrozpe.com/wp-content/uploads/2023/08/instal-berrozpe-fachada-3.png` |
| Flota y fachada | `https://instalberrozpe.com/wp-content/uploads/2023/08/instal-berrozpe-flota-y-fachada-2.png` |
| Flota vertical | `https://instalberrozpe.com/wp-content/uploads/2023/08/reloj-instal-berrozpe-flota-vertical.png` |
| Fachada individual | `https://instalberrozpe.com/wp-content/uploads/2023/08/reloj-instal-berrozpe-fachada-individual.png` |

## Estructura local normalizada

### `assets-source/`

- `assets-source/logo/`
- `assets-source/photos/fachada/`
- `assets-source/photos/equipo/`
- `assets-source/photos/vehiculos/`
- `assets-source/photos/electricidad-domotica/`
- `assets-source/photos/lampisteria-climatizacion/`
- `assets-source/photos/alarmas-camaras/`
- `assets-source/open-graph/`
- `assets-source/brand/`

Estado:

- La estructura ya existe y esta preparada para recibir originales verificados.
- Por ahora solo contiene archivos `README.md` operativos; no se han copiado fotos reales nuevas sin auditoria adicional.

## Assets publicos activos en la nueva web

### Visuales corporativos temporales

| Asset | Ruta publica | Uso | Estado |
| --- | --- | --- | --- |
| Hero premium temporal | `/images/hero/instal-berrozpe-hero-premium.svg` | Home hero | Temporal |
| Proceso editorial temporal | `/images/hero/instal-berrozpe-proceso-editorial.svg` | Home proceso | Temporal |
| Fachada corporativa temporal | `/images/about/instal-berrozpe-fachada-corporativa-temporal.svg` | Home confianza / Sobre nosotros | Temporal |
| Contacto corporativo temporal | `/images/contact/instal-berrozpe-contacto-blanes.svg` | Home CTA / Contacto | Temporal |
| Servicio electricidad y domotica | `/images/services/instal-berrozpe-servicio-electricidad-domotica.svg` | Cards y detalle de servicio | Temporal |
| Servicio lampisteria y climatizacion | `/images/services/instal-berrozpe-lampisteria-climatizacion.svg` | Cards y detalle de servicio | Temporal |
| Servicio alarmas y camaras | `/images/services/instal-berrozpe-alarmas-camaras.svg` | Cards y detalle de servicio | Temporal |

Regla aplicada:

- No se han usado fotos stock ni se han presentado placeholders como trabajos reales.
- Todos los visuales temporales estan inventariados tambien en `content/shared/visuals.json`.

### Open Graph activos

| Asset | Ruta publica | Uso | Estado |
| --- | --- | --- | --- |
| OG default | `/og/default.png` | Home, sobre nosotros y legales | Temporal |
| OG services | `/og/services.png` | Indice y detalle de servicios | Temporal |
| OG contact | `/og/contact.png` | Contacto | Temporal |

Nota:

- Se estan sirviendo como PNG temporal por no existir todavia originales finales verificados para OG.
- Queda pendiente exportar version final en WebP si se aprueba una canalizacion de conversion reproducible dentro del proyecto.

## Assets a revisar antes de reutilizar

- Cualquier imagen con texto integrado.
- Assets con nombres erraticos o errores tipograficos (`HOHAR`, `electricitat` dentro de un contexto ES).
- Videos pesados o verticales que no aporten a la nueva web estatica.
- Variantes duplicadas en PNG y JPG del mismo motivo.

## Pendientes

- Confirmar si se van a reutilizar fotos reales de fachada, flota o equipo desde la web actual.
- Exportar versiones optimizadas finales si se aprueban fotos reales verificadas.
- Sustituir los placeholders SVG actuales cuando exista material propio confirmado.
- Evaluar exporte final de Open Graph en WebP.

## Recomendacion operativa

1. Descargar originales utiles a `assets-source/`.
2. Seleccionar solo activos realmente necesarios para la nueva arquitectura.
3. Generar versiones optimizadas finales para `public/` cuando se apruebe el diseno, el copy y la autenticidad del asset.
