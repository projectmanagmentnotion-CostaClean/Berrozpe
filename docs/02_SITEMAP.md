# 02 Sitemap

## Decisión

- La raíz `/` existe solo como redirección controlada a `/es/`.
- El sitemap indexable se basa en las rutas finales con prefijo de idioma para `es`, `ca`, `en` y `de`.
- Todas las páginas publicables tienen equivalente en los cuatro idiomas.

## Rutas finales

### Comunes por idioma

| Tipo | es | ca | en | de |
| --- | --- | --- | --- | --- |
| Home | `/es/` | `/ca/` | `/en/` | `/de/` |
| Servicios | `/es/servicios/` | `/ca/serveis/` | `/en/services/` | `/de/dienstleistungen/` |
| Sobre nosotros | `/es/sobre-nosotros/` | `/ca/sobre-nosaltres/` | `/en/about-us/` | `/de/ueber-uns/` |
| Contacto | `/es/contacto/` | `/ca/contacte/` | `/en/contact/` | `/de/kontakt/` |
| Aviso legal | `/es/aviso-legal/` | `/ca/avis-legal/` | `/en/legal-notice/` | `/de/impressum/` |
| Privacidad | `/es/politica-de-privacidad/` | `/ca/politica-de-privacitat/` | `/en/privacy-policy/` | `/de/datenschutz/` |
| Cookies | `/es/politica-de-cookies/` | `/ca/politica-de-cookies/` | `/en/cookie-policy/` | `/de/cookies/` |
| Términos | `/es/terminos-y-condiciones/` | `/ca/termes-i-condicions/` | `/en/terms-and-conditions/` | `/de/allgemeine-geschaeftsbedingungen/` |

### Servicios sincronizados

| serviceId | es | ca | en | de |
| --- | --- | --- | --- | --- |
| `electricidad-y-domotica` | `/es/servicios/electricidad-y-domotica/` | `/ca/serveis/electricitat-i-domotica/` | `/en/services/electricity-and-home-automation/` | `/de/dienstleistungen/elektrizitaet-und-smart-home/` |
| `lampisteria-y-climatizacion` | `/es/servicios/lampisteria-y-climatizacion/` | `/ca/serveis/lampisteria-i-climatitzacio/` | `/en/services/plumbing-and-climate-control/` | `/de/dienstleistungen/sanitaer-und-klimatechnik/` |
| `alarmas-y-camaras` | `/es/servicios/alarmas-y-camaras/` | `/ca/serveis/alarmes-i-cameres/` | `/en/services/alarms-and-cameras/` | `/de/dienstleistungen/alarmanlagen-und-kameras/` |

## Resultado esperado en build

- 4 homes
- 4 índices de servicios
- 12 detalles de servicio
- 4 páginas de sobre nosotros
- 4 páginas de contacto
- 16 páginas legales
- 1 raíz técnica `/` con redirección a `/es/`
