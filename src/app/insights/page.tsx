'use client';
import useFetchInsights from "./useFetchInsights";
import backendUrls from "@/constants/backendUrls";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Loading from "../loading";
import Insight from "./Insight.model";
import { useState } from "react";
import AskForSelectAnItem from "./components/askForSelectAnItem";
import InsightView from "./components/InsightView";
import TopicsView from "./components/topicsView";

export default function Insights() {

    const { data, loading, error, refresh } = useFetchInsights(backendUrls.insights.allInsights);
    // console.log({ data });
    const [selectedItem, setSelectedItem] = useState<Insight>();
    const [editContent, setContentEdit] = useState<boolean>(false);

    //for mobile
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div className='border-slate-300 grid grid-rows-1 grid-cols-1 md:grid-cols-[30%,70%] md:grid-rows-1 w-full h-full divide-x'>
            <div data-listpane className='w-full h-full overflow-y-auto p-2'  >
                {error && <Alert>
                    <Terminal />
                    <AlertTitle>Something went wrong.</AlertTitle>
                    <AlertDescription>Unable to fetch insights</AlertDescription>
                </Alert>}
                {loading && <Loading />}
                {(!loading && !error) ? <TopicsView data={data} onDataSubmit={refresh} onItemClick={(item: Insight) => { setSelectedItem(item); setContentEdit(false); setOpenDrawer(true) }} /> : null}
            </div>
            <div data-contentpane className='grow w-full h-full overflow-y-auto p-2' >
                {
                    selectedItem
                        ? <InsightView closeWindow={() => {
                            setOpenDrawer(false);
                        }} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} insight={selectedItem} editContent={editContent} setContentEdit={setContentEdit} />
                        : <div className="hidden mt-10 md:flex flex-col items-center justify-center w-full h-full overflow-y-auto">
                            <AskForSelectAnItem />
                        </div>
                } 
            </div>
        </div>
    )
}



