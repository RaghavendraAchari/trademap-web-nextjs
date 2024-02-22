import { ReactElement } from "react";
import { HomeIcon, LibrarySquareIcon, LightbulbIcon, MessageSquareTextIcon, MicroscopeIcon } from "lucide-react"





interface TabDetails {
    url: string,
    tabName: string,
    icon: ReactElement
}

const tabs: TabDetails[] = [
    {
        url: "/",
        tabName: "Dashboard",
        icon: <HomeIcon size={24} />
    },
    {
        url: "/allTrades/",
        tabName: "All Trades",
        icon: <LibrarySquareIcon size={24} />

    },
    // {
    //     url: "/pending",
    //     tabName: "Pending Days"
    // },
    {
        url: "/notes/",
        tabName: "Personal Notes",
        icon: <MessageSquareTextIcon size={24} />

    },
    {
        url: "/insights/",
        tabName: "Insights on setups",
        icon: <LightbulbIcon size={24} />

    },
    // {
    //     url: "/test/",
    //     tabName: "Test app components here"
    // },
    {
        url: "/analytics/",
        tabName: "Analytics",
        icon: <MicroscopeIcon size={24} />

    },
]

export default tabs;