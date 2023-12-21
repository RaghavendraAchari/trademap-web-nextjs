"use client"

import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TradeDetailsForm from "./TadeDetailsForm";
import { Badge } from "@/components/ui/badge"


import Trade from "@/models/Trade";
import axios, { AxiosError } from "axios";
import { Button } from "../ui/button";
import Loading from "@/app/loading";
import { useToast } from "../ui/use-toast";

// const list: Trade[] = [
//     {
//         id: 1,
//         day: 2,
//         dateTime: new Date(Date.parse("2023-12-19T13:30")),
//         noTradingDay: false,
//         isHoliday: false,
//         instrumentType: "INDEX",
//         instrumentName: "Nifty",
//         setupName: "5 EMA",
//         remarks: "Desc of trade",
//         riskToReward: 1.5,
//         riskToRewardOnPremium: 1,
//         pnl: 300,
//         imagePaths: ["path 1", "path 2"],
//     }
// ]

interface props {
    forDate: Date;
    setForDate: (state: Date) => void
}

export default function TradeDetails({ forDate, setForDate }: props) {
    const [today] = useState<Date>(new Date())
    const [trades, setTrades] = useState<Trade[]>([])
    const [isHoliday, setIsHoliday] = useState(false)
    const [noTradingDay, setNoTradingday] = useState(false)

    const { toast } = useToast();

    const fetchingData = useRef(true);

    function fetchData() {
        fetchingData.current = true;

        axios.get<Trade[]>("http://localhost:8080/tradedetails/today")
            .then(res => {
                if (res.status === 200) {
                    setTrades(res.data)

                    toast({
                        title: "Fetched trades",
                        description: "Fetchrd trades for " + forDate.toDateString()
                    })
                } else {
                    toast({
                        title: "BAD REQUEST | SERVER ISSUE",
                        description: "Error code : " + res.status + ", Message : " + res.statusText
                    })
                }
            })
            .catch((err: AxiosError) => {
                toast({
                    title: "Network Issue",
                    description: "Message: " + err.message
                })
            });

        fetchingData.current = false;
    }

    useEffect(() => {
        setTimeout(() => { fetchData() }, 2000)
    }, [])

    return <div className='flex-none w-full lg:flex-auto lg:w-[70%]'>
        <div className="flex flex-row justify-between align-center my-2">
            <h3 className="text-lg font-bold">Trade Details:</h3>
            <div className="flex flex-col justify-end space-y-1 md:flex-none md:flex-row md:justify-end md:space-y-0">
                <Badge className="mr-2" variant="outline">For: {forDate.toDateString()}</Badge>

                {forDate.toDateString() !== today.toDateString()
                    ? <Badge className="mr-2 hover:cursor-pointer hover:bg-slate-100" variant="outline" onClick={() => setForDate(today)}>Fill for today</Badge>
                    : null
                }
            </div>
        </div>

        <Separator />

        {
            fetchingData.current
                ? <>
                    <Loading />
                    <Loading />
                    <Loading />
                </>
                : <>
                    {
                        trades.length > 0 && trades.map(trade => {
                            return <Card key={trade.id} className="mt-2">
                                <CardHeader>
                                    <CardTitle>{"Trade No: " + trade.id} ({trade.setupName})</CardTitle>
                                    <CardDescription>Trade Details : {trade.remarks}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between">
                                        <p><b>Type : </b> {trade.instrumentType}</p>
                                        <p><b>Name : </b>{trade.instrumentName}</p>
                                    </div>
                                    <p>Date and time : {trade.dateTime.toLocaleString()}</p>

                                </CardContent>
                                <CardFooter className="flex justify-between align-center">
                                    {
                                        trade.instrumentType === "INDEX"
                                            ? <>
                                                <p><span className="font-medium">RR on index chart : </span><span>{"" + trade.riskToReward}</span></p>
                                                <p><span className="font-medium">RR on FnO chart : </span><span>{"" + trade.riskToRewardOnPremium}</span></p>
                                                <p><span className="font-medium">PnL :</span> <span>{trade.pnl.toString()}</span></p>
                                            </>
                                            : <>
                                                <p><span className="font-medium">RR : </span><span>{"" + trade.riskToReward}</span></p>
                                                <p><span className="font-medium">PnL :</span> {trade.pnl.toString()}</p>
                                            </>
                                    }
                                </CardFooter>
                            </Card>
                        })
                    }

                    {
                        trades.length === 0
                            ? <p className="my-2">No trades for today.</p>
                            : null
                    }
                </>
        }

        <TradeDetailsForm forDate={forDate} />

        {
            trades.length === 0
                ? <div className="flex justify-between lg:justify-start mt-2 pt-2 lg:space-x-4">
                    <div className="items-top flex max-w-[50%] lg:-max-w-auto space-x-2">
                        <Checkbox name="noTradingDay" id="noTradingDay" checked={noTradingDay} onClick={() => {
                            setNoTradingday(prev => {
                                prev = !prev

                                if (prev)
                                    setIsHoliday(false)
                                return prev
                            });
                        }} />
                        <label
                            htmlFor="noTradingDay"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Mark as no trading day
                        </label>
                    </div>
                    <div className="items-top flex max-w-[50%] lg:-max-w-auto space-x-2">
                        <Checkbox name="isHoliday" id="isHoliday" checked={isHoliday} onClick={() => {
                            setIsHoliday(prev => {
                                prev = !prev

                                if (prev)
                                    setNoTradingday(false)
                                return prev;
                            });
                        }} />
                        <label
                            htmlFor="isHoliday"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Mark as holiday
                        </label>
                    </div>
                </div>
                : null
        }

        <div className="flex flex-row justify-start lg:justify-end my-2">
            {
                (isHoliday || noTradingDay)
                    ? <Button className="mr-2 mt-2" variant={"default"} size={"sm"} onClick={() => console.log("Sending update for today")} >Update</Button>
                    : null
            }
        </div>

    </div >
}