# El Cronista Sur — Portada de Diario Digital

Actividad práctica de Diseño Web — **FlexBox + Mobile First Responsive Design**

## Vista en GitHub Pages

🔗 **[Ver portada online](https://USUARIO.github.io/ActividadFlexbox/)**
> *(Reemplazar `USUARIO` con el nombre de usuario de GitHub una vez habilitado GitHub Pages)*

---

## Descripción

Portada de un diario digital ficticio llamado **El Cronista Sur**, construida con HTML5 semántico y CSS3 puro usando **Flexbox** como herramienta principal de layout, siguiendo el paradigma **Mobile First**.

## Estructura del proyecto

```
ActividadFlexbox/
├── index.html          # Página principal
├── css/
│   ├── normalize.css   # Normalizador (necolas/normalize.css v8.0.1)
│   ├── base.css        # Variables CSS, tipografía, reset propio
│   ├── layout.css      # Estructura Flexbox y media queries
│   └── components.css  # Estilos de cada componente UI
└── README.md
```

## Contenido de la portada

- **Nombre y slogan** del diario + fecha + clima
- **Barra de última hora** (breaking news)
- **Menú de navegación**: horizontal en desktop, ícono ☰ en mobile
- **Noticia hero** (principal) con imagen, título, resumen y link
- **Grid de noticias secundarias** con imagen, título, resumen y link
- **Noticias horizontales** (imagen + texto) para secciones específicas
- **Lista de noticias breves** (solo título + link, sin imagen)
- **Sidebar** con: lo más leído, opinión/columnas, internacionales breves
- **Publicidades** integradas en el flujo del contenido
- **Footer** con secciones, links y redes sociales

## Breakpoints — Mobile First

| Tamaño         | min-width | Layout                                   |
|----------------|-----------|------------------------------------------|
| Mobile         | —         | 1 columna, menú hamburguesa ☰            |
| Tablet         | 600px     | 2 columnas en grids, menú hamburguesa    |
| Desktop S      | 900px     | 2 columnas (contenido + sidebar), nav horizontal |
| Desktop L      | 1100px    | 3 columnas en grids secundarios          |
| TV / XL        | 1400px    | Fuente base aumentada a 18px             |

## Tecnologías

- HTML5 semántico (roles ARIA, `<main>`, `<article>`, `<aside>`, `<nav>`)
- CSS3: Custom Properties (variables), Flexbox, Media Queries
- normalize.css v8.0.1 para consistencia cross-browser
- Sin JavaScript, sin frameworks externos

## Pasos de entrega realizados

- [x] Carpeta del proyecto creada
- [x] `git init` ejecutado
- [x] Repositorio creado en GitHub y vinculado con `git remote add`
- [x] HTML + CSS desarrollados con enfoque Mobile First
- [x] normalize.css incluido
- [x] CSS separado en múltiples archivos por responsabilidad
- [x] Commits realizados con el progreso
- [x] GitHub Pages habilitado
- [x] README con link de GitHub Pages
