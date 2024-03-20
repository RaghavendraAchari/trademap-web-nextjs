'use client';
import useFetchInsights from "../../hooks/insights/useFetchInsights";
import backendUrls from "@/constants/backendUrls";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Loading from "../loading";
import Insight from "../../models/insights/Insight.model";
import { useState } from "react";
import AskForSelectAnItem from "../../components/insights/askForSelectAnItem";
import InsightView from "../../components/insights/InsightView";
import TopicsView from "../../components/insights/topicsView";

export default function Insights() {

    const { data, loading, error, refresh } = useFetchInsights(backendUrls.insights.allInsights);
    // console.log({ data });
    const [selectedItem, setSelectedItem] = useState<Insight>();
    const [editContent, setContentEdit] = useState<boolean>(false);

    //for mobile
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div className='md:grow grid grid-rows-none grid-cols-1 md:grid-cols-[30%,70%] md:grid-rows-1 md:max-h-full divide-x md:overflow-y-auto'>
            <div data-listpane className='grow w-full h-full md:max-h-full p-2'  >
                {error && <Alert>
                    <Terminal />
                    <AlertTitle>Something went wrong.</AlertTitle>
                    <AlertDescription>Unable to fetch insights</AlertDescription>
                </Alert>}
                {loading && <Loading />}
                {
                    (!loading && !error)
                        ? <TopicsView
                            data={data}
                            onDataSubmit={refresh}
                            onItemClick={(item: Insight) => { setSelectedItem(item); setContentEdit(false); setOpenDrawer(true) }}
                            selectedItem={selectedItem}
                        />
                        : null
                }
            </div>
            <div data-contentpane className='grow flex flex-row w-full h-full md:max-h-full p-2' >
                {
                    selectedItem
                        ? <InsightView
                            closeWindow={() => {
                                setOpenDrawer(false);
                            }}
                            openDrawer={openDrawer}
                            setOpenDrawer={setOpenDrawer}
                            insight={selectedItem}
                            editContent={editContent}
                            setContentEdit={setContentEdit}
                            refresh={refresh}
                            onInsightDeleted={() => setSelectedItem(undefined)}
                            onContentUpdated={(updatedInsight: Insight) => {
                                setSelectedItem(prevItem => {
                                    if (prevItem)
                                        prevItem.content = updatedInsight.content
                                    return prevItem
                                })
                            }}
                        />
                        : <div className="hidden md:flex flex-row items-center justify-center w-full h-full">
                            <AskForSelectAnItem />
                        </div>
                } 

            </div>
        </div>
    )
}



