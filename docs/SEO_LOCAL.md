# SEO LOCAL — Instal Berrozpe

## Objetivo

Optimizar la web para búsquedas locales relacionadas con instalaciones técnicas en Blanes, Girona y zonas reales confirmadas.

## Regla principal

No inventar zonas, servicios, certificaciones ni promesas comerciales. El SEO debe mejorar la claridad y la intención de búsqueda usando contenido real.

## Páginas objetivo

```txt
/
/servicios/
/servicios/electricidad/
/servicios/domotica/
/servicios/lampisteria/
/servicios/aire-acondicionado/
/servicios/calefaccion/
/servicios/calderas/
/servicios/energia-solar-fotovoltaica/
/servicios/energia-solar-termica/
/servicios/asesoria-energetica/
/servicios/alarmas/
/servicios/camaras-cctv-ip/
/sobre-nosotros/
/contacto/
```

## Keywords locales base

```txt
electricista Blanes
lampista Blanes
aire acondicionado Blanes
calderas Blanes
alarmas Blanes
cámaras seguridad Blanes
domótica Blanes
energía solar Girona
instalador eléctrico Girona
lampistería Girona
climatización Blanes
```

## Obligatorio por página

Cada página debe tener:

- Title único.
- Meta description única.
- H1 único.
- Canonical.
- URL limpia.
- Open Graph.
- Alt text en imágenes.
- Enlaces internos.
- CTA visible.
- Schema cuando aplique.

## Schema recomendado

```txt
LocalBusiness
HomeAndConstructionBusiness
Service
FAQPage
BreadcrumbList
ContactPoint
```

## Titles ejemplo

```txt
Inicio: Instalaciones en Blanes y Girona | Instal Berrozpe
Electricidad: Electricista en Blanes y Girona | Instal Berrozpe
Lampistería: Lampista en Blanes y Girona | Instal Berrozpe
Aire acondicionado: Aire acondicionado en Blanes | Instal Berrozpe
Alarmas: Alarmas y cámaras de seguridad en Blanes | Instal Berrozpe
Contacto: Contacto | Instal Berrozpe Blanes
```

## Meta descriptions ejemplo

```txt
Instal Berrozpe ofrece servicios de electricidad, lampistería, climatización, domótica, energía solar, alarmas y cámaras CCTV/IP en Blanes y Girona.
```

## Redirecciones 301 a revisar

URLs actuales detectadas o probables:

```txt
/inicio/
/contact/
/electricity-and-home-automation/
/plumbing-and-climate/
/alarms-and-cameras/
/sobre-nosotros/
```

Ejemplo `.htaccess`:

```apache
Redirect 301 /inicio/ /
Redirect 301 /contact/ /contacto/
Redirect 301 /electricity-and-home-automation/ /servicios/electricidad/
Redirect 301 /plumbing-and-climate/ /servicios/lampisteria/
Redirect 301 /alarms-and-cameras/ /servicios/alarmas/
```

## Sitemap y robots

El build final debe incluir:

```txt
sitemap.xml
robots.txt
```

El sitemap debe contener solo URLs finales indexables.

Staging debe estar protegido con `noindex`.

## Enlaces internos

Desde home enlazar a:

- Servicios.
- Servicios principales.
- Contacto.
- Sobre nosotros.

Desde cada servicio enlazar a:

- Contacto.
- Servicios relacionados.
- Servicios índice.

## Imágenes

Cada imagen debe tener:

- Nombre descriptivo.
- Formato WebP/AVIF cuando sea posible.
- Alt text real.
- Peso optimizado.

Ejemplo:

```txt
camaras-seguridad-cctv-blanes.webp
alt: Instalación de cámaras de seguridad CCTV/IP en Blanes
```

## Checklist SEO final

- [ ] Title único por página.
- [ ] Meta description única por página.
- [ ] H1 único por página.
- [ ] Canonical correcto.
- [ ] Sitemap generado.
- [ ] Robots correcto.
- [ ] Redirecciones 301 activas.
- [ ] Schema válido.
- [ ] Open Graph.
- [ ] Imágenes con alt.
- [ ] Enlaces internos.
- [ ] Sin páginas staging indexables.
