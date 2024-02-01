import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Suspense, useEffect, useRef, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import axios from "axios";
import { useToast } from "../ui/use-toast";
import Loading from "@/app/loading";
import { REFRESH_EVENT } from "./useRefreshEvent";
import useFetch from "../hooks/useFetch";
import Error from "./error";


interface Props {
    setForDate: (state: Date) => void;
    forDate: Date
}

export default function PendingDays({ setForDate, forDate }: Props) {
    const { data, refresh, loading, error } = useFetch<string[]>("http://localhost:8080/tradedetails/pendingDates");

    useEffect(() => {
        document.addEventListener(REFRESH_EVENT, () => { refresh() })

        return () => document.removeEventListener(REFRESH_EVENT, () => { })
    }, [])

    return <div className='grow flex flex-col w-full lg:flex-grow lg:w-[30%] bg-background border border-gray-100 px-2 rounded-md shadow-sm'>
        <div className="flex-none flex flex-row justify-between align-center my-2">
            <h3 className="text-lg font-bold">Pending Days:</h3>
        </div>

        <Separator />

        {
            loading
                ? <Loading />
                : <>
                    {
                        data && data.length === 0
                            ? <div>
                                <p className="my-2">No pending days.</p>
                            </div>
                            : <div className="grow overflow-y-auto max-h-[100%] mb-2">
                                {data?.map((date, index) => {
                                    const dateString = new Date(date).toDateString()

                                    return <Card className="my-2" key={index} >
                                        <CardHeader className={"flex flex-row justify-between align-center px-4 py-2 space-y-0 " + ((forDate.toDateString() === new Date(date).toDateString()) ? "bg-slate-100" : "")}>
                                            <p className="text-sm font-medium self-center">Date: {dateString} </p>
                                            <Button className="w-fit text-sm m-0" size={"sm"} variant={"outline"} onClick={() => setForDate(new Date(addCurrentTimeToDateString(date)))}>Fill now</Button>
                                        </CardHeader>
                                    </Card>
                                })}
                            </div>
                    }
                </>

        }
        {
            !loading && error && <Error />
        }



    </div>
}

function addCurrentTimeToDateString(date: string): string {
    const dateNow = new Date();

    return date + "T" + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getMinutes();
}