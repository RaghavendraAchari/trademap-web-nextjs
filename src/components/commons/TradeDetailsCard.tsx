import Trade from "@/models/Trade"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { getFullDateTime, getTimeIn12HrFormat } from "@/lib/dateUtils";
import { Label } from "../ui/label";
import { ArrowDown, ArrowUp, Loader2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import backendUrls from "@/constants/backendUrls";
import { Button } from "../ui/button";




interface Props {
    trade: Trade,
    showFullDate: boolean
}

export default function TradeDetailsCard({ trade, showFullDate }: Props) {
    const [showImages, setShowImages] = useState(false);

    if (trade.isHoliday || trade.noTradingDay || trade.isWeekend) {
        let title;
        if (trade.isHoliday)
            title = "Holiday"
        else if (trade.noTradingDay)
            title = "Holiday"
        else
            title = "Weekend"

        return <Card className="mt-2">
            <CardHeader className="bg-card-header py-2 flex flex-row items-center space-y-0">
                <InstrumentTypeLogo trade={trade} />
                <CardTitle className="flex flex-row justify-between items-center grow">
                    <span className="text-lg">{title}</span>
                    <span className="text-sm  text-slate-500">{showFullDate ? getFullDateTime(new Date(trade.dateTime)) : getTimeIn12HrFormat(new Date(trade.dateTime))}</span>
                </CardTitle>
            </CardHeader>
        </Card>
    }

    return <Card className="mt-2">
        <CardHeader className="bg-card-header py-2 flex flex-row items-center space-y-0">
            <InstrumentTypeLogo trade={trade} />
            <CardTitle className="flex flex-row justify-between items-center grow">
                <span className="text-lg">{"Trade No: " + trade.id} ({trade.setupName})</span>
                <span className="text-sm  text-slate-500">{getTimeIn12HrFormat(new Date(trade.dateTime))}</span>
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 ml-11 min-h-full  flex flex-col justify-between overflow-y-auto">
            <div className="text-sm text-slate-700 py-2 whitespace-pre-wrap">{trade.remarks}</div>
            <div className="flex justify-start space-x-1 items-center text-xs font-medium">
                <span className="bg-orange-200 p-1 rounded-sm ">{trade.instrumentType}</span>
                <span>{"->"}</span>
                <span className="bg-green-200 p-1 rounded-sm">{trade.instrumentName}</span>
            </div>
            <div className="flex flex-row justify-end">
                <Button size={"sm"} variant={"outline"} className="cursor-pointer flex flex-row justify-end  space-x-1 items-center  select-none py-0 px-4" onClick={() => setShowImages(prev => !prev)}>
                    {
                        !showImages ?
                            <><Label className="cursor-pointer text-xs font-semibold text-slate-600" htmlFor="arrow-down p-0" >Show Images</Label>
                                <ArrowDown id="arrow-down" className="h-4 w-4" /></>
                            : <>
                                <Label className="cursor-pointer text-xs font-semibold text-slate-600" htmlFor="arrow-down p-0" >Hide Images</Label>
                                <ArrowUp id="arrow-down" className="h-4 w-4" /></>}
                </Button>

            </div>
            {showImages && <div className="images">
                <TradeImagesList trade={trade} />
            </div>}
        </CardContent>
        <CardFooter className="bg-card-footer flex justify-between align-center pl-16 py-2">
            {
                trade.instrumentType === "INDEX"
                    ? <>
                        <p><span className="font-medium">RR on index chart : </span><span className="py-0 px-2 bg-amber-100 rounded-sm text-md font-semibold">{"" + trade.riskToReward}</span></p>
                        <p><span className="font-medium">RR on FnO chart : </span><span className="py-0 px-2 bg-amber-100 rounded-sm text-md font-semibold">{"" + trade.riskToRewardOnPremium}</span></p>
                        <p><span className="font-medium">P&L :</span> <span className={"py-0 px-2 rounded-sm text-md font-semibold border border-slate-200 " + (trade.pnl > 0 ? "bg-green-200" : "bg-red-200")}>{trade.pnl.toString()}</span></p>
                    </>
                    : <>
                        <p><span className="font-medium">RR : </span><span className="py-0 px-2 bg-amber-100 rounded-sm text-md font-semibold">{"" + trade.riskToReward}</span></p>
                        <p><span className="font-medium">P&L :</span> <span className={"py-0 px-2 rounded-sm text-md font-semibold border border-slate-200 " + (trade.pnl > 0 ? "bg-green-200" : "bg-red-200")}>{trade.pnl.toString()}</span></p>
                    </>
            }
        </CardFooter>
    </Card>
}


export function InstrumentTypeLogo({ trade }: { trade: Trade }) {
    let ob = null;

    if (trade.instrumentType === "INDEX")
        ob = { name: "I", color: "text-orange-500" }
    else if (trade.instrumentType === "STOCK")
        ob = { name: "S", color: "text-green-500" }
    else if (trade.instrumentType === "COMMODITY")
        ob = { name: "C", color: "text-blue-500" }
    else if (trade.isHoliday)
        ob = { name: "H", color: "text-blue-500" }
    else if (trade.noTradingDay)
        ob = { name: "X", color: "text-red-500" }
    else
        ob = { name: "W", color: "text-blue-500" }


    return <div className={"bg-background border border-slate-300 w-10 h-10 rounded-full flex justify-center items-center p-1 mr-1 " + ob.color}>
        {ob.name}
    </div>
}

export function TradeImagesList({ trade }: { trade: Trade }) {

    return trade.imagePaths.map((path) => {
        return <ImageWithLoader path={path} key={path} />
    })
}

function ImageWithLoader({ path }: { path: string }) {
    const [loading, setLoading] = useState(true);

    return <div className="flex items-center justify-center">
        <Loader2 className={"w-4 h-4 spin " + (loading ? "block" : "hidden")} />
        <img onLoad={() => {

            setLoading(false)
        }} className={"w-full object-contain " + (!loading ? "block" : "hidden")} src={backendUrls.tradeDetails.getImageDownloadablePath(path)} alt="path" />
    </div>

}

