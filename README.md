# ASBOR — Sitio de demostración visual

Denim con carácter. Hecho en Colombia. Diseñado para trascender.

Este repositorio contiene la primera versión del sitio de ASBOR: una experiencia
editorial, oscura y cinematográfica construida con Next.js (App Router), React,
TypeScript estricto, Tailwind CSS, Framer Motion y GSAP.

**Es una demostración visual.** No hay backend, base de datos, autenticación,
pagos ni envío real de formularios. La encuesta de turno (`/turno`) y el
Laboratorio (`/laboratorio`) simulan su comportamiento con estado local de
React únicamente; al recargar la página, toda la información desaparece.

---

## 1. Resumen de la solución

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript estricto.
- **Estilos:** Tailwind CSS 4 (tokens de marca vía `@theme` en `globals.css`).
- **Animación:** Framer Motion (transiciones editoriales) + GSAP/ScrollTrigger
  (una revelación especial en la sección "El sello de ASBOR").
- **Formularios:** React Hook Form + Zod, solo para validación y estados
  visuales — sin envío real.
- **Contenido:** centralizado en `src/config` y `src/data`, para poder editar
  textos, precios, redes sociales y preguntas de la encuesta sin tocar
  componentes.
- **Medios faltantes:** cuando una imagen, video o SVG de marca no existe
  todavía en `/public`, los componentes muestran automáticamente un
  placeholder editorial elegante (marco punteado + nombre del archivo
  esperado) en vez de un ícono roto.

## 2. Arquitectura UX

Recorrido de la página principal, según el brief:

`Impacto visual (Hero) → curiosidad (Declaración de marca) → historia →
producto (GALA 001) → detalles (El sello) → propósito (Anatomía + Fundador)
→ confianza (Código ASBOR + Empaque + Camino + Social) → turno de compra`

Rutas de segundo nivel (`/coleccion/gala-001`, `/historia`, `/anatomia`,
`/codigo-asbor`) profundizan cada bloque temático. `/turno` y `/laboratorio`
son los dos formularios de demostración. `/gracias/*` son confirmaciones
visuales independientes. `/privacidad` y `/terminos` son documentos
preliminares marcados como pendientes de revisión legal.

## 3. Árbol de carpetas (resumen)

```
src/
  app/                      Rutas (App Router)
    page.tsx                Home
    coleccion/gala-001/
    historia/
    anatomia/
    codigo-asbor/
    turno/
    laboratorio/
    privacidad/
    terminos/
    gracias/turno/
    gracias/sugerencia/
    not-found.tsx
    sitemap.ts
    robots.ts
    layout.tsx
    globals.css
  components/
    layout/                 Header, MobileMenu, Footer, SocialIcons, WhatsAppButton
    system/                 JsonLd, Modal, Toast, ScrollProgress, ReducedMotionProvider
    ui/                     Botones, FormField, RadioCard, ConsentCheckbox, etc.
    home/                   Las 12 secciones de la página principal
    product/                ProductGallery, AnatomyDiagram, ProductDetailCard, ImageReveal
    media/                  HeroVideo, FounderVideo, SocialVideoCard, VideoWithFallback
    brand/                  SymbolExplorer, Timeline, BrandMark
    survey/                 PurchaseTurnSurvey, SurveyProgress, SurveyStep, SizeGuideModal
    laboratorio/            SuggestionForm
  config/                   brand.ts, navigation.ts, social.ts, media.ts
  data/                     collections.ts, product-specifications.ts, faqs.ts,
                             timeline.ts, symbols.ts, purchase-turn-survey.ts, laboratorio.ts
  lib/                      utils.ts, motion.ts, analytics.ts, schemas.ts (Zod)
  hooks/                    useReducedMotion.ts
public/
  brand/                    asbor-wordmark.svg, asbor-emblem.svg, asbor-monogram.svg (pendientes)
  images/gala/              Fotografía de producto (pendiente)
  images/social/            Portadas de video social (pendiente)
  videos/                   Hero y fundador (pendiente)
  videos/social/            Videos de la cuadrícula social (pendiente)
```

## 4. Instalación

Requisitos: Node.js 20+ y npm.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros scripts:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # ESLint (Next + reglas de React Compiler)
```

## 5. Dependencias principales

| Paquete | Uso |
|---|---|
| `next`, `react`, `react-dom` | Framework y runtime |
| `typescript` | Tipado estricto |
| `tailwindcss`, `@tailwindcss/postcss` | Estilos |
| `framer-motion` | Animaciones editoriales, menú móvil, pasos de encuesta |
| `gsap` | Revelación especial en "El sello de ASBOR" (scroll-linked) |
| `react-hook-form`, `@hookform/resolvers` | Control de formularios |
| `zod` | Validación local de formularios (sin red) |

No se usan Supabase, Firebase, bases de datos, CMS ni librerías de UI
genéricas (Bootstrap, MUI, Ant Design).

## 6. Configuración de Tailwind

Este proyecto usa Tailwind CSS 4, que define tokens de diseño directamente en
CSS. Los colores, tipografías y la animación `fade-up` de marca están
declarados en `src/app/globals.css` dentro de `@theme inline`, a partir de las
variables `--asbor-*` pedidas en el brief (negro, negro suave, carbón,
dorado, dorado mate, plata, marfil, blanco, borde, texto atenuado). Las
clases utilitarias (`bg-asbor-black`, `text-asbor-gold`, `font-display`,
`font-body`, etc.) están disponibles en todo el proyecto sin configuración
adicional.

## 7. Estilos globales

`src/app/globals.css` define: variables de marca, `scroll-behavior: smooth`
(desactivado bajo `prefers-reduced-motion`), estilos de selección de texto,
`.label-caps` (etiquetas en mayúsculas con tracking amplio), `.skip-link` y
`.focus-ring` (accesibilidad de teclado).

## 8. Archivos de configuración

- `src/config/brand.ts` — nombre, eslogan, propósito, misión, visión,
  valores, cita del fundador, microcopy global.
- `src/config/navigation.ts` — enlaces del header y footer.
- `src/config/social.ts` — Instagram, TikTok y WhatsApp (**enlaces
  provisionales**, reemplázalos aquí).
- `src/config/media.ts` — rutas de video/imagen provisionales del hero, el
  fundador, la cuadrícula social y el sello.

## 9. Datos editables

- `src/data/collections.ts` — GALA 001 (nombre, precio, estado, historia,
  galería de imágenes).
- `src/data/product-specifications.ts` — módulos de anatomía y puntos del
  diagrama interactivo. Usa `SpecificationStatus = "defined" | "testing" |
  "pending"`; nunca se inventan composición, peso, medidas ni proveedores.
- `src/data/faqs.ts`, `src/data/timeline.ts`, `src/data/symbols.ts` —
  preguntas frecuentes, línea de tiempo de capítulos y los cinco símbolos del
  Código ASBOR.
- `src/data/purchase-turn-survey.ts` — **toda** la encuesta de turno: pasos,
  preguntas, opciones, etiquetas, mensajes y textos de demostración en un
  solo lugar.
- `src/data/laboratorio.ts` — categorías y textos del formulario de
  sugerencias.

## 10. Componentes

Los ~35 componentes pedidos en el brief están implementados y separados por
responsabilidad (`layout/`, `system/`, `ui/`, `product/`, `media/`, `brand/`,
`survey/`, `laboratorio/`). Ningún archivo mezcla contenido, lógica de
validación y presentación: el contenido vive en `config`/`data`, la
validación en `lib/schemas.ts`, y los componentes solo consumen y presentan.

## 11. Páginas

Las 13 rutas del brief existen y compilan: `/`, `/coleccion/gala-001`,
`/historia`, `/anatomia`, `/codigo-asbor`, `/turno`, `/laboratorio`,
`/privacidad`, `/terminos`, `/gracias/turno`, `/gracias/sugerencia`, más
`sitemap.xml`, `robots.txt` y la página 404.

## 12. Encuesta visual de turno (`/turno`)

Formulario por pasos (`Tus datos → Tu talla → Tus preferencias → Tu interés →
Confirmación`) con barra de progreso, indicador "Paso X de 5", validación
Zod por paso, guía de tallas en modal, resumen de confirmación y estado de
éxito simulado (~800 ms de carga). **No usa `localStorage`, `sessionStorage`,
cookies, `fetch` ni ninguna API.** Los datos solo viven en el estado de
`react-hook-form` mientras el componente está montado; "Finalizar
demostración" limpia el formulario explícitamente.

## 13. Laboratorio visual (`/laboratorio`)

Mismo patrón: formulario controlado con Zod, categorías predefinidas,
simulación de carga y mensaje de éxito. Tampoco envía ni almacena datos.

## 14. SEO

`Metadata` API por página (`title`, `description`, `canonical`, Open Graph,
Twitter card), `sitemap.ts`, `robots.ts` (bloquea indexar `/turno`,
`/laboratorio` y `/gracias/*`, que no aportan valor de búsqueda),
`JsonLd` de `Organization` en el layout raíz, `JsonLd` de `Product` en
`/coleccion/gala-001` (con `availability: PreOrder`, nunca "disponible"), y
`Breadcrumbs` con `BreadcrumbList` en cada subpágina.

## 15. Accesibilidad

Skip link, `focus-visible` consistente, roles ARIA en el diagrama de
anatomía, el explorador de símbolos, la galería y los modales (con trampa de
foco y cierre con `Escape`), `aria-live` en errores y confirmaciones de
formulario, etiquetas siempre visibles (nunca solo `placeholder`), contraste
AA sobre fondo oscuro y marfil, y soporte completo de `prefers-reduced-motion`
(los videos del hero no autorreproducen y las animaciones se reducen a fades
cortos).

## 16. Cómo reemplazar imágenes

1. Coloca el archivo en la ruta exacta indicada en `src/config/media.ts` o
   `src/data/collections.ts` (por ejemplo
   `/public/images/gala/gala-front.webp`).
2. No cambies el nombre del archivo a menos que también actualices la ruta
   en el archivo de configuración correspondiente.
3. Mientras el archivo no exista, el componente `ImageWithFallback` muestra
   automáticamente un placeholder editorial con el nombre del recurso
   pendiente — no hay que "activar" nada.
4. Formatos recomendados: WebP o AVIF, con la relación de aspecto ya
   indicada en el nombre de cada carpeta (`gala/` es 4:5).

## 17. Cómo reemplazar videos

1. Coloca los archivos en `/public/videos/` según `src/config/media.ts`
   (`asbor-hero-desktop.mp4`, `asbor-hero-mobile.mp4`, `fundador-asbor.mp4`,
   y los cuatro videos de `/public/videos/social/`).
2. Añade también los posters WebP correspondientes en `/public/images/`.
3. `VideoWithFallback` intenta cargar el archivo real y, si falla (por
   ejemplo porque aún no existe), muestra el mismo placeholder editorial que
   las imágenes — sin íconos rotos ni errores visibles para el usuario.
4. Los videos sociales solo cargan bajo demanda (al presionar reproducir);
   nunca se insertan iframes de TikTok automáticamente.

Las marcas gráficas (`asbor-wordmark.svg`, `asbor-emblem.svg`,
`asbor-monogram.svg`) van en `/public/brand/`. Mientras no existan,
`BrandMark` usa un wordmark tipográfico y placeholders geométricos propios
(no genéricos) como referencia visual reemplazable.

## 18. Despliegue

El proyecto es un sitio Next.js estándar, sin variables de entorno ni
servicios externos requeridos:

```bash
npm run build
npm run start
```

Es compatible con cualquier plataforma que soporte Next.js (Vercel, Netlify,
un contenedor Node propio, etc.). Antes de desplegar a producción:
reemplaza los assets de `/public`, actualiza `src/config/social.ts` con los
enlaces reales, y revisa `src/config/brand.ts` (`url`) para que coincida con
el dominio final, ya que `metadataBase`, Open Graph y el `sitemap` lo usan
como base.

## 19. Lista de pruebas

- [x] `npm run build` compila sin errores (TypeScript estricto + ESLint).
- [x] Las 13 rutas se generan como contenido estático (`○ Static`).
- [x] `/turno` completa los 5 pasos, valida campos obligatorios y muestra el
      estado de éxito sin red.
- [x] `/laboratorio` valida y muestra el estado de éxito sin red.
- [x] La galería de `/coleccion/gala-001` responde a teclado (flechas),
      gestos táctiles (swipe) y tiene zoom en el bordado.
- [x] El diagrama de `/anatomia` abre una ficha por cada punto interactivo.
- [x] El explorador de `/codigo-asbor` cambia de símbolo con teclado y clic.
- [x] El menú móvil atrapa el foco y cierra con `Escape`.
- [x] Ninguna petición de red sale desde los formularios de demostración
      (verificable en la pestaña Network del navegador).
- [ ] Verificación visual manual en 320/375/390/768/1024/1366/1440/1920 px
      (pendiente de revisión humana en navegador real).
- [ ] Auditoría Lighthouse una vez estén los assets reales (video/imagen
      afectan directamente LCP/CLS).

## 20. Criterios de aceptación

Todos los criterios funcionales de la sección 38 del brief se cumplen con
placeholders visuales en ausencia de assets reales: no hay backend, base de
datos, Supabase, pagos, ni turno de compra real; la encuesta y el
laboratorio validan y simulan localmente; el menú móvil funciona con
teclado; las animaciones respetan `prefers-reduced-motion`; las redes
sociales y WhatsApp son configurables desde `src/config/social.ts`; y no se
solicita cédula en ningún formulario.
#   a s b o r n  
 