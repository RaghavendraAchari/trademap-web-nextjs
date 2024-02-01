"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import tabs from '@/constants/tabNames';




export default function Header() {
    const pathname = usePathname();
    console.log(pathname);


    return <header className='mx-auto bg-main py-4 text-center flex flex-col justify-center text-white'>
        <img className='max-h-10 max-w-10' src="app-icon.svg" alt="app-icon" />
        <h1 className='text-lg font-medium '>Trade Map</h1>

        <nav className='text-left text-sm'>
            <ul className='mt-5'>
                {
                    tabs.map(tab => {
                        return <Link href={tab.url} key={tab.url}>
                            <li className={"p-3 border-l-2  hover:bg-main-fade " + (pathname === tab.url ? 'bg-main-fade border-white' : "border-main")} >{tab.tabName}</li>
                        </Link>
                    })
                }
            </ul>
        </nav>
    </header>
}