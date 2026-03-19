import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair'
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas'
})

export const metadata: Metadata = {
  title: 'Nepal Startup Network | Building Tomorrow\'s Founders',
  description: 'Nepal\'s premier startup ecosystem connecting founders, investors, and innovators. Join the movement shaping the future of entrepreneurship in Nepal.',
  keywords: ['startup', 'nepal', 'entrepreneurship', 'founders', 'investors', 'innovation', 'tech'],
  authors: [{ name: 'Nepal Startup Network' }],
  openGraph: {
    title: 'Nepal Startup Network',
    description: 'Building Tomorrow\'s Founders',
    type: 'website',
  },
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
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${playfair.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
