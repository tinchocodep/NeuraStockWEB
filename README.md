# NeuraStock Landing Page

Una landing page B2B de clase mundial para NeuraStock, el módulo de gestión de inventario y facturación del ecosistema Neuracall.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Stack Tecnológico

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estricto
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **Inter Font** - Tipografía de Google Fonts

## 📁 Estructura del Proyecto

```
neurastock-landing/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout raíz + SEO
│   └── globals.css       # Design tokens
├── components/
│   ├── ui/               # Componentes atómicos
│   │   ├── Button.tsx
│   │   ├── MetricCard.tsx
│   │   ├── StatCard.tsx
│   │   ├── FeatureCard.tsx
│   │   └── TestimonialLogo.tsx
│   └── sections/         # Secciones de página
│       ├── HeroSection.tsx
│       ├── SocialProofSection.tsx
│       ├── UseCasesSection.tsx
│       ├── FeaturesSection.tsx
│       └── FooterSection.tsx
└── types/
    └── index.ts          # Definiciones TypeScript
```

## 🎯 Características

### Diseño
- ✨ Dark Mode estricto (Fintech/SaaS)
- 🎨 Glassmorphism y gradientes
- 🌊 Animaciones suaves con Framer Motion
- 📱 Completamente responsive

### Secciones
1. **Hero**: Dashboard animado + CTAs
2. **Social Proof**: Logos de clientes (BYGGER, LIMAYEN, MARMA)
3. **Use Cases**: Capa Cognitiva vs Sistema Operativo Light
4. **Features**: 6 funcionalidades core
5. **Footer**: CTA final + branding Neuracall

### Arquitectura
- 🏗️ Principios SOLID aplicados
- 📦 Componentes aislados y reutilizables
- 🎭 Sistema de design tokens
- 🔒 TypeScript strict mode

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Fondos**: `#0a0f1c`, `#0f172a`, `#1e293b`
- **Acentos**: Cyan (`#06b6d4`), Emerald (`#10b981`)
- **Texto**: Blanco, `#94a3b8`, `#64748b`

### Efectos Visuales
- Glassmorphism en tarjetas
- Gradientes en textos y botones
- Sombras con glow en hover
- Transiciones suaves (cubic-bezier)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo (Turbopack)
npm run build    # Build de producción
npm start        # Servidor de producción
npm run lint     # Linter ESLint
```

## 📦 Despliegue

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

### Build Estático
```bash
npm run build
# Los archivos están en .next/
```

## 🎯 SEO

- ✅ Metadata optimizada
- ✅ Open Graph configurado
- ✅ Estructura semántica HTML5
- ✅ Generación estática (SSG)

## 📝 Contenido

### Copy Principal
> "El control total de tu stock y facturación, en piloto automático."

### Funcionalidades Destacadas
1. Facturación ARCA Nativa
2. Métricas de Análisis en Tiempo Real
3. Cuentas Corrientes Inteligentes
4. Gestión Centralizada de Clientes
5. Alertas Automáticas de Stock
6. Análisis Predictivo de Demanda

## 🔮 Próximos Pasos

- [ ] Modal de solicitud de demo
- [ ] Integración con Google Analytics
- [ ] Video demo del producto
- [ ] Testimonios de clientes
- [ ] Casos de estudio detallados

## 📄 Licencia

Proyecto privado de Neuracall.

## 🤝 Contacto

Para más información sobre NeuraStock, visita [Neuracall](https://neuracall.com).

---

**Desarrollado siguiendo principios SOLID y mejores prácticas de Next.js**
