"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import ContentMenu from "./contextMenu";
import { Edit3, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import AskForEdit from "./askForEdit";

import Insight from "../../models/insights/Insight.model";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import InsightViewMobile from "./insightViewMobile";
import InsightViewWeb from "./insightViewWeb";
import { isMobile } from 'react-device-detect';
import axios, { AxiosError } from "axios";
import backendUrls from "@/constants/backendUrls";
import { useToast } from "@/components/ui/use-toast";

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string,
    setContentEdit: Dispatch<SetStateAction<boolean>>
    onDeleteClicked: () => Promise<void>
}

export function InsightHeader({ title, setContentEdit, className, onDeleteClicked }: Props) {
    const [loading, setLoading] = useState(false);

    return <div className={cn(className)}>
        <div className="flex flex-row justify-between items-center p-1">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex flex-row space-x-1">
                <ContentMenu toolTipTitle="Edit" onClick={() => setContentEdit(true)}>
                    <Edit3 size={16} />
                </ContentMenu>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={"icon"} variant={"outline"}><Trash2 size={16} /></Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Are you sure want to delete the setup / case study?</DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild><Button variant={"default"} type="submit" onClick={async (e) => {
                                setLoading(true)
                                await onDeleteClicked()
                                setLoading(false)
                            }}>{loading ? <Loader2 className="spin" fill={"purple"} /> : "Yes"}</Button></DialogClose>
                            <DialogClose asChild><Button variant={"outline"}>Cancel</Button></DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
        <Separator className="flex-none" />
    </div>

}

interface InsightViewProps {
    insight: Insight
    editContent: boolean,
    setContentEdit: Dispatch<SetStateAction<boolean>>,
    openDrawer: boolean,
    setOpenDrawer: Dispatch<SetStateAction<boolean>>,
    closeWindow: () => void
    refresh: () => void
    onInsightDeleted: () => void
    onContentUpdated: (updatedInsight: Insight) => void
}

export default function InsightView({ insight, editContent, setContentEdit, openDrawer, setOpenDrawer, closeWindow, refresh, onInsightDeleted, onContentUpdated }: InsightViewProps) {
    const [editorData, setEditorData] = useState<OutputData>({} as OutputData);
    const { toast } = useToast()

    const onSaveClicked = async (data: OutputData) => {
        console.log(data);
        try {
            const response = await axios.put<Insight>(backendUrls.insights.allInsights, {
                id: insight.id,
                content: JSON.stringify(data)
            })

            console.log({ response: response.data });

            toast({
                title: "Data saved.",
            })

            setContentEdit(false)
            onContentUpdated(response.data)

            if (isMobile)
                closeWindow();

        } catch (e: any) {

            toast({
                title: "Error in updating data",
                description: e.message
            })
        }

    }

    const onDeleteClicked = async () => {
        try {
            const respone = await axios.delete<boolean>(backendUrls.insights.allInsights, {
                params: {
                    id: insight.id
                }
            })
            if (respone.data !== true) {
                toast({ title: "Not able to delete the insight" })
                onInsightDeleted()
                refresh()
            }
            else {
                toast({ title: "Insight has been deleted" })
                refresh()
            }

        } catch (e: any) {
            toast({
                title: "Error in updating data",
                description: e.message
            })
        }
    }


    if (isMobile)
        return <div data-insightview className="flex md:hidden flex-col w-full h-full">
            <InsightViewMobile
                editContent={editContent}
                editorData={editorData}
                insight={insight}
                setContentEdit={setContentEdit}
                setEditorData={onSaveClicked}
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                onDeleteClicked={onDeleteClicked}
            />
        </div>

    return <div data-insightview className="hidden md:grow md:max-h-full md:flex md:flex-col">
        <InsightViewWeb
            editContent={editContent}
            editorData={editorData}
            insight={insight}
            setContentEdit={setContentEdit}
            setEditorData={onSaveClicked}
            onDeleteClicked={onDeleteClicked}

        />

    </div>
}


