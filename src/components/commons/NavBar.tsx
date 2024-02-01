"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MenuIcon from "../icons/munu-icon";
import { Separator } from "../ui/separator";
import tabs from "@/constants/tabNames";


interface Props {
    className: String
}


export default function Navbar({ className }: Props) {

    const pathname = usePathname();

    return <header className={className + ' w-full mx-auto bg-main flex flex-row justify-between '}>
        <div className="flex flex-row grow justify-start space-x-2 items-center">
            <img className='max-h-8 max-w-8 align-center' src="app-icon.svg" alt="app-icon" />
            <h1 className='text-lg font-medium text-white'>Trade Map</h1>
        </div>

        <Sheet>
            <SheetTrigger><img className="w-5 h-5" src="menu.svg" alt="Menu" /></SheetTrigger>
            <SheetContent >
                <SheetHeader>
                    <SheetTitle className="text-left">Navigation</SheetTitle>
                    <SheetDescription>
                        <Separator />
                        <ul className="text-main font-bold mt-4 space-y-2 text-left">
                            {tabs.map(tab => {
                                return <li key={tab.url}><Link href={tab.url} >{tab.tabName}</Link></li>
                            })}
                        </ul>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>


    </header>
}