# AI Context: M.I.R.A.

Este documento sirve como base de conocimiento para futuros agentes de IA que trabajen en el proyecto M.I.R.A.

## Contexto del Proyecto
M.I.R.A. es un asistente de salud mental impulsado por IA. El enfoque es preventivo y utiliza "Social Watch" para monitorear patrones de comportamiento sin invadir la privacidad mediante análisis anónimo.

## Stack Tecnológico Actual
- **Framework**: Next.js 16 (Turbopack habilitado).
- **Frontend**: Tailwind CSS 4, Framer Motion.
- **Backend/API**: Next.js API Routes (Serverless).
- **Base de Datos**: PostgreSQL hosted en Railway.
- **ORM**: Prisma (Singleton pattern implementado en `lib/prisma.ts`).
- **IA**: Gemini 2.0 Flash (configurado en `lib/gemini.ts`).
- **i18n**: `next-intl` con soporte para `[locale]`.

## Puntos Críticos de la Arquitectura
1. **Prisma Singleton**: Es vital usar el singleton en `lib/prisma.ts` para evitar el agotamiento de conexiones en entornos serverless (Vercel).
2. **Postinstall**: El `package.json` incluye un script `postinstall` para ejecutar `prisma generate` y asegurar que el cliente esté disponible en el build de Vercel.
3. **i18n Middleware**: Las rutas están envueltas en un middleware de localización.
4. **Chat API**: Ubicado en `app/api/chat/route.ts`. Utiliza `force-dynamic` para evitar cacheo incorrecto durante el build.

## Estado de las Fases
- **Fase 1-3**: Completadas y desplegadas.
- **Próximos Pasos**: Implementar análisis proyectivo de imágenes (Gemini Vision) y mejorar el dashboard de estadísticas.

## Historial de Despliegue
- **Producción**: Vercel (Frontend) y Railway (DB).
- **Migraciones**: Se gestionan con Prisma Migrate.
