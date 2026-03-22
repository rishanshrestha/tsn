import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500'],
  variable: '--font-dm-sans'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  title: 'The Startup Network Nepal (TSN) | Kathmandu\'s Startup Ecosystem',
  description: 'TSN is Nepal\'s most credible startup ecosystem. Built for ambitious founders, investors, and mentors in South Asia.',
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} ${bebasNeue.variable} font-body antialiased`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
