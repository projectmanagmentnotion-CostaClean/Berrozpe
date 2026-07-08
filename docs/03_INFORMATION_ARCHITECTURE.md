# 03 Information Architecture

## Objetivo

Definir una arquitectura simple, monolingue y mantenible que se alimente solo desde `/content`.

## Arquitectura recomendada

### 1. Inicio

Proposito:

- Presentar propuesta general.
- Resumir los tres servicios reales.
- Mostrar datos de contacto esenciales.
- Derivar a paginas de servicio y contacto.

Bloques recomendados:

- Hero
- Resumen de servicios
- Sobre nosotros resumido
- Datos de contacto
- CTA final

### 2. Servicios

Proposito:

- Mostrar el listado limpio de los tres servicios reales.
- Evitar duplicacion de copy entre home y sobre nosotros.

### 3. Paginas individuales de servicio

Proposito:

- Desarrollar cada servicio principal con su propio enfoque SEO.
- Mantener subservicios como bloques internos mientras no haya evidencia para mas URLs.

Servicios confirmados:

- Electricidad y domotica
- Lampisteria y climatizacion
- Alarmas y camaras

### 4. Sobre nosotros

Proposito:

- Consolidar identidad de empresa.
- Mantener solo afirmaciones confirmadas.
- Unificar email, direccion y horario.

### 5. Contacto

Proposito:

- Mostrar telefono, telefono/fax, direccion, horario, email definitivo y canales externos.
- Incluir formulario solo si se redefine la via de recepcion y RGPD.

### 6. Legal

Proposito:

- Separar claramente aviso legal, privacidad, cookies y terminos.
- Evitar dependencia de textos heredados no verificados.

## Modelo de contenido recomendado

### `content/site`

- Ajustes globales
- Datos de negocio
- Contacto canonico
- Metadatos SEO base

### `content/home`

- Un archivo por seccion
- Sin duplicar descripciones completas de cada servicio

### `content/services`

- Un archivo por servicio principal
- Slug final limpio
- Resumen
- Bloques textuales
- Nota de cobertura

### `content/legal`

- Un archivo por pagina legal
- Mantener estatus de validacion fuera del componente

## Decisiones de idioma

- Canonico final recomendado: espanol.
- EN y CAT actuales deben vivir como redirecciones 301, no como arquitectura final principal, salvo que se confirme estrategia multilingue real.

## Riesgos detectados

- El contenido actual mezcla promesas comerciales no verificadas con datos utiles.
- Hay conflicto de email principal.
- No existe una politica de privacidad visible, aunque el sitio la menciona.
- Hay demasiada repeticion entre home, servicios y corporativa.
