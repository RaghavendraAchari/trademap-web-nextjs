"use client"
import { EDITOR_JS_TOOLS } from "./tools";
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

//props
type Props = {
    data?: OutputData;
    setData(val: OutputData): void;
    id: string;
    edit: boolean,
    className?: string
};

export default function Editor({ id, data, setData, edit = false, className }: Props) {
    //add a reference to editor
    const ref = useRef<EditorJS>();

    const handleOnSave = async () => {
        if (ref.current) {
            const data = await ref.current.save();
            setData(data);
        }
    }

    //initialize editorjs
    useEffect(() => {
        console.log("useEffectCalled with edit: " + edit);

        //initialize editor if we don't have a reference
        const editor = new EditorJS({
            holder: id,
            tools: EDITOR_JS_TOOLS,
            data,
            readOnly: !edit,
        });
        ref.current = editor;

        //add a return function handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [edit]);

    return <div className="flex flex-col items-end min-w-full">
        <div className={cn("prose max-w-full w-full border mt-1 rounded mb-1", className)} id={id} />
        <Button variant={"default"} size={"default"} onClick={handleOnSave} >Save</Button>
    </div>

}