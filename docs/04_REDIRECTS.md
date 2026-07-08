# 04 Redirects

## Criterio

Tabla de redirecciones 301 recomendada desde la estructura actual hacia la nueva arquitectura canonica en espanol.

| URL actual | URL nueva recomendada | Motivo |
| --- | --- | --- |
| `/` | `/` | Se mantiene el dominio raiz, pero deja de ser selector de idioma. |
| `/inicio/` | `/` | Home ES antigua a home final. |
| `/home/` | `/` | Home EN a home final ES. |
| `/inici/` | `/` | Home CAT a home final ES. |
| `/electricidad-y-domotica/` | `/servicios/electricidad-y-domotica/` | Reubicar bajo indice de servicios. |
| `/electricity-and-home-automation/` | `/servicios/electricidad-y-domotica/` | EN a canonico ES. |
| `/electricitat-i-domotica/` | `/servicios/electricidad-y-domotica/` | CAT a canonico ES. |
| `/lampisteria-y-climatizacion/` | `/servicios/lampisteria-y-climatizacion/` | Reubicar bajo indice de servicios. |
| `/plumbing-and-climate/` | `/servicios/lampisteria-y-climatizacion/` | EN a canonico ES. |
| `/lampisteria-y-climatizacio/` | `/servicios/lampisteria-y-climatizacion/` | CAT y slug mixto a canonico ES limpio. |
| `/alarmas-y-camaras-2/` | `/servicios/alarmas-y-camaras/` | Quitar sufijo estructural `-2`. |
| `/alarms-and-cameras/` | `/servicios/alarmas-y-camaras/` | EN a canonico ES. |
| `/alarmes-i-cameres/` | `/servicios/alarmas-y-camaras/` | CAT a canonico ES. |
| `/sobre-nosotros/` | `/sobre-nosotros/` | Mantener slug canonico. |
| `/about-us/` | `/sobre-nosotros/` | EN a canonico ES. |
| `/sobre-nosaltres/` | `/sobre-nosotros/` | CAT a canonico ES. |
| `/contacto/` | `/contacto/` | Mantener slug canonico. |
| `/contact/` | `/contacto/` | EN a canonico ES. |
| `/contacte/` | `/contacto/` | CAT a canonico ES. |
| `/terminos-y-condiciones-es/` | `/terminos-y-condiciones/` | Unificar legales. |
| `/terminos-y-condiciones-en/` | `/terminos-y-condiciones/` | EN a legal final ES. |
| `/terminos-y-condiciones-cat/` | `/terminos-y-condiciones/` | CAT a legal final ES. |
| `/politica-de-cookies/` | `/politica-de-cookies/` | Mantener slug canonico. |
| `/mas-informacion-sobre-las-cookies/` | `/politica-de-cookies/` | Integrar pagina auxiliar dentro de cookies. |

## Redirecciones recomendadas adicionales

- Cualquier URL EN o CAT futura no mantenida debe redirigir a su equivalente ES.
- Si se crean subservicios sin landing propia, redirigir a la landing del servicio principal correspondiente.
