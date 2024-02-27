"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import tabs from '@/constants/tabNames';
import SettingsWindow from '../settingsWindow/SettingsWindow';
import SettingsContextProvider from '@/context/SettingsContext';



export default function SideBar() {
    const pathname = usePathname();

    return <header className='mx-auto bg-main py-4 text-center flex flex-col justify-start text-white h-full space-y-2'>
        <div className='flex flex-col space-y-3'>
            <img className='max-h-12 max-w-12 self-start pl-11' src="/app-icon.svg" alt="app-icon" />
            <h1 className='text-2xl font-medium text-start pl-11'>Trade Map</h1>
        </div>

        <nav className='text-left text-sm flex flex-col justify-between h-full' >
            <ul className='mt-5'>
                {
                    tabs.map(tab => {
                        return <Link href={tab.url} key={tab.url}>
                            <li className={"flex flex-row justify-start items-center space-x-2 p-3 border-l-2  hover:bg-main-fade " + (pathname === tab.url ? 'bg-main-fade border-white' : "border-main")} >
                                <span>{tab.icon}</span>
                                <span>{tab.tabName}</span></li>
                        </Link>
                    })
                }
            </ul>
            <SettingsContextProvider>
            <SettingsWindow />
            </SettingsContextProvider>
        </nav>
    </header>
}

