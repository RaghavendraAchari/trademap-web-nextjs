"use client"

import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import TradeDetailsForm from "./TadeDetailsForm";
import { Badge } from "@/components/ui/badge"
import Trade from "@/models/Trade";
import Loading from "@/app/loading";
import { getDateInISOAsLocalDate } from "@/lib/dateUtils";
import NoTradingDayForm from "./NoTradingDayForm";
import { REFRESH_EVENT } from "./useRefreshEvent";
import TradeDetailsList from "./TradeDetailsList";
import useFetch from "../hooks/useFetch";
import Error from "./error";
import backendUrls from "@/constants/backendUrls";


interface props {
    forDate: Date;
    setForDate: (state: Date) => void,
    onDataSubmit: () => void
}

export default function TradesList({ forDate, setForDate, onDataSubmit }: props) {
    const [today] = useState<Date>(new Date())
    const componentRef = useRef<HTMLDivElement>(null)

    let url = "";

    if (forDate === null || forDate === undefined) {
        url = backendUrls.tradeDetails.allTrades + "/today"
    } else {
        url = backendUrls.tradeDetails.allTrades + "/forDate?date=" + getDateInISOAsLocalDate(forDate).substring(0, 10);
    }
    const { data: trades, error, loading, refresh } = useFetch<Trade[]>(url);

    useEffect(() => {
        console.log("Adding event listener to TradeDetails");

        document.addEventListener(REFRESH_EVENT, () => {
            console.log("refreshing todays data");
            refresh()
        })

        return () => {
            console.log("Removing event listener from trade details");

            document.removeEventListener(REFRESH_EVENT, () => { })
        }
    }, [])

    function displayTrades(trades: Trade[]) {
        if (trades[0].isHoliday === true || trades[0].noTradingDay == true || trades[0].isWeekend == true)
            return <NoTradeDay trade={trades[0]} />
        else return <>
            <TradeDetailsList tradesList={trades} showFullDate={false} />
            <TradeDetailsForm forDate={forDate} onDataSubmit={onDataSubmit} />
        </>
    }

    const noTradesBanner = <div className="flex flex-col items-center p-2">
        <img src="/no-data.svg" alt="no-data" className="custom-img" />
        <p className="text-center font-medium text-md mt-2">No trades for today.</p>
    </div>

    function totalPnL(trades: Trade[] | null) {
        if (trades && trades.length > 0 && (trades[0].isHoliday || trades[0].noTradingDay || trades[0].isWeekend))
            return null;


        if (trades?.length === 0)
            return null;

        let total = trades?.reduce((prev, current: Trade) => prev + current.pnl, 0);
        return <span className="text-xs md:text-sm font-semibold my-auto flex justify-end items-center space-x-1"><span>Total P&L :</span> <Badge className={"mr-2 " + (total !== undefined && total < 0) ? "bg-red-400 hover:bg-red-400" : "bg-green-400 hover:bg-green-400"} variant="default">{total}</Badge></span>
    }

    return <div ref={componentRef} data-tradedetails className='flex-grow flex flex-col w-full max-h-full lg:flex-auto lg:w-[70%] rounded-md shadow-sm border border-gray-100 bg-background p-2 overflow-y-auto'>
        <div className="flex flex-row justify-between align-center mb-2 flex-none">
            <h3 className="text-lg font-bold">Trades:</h3>
            <div className="flex flex-col justify-end space-y-1 space-x-1 md:flex-none md:flex-row md:justify-end md:space-y-0">
                {trades && totalPnL(trades)}
                <Badge className="mr-2" variant="outline">For: {forDate.toDateString()}</Badge>

                {forDate.toDateString() !== today.toDateString()
                    ? <Badge className="mr-2 hover:cursor-pointer hover:bg-slate-100" variant="outline" onClick={() => setForDate(today)}>Fill for today</Badge>
                    : null
                }
            </div>
        </div>

        <Separator className="flex-none" />

        <div className="grow overflow-y-auto">
            {loading ? <Loading /> : null}
            {!loading && trades && trades.length > 0 ? displayTrades(trades) : null}
            {!loading && trades && trades.length === 0 ? noTradesBanner : null}
            {!loading && trades && trades.length === 0 ? <TradeDetailsForm forDate={forDate} onDataSubmit={onDataSubmit} /> : null}
            {!loading && trades && trades.length === 0
                ? <NoTradingDayForm forDate={forDate} />
                : null
            }
            {!loading && error ? <Error /> : null}
        </div>



    </div >
}

function NoTradeDay({ trade }: { trade: Trade }) {
    let title;

    if (trade.isHoliday)
        title = "You marked it as a holiday."
    else if (trade.noTradingDay)
        title = "You marked it as No Trading Day"
    else if (trade.isWeekend)
        title = "You marked it as weekend."


    return <div className="flex flex-col justify-center">
        <img src="/No Trading Day.svg" alt="svg" className="object-contain w-72 h-64 mx-auto my-5 opacity-70" />
        <p className="text-center font-medium text-md mt-2">{title}</p>
    </div>
}

export function InstrumentTypeLogo({ type }: { type: string }) {
    let ob = null;

    if (type === "INDEX")
        ob = { name: "I", color: "text-orange-500" }
    else if (type === "STOCK")
        ob = { name: "S", color: "text-green-500" }
    else
        ob = { name: "C", color: "text-blue-500" }

    return <div className={"bg-background border border-slate-300 w-10 h-10 rounded-full flex justify-center items-center p-1 mr-1 " + ob.color}>
        {ob.name}
    </div>
}

