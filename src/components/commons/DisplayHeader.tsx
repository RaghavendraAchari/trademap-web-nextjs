"use client"
import { usePathname, useRouter } from "next/navigation"
import useCurrentDate from "../../hooks/useCurrentTime"
import PageHeader from "./PageHeader"
import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface Props extends HTMLAttributes<HTMLDivElement> {

}

export default function DisplayHeader({ className, ...props }: Props) {
    const { dateAsString } = useCurrentDate()
    const pathname = usePathname()

    let title = null;
    let description = null;

    switch (pathname) {
        case "/":
            title = 'Dashboard'
            description = "Date and Time: " + dateAsString
            break
        case "/allTrades/":
            title = 'All Trades'
            description = "All the trades that you have taken till now."
            break
        case "/notes/":
            title = 'Personal Notes'
            description = "All the things that you want to remember in your trading journey."
            break
        case "/insights/":
            title = 'Insights'
            description = "Includes all the learning and observations from the trade history."
            break;
        case "/analytics/":
            title = 'Analytics'
            description = "Summary of your trading journey."
            break;
        case "/test/":
            title = 'Test'
            description = "Test app components here."
            break;
        default:
            title = 'Dashboard'
            description = "Date and Time: " + dateAsString
    }

    return <div className={cn(className)} {...props}>
        <h1 className='text-3xl font-extrabold opacity-80'>{title}</h1>
        <p className="font-medium pt-2" suppressHydrationWarning>{description}</p>
    </div>
}