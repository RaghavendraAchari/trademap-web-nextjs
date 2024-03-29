import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dispatch, SetStateAction, Suspense, useEffect, useRef, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Loading from "@/app/loading";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";


interface Props extends React.HTMLAttributes<HTMLDivElement> {
    days: string[] | null
    loading: boolean
    error: string | null
    setForDate: Dispatch<SetStateAction<Date>>;
    forDate: Date
}

export default function PendingDays({ days, error, loading, setForDate, forDate, className, ...props }: Props) {

    return <div className={cn(className)} {...props}>
        <div className="flex-none flex flex-row justify-between align-center mb-2 bg-transparent">
            <h3 className="text-lg font-bold bg-transparent">Pending Days:</h3>
        </div>

        <Separator />

        {
            loading
                ? <Loading />
                : <>
                    {
                        days && days.length === 0
                            ? <div>
                                <p className="my-2">No pending days.</p>
                            </div>
                            : <div className="grow overflow-y-auto max-h-[100%] mb-2 p-1 ">
                                {days?.map((date, index) => {


                                    return <Card className="my-2 hover:shadow" key={index} >
                                        <CardHeader className={"flex flex-row justify-between align-center px-4 py-2 space-y-0 " + ((forDate.toDateString() === new Date(date).toDateString()) ? "bg-slate-100" : "")}>
                                            <p className="text-sm font-medium self-center">{format(new Date(date), "eee, dd-MMM-yyyy")} </p>
                                            <Button className="w-fit text-sm m-0" size={"sm"} variant={"outline"} onClick={() => setForDate(new Date(date))}>Fill now</Button>
                                        </CardHeader>
                                    </Card>
                                })}
                            </div>
                    }
                </>

        }
        {
            !loading && error && <PendingDaysError />
        }

    </div>
}

function addCurrentTimeToDateString(date: string): string {
    const dateNow = new Date();

    return date + "T" + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getMinutes();
}

function PendingDaysError() {
    return <Alert variant={"destructive"}>
        <Terminal size={"16px"} />
        <AlertTitle>Oops..</AlertTitle>
        <AlertDescription>Something went wrong while petching the pending days.</AlertDescription>
    </Alert>
}