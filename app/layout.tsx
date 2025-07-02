import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Winodya Wijegunawardhana - Full-Stack Developer',
  description: 'Portfolio of Winodya Wijegunawardhana, a passionate Full-Stack Developer specializing in React, Node.js, and modern web technologies.',
  keywords: 'Full-Stack Developer, Software Engineer, React, Node.js, Next.js, JavaScript, TypeScript, MongoDB, AWS',
  authors: [{ name: 'Winodya Wijegunawardhana' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
