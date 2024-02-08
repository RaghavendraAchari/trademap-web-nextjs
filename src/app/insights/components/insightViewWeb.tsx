import { Button } from "@/components/ui/button";
import { InsightHeader } from "./InsightView"
import dynamic from "next/dynamic";
import Insight from "../Insight.model";
import { OutputData } from "@editorjs/editorjs";
import { Dispatch, SetStateAction } from "react";
import AskForEdit from "./askForEdit";


const Editor = dynamic(() => import("@/components/textEditor/editor"), {
    ssr: false,
});

export default function InsightViewWeb({ insight, editContent, setContentEdit, editorData, setEditorData }: { insight: Insight, editContent: boolean, setContentEdit: Dispatch<SetStateAction<boolean>>, setEditorData: (data: OutputData) => void, editorData: OutputData }) {
    return <>
        <InsightHeader className="flex-none" title={insight.title} setContentEdit={setContentEdit} />
        <div className="grow flex flex-col w-full h-full overflow-y-auto items-end">
            {insight.content === "" && (editContent === false) ?
                <AskForEdit />
                : <div className="flex flex-col w-full items-end space-y-2 p-2">
                    <Editor className="p-1 border-0" id="editor" data={editorData} edit={editContent} setData={setEditorData} />
                </div>
            }
        </div>
    </>
}