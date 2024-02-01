'use client';

import PageHeader from "@/components/commons/PageHeader";
import TradeDetailsList from "@/components/commons/TradeDetailsList";
import { useToast } from "@/components/ui/use-toast";
import Trade from "@/models/Trade";
import ResponseHandler from "@/services/ResponseHandler";
import { getAllTrades } from "@/services/TradeDetailsService";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { ArrowDownWideNarrowIcon, ArrowUpWideNarrowIcon, DotIcon } from "lucide-react";

export default function AllTrades() {
    const [trades, setTrades] = useState<Trade[]>([])
    const [error, setError] = useState(false)
    const [fetchingData, setFetchingData] = useState(true)

    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [sort, setSort] = useState<"ASC" | "DESC">("DESC")

    const { toast } = useToast()

    const fetchAllTrades = (sort: string) => {
        setFetchingData(true)

        getAllTrades(pageNumber, pageSize).then(response => {
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
        <div className='page'>
            <PageHeader title="All Trades" description="All the trades that you have taken till now." />

            <div className='content ' >

                {
                    <div className="w-full relative flex flex-col">
                        <div className="w-full flex-none text-lg font-bold bg-background py-2 rounded-sm  p-3 shadow-sm border border-slate-100 flex flex-row justify-between items-center"><span>Trades</span> <span onClick={() => { setSort(prev => prev === "DESC" ? "ASC" : "DESC") }} className="flex flex-row space-x-2 text-sm font-medium items-center cursor-pointer select-none"><span>Sort by date :</span> {sort === "DESC" ? <ArrowDownWideNarrowIcon className="w-4 h-4" /> : <ArrowUpWideNarrowIcon className="w-4 h-4" />}</span></div>
                        <div className="w-full grow px-3 space-y-2 mx-auto  overflow-y-auto pb-2">
                            {
                                fetchingData && <Loading />
                            }
                            {
                                fetchingData === false && trades.length > 0 ? <>
                                    <TradeDetailsList tradesList={trades} showFullDate={true} />
                                    <DotIcon className="self-center mx-auto opacity-50 w-10 h-10" />
                                </> : null
                            }
                            {
                                fetchingData === false && trades.length === 0 ? <p>No trades found</p> : null
                            }
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}
