import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NeuraStock - Gestión Inteligente de Inventario y Facturación',
  description:
    'El control total de tu stock y facturación, en piloto automático. Integración nativa con ARCA/AFIP para empresas que buscan escalar.',
  keywords: [
    'gestión de inventario',
    'facturación electrónica',
    'AFIP',
    'ARCA',
    'ERP',
    'stock',
    'NeuraStock',
    'Neuracall',
  ],
  authors: [{ name: 'Neuracall' }],
  openGraph: {
    title: 'NeuraStock - Gestión Inteligente de Inventario y Facturación',
    description:
      'El control total de tu stock y facturación, en piloto automático.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
