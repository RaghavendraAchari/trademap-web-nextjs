import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useToast } from "@/components/ui/use-toast"


import axios, { AxiosError } from "axios";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react"

function getCurrentDate(): string {
    return new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 16)
}

function getDateInISOAsLocalDate(date: Date): string {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 16)
}

interface Props {
    forDate: Date
}

export default function TradeDetailsForm({ forDate }: Props) {

    const formState = useRef(null)
    const { toast } = useToast()

    const fetchingData = useRef(true)

    const [day, setDay] = useState<null | number>(null)

    const handleSubmit = (e: any) => {
        console.log(formState);

        if (formState.current == null)
            return;

        const formData = new FormData(formState.current);

        const tradeDetails = {
            noTradingDay: false,
            isHoliday: false,
            date: formData.get("dateTime"),
            instrumentType: formData.get("instrumentType"),
            instrumentName: formData.get("instrumentName"),
            setupName: formData.get("setupName"),
            riskToReward: formData.get("rr"),
            riskToRewardOnPremium: formData.get("rrOnPremium"),
            resultType: formData.get("resultType"),
            remarks: formData.get("remarks"),
            pnl: formData.get("pnl"),
        }

        const images = formData.getAll("images");

        const uploadObject = new FormData();
        uploadObject.append("tradeDetails", new Blob([JSON.stringify(tradeDetails)], { type: "application/json" }),);

        images.forEach(file => uploadObject.append("images", file))

        uploadObject.forEach((value, key) => console.log({ key, value }))

        toast({
            title: "Sending data to the server",
            description: "Data is being sent to the server. Waiting for the response."
        })

        //send to backend
        // await axios.post("http://localhost:8080/tradedetails",
        //     uploadObject,
        //     {
        //         headers: {
        //             "Content-Type": "multipart/form-data",

        //         }
        //     }
        // )



        //display a toast

        // e.preventDefault()
    }

    useEffect(() => {
        fetchingData.current = true

        axios.get<{ days: number }>("http://localhost:8080/tradedetails/getMaxDaysTraded")
            .then(res => {
                if (res.status === 200) {

                    setDay(res.data.days + 1)
                } else {
                    toast({
                        title: "Not able to fetch max days",
                        description: "Error code : " + res.status + ", Message : " + res.statusText
                    })
                }
            }).catch((err: AxiosError) => {
                toast({
                    title: "Network Issue",
                    description: "Message: " + err.message
                })
            });
    }, [])

    return <Dialog>
        <DialogTrigger asChild >
            <div className="flex w-full justify-center m-3">
                <Button className="justify-self-center w-fit " variant={"outline"}>+ Add new trade details</Button>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Trade</DialogTitle>
                <DialogDescription>
                    Add trade details below
                </DialogDescription>
            </DialogHeader>

            <Separator />

            <form ref={formState}>
                <ScrollArea className="h-[500px]">
                    <div className="grid w-full max-w-sm items-center gap-4 p-2">
                        <Label aria-label="max-day" className="text-sm text-slate-500">Max days traded: {(day! - 1).toString()}</Label>

                        <div className="label-distance">
                            <Label aria-label="Day">Day: </Label>
                            {/* <DateTimePicker isRequired={true} key="dateTimePicker" granularity="minute" value={ } /> */}
                            <Input type="number" name="day" id="day" value={day as number} onChange={(e) => setDay(parseInt(e.target.value))} />
                        </div>

                        <div className="label-distance">
                            <Label aria-label="DateTime">Date and Time: </Label>
                            {/* <DateTimePicker isRequired={true} key="dateTimePicker" granularity="minute" value={ } /> */}
                            <Input type="datetime-local" name="dateTime" id="DateTime" defaultValue={getDateInISOAsLocalDate(forDate)} />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="instrumentType">Instrument Type: </Label>
                            <RadioGroup id="instrumentType" name="instrumentType" defaultValue="INDEX" required>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="INDEX" id="INDEX" />
                                    <Label className="hover:cursor-pointer" htmlFor="INDEX">Index</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="STOCK" id="STOCK" />
                                    <Label className="hover:cursor-pointer" htmlFor="STOCK">Stock</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="COMMODITY" id="COMMODITY" />
                                    <Label className="hover:cursor-pointer" htmlFor="COMMODITY">Commodity</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="instrumentName">Instrument Name: </Label>
                            <Input type="text" name="instrumentName" id="instrumentName" placeholder="Instrument Name" required />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="setupName">Setup Name: </Label>
                            <Input type="text" name="setupName" id="setupName" placeholder="Setup Name" required />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="rr">RR / RR on index: </Label>
                            <Input type="number" name="rr" id="rr" placeholder="Risk to reward ratio" required />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="rrOnPremium">RR / RR on premium: </Label>
                            <Input type="number" id="rrOnPremium" name="rrOnPremium" placeholder="Risk to reward ratio on FnO chart" />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="resultType">Result: </Label>
                            <RadioGroup name="resultType" id="resultType" defaultValue="PartialTarget" required>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="PartialTarget" id="partialTarget" />
                                    <Label className="hover:cursor-pointer" htmlFor="partialTarget">Partial Target</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="Target" id="Target" />
                                    <Label className="hover:cursor-pointer" htmlFor="Target">Target</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="CTC" id="CTC" />
                                    <Label className="hover:cursor-pointer" htmlFor="CTC">Cost To Cost (CTC)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="SL" id="SL" />
                                    <Label className="hover:cursor-pointer" htmlFor="SL">Stop Loss (SL Hit)</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="remarks">Description / Remarks:</Label>
                            <Textarea name="remarks" className="min-h-[300px]" placeholder="Type your message here." id="remarks" />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="pnl">Profit / Loss: </Label>
                            <Input type="number" id="pnl" name="pnl" placeholder="Profit/loss in (+/-)rupees" required />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="images">Images: </Label>
                            <Input id="images" name="images" type="file" multiple={true} accept="image/png, image/gif, image/jpeg" />
                        </div>


                    </div>

                </ScrollArea>
            </form>

            <DialogFooter className="sm:justify-start p-2">
                <DialogClose asChild>
                    <Button type="button" variant="secondary" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>




}