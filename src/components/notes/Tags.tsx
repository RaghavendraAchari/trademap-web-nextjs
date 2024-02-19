import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircleIcon, XCircleIcon } from "lucide-react"
import { useState } from "react"

export default function Tags({ tags, addNewTag, setTags, removeTag }: { tags: string[], addNewTag: (state: string) => void, setTags: (state: any) => void, removeTag: (index: number) => void }) {
    const [state, setState] = useState("");

    return <div className="space-y-1">
        {
            tags.map((tag, index) => {
                return <div key={index} className="flex flex-row items-center space-x-1 h-8">
                    <p className="grow text-sm bg-background rounded-sm  p-1">{tag}</p>
                    <Button size={"icon"} variant={"ghost"} className="flex-none text-slate-600 h-4 w-4 rounded-full flex items-center justify-center font-semibold shadow-sm" onClick={() => removeTag(index)}><XCircleIcon className="w-full h-full" /></Button>
                </div>
            })
        }
        <div className="flex flex-row gap-1 items-center">
            <Input className="px-1 h-8 " value={state} type="text" placeholder="Tag 🔥" onChange={(e) => {
                setState(e.target.value)

            }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        addNewTag(state);
                        setState("");
                    }
                }}
                onBlur={(e) => {
                    const expression = /^\w+(?:\s)?(?=\p{Emoji})\p{Emoji}$/ug;
                    console.log(e.target.value.match(expression));

                    if (e.target.value !== "" && e.target.value.match(expression)) {
                        addNewTag(state);
                        setState("");
                    } else {
                        alert("Tag must have one word and one emoji")
                    }
                }}
            />
            <Button title="Add a new tag" size={"icon"} variant={"ghost"} className="h-4 w-4 text-slate-600 rounded-full flex items-center justify-center font-semibold shadow-sm " onClick={() => {
                addNewTag(state);
                setState("");
            }}>
                <PlusCircleIcon />
            </Button>
        </div>
    </div >

}