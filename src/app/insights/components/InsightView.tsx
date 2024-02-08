"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import ContentMenu from "./contextMenu";
import { Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import AskForEdit from "./askForEdit";

import Insight from "../Insight.model";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import InsightViewMobile from "./insightViewMobile";
import InsightViewWeb from "./insightViewWeb";
import { isMobile } from 'react-device-detect';

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string,
    setContentEdit: Dispatch<SetStateAction<boolean>>
}

export function InsightHeader({ title, setContentEdit, className }: Props) {
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
                            <DialogClose asChild><Button variant={"default"} type="submit" onClick={(e) => {
                                console.log("Deleting the insight");
                                return true
                            }}>Yes</Button></DialogClose>
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
}

export default function InsightView({ insight, editContent, setContentEdit, openDrawer, setOpenDrawer, closeWindow }: InsightViewProps) {
    const [editorData, setEditorData] = useState<OutputData>({} as OutputData);

    const onSaveClicked = async (data: OutputData) => {
        console.log(data);
        closeWindow();
    }


    useEffect(() => {
        if (insight.content === "") {
            setEditorData({} as OutputData)
        } else {
            setEditorData(JSON.parse(insight.content))
        }
    }, [insight])

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
            />
        </div>

    return <div data-insightview className="hidden md:flex flex-col w-full h-full">
        <InsightViewWeb editContent={editContent} editorData={editorData} insight={insight} setContentEdit={setContentEdit} setEditorData={onSaveClicked} />

    </div>
}


