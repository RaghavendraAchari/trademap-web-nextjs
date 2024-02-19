import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircleIcon, XCircleIcon } from "lucide-react"
import { useState } from "react"

export default function Categories({ categories, addNewCategories, setCategories, removeCategories }: { categories: string[], addNewCategories: (state: string) => void, setCategories: (state: any) => void, removeCategories: (index: number) => void }) {
    const [state, setState] = useState("")

    return <div className="space-y-1">
        {
            categories.map((category, index) => {
                return <div key={index} className="flex flex-row items-center space-x-1 h-8">
                    <p className="grow text-sm bg-background rounded-sm  p-1">{category}</p>
                    <Button size={"icon"} variant={"ghost"} className="text-slate-600 h-4 w-4 rounded-full flex items-center justify-center font-semibold shadow-sm" onClick={() => removeCategories(index)}><XCircleIcon className="w-full h-full" /></Button>
                </div>
            })
        }
        <div className="flex flex-row gap-1 items-center">
            <Input
                className="px-1 h-8"
                value={state}
                type="text"
                placeholder="#CATEGORY"
                onChange={(e) => setState(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        addNewCategories(state);
                        setState("");
                    }
                }}
                onBlur={(e) => {
                    const expression = /^#\w+$/ug;
                    console.log(e.target.value.match(expression));

                    if (e.target.value !== "" && e.target.value.match(expression)) {
                        addNewCategories(state);
                        setState("");
                    } else {
                        alert("Category must start with '#' character")
                    }
                }}
            />
            <Button title="Add a new category" size={"icon"} variant={"ghost"} className="h-4 w-4 text-slate-600 rounded-full flex items-center justify-center font-semibold shadow-sm" onClick={() => { addNewCategories(state); setState("") }}><PlusCircleIcon /></Button>

        </div>

    </div>

}
