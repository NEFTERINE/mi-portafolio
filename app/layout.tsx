import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monserrat · Portafolio de desarrollo de software',
  description:
    'Portafolio de proyectos de desarrollo web, bases de datos y diseño de interfaces.',
}

export const viewport: Viewport = {
  themeColor: '#f6f4ee',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
          {children}
      </body>
    </html>
  )
}