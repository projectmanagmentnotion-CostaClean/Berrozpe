# 04 Redirects

## Criterio

Tabla de redirecciones 301 recomendada desde la estructura actual auditada hacia la nueva arquitectura multidioma sincronizada.

| URL actual | URL nueva recomendada | Motivo |
| --- | --- | --- |
| `/` | `/` | El dominio raíz deja de ser selector de idioma y pasa a ser home ES. |
| `/inicio/` | `/` | Home ES antigua al nuevo home ES. |
| `/home/` | `/en/` | Home EN antigua al nuevo home EN. |
| `/inici/` | `/ca/` | Home CA antigua al nuevo home CA. |
| `/electricidad-y-domotica/` | `/servicios/electricidad-y-domotica/` | Servicio ES reubicado bajo `/servicios/`. |
| `/electricity-and-home-automation/` | `/en/services/electricity-and-home-automation/` | Servicio EN al nuevo árbol EN. |
| `/electricitat-i-domotica/` | `/ca/serveis/electricitat-i-domotica/` | Servicio CA al nuevo árbol CA. |
| `/lampisteria-y-climatizacion/` | `/servicios/lampisteria-y-climatizacion/` | Servicio ES reubicado bajo `/servicios/`. |
| `/plumbing-and-climate/` | `/en/services/plumbing-and-climate-control/` | Servicio EN con slug nuevo normalizado. |
| `/lampisteria-y-climatizacio/` | `/ca/serveis/lampisteria-i-climatitzacio/` | Servicio CA con slug nuevo normalizado. |
| `/alarmas-y-camaras-2/` | `/servicios/alarmas-y-camaras/` | Se elimina el sufijo estructural `-2`. |
| `/alarms-and-cameras/` | `/en/services/alarms-and-cameras/` | Servicio EN al nuevo árbol EN. |
| `/alarmes-i-cameres/` | `/ca/serveis/alarmes-i-cameres/` | Servicio CA al nuevo árbol CA. |
| `/sobre-nosotros/` | `/sobre-nosotros/` | La ruta ES se mantiene. |
| `/about-us/` | `/en/about-us/` | La ruta EN pasa a vivir bajo prefijo de idioma. |
| `/sobre-nosaltres/` | `/ca/sobre-nosaltres/` | La ruta CA pasa a vivir bajo prefijo de idioma. |
| `/contacto/` | `/contacto/` | La ruta ES se mantiene. |
| `/contact/` | `/en/contact/` | La ruta EN pasa a vivir bajo prefijo de idioma. |
| `/contacte/` | `/ca/contacte/` | La ruta CA pasa a vivir bajo prefijo de idioma. |
| `/terminos-y-condiciones-es/` | `/terminos-y-condiciones/` | Legal ES unificado. |
| `/terminos-y-condiciones-en/` | `/en/terms-and-conditions/` | Legal EN bajo prefijo de idioma. |
| `/terminos-y-condiciones-cat/` | `/ca/termes-i-condicions/` | Legal CA bajo prefijo de idioma. |
| `/politica-de-cookies/` | `/politica-de-cookies/` | La ruta ES se mantiene. |
| `/mas-informacion-sobre-las-cookies/` | `/politica-de-cookies/` | La página auxiliar se integra en cookies. |

## Regla adicional

- Si el routing multidioma definitivo se activa, toda URL histórica debe redirigir a la versión del mismo idioma cuando exista, y no siempre a la versión `es`.
