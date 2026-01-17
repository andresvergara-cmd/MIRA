# M.I.R.A. (Mental Insight and Response Agent)

M.I.R.A. es una plataforma inteligente diseñada para el bienestar mental y el crecimiento emocional. Utiliza inteligencia artificial avanzada (Gemini) para proporcionar apoyo empático, analizar patrones de bienestar y ofrecer rutas de seguridad en tiempo real.

## 🚀 Estado del Proyecto: Producción
La plataforma se encuentra actualmente desplegada y funcional:
- **Frontend & API**: [Vercel](https://vercel.com)
- **Base de Datos**: PostgreSQL en [Railway](https://railway.app)

## ✨ Características Principales

- **Onboarding Inteligente**: Flujo de 5 pasos para personalización y seguridad del usuario.
- **Asistente Empático**: Chat en tiempo real con análisis de sentimientos y detección de riesgos.
- **Social Watch**: Monitoreo de patrones (como el insomnio digital) para brindar insights de salud mental.
- **Plan de Seguridad**: Intervenciones JITAI (Just-In-Time Adaptive Interventions) y red de apoyo.
- **Multi-idioma**: Soporte completo para Español e Inglés (i18n).

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **Base de Datos**: PostgreSQL via Prisma ORM
- **IA**: Google Generative AI (Gemini 2.0 Flash)
- **Animaciones**: Framer Motion
- **Internacionalización**: next-intl

## 📦 Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/andresvergara-cmd/MIRA.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno (`.env`):
   ```env
   GEMINI_API_KEY=tu_api_key
   DATABASE_URL="postgresql://user:password@localhost:5432/mira_db?schema=public"
   ```

4. Generar cliente de Prisma:
   ```bash
   npx prisma generate
   ```

5. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📄 Documentación Adicional
- [Documento de Arquitectura](Documento%20de%20Arquitectura%20y%20Desarrollo_%20Proyecto%20MIRA.pdf)
- [Backlog](backlog.md)
