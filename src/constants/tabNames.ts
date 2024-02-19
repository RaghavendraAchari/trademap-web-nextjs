interface TabDetails {
    url: string,
    tabName: string
}

const tabs = [
    {
        url: "/",
        tabName: "Dashboard",
    },
    {
        url: "/allTrades/",
        tabName: "All Trades"
    },
    // {
    //     url: "/pending",
    //     tabName: "Pending Days"
    // },
    {
        url: "/notes/",
        tabName: "Personal Notes"
    },
    {
        url: "/insights/",
        tabName: "Insights on setups"
    },
    // {
    //     url: "/test/",
    //     tabName: "Test app components here"
    // },
]

export default tabs;