# JoinCloud Landing Page

## Overview

JoinCloud is a personal cloud networking platform that enables users to share files globally directly from their own device, without uploading to third-party cloud storage. This repository contains a marketing landing page designed to explain the product, build trust, and drive macOS beta downloads. The page is static with no authentication, login, or dashboard functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, bundled using Vite
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom dark theme (JoinCloud brand colors)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state (minimal usage for this static page)

### Design System
The application follows a strict dark-only theme:
- Background: `#0A0A0F` (HSL: 240 33% 4%)
- Surface/Card: `#12121A` (HSL: 240 20% 8%)
- Primary CTA: `#2FB7FF` (HSL: 199 100% 59%)
- Text Primary: `#FFFFFF`
- Text Muted: `#A1A1AA`

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Build Tool**: tsx for TypeScript execution, esbuild for production bundling
- **API Pattern**: RESTful routes registered in `server/routes.ts` with `/api` prefix
- **Static Serving**: Production serves built assets from `dist/public`

### Development vs Production
- **Development**: Vite dev server with HMR, integrated via Express middleware
- **Production**: Static file serving from pre-built assets

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui components
    pages/          # Page components (landing, not-found)
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface (in-memory)
  vite.ts         # Vite dev server integration
  static.ts       # Production static file serving
shared/           # Shared types and schemas
  schema.ts       # Drizzle ORM schema definitions
```

### Database Schema
Uses Drizzle ORM with PostgreSQL dialect. Current schema includes a basic users table with id, username, and password fields. The storage layer abstracts database operations with an in-memory implementation for development.

## External Dependencies

### Database
- **PostgreSQL**: Connected via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and query building
- **connect-pg-simple**: Session storage (if sessions are needed)

### UI Framework
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component library using Radix
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator