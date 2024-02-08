'use client';

import NoteWithTimeline from "@/components/commons/NoteCardWithTimeline";
import Note from "@/models/Note";
import { useState } from "react";
import NotesFilter from "./components/NotesFilter";
import EditNote from "./components/EditNote";
import Loading from "../loading";
import { SortByDate } from "@/components/commons/SortByDate";
import { SORT } from "@/constants/SortType";
import useFetch from "@/components/hooks/useFetch";
import backendUrls from "@/constants/backendUrls";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";


interface Filters {
    tags: Array<string>,
    categories: Array<string>,
    keyWords: Array<string>,
}

export default function AllTrades() {
    const { data: notes, error, loading, refresh } = useFetch<Note[]>(backendUrls.notes.allNotes)

    const [selectedFilters, setselectedFilters] = useState<Filters>({
        tags: [],
        categories: [],
        keyWords: [],
    })

    const [sort, setSort] = useState<SORT>("DESC");

    const [editNote, setEditNoteContent] = useState<Note | null>({} as Note);

    let notesList = null;
    if (notes && notes.length > 0) {
        notesList = notes.map(it => {
            return <NoteWithTimeline note={it} key={it.id} />
        })
    }

    const onNewNoteSave = async () => {
        await refresh()
    }

    return <div className='md:flex md:flex-row md:grow md:h-full md:max-h-full md:divide-x overflow-y-visible md:overflow-y-auto' >
        <div className="w-full px-3 py-2 bg-transparent md:flex md:flex-col  divide-y md:w-[70%] md:h-full md:max-h-full ">
            <div className="flex-none  bg-background text-foreground flex justify-between z-20 ">
                <h3 className="font-bold py-1">Notes:</h3>
                <SortByDate sort={sort} setSort={setSort} />
            </div>
            {
                loading && notes == null && error === null
                    ? <div className="w-full h-full bg-background flex flex-col p-2"><Loading /></div>
                    : <div className="my-2 grow md:max-h-full md:overflow-y-auto">
                        {notesList}
                        {editNote ? <EditNote note={editNote} key={"editNote"} onSave={onNewNoteSave} /> : null}
                    </div>
            }
        </div>

        <div className="hidden md:flex grow md:flex-col md:overflow-y-auto max-h-full md:w-[30%] mx-auto px-2 py-2 divide-y">
            <div className="flex-none bg-background text-foreground flex justify-between z-20 py-2">
                <h3 className="font-bold">Filters:</h3>
            </div>
            <div className="grow max-h-full overflow-y-auto">
                <NotesFilter className="grow max-h-full border-0" />
            </div>
        </div>

        <div className="block md:hidden sticky bottom-0 bg-background">
            <Drawer >
                <DrawerTrigger className="p-2 font-semibold border w-full text-start">Filters: </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Filters</DrawerTitle>
                        <DrawerDescription>Filter based on tags, categories and search keywords</DrawerDescription>
                    </DrawerHeader>
                    <NotesFilter className="border-0" />
                    <DrawerFooter>
                        <Button>Apply</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>

    </div>
}