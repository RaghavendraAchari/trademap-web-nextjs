"use client"

import { Separator } from "@/components/ui/separator";
import TradeDetailsForm from "../tradeDetails/TadeDetailsForm";
import { Badge } from "@/components/ui/badge"
import Trade from "@/models/trade/Trade";
import Loading from "@/app/loading";
import NoTradingDayForm from "../tradeDetails/NoTradingDayForm";
import TradeDetailsList from "../tradeDetails/TradeDetailsList";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";


interface props extends React.HTMLAttributes<HTMLDivElement> {
    forDate: Date;
    setForDate: (state: Date) => void,
    onDataSubmit: () => void,
    trades: Trade[] | null,
    loading: boolean,
    error: string | null
}

export default function TradesDetails({ trades, error, loading, forDate, setForDate, onDataSubmit, className, ...props }: props) {
    const [today] = useState<Date>(new Date())

    return <div data-tradedetails className={cn(className)} {...props}>
        <div className="flex flex-row justify-between align-center mb-2 flex-none">
            <h3 className="text-lg font-bold">Trades:</h3>
            <div className="flex flex-col justify-end space-y-1 space-x-1 md:flex-none md:flex-row md:justify-end md:space-y-0">
                {trades && <TotalPnL trades={trades} />}
                <Badge className="mr-2" variant="outline">For: {forDate.toDateString()}</Badge>

                {forDate.toDateString() !== today.toDateString()
                    ? <Badge className="mr-2 hover:cursor-pointer hover:bg-slate-100" variant="outline" onClick={() => setForDate(today)}>Fill for today</Badge>
                    : null
                }
            </div>
        </div>

        <Separator className="flex-none" />

        <div className="grow w-full max-h-full flex flex-col px-1 md:overflow-y-auto">
            {loading ? <Loading /> : null}

            {
                !loading && trades && trades.length === 0
                    ? <>
                        <NoTradesBanner />
                        <TradeDetailsForm forDate={forDate} onDataSubmit={onDataSubmit} />
                        <NoTradingDayForm forDate={forDate} onDataSubmit={onDataSubmit} />
                    </>
                    : null
            }

            {!loading && trades && trades.length > 0 ?
                <DisplayTrades trades={trades} forDate={forDate} onDataSubmit={onDataSubmit} />
                : null}
            {!loading && error ? <TradeDetailsError /> : null}
        </div>



    </div >
}

function TradeDetailsError() {
    return <Alert variant={"destructive"}>
        <Terminal size={"16px"} />
        <AlertTitle>Oops..</AlertTitle>
        <AlertDescription>Something went wrong while petching the trades</AlertDescription>
    </Alert>
}

function TotalPnL({ trades }: { trades: Trade[] }) {
    if (trades && trades.length > 0 && (trades[0].isHoliday || trades[0].noTradingDay || trades[0].isWeekend))
        return null;

    if (trades?.length === 0)
        return null;

    let total = trades?.reduce((prev, current: Trade) => prev + current.pnl, 0);
    return <span className="text-xs md:text-sm font-semibold my-auto flex justify-end items-center space-x-1">
        <span>Total P&L :</span>
        <Badge className={"mr-2 " + (total < 0 ? " bg-red-400 hover:bg-red-400" : " bg-green-400 hover:bg-green-400")} variant="default">
            {total}
        </Badge>
    </span>
}

function DisplayTrades({ trades, forDate, onDataSubmit }: { trades: Trade[], forDate: Date, onDataSubmit: () => void }) {
    if (trades[0].isHoliday === true || trades[0].noTradingDay == true || trades[0].isWeekend == true)
        return <NoTradeDay trade={trades[0]} />
    else return <>
        <TradeDetailsList tradesList={trades} showFullDate={false} showOptions={true} />
        <TradeDetailsForm forDate={forDate} onDataSubmit={onDataSubmit} />
    </>
}

function NoTradesBanner() {
    return <div className="flex flex-col items-center p-2">
        <img src="/no-data.svg" alt="no-data" className="custom-img" />
        <p className="text-center font-medium text-md mt-2">No trades for today.</p>
    </div>
}

function NoTradeDay({ trade }: { trade: Trade }) {
    let title;
    let imgSrc;

    if (trade.isHoliday) {
        title = "You marked it as a holiday."
        imgSrc = "/holiday.svg"
    }
    else if (trade.noTradingDay) {
        title = "You marked it as No Trading Day"
        imgSrc = "/No Trading Day.svg"
    }
    else if (trade.isWeekend) {
        title = "You marked it as weekend."
        imgSrc = "/weekend.svg"
    }


    return <div className="flex flex-col justify-center">
        <img src={imgSrc} alt="svg" className="object-contain w-72 h-64 mx-auto my-5 opacity-70" />
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

