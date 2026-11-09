# 04 Redirects

## Criterio

- Toda URL histórica debe resolver a la misma intención y al mismo idioma cuando exista equivalente.
- Las rutas españolas antiguas sin prefijo se consolidan bajo `/es/`.
- La raíz `/` redirige a `/es/`.

## Tabla 301 recomendada

| Antigua | Nueva | Motivo |
| --- | --- | --- |
| `/` | `/es/` | Entrada controlada a la variante española. |
| `/inicio/` | `/es/` | Home ES antigua. |
| `/servicios/` | `/es/servicios/` | Índice ES antiguo sin prefijo. |
| `/sobre-nosotros/` | `/es/sobre-nosotros/` | Página ES antigua sin prefijo. |
| `/contacto/` | `/es/contacto/` | Página ES antigua sin prefijo. |
| `/aviso-legal/` | `/es/aviso-legal/` | Legal ES antigua sin prefijo. |
| `/politica-de-privacidad/` | `/es/politica-de-privacidad/` | Legal ES antigua sin prefijo. |
| `/politica-de-cookies/` | `/es/politica-de-cookies/` | Legal ES antigua sin prefijo. |
| `/terminos-y-condiciones/` | `/es/terminos-y-condiciones/` | Legal ES antigua sin prefijo. |
| `/electricidad-y-domotica/` | `/es/servicios/electricidad-y-domotica/` | Servicio ES antiguo. |
| `/lampisteria-y-climatizacion/` | `/es/servicios/lampisteria-y-climatizacion/` | Servicio ES antiguo. |
| `/alarmas-y-camaras-2/` | `/es/servicios/alarmas-y-camaras/` | Normalización de slug raro. |
| `/home/` | `/en/` | Home EN antigua. |
| `/about-us/` | `/en/about-us/` | Página EN antigua sin prefijo. |
| `/contact/` | `/en/contact/` | Página EN antigua sin prefijo. |
| `/electricity-and-home-automation/` | `/en/services/electricity-and-home-automation/` | Servicio EN antiguo. |
| `/plumbing-and-climate/` | `/en/services/plumbing-and-climate-control/` | Servicio EN antiguo con slug normalizado. |
| `/alarms-and-cameras/` | `/en/services/alarms-and-cameras/` | Servicio EN antiguo. |
| `/inici/` | `/ca/` | Home CA antigua. |
| `/sobre-nosaltres/` | `/ca/sobre-nosaltres/` | Página CA antigua sin prefijo. |
| `/contacte/` | `/ca/contacte/` | Página CA antigua sin prefijo. |
| `/electricitat-i-domotica/` | `/ca/serveis/electricitat-i-domotica/` | Servicio CA antiguo. |
| `/lampisteria-y-climatizacio/` | `/ca/serveis/lampisteria-i-climatitzacio/` | Servicio CA antiguo con slug normalizado. |
| `/alarmes-i-cameres/` | `/ca/serveis/alarmes-i-cameres/` | Servicio CA antiguo. |

## Implementación preparada

- Fuente de verdad editorial: [content/shared/redirects.json](/C:/Users/USUARIO/Documents/Berrozpe/content/shared/redirects.json)
- Reglas de Apache para SiteGround: [public/.htaccess](/C:/Users/USUARIO/Documents/Berrozpe/public/.htaccess)
