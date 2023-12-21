import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900",], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TradeMap Web',
  description: 'Manage your trade details here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={poppins.className}>
        <header className='bg-white mx-auto py-4 shadow-md sticky'>
          <nav className='container'>
            <h1 className='text-lg font-medium'>Trade Map</h1>
          </nav>
        </header>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
