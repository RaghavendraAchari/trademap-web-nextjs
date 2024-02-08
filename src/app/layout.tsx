import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/commons/Header'
import Navbar from '@/components/commons/NavBar'
import DisplayHeader from '@/components/commons/DisplayHeader'



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
      <body className={"flex flex-col h-screen md:flex-row min-h-screen max-h-screen " + poppins.className}>
        <aside className='flex-none z-10 hidden md:block py-3 px-2 md:w-[20%] md:min-h-full md:max-h-full lg:py-10 bg-main'>
          <Header />
        </aside>
        <Navbar className={"flex-none z-10 md:hidden h-16 py-3 px-4 w-full mx-auto bg-main flex flex-row justify-between"} />
        <main className='flex flex-col grow overflow-auto md:overflow-hidden divide-y'>
          <DisplayHeader className='flex-none bg-background p-3' />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  )
}
