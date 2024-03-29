"use client"
import { Button } from "@/components/ui/button";
import { InsightHeader } from "./InsightView"
import dynamic from "next/dynamic";
import Insight from "../../models/insights/Insight.model";
import { OutputData } from "@editorjs/editorjs";
import { Dispatch, SetStateAction } from "react";
import AskForEdit from "./askForEdit";


const Editor = dynamic(() => import("@/components/textEditor/editor"), {
    ssr: false,
});

interface Props {
    insight: Insight,
    editContent: boolean,
    setContentEdit: Dispatch<SetStateAction<boolean>>,
    setEditorData: (data: OutputData) => void,
    editorData: OutputData,
    onDeleteClicked: () => Promise<void>
}

export default function InsightViewWeb({ insight, editContent, setContentEdit, editorData, setEditorData, onDeleteClicked }: Props) {
    let insightContent = insight.content === "" ? {} as OutputData : JSON.parse(insight.content)

    return <>
        <InsightHeader className="flex-none" title={insight.title} setContentEdit={setContentEdit} onDeleteClicked={onDeleteClicked} />
        <div className="grow md:flex md:flex-col md:h-full md:max-h-full md:overflow-y-auto">
            {insight.content === "" && (editContent === false) ?
                <AskForEdit />
                : <div data-wrapper className="md:flex md:flex-col md:w-full items-end space-y-2 p-2">
                    <Editor className="" id="editor" data={insightContent} edit={editContent} setData={setEditorData} />
                    {editContent === true && <Button variant={"outline"} size={"default"} onClick={() => setContentEdit(false)}>Cancel editing</Button>}
                </div>
            }
        </div>
    </>
}