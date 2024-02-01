'use client';

import NoteWithTimeline from "@/components/commons/NoteCardWithTimeline";
import PageHeader from "@/components/commons/PageHeader";
import Note from "@/models/Note";
import { useEffect, useRef, useState } from "react";
import NotesFilter from "./components/NotesFilter";
import EditNote from "./components/EditNote";
import { getNotes } from "./notesService";
import Loading from "../loading";


type SORT = "ASC" | "DESC";

interface Filters {
    tags: Array<string>,
    categories: Array<string>,
    keyWords: Array<string>,
}

export default function AllTrades() {
    const [notes, setNotes] = useState<Array<Note>>([]);
    const [fetchingData, setFechingData] = useState(true);

    const [filters, setFilters] = useState<Filters>({
        tags: [],
        categories: [],
        keyWords: [],
    })

    const [sort, setSort] = useState<SORT>("DESC");

    const fetchNotes = async (filters: Filters, sort: SORT) => {
        setFechingData(true);
        const data = await getNotes();
        setFechingData(false);

        setNotes(data);
    }

    const [editNote, setEditNoteContent] = useState<Note | null>({} as Note);

    useEffect(() => {
        fetchNotes(filters, sort)
    }, [])

    let notesList = null;
    if (notes && notes.length > 0) {
        notesList = notes.map(it => {
            return <NoteWithTimeline note={it} key={it.id} />
        })
    }

    const onNewNoteSave = () => {
        fetchNotes(filters, sort)
    }

    const data = fetchingData
        ? <div className="w-full h-full bg-background flex flex-col p-2"><Loading /></div>
        : <><SortComponent sort={sort} setSort={setSort} key={"sort"} />
            <div className="my-1">
                {notesList}
                {editNote ? <EditNote note={editNote} key={"editNote"} onSave={onNewNoteSave} /> : null}
            </div>
        </>

    return (
        <div className='page'>
            <PageHeader title="Personal Notes" description="All the things that you want to remember in your trading journey." />

            <div className='grow overflow-y-auto flex flex-row pt-2 m-2 bg-slate-100 ' >
                <div className="w-[70%] px-2 rounded-sm bg-transparent backdrop-blur-lg">
                    {data}
                </div>
                <div className="grow overflow-auto max-h-full w-[30%] mx-auto px-2 sticky top-0">
                    <NotesFilter />
                </div>
            </div>
        </div>
    )
}

interface SortProps {
    sort: SORT;
    setSort: (fn: (prev: SORT) => SORT) => void;
}

function SortComponent({ sort, setSort }: SortProps) {
    return <div className="flex flex-row justify-end rounded-sm shadow-md py-1 mb-1 border border-slate-300 bg-background items-center sticky top-0 z-20">
        <span className="text-xs font-semibold px-2 pr-8" >Sort by date :{" "}
            <button className="w-8" onClick={() => { setSort((prev: SORT) => prev === "ASC" ? "DESC" : "ASC") }}>
                {sort === "ASC" ? "DESC" : "ASC"}
            </button>
        </span>
    </div>
}
