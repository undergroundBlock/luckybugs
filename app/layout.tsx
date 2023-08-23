import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='max-w-5xl mx-auto my-12 pt-12'>
          <div className='mx-4'>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
