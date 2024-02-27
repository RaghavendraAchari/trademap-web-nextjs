
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import SideBar from '@/components/commons/SideBar'
import Navbar from '@/components/commons/NavBar'
import DisplayHeader from '@/components/commons/DisplayHeader'

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
      <body className={"flex flex-col h-screen md:flex-row min-h-screen max-h-screen " + GeistSans.className}>  
        <aside className='flex-none z-10 hidden md:block py-3 px-2 md:w-[20%] md:min-h-full md:max-h-full lg:py-10 bg-main'>
          <SideBar />
        </aside>
        <Navbar className={"flex-none z-10 md:hidden h-16 py-3 px-4 w-full mx-auto bg-main flex flex-row justify-between"} />
        <main className='flex flex-col grow overflow-y-scroll md:overflow-hidden divide-y'>
          <DisplayHeader className='flex-none bg-background p-3' />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  )
}
