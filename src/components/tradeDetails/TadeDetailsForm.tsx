import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
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
import React, { ChangeEvent, FormEvent, ReactElement, useContext, useEffect, useRef, useState } from "react"
import useFetch from "../../hooks/useFetch"
import SetupsAndInstruments from "@/models/trade/SetupsAndInstruments"
import backendUrls from "@/constants/backendUrls"

import { ScrollArea } from "@/components/ui/scroll-area"
import { SettingsContext } from "@/context/SettingsContext";
import { Popover } from "../ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";


function getDateInISOAsLocalDate(date: Date): string {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 16)
}

interface Props {
    forDate: Date;
    onDataSubmit: () => void;
    disabled?: boolean
}

export default function TradeDetailsForm({ forDate, onDataSubmit, disabled }: Props) {
    const { data: setupsAndInstruments, error, loading, refresh } = useFetch<SetupsAndInstruments>(backendUrls.tradeDetails.setupsAndInstuments);

    const [formOpen, setFormOpen] = useState<boolean>(false)

    const formState = useRef<HTMLFormElement | null>(null)
    const { toast } = useToast()
    const [fetchingData, setFetchingData] = useState(true)
    const [day, setDay] = useState<null | number>(null)
    const [maxDay, setMaxDay] = useState<null | number>(null)
    const inputImagesRef = useRef<HTMLInputElement>(null);

    const setupInpurRef = useRef<HTMLInputElement>(null)
    const instrumentNameInpurRef = useRef<HTMLInputElement>(null)


    const [sendingForm, setSendingForm] = useState<boolean>(false)
    const [formValues, setFormValues] = useState({
        "day": "",
        "dateTime": "",
        "instrumentType": ""
    })

    const handleFormValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormValues(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("onSubmit called");


        if (formState.current == null)
            return;

        setSendingForm(true)
        const formData = new FormData(formState.current);

        const tradeDetails = {
            noTradingDay: false,
            isHoliday: false,
            isWeekend: false,
            dateTime: formData.get("dateTime"),
            day: formData.get("day"),
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

        // send to backend
        axios.post("http://localhost:8080/tradedetails",
            uploadObject,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        ).then(res => {
            if (res.status.toString().startsWith("2")) {
                toast({
                    title: "Data saved",
                    description: "Data is saved to the server."
                })

            } else {
                toast({
                    title: "Data not stored",
                    description: "Data is not saved to the server."
                })
            }
            onDataSubmit();
            setFormOpen(false);
        }).catch((err: AxiosError) => {
            toast({
                title: "Error !",
                description: "Error in sending the data." + err.message
            })
        }).finally(() => {
            setSendingForm(false);
            (formState.current as HTMLFormElement).reset()
        })


    }

    const [imagePreviews, setImagePreviews] = useState<ReactElement[]>([])

    useEffect(() => {
        setFetchingData(true)

        axios.get<{ days: number }>("http://localhost:8080/tradedetails/getMaxDaysTraded")
            .then(res => {

                if (res.status === 200) {

                    setMaxDay(res.data.days)
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
            }).finally(() => setFetchingData(false))


    }, [])

    function handleOnImagePaste(e: React.ClipboardEvent<HTMLFormElement>) {
        if (e.clipboardData.files.length === 0)
            return;
        let input = inputImagesRef.current as HTMLInputElement;

        let fileList = new DataTransfer()

        //if files are present already
        if (input.files?.length !== undefined) {
            for (let i = 0; i < input.files?.length; i++) {
                fileList.items.add(input.files[i])
            }
        }

        fileList.items.add(e.clipboardData.files[0])

        input.files = fileList.files;

        setImagePreview()
    }


    function setImagePreview() {
        let previews: ReactElement[] = [];

        if (inputImagesRef.current && inputImagesRef.current.files?.length) {
            for (let i = 0; i < inputImagesRef.current.files?.length; i++) {
                console.log("reading image " + i);

                let reader = new FileReader()
                reader.readAsDataURL(inputImagesRef.current.files[i])

                reader.onload = () => {
                    const image = React.createElement("img", {
                        src: reader.result,
                        key: i
                    })
                    previews.push(image);

                    setImagePreviews(lastData => [...previews])
                }

            }

        }
    }

    return <div className="flex w-full justify-center p-2">
        <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild >
                <Button disabled={disabled} className="justify-self-center w-fit " variant={"outline"}>+ Add new trade details</Button>
            </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Trade</DialogTitle>
                <DialogDescription>
                    Add trade details below
                </DialogDescription>
            </DialogHeader>

            <Separator />
                {

                }
                <form ref={formState} onPaste={(e) => handleOnImagePaste(e)} onSubmit={(e) => handleSubmit(e)} onReset={() => setImagePreviews([])}>
                <ScrollArea className="h-[500px]">
                    <div className="grid w-full max-w-sm items-center gap-4 p-2">
                            <Label aria-label="max-day" className="text-sm text-slate-500">Max days traded: {maxDay ? maxDay : 0}</Label>

                        <div className="label-distance">
                                <Label aria-label="Day" htmlFor="day">Day: </Label>
                                <Input type="number" name="day" id="day" value={day?.toString()} onChange={(e) => setDay(parseInt(e.target.value))} />
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
                                <Input ref={instrumentNameInpurRef} type="text" name="instrumentName" id="instrumentName" placeholder="Instrument Name" required />
                                <ScrollArea className="text-sm flex flex-col h-52 border rounded">
                                    {
                                        !loading && setupsAndInstruments
                                            ? setupsAndInstruments.instrumentNames.map(it => {
                                                return <div className="p-2 mb-1 cursor-pointer hover:bg-slate-100" key={it} onClick={() => {
                                                    if (instrumentNameInpurRef.current)
                                                        instrumentNameInpurRef.current.value = it
                                                }}>{it}</div>
                                            })
                                            : null
                                    }
                                </ScrollArea>
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="setupName">Setup Name: </Label>
                                <Input ref={setupInpurRef} type="text" name="setupName" id="setupName" placeholder="Setup Name" required />
                                <ScrollArea className="text-sm flex flex-col h-52 border rounded">
                                    {
                                        !loading && setupsAndInstruments
                                            ? setupsAndInstruments?.setupNames.map(it => {
                                                return <div className="p-2  mb-1 cursor-pointer hover:bg-slate-100" key={it} onClick={() => {
                                                    if (setupInpurRef.current)
                                                        setupInpurRef.current.value = it
                                                }}>{it}</div>
                                            })
                                            : null
                                    }
                                </ScrollArea>
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="rr">RR / RR on index: </Label>
                                <Input type="number" name="rr" id="rr" placeholder="Risk to reward ratio" required step="any" min={0} />
                        </div>

                        <div className="label-distance">
                            <Label htmlFor="rrOnPremium">RR / RR on premium: </Label>
                                <Input type="number" id="rrOnPremium" name="rrOnPremium" placeholder="Risk to reward ratio on FnO chart" step="any" min={0} />
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
                                        <RadioGroupItem value="partialSL" id="partialSL" />
                                        <Label className="hover:cursor-pointer" htmlFor="partialSL">Partial Stop Loss</Label>
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
                                <Input
                                    ref={inputImagesRef}
                                    onChange={() => setImagePreview()}
                                    id="images"
                                    name="images"
                                    type="file"
                                    multiple={true}
                                    accept="image/png, image/gif, image/jpeg"
                                />
                        </div>

                            <div className="label-distance" id="imagePreview">
                                {
                                    imagePreviews.map((it, index) => {
                                        return <div className="w-full" key={index}>{it}</div>
                                    })
                                }
                        </div>
                    </div>

                    </ScrollArea>
                    <DialogFooter className="sm:justify-start p-2">
                        <div>
                            <Button type="submit" variant="default" disabled={loading}>
                                Submit
                            </Button>
                        </div>
                        <div>
                            <Button type="reset" variant="outline">
                                Reset
                            </Button>
                        </div>
                    </DialogFooter>
                </form>


        </DialogContent>
    </Dialog>

    </div>



}

