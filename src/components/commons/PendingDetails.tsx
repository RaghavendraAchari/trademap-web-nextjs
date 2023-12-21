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
import { Skeleton } from "@/components/ui/skeleton"
import Loading from "@/app/loading";


// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Act", "Nov", "Dec",]

// function formatDateToLocal(date: Date): string {
//     return days[date.getDay() - 1] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
// }

interface Props {
    setForDate: (state: Date) => void;
    forDate: Date
}

export default function PendingDetails({ setForDate, forDate }: Props) {
    const [pendingDates, setPendingDates] = useState<string[]>([])
    const fetchingData = useRef(true);

    const { toast } = useToast();


    function fetchPendingDays() {

        axios.get<string[]>("http://localhost:8080/tradedetails/pendingDates")
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);

                    setPendingDates(res.data)

                    toast({
                        title: "Fetched pending dates",
                    });
                } else {
                    toast({
                        title: "Server Error",
                        description: "Bad response recieved from server"
                    });
                }
            }).catch(err => {
                toast({
                    title: "Network Error",
                    description: err.toString()
                })
            })
    }

    useEffect(() => {
        fetchingData.current = true;

        setTimeout(() => { fetchPendingDays() }, 2000)

        fetchingData.current = false;

    }, [])


    return <div className='flex-none w-full lg:flex-auto lg:w-[30%]'>
        <div className="flex flex-row justify-between align-center my-2">
            <h3 className="text-lg font-bold">Pending Details:</h3>
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
                        pendingDates && pendingDates.length === 0
                            ? <>
                                <p className="my-2">No pending trades.</p>
                            </>
                            : <>
                                {pendingDates.map((date, index) => {
                                    const dateString = new Date(date).toDateString()

                                    return <Card className="mt-2 " key={index} >
                                        <CardHeader className={"flex flex-row justify-between align-center px-4 py-2 space-y-0 " + ((forDate.toDateString() === new Date(date).toDateString()) ? "bg-slate-100" : "")}>
                                            <p className="text-sm font-medium self-center">Date: {dateString} </p>
                                            <Button className="w-fit text-sm m-0" size={"sm"} variant={"outline"} onClick={() => setForDate(new Date(date))}>Fill now</Button>
                                        </CardHeader>
                                    </Card>
                                })}
                            </>
                    }
                </>

        }



    </div>
}