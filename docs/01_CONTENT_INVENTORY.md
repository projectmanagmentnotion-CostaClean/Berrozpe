# 01 Content Inventory

## Alcance de la auditoria

- Fecha de auditoria: 2026-07-08
- Dominio auditado: `https://instalberrozpe.com`
- Fuente principal: HTML publico, `robots.txt`, `sitemap_index.xml`, `page-sitemap.xml` y API publica de WordPress (`wp-json/wp/v2/pages`, `wp-json/wp/v2/media`)
- Limitacion: la auditoria refleja el contenido publicado en la web actual. No valida que todas las afirmaciones comerciales sean ciertas fuera de la propia web.

## Documentacion previa faltante en el repo

Estos archivos no existian al iniciar el sprint:

- `docs/ROADMAP.md`
- `docs/CODEX_WORKFLOW.md`
- `docs/SEO_LOCAL.md`
- `docs/SITEGROUND_DEPLOYMENT_GUIDE.md`

## URLs y paginas actuales detectadas

### Entrada y home por idioma

| URL | Tipo | Idioma | Observacion |
| --- | --- | --- | --- |
| `https://instalberrozpe.com/` | Selector de idioma | Mixto | Home real actual del dominio. |
| `https://instalberrozpe.com/inicio/` | Home | ES | Version espanola principal. |
| `https://instalberrozpe.com/home/` | Home | EN | Version inglesa. |
| `https://instalberrozpe.com/inici/` | Home | CAT | Version catalana. |

### Servicios por idioma

| URL | Idioma | Estado |
| --- | --- | --- |
| `https://instalberrozpe.com/electricidad-y-domotica/` | ES | Publicada |
| `https://instalberrozpe.com/lampisteria-y-climatizacion/` | ES | Publicada |
| `https://instalberrozpe.com/alarmas-y-camaras-2/` | ES | Publicada |
| `https://instalberrozpe.com/electricity-and-home-automation/` | EN | Publicada |
| `https://instalberrozpe.com/plumbing-and-climate/` | EN | Publicada |
| `https://instalberrozpe.com/alarms-and-cameras/` | EN | Publicada |
| `https://instalberrozpe.com/electricitat-i-domotica/` | CAT | Publicada |
| `https://instalberrozpe.com/lampisteria-y-climatizacio/` | CAT | Publicada |
| `https://instalberrozpe.com/alarmes-i-cameres/` | CAT | Publicada |

### Corporativo y contacto por idioma

| URL | Idioma | Estado |
| --- | --- | --- |
| `https://instalberrozpe.com/sobre-nosotros/` | ES | Publicada |
| `https://instalberrozpe.com/contacto/` | ES | Publicada |
| `https://instalberrozpe.com/about-us/` | EN | Publicada |
| `https://instalberrozpe.com/contact/` | EN | Publicada |
| `https://instalberrozpe.com/sobre-nosaltres/` | CAT | Publicada |
| `https://instalberrozpe.com/contacte/` | CAT | Publicada |

### Legales actuales

| URL | Idioma | Estado |
| --- | --- | --- |
| `https://instalberrozpe.com/terminos-y-condiciones-es/` | ES | Publicada |
| `https://instalberrozpe.com/terminos-y-condiciones-en/` | EN | Publicada |
| `https://instalberrozpe.com/terminos-y-condiciones-cat/` | CAT | Publicada |
| `https://instalberrozpe.com/politica-de-cookies/` | ES | Publicada |
| `https://instalberrozpe.com/mas-informacion-sobre-las-cookies/` | ES | Publicada |

## Servicios reales detectados

### Servicios principales con pagina propia

| Servicio real | URL actual ES | Evidencia |
| --- | --- | --- |
| Electricidad y domotica | `/electricidad-y-domotica/` | Pagina propia en ES, EN y CAT. |
| Lampisteria y climatizacion | `/lampisteria-y-climatizacion/` | Pagina propia en ES, EN y CAT. |
| Alarmas y camaras CCTV e IP | `/alarmas-y-camaras-2/` | Pagina propia en ES, EN y CAT. |

### Subservicios mencionados dentro de paginas

Estos items aparecen como bloques internos de paginas reales, pero no como paginas individuales actuales:

- Dentro de `electricidad-y-domotica`: electricidad, domotica, energia solar fotovoltaica, asesoria energetica.
- Dentro de `lampisteria-y-climatizacion`: lampisteria, aire acondicionado, calefaccion, calderas, energia solar termica.
- Dentro de `alarmas-y-camaras-2`: alarmas, camaras CCTV e IP.

### Servicios o claims que requieren confirmacion antes de usarse como promesa principal

- Reformas y mantenimiento aparecen en el titulo SEO del root, pero no tienen pagina propia ni desarrollo claro en el contenido auditado.
- Energias renovables aparece en la pagina "Sobre nosotros", pero se reparte entre fotovoltaica, solar termica y asesoria energetica segun cada pagina.
- "Equipo certificado" y "mas de 10 anos de experiencia" aparecen en copy comercial, pero no cuentan con soporte documental dentro del repo.

## Textos reales detectados

### Mensajes principales del home ES

- Especialistas en electricidad, agua, climatizacion, alarmas y camaras de seguridad.
- Mas de 10 anos de experiencia.
- Valor diferencial declarado: servicio postventa con soporte tecnico y asesoria.
- Tres bloques destacados en home: electricidad y domotica, lampisteria y climatizacion, alarmas y camaras.

### Contenido corporativo

- La pagina "Sobre nosotros" insiste en electricidad, domotica, climatizacion, alarmas, CCTV/IP y energias renovables.
- Mision y valores son copy comercial largo y repetitivo.

### Contenido de contacto

- Hay formulario WPForms.
- Se publican direccion, horario, movil, telefono fijo y email.
- Se enlaza a WhatsApp e Instagram.

## Datos de contacto detectados

| Campo | Valor detectado | Estado |
| --- | --- | --- |
| Razon social | `Instal Berrozpe S.L.` | Confirmado en terminos ES/EN/CAT |
| NIF | `B-55326813` | Confirmado en terminos ES/EN/CAT |
| Responsable | `David Berrozpe Rivas` | Confirmado en terminos ES/EN/CAT |
| DNI | `45449937R` | Confirmado en terminos ES/EN/CAT |
| Direccion | `C/ Antiga nº 68, Baixos de Blanes (Girona)` | Confirmado en contacto |
| Direccion con CP | `C/ Antiga n°68 baixos, 17300 Blanes (Girona)` | Confirmado en terminos |
| Movil | `676 04 33 89` | Confirmado |
| Telefono fijo | `872 986 161` | Confirmado |
| Horario ES | `Lunes - Viernes 8:00 a 18:00` | Confirmado |
| Horario CAT | `Dilluns a Divendres de 8:00 a 18:00` | Confirmado |
| WhatsApp | `https://wa.me/34676043389?text=Hola%20Instal%20Berrozpe%20quiero%20informacion%20😁` | Confirmado |
| Instagram | `https://www.instagram.com/instalberrozpe/?hl=es` | Confirmado |

## Emails detectados

| Email | Donde aparece | Estado |
| --- | --- | --- |
| `david@instalberrozpe.com` | Contacto ES/EN/CAT y terminos ES/EN/CAT | Fuerte |
| `David@instalberrozpe.com` | Terminos ES/EN/CAT | Misma cuenta con mayuscula |
| `comercial@instalberrozpe.com` | Sobre nosotros ES y CAT | Conflicto, requiere confirmacion |

## Telefonos detectados

| Telefono | Donde aparece | Estado |
| --- | --- | --- |
| `676 04 33 89` | Contacto, Sobre nosotros, Terminos | Confirmado |
| `+34 676 04 33 89` | Terminos | Confirmado |
| `872 986 161` | Contacto y Sobre nosotros | Confirmado |

## Direccion y zona

- Direccion publicada: `C/ Antiga nº 68, Baixos de Blanes (Girona)`.
- Codigo postal publicado en terminos: `17300`.
- No hay lista publicada de municipios, comarca o provincia de cobertura.
- El copy de FAQ dice que trabajan fuera de su area local, pero no concreta zonas.

## Horarios

- ES: `Lunes - Viernes 8:00 a 18:00`
- EN: `Monday - Friday 8:00 a 18:00`
- CAT: `Dilluns a Divendres de 8:00 a 18:00`

## Idiomas actuales

- Espanol
- Ingles
- Catalan

La estructura actual duplica el contenido por idioma con slugs distintos.

## Imagenes y assets detectados

Resumen de assets visibles en paginas y sitemap:

- Logos e iconos: `cropped-reloj-instal-berrozpe-logo.png`, `reloj-instal-berrozpe-logo.png`, `icon-berrozpe.png`.
- Selector de idioma: `bandera-es.png`, `bandera-en2.png`, `bandera-cat.png`.
- Imagenes de servicios: `inicio-electricidad.png`, `inicio-climatizacion.png`, `inicio-camara.png`, `agua-1.png`, `aire-acondicionado-1.png`, `domotica-1.png`, `asesoria-energetica-1.png`, `calderas-1.png`, `calefaccion-1.png`, `agua-y-climatizacion-1.png`, `camaras-1.png`, `energia-solar-termica-berrozpe-1.png`, `reloj-instal-berrozpe-electricitat-1.png`, `reloj-instal-berrozpeHOHAR-INTELIGENTE.png`, `reloj-instal-berrozpeteclado.png`.
- Fotos corporativas: `instal-berrozpe-team-1.png`, `instal-berrozpe-team-2.png`, `instal-berrozpe-team-3.png`, `instal-berrozpe-fachada-3.png`, `instal-berrozpe-flota-y-fachada-2.png`.
- Video actual en portada del selector: `1538033_Electrician_Repairing_1920x1080.mp4`.
- Videos detectados en media library: `lv_0_20230826121712.mp4`, `lv_0_20230826114856.mp4`.

## Paginas legales actuales

### Presentes

- Terminos y condiciones en ES, EN y CAT.
- Politica de cookies.
- Pagina auxiliar "Mas informacion sobre las cookies".
- Banner de cookies activo por plugin.

### Ausentes o no detectadas

- Aviso legal
- Politica de privacidad

## Errores de texto, traduccion o consistencia

- `Eelectricidad y Domotica` en el titulo de la pagina ES del servicio.
- CTA `Proteje` en lugar de `Protege` en el home ES.
- El home CAT usa un titulo mezclado: `Experts en Electricitat, Lampistería, Climatització i Seguretat`.
- Hay mezcla de espanol/catalan en slugs como `lampisteria-y-climatizacio`.
- En la pagina CAT aparecen fragmentos con formato roto: `En *Instal *Berrozpe`.
- Los terminos muestran fecha entre corchetes: `[viernes, 28 de julio de 2023]`.
- El contador de clientes satisfechos muestra `0`, lo que debilita credibilidad.
- La pagina de cookies afirma uso de Google Analytics, pero en la muestra HTML auditada no se detectaron scripts de `gtag`, `googletagmanager` ni `analytics.js`.
- Los terminos remiten a una politica de privacidad que no se detecta publicada.
- El root `/` no es la home comercial, sino un selector de idioma.

## Contenido duplicado

- Home duplicado en tres idiomas (`/inicio/`, `/home/`, `/inici/`).
- Servicios duplicados en tres idiomas.
- Sobre nosotros duplicado en tres idiomas.
- Contacto duplicado en tres idiomas.
- Terminos y condiciones duplicados en tres idiomas.
- Parte del contenido se repite literalmente entre home, servicios y sobre nosotros.

## Contenido que necesita confirmacion antes de usarse como verdad editorial

- Email principal final: `david@...` frente a `comercial@...`.
- "Mas de 10 anos de experiencia".
- "Equipo certificado".
- Garantias ofrecidas.
- Cobertura geografica exacta.
- Reformas y mantenimiento como servicio real.
- Analitica/cookies de terceros realmente activas hoy.
