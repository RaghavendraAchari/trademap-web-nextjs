"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import tabs from '@/constants/tabNames';
import { Button } from '../ui/button';
import { Settings, Settings2, Terminal } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';



export default function SideBar() {
    const pathname = usePathname();

    return <header className='mx-auto bg-main py-4 text-center flex flex-col justify-center text-white h-full'>
        <img className='max-h-10 max-w-10' src="/app-icon.svg" alt="app-icon" />
        <h1 className='text-lg font-medium '>Trade Map</h1>

        <nav className='text-left text-sm flex flex-col justify-between h-full' >
            <ul className='mt-5'>
                {
                    tabs.map(tab => {
                        return <Link href={tab.url} key={tab.url}>
                            <li className={"p-3 border-l-2  hover:bg-main-fade " + (pathname === tab.url ? 'bg-main-fade border-white' : "border-main")} >{tab.tabName}</li>
                        </Link>
                    })
                }
            </ul>
            <div className='flex flex-row justify-start ' >
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='text-slate-300 space-x-2  border-0' variant={"ghost"} size={"default"}><Settings /> <span>Settings</span></Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Settings</DialogTitle>
                            <DialogDescription>All the settings for the app</DialogDescription>
                        </DialogHeader>
                        <div className='flex flex-col'>
                            <div className="group flex flex-col space-y-1">
                                <Label htmlFor='maxTrades'> Maximum trades limit per day :
                                </Label>
                                <div className='flex flex-row items-center justify-between space-x-1'>
                                    <Input type='number' id='maxTrades' defaultValue={3} placeholder='Enter a number' />
                                    <Button variant={"outline"} size={"sm"}>Update</Button>
                                </div>
                            </div>

                            <div className="group flex items-start justify-between mt-10">
                                <Label className='w-full flex flex-col space-y-1' htmlFor=''>
                                    <span>Warn me when trade limit is reached</span>
                                    <span className='text-xs text-slate-500'>Displays a banner in the dashboard when max trades are taken</span>
                                    <span className='pt-2 text-slate-600'>Banner Sample:</span>
                                    <span>
                                        <Alert className='opacity-60 mt-2'>
                                            <Terminal />
                                            <AlertTitle>Stop trading for the day</AlertTitle>
                                            <AlertDescription>You have reached max limit for the day.</AlertDescription>
                                        </Alert>
                                    </span>
                                </Label>
                                <Switch id='maxTradesWarning' />
                            </div>

                            <div className="group flex flex-col space-y-1 mt-10">
                                <Label htmlFor='date'>Set tracking date :</Label>
                                <div className='flex flex-row items-center justify-between space-x-1'>
                                    <Input type='date' id='date' defaultValue={3} placeholder='Enter a number' />
                                    <Button variant={"outline"} size={"sm"}>Update</Button>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>

                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </nav>
    </header>
}