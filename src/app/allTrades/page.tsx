'use client';

import TradeDetailsList from "@/components/tradeDetails/TradeDetailsList";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Loading from "../loading";
import { DotIcon, Terminal } from "lucide-react";
import { SORT } from "@/constants/SortType";
import { SortByDate } from "@/components/commons/SortByDate";
import useFetchAllTrades from "../../hooks/allTrades/useFetchAllTrades";
import backendUrls from "@/constants/backendUrls";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AllTrades() {

    const { data: trades, error, loading: fetchingData, refresh } = useFetchAllTrades(backendUrls.tradeDetails.allTrades)

    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [sort, setSort] = useState<SORT>("DESC")

    const { toast } = useToast()

    return (
        <div className="grow h-full flex flex-col overflow-y-auto">
            <div className="w-full border-b flex-none text-lg font-bold bg-background py-2 flex flex-row justify-between items-center px-3">
                <span>Trades</span>
                <SortByDate sort={sort} setSort={setSort} />
            </div>
            <div className="grow flex flex-col md:max-h-full md:overflow-y-auto px-3 py-2">
                {
                    fetchingData && <Loading />
                }
                {
                    fetchingData === false && trades && trades.length > 0 ? <div>
                        <TradeDetailsList tradesList={trades} showFullDate={true} />
                        <DotIcon className="self-center mx-auto opacity-50 w-10 h-10" />
                    </div> : null
                }
                {
                    fetchingData === false && trades && trades.length === 0 ? <Alert variant={"default"}>
                        <Terminal />
                        <AlertTitle>No trades found</AlertTitle>
                        <AlertDescription>It looks like you have not taken any trades.</AlertDescription>
                    </Alert> : null
                }
            </div>
        </div>
    )
}


