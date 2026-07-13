# 05 Asset Inventory

## Alcance

Inventario de assets detectados en la web actual y de los assets realmente integrados en la nueva base Astro durante el sprint visual. Se usa para distinguir:

- assets legacy detectados pero todavia no migrados;
- assets publicos ya activos en `public/`;
- placeholders corporativos temporales solo como referencia legacy mientras no existan fotos reales confirmadas.

Guia obligatoria complementaria:

- [ASSET_REQUIREMENTS.md](/C:/Users/USUARIO/Documents/Berrozpe/docs/ASSET_REQUIREMENTS.md)

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

- La estructura ya existe y ya contiene los originales aprobados copiados desde `C:\Users\USUARIO\Desktop\instal berrozpe`.
- El editable `instal berrozpe.cdr` se mantiene fuera del repo publico por peso y por no ser necesario para la salida estatica.

## Assets publicos activos en la nueva web

### Visuales reales activos

| Asset | Ruta publica | Uso | Estado |
| --- | --- | --- | --- |
| Hero instalaciones Blanes | `/images/hero/instal-berrozpe-hero-instalaciones-blanes.webp` | Home hero | Real aprobado |
| Hero instalaciones Blanes mobile | `/images/hero/instal-berrozpe-hero-instalaciones-blanes-mobile.webp` | Home hero mobile | Real aprobado |
| Proceso editorial real | `/images/hero/instal-berrozpe-proceso-editorial-real.webp` | Home proceso | Real aprobado |
| Fachada Blanes | `/images/about/instal-berrozpe-fachada-blanes.webp` | Home confianza / Sobre nosotros | Real aprobado |
| Fachada Blanes mobile | `/images/about/instal-berrozpe-fachada-blanes-mobile.webp` | Variantes mobile | Real aprobado |
| Contacto equipo Blanes | `/images/contact/instal-berrozpe-contacto-equipo-blanes.webp` | Home CTA / Contacto | Real aprobado |
| Contacto equipo Blanes mobile | `/images/contact/instal-berrozpe-contacto-equipo-blanes-mobile.webp` | Variantes mobile | Real aprobado |
| Electricidad y domotica detalle | `/images/services/instal-berrozpe-electricidad-domotica-blanes.webp` | Detalle de servicio | Real aprobado |
| Electricidad y domotica card | `/images/services/instal-berrozpe-electricidad-domotica-blanes-card.webp` | Cards y mobile | Real aprobado |
| Lampisteria y climatizacion detalle | `/images/services/instal-berrozpe-lampisteria-climatizacion-blanes.webp` | Detalle de servicio | Real aprobado |
| Lampisteria y climatizacion card | `/images/services/instal-berrozpe-lampisteria-climatizacion-blanes-card.webp` | Cards y mobile | Real aprobado |
| Alarmas y camaras detalle | `/images/services/instal-berrozpe-alarmas-camaras-cctv-blanes.webp` | Detalle de servicio | Real aprobado |
| Alarmas y camaras card | `/images/services/instal-berrozpe-alarmas-camaras-cctv-blanes-card.webp` | Cards y mobile | Real aprobado |

Regla aplicada:

- No se han usado fotos stock ni se han presentado placeholders como trabajos reales.
- Todos los visuales activos estan inventariados en `content/shared/visuals.json`.

### Open Graph activos

| Asset | Ruta publica | Uso | Estado |
| --- | --- | --- | --- |
| OG default | `/og/default.png` | Home, sobre nosotros y legales | Real aprobado |
| OG services | `/og/services.png` | Indice y detalle de servicios | Real aprobado |
| OG contact | `/og/contact.png` | Contacto | Real aprobado |

Nota:

- Se sirven como PNG optimizado aprobado por compatibilidad social.
- No se ha generado variante WebP porque el requerimiento de compatibilidad ya queda cubierto con PNG optimizado.

## Assets a revisar antes de reutilizar

- Cualquier imagen con texto integrado.
- Assets con nombres erraticos o errores tipograficos (`HOHAR`, `electricitat` dentro de un contexto ES).
- Videos pesados o verticales que no aporten a la nueva web estatica.
- Variantes duplicadas en PNG y JPG del mismo motivo.

## Pendientes

- Decidir si se eliminan del repo los SVG temporales legacy no referenciados.
- Evaluar una segunda fase para incorporar galeria visible de equipo o flota si se necesitara.

## Recomendacion operativa

1. Mantener los originales aprobados en `assets-source/`.
2. Seleccionar solo activos realmente necesarios para la nueva arquitectura.
3. Regenerar derivados optimizados solo si cambia el origen aprobado.
