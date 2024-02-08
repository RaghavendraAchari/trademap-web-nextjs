'use client';

import TradeDetailsList from "@/components/tradeDetails/TradeDetailsList";
import { useToast } from "@/components/ui/use-toast";
import Trade from "@/models/Trade";
import { getAllTrades } from "@/services/TradeDetailsService";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Loading from "../loading";
import { ArrowDownWideNarrowIcon, ArrowUpWideNarrowIcon, DotIcon } from "lucide-react";
import { SORT } from "@/constants/SortType";
import { SortByDate } from "@/components/commons/SortByDate";
import useFetchAllTrades from "./useFetchAllTrades";
import backendUrls from "@/constants/backendUrls";

export default function AllTrades() {
    const [trades, setTrades] = useState<Trade[]>([])

    const { } = useFetchAllTrades(backendUrls.tradeDetails.allTrades)
    const [error, setError] = useState(false)
    const [fetchingData, setFetchingData] = useState(true)

    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [sort, setSort] = useState<SORT>("DESC")

    const { toast } = useToast()

    const fetchAllTrades = (sort: string) => {
        setFetchingData(true)

        getAllTrades(pageNumber, pageSize)
            .then(response => {
            const data = response.data;
            console.log(data);

            setTrades(data);

        }).catch(err => { setError(true); })

        setFetchingData(false)
    }

    useEffect(() => {
        fetchAllTrades(sort);
    }, [])

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
                    fetchingData === false && trades.length > 0 ? <div>
                        <TradeDetailsList tradesList={trades} showFullDate={true} />
                        <DotIcon className="self-center mx-auto opacity-50 w-10 h-10" />
                    </div> : null
                }
                {
                    fetchingData === false && trades.length === 0 ? <p>No trades found</p> : null
                }
            </div>
        </div>
    )
}


