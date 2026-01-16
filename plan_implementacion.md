# Plan de Implementación del Proyecto M.I.R.A - Fase 1: Pantalla de Inicio

Este plan cubre la inicialización del proyecto M.I.R.A (Mental Insight & Response Agent) y el desarrollo de la pantalla de inicio con diseño "Glassmorphism Premium" basado en el mockup y la arquitectura proporcionados.

## Revisión del Usuario Requerida

> [!IMPORTANT]
> El mockup proporcionado utiliza Tailwind CSS. Aunque las instrucciones generales preferían CSS puro, utilizaré Tailwind CSS para coincidir exactamente con el mockup y asegurar que el efecto "Glassmorphism" se implemente de manera eficiente.

> [!WARNING]
> Inicializaré el proyecto utilizando Next.js, ya que es el estándar para despliegues en Vercel y proporciona la mejor base para los módulos "Sentinel Assistant" y "Social Watch" más adelante.

## Cambios Propuestos

### [Base]
- Inicializar el proyecto Next.js con App Router.
- Configurar Tailwind CSS con la paleta de colores personalizada:
  - Primario: `#2e1b50`
  - Acento: `#00f5ff`
- Configurar variables de tema Greenhouse/Glassmorphism.

### [Pantalla de Inicio]
#### [NUEVO] `src/app/page.tsx`
- Implementar la sección Hero con el eslogan: "Prevención Inteligente: Tu IA de salud mental en segundo plano."
- Añadir la visualización interactiva "Soundwave" (estado EMPATHY_READY).
- Crear la sección de tarjetas de características (Privacidad, Soporte 24/7, IA Empática).

#### [NUEVO] `src/components/layout/Navbar.tsx`
- Barra de navegación con efecto de cristal traslúcido.
- Enlaces para Login, Perfil y Chat Anónimo.

#### [NUEVO] `src/components/ui/Soundwave.tsx`
- Animación SVG/CSS para la onda de sonido de empatía.

### [Despliegue]
- Crear `railway.json` para la configuración del backend.
- Configurar GitHub Actions para el despliegue en Vercel si es necesario (o integración directa con Vercel).

## Plan de Verificación

### Pruebas Automatizadas
- `npm run build`: Asegurar que el proyecto se construye sin errores.
- `npx lighthouse http://localhost:3000`: Verificar rendimiento y accesibilidad (objetivo > 90).

### Verificación Manual
- Verificar el efecto "Glassmorphism" en diferentes tamaños de pantalla (Diseño Responsivo).
- Probar la fluidez de la animación "Soundwave".
- Comprobar que la paleta de colores coincida con el mockup (fondo #2e1b50, acentos #00f5ff).
