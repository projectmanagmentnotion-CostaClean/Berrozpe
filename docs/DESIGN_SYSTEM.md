# DESIGN SYSTEM — Instal Berrozpe

## Objetivo visual

Crear una web minimalista, técnica, profesional y aireada. El diseño debe parecer trabajado en Figma, no una plantilla genérica.

## Principios

- Mobile-first.
- Mucho aire entre elementos.
- Jerarquía visual clara.
- Botones evidentes.
- Cards limpias.
- Imágenes reales.
- Iconos discretos.
- Animaciones suaves.
- Nada recargado.

## Breakpoints de referencia

```txt
mobile-sm: 360px
mobile: 390px
mobile-lg: 430px
tablet: 768px
laptop: 1366px
desktop: 1440px
desktop-lg: 1920px
```

## Containers

```txt
Mobile:
padding lateral: 16px

Tablet:
padding lateral: 32px

Desktop:
padding lateral: 64px
max-width: 1180px / 1240px
```

## Secciones

```txt
Sección compacta mobile: 48px - 56px vertical
Sección normal mobile: 64px - 72px vertical
Sección hero mobile: 72px - 96px vertical

Sección compacta desktop: 64px - 80px vertical
Sección normal desktop: 96px - 120px vertical
Sección hero desktop: 120px - 144px vertical
```

## Tipografía

```txt
H1 desktop: 56px - 64px
H1 tablet: 44px - 52px
H1 mobile: 36px - 42px

H2 desktop: 40px - 48px
H2 tablet: 34px - 40px
H2 mobile: 30px - 34px

H3 desktop: 24px - 30px
H3 mobile: 22px - 26px

Texto base: 16px - 18px
Texto pequeño: 14px
Line-height base: 1.5 - 1.7
```

## Botones

### Botón principal desktop

```txt
height: 52px
padding: 0 28px
border-radius: 999px
font-size: 16px
font-weight: 600
```

### Botón principal mobile

```txt
height: 48px
padding: 0 22px
border-radius: 999px
font-size: 15px - 16px
width: 100% en bloques de conversión
```

### Botón secundario

```txt
height: 48px
border: 1px solid
background: transparent
border-radius: 999px
```

### Accesibilidad

```txt
Área táctil mínima: 44px
Focus visible obligatorio
Contraste suficiente
No depender solo del color
```

## Cards

```txt
border-radius: 24px
padding desktop: 32px
padding tablet: 28px
padding mobile: 22px
gap interno: 16px - 24px
borde: 1px sólido suave
sombra: muy ligera si se usa
```

## Header

```txt
Altura desktop: 72px - 84px
Altura mobile: 64px - 72px
Logo visible
Navegación clara
CTA principal visible en desktop
Menú móvil limpio
```

## Footer

Debe incluir:

- Logo.
- Servicios principales.
- Datos de contacto.
- Enlaces legales.
- Horario.
- Sitemap básico.

## Componentes obligatorios

```txt
Button
Container
Section
Card
Badge
Header
Footer
Hero
ServiceCard
CTASection
FAQSection
ContactForm
PrivacyConsent
```

## Reglas de implementación

- No duplicar componentes.
- No crear estilos sueltos sin motivo.
- Usar tokens de Tailwind.
- Mantener componentes simples y reutilizables.
- El contenido debe venir desde `/content`.
