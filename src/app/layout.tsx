
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/commons/Header'
import Navbar from '@/components/commons/NavBar'


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
      <body className={"grid grid-cols-1 grid-rows-1 min-h-screen max-h-screen md:grid-cols-8 " + poppins.className}>
        <aside className='z-10 hidden md:block h-6 py-3 px-2 md:h-full max-h-full md:col-span-2 lg:col-span-1 lg:py-10 bg-main'>
          <Header />
        </aside>
        <Navbar className={"z-10 md:hidden h-16 py-3 px-4"} />
        <main className='md:col-span-6 lg:col-span-7 lg:h-full lg:max-h-full overflow-y-auto '>
          {children}
          <Toaster />
        </main>


      </body>
    </html>
  )
}
