
import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import { getDateInISOAsLocalDate } from "@/lib/dateUtils"
import axios, { AxiosError } from "axios"
import { useToast } from "../ui/use-toast"
import { Checkbox } from "../ui/checkbox"
import useRefreshEvent from "./useRefreshEvent"


interface Props {
    forDate: Date
}

interface Data {
    isHoliday: boolean
    isWeekend: boolean
    noTradingDay: boolean
    dateTime: string
    remarks: string
}

type State = "NoTradingDay" | "Weekend" | "Holiday" | null;

const classNames = {
    label: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
}

export default function NoTradingDayForm({ forDate }: Props) {
    const [state, setState] = useState<State>(null)
    const { toast } = useToast()
    const { refreshComponents } = useRefreshEvent()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const postData: Data = {
            isHoliday: state === "Holiday",
            isWeekend: state === "Weekend",
            noTradingDay: state === "NoTradingDay",
            dateTime: getDateInISOAsLocalDate(forDate),
            remarks: ""
        }
        // console.log(postData);

        axios.post("http://localhost:8080/tradedetails/setNoTradingDay", postData)
            .then(() => {
                let title;

                switch (state) {
                    case "Holiday":
                        title = "Marked as holiday."
                        break
                    case "NoTradingDay":
                        title = "Marked as no trading day."
                        break
                    case "Weekend":
                        title = "Marked as weekend."
                        break
                }

                toast({
                    title: title,
                    description: "Data is sent to server successfully."
                })
                refreshComponents();

            })
            .catch((err: AxiosError) => {
                toast({ title: "Network Error", description: err.message })
            });
    }

    return <form className="space-y-1 flex flex-col md:flex-row md:space-y-0  md:justify-between md:items-center" onSubmit={(e) => { handleSubmit(e) }}>
        <div className="items-top flex space-x-2">
            <Checkbox name="noTradingDay" id="noTradingDay" checked={state === "NoTradingDay"} onClick={() => {
                setState(prev => prev === "NoTradingDay" ? null : "NoTradingDay")
            }} />
            <label
                htmlFor="noTradingDay"
                className={classNames.label}
            >
                Mark as no trading day
            </label>
        </div>
        <div className="items-top flex space-x-2">
            <Checkbox name="isHoliday" id="isHoliday" checked={state === "Holiday"} onClick={() => {
                setState(prev => prev === "Holiday" ? null : "Holiday")

            }} />
            <label
                htmlFor="isHoliday"
                className={classNames.label}
            >
                Mark as holiday
            </label>
        </div>
        <div className="items-top flex space-x-2">
            <Checkbox name="isWeekend" id="isWeekend" checked={state === "Weekend"} onClick={() => {
                setState(prev => prev === "Weekend" ? null : "Weekend")
            }} />
            <label
                htmlFor="isWeekend"
                className={classNames.label}
            >
                Mark as weekend
            </label>
        </div>
        <Button className="mr-0 self-end" type="submit" variant={"outline"}>Update</Button>
    </form>
}