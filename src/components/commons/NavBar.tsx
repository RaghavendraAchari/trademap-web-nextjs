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
    SheetClose
} from "@/components/ui/sheet"
import MenuIcon from "../icons/munu-icon";
import { Separator } from "../ui/separator";
import tabs from "@/constants/tabNames";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";


interface Props {
    className: string
}


export default function Navbar({ className }: Props) {
    const [open, setOpen] = useState(false);

    return <header className={className}>
        <div className="flex flex-row grow justify-start space-x-2 items-center">
            <img className='max-h-8 max-w-8 align-center' src="app-icon.svg" alt="app-icon" />
            <h1 className='text-lg font-medium text-white'>Trade Map</h1>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger><img className="w-5 h-5" src="menu.svg" alt="Menu" /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left">Navigation</SheetTitle>
                    <SheetDescription className="text-left">
                        Click on the tab to navigate.
                    </SheetDescription>
                    <Separator />
                    <div>
                        <ul className="text-main font-bold mt-4 space-y-2 text-left">
                            {tabs.map(tab => {
                                return <li key={tab.url}><Link onClick={() => setOpen(false)} href={tab.url} >{tab.tabName}</Link></li>
                            })}
                        </ul>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>


    </header>
}