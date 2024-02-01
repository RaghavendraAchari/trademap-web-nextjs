import { getDateInISOAsLocalDate, getFullDateTime } from "@/lib/dateUtils";
import Note from "@/models/Note"

interface Props {
    note: Note
}

export default function NoteWithTimeline({ note }: Props) {
    let categories = null, tags = null;

    if (note.categories && note.categories.length > 0) {
        categories = note.categories.map((it) => <span key={it} className="rounded-full bg-white p-1 px-2 text-xs shadow-md">{it}</span>);
    }

    if (note.tags && note.tags.length > 0) {
        tags = note.tags.map((it) => <span key={it} className="rounded-full bg-white p-1 px-2 text-xs shadow-md">{it}</span>);
    }


    return <div className="note mx-auto flex min-h-64 flex-row bg-slate-50 p-2 py-0 min-w-full">
        <div className="timeline min-h-full w-4 border border-gray-200 bg-primary shadow-md"></div>

        <div className="connector z-10 -ml-4 flex min-h-full w-20 items-center">
            <div className="left-ball h-4 w-4 flex-none rounded-full border-4 border-white bg-primary shadow-md"></div>
            <div className="line h-1 grow bg-primary"></div>
            <div className="right-ball h-4 w-4 flex-none rounded-full border-4 border-white bg-primary shadow-md"></div>
        </div>

        <div className="py-2 w-full">
            <div className="card border z-9 -ml-6 flex min-h-full w-full flex-col self-center rounded-lg bg-white p-2 pl-8 text-justify text-sm font-bold shadow whitespace-pre capitalize">
                <div className="dateTime"><p className="text-end opacity-[75%] font-mono">{getFullDateTime(new Date(note.dateTime))}</p></div>
                <div className="header flex min-h-10 w-full items-center justify-between gap-1 rounded-tl-md rounded-tr-md bg-slate-100 px-2">
                    <h5 className="grow text-wrap py-2">{note.title}</h5>
                    <div className="flex-none self-start py-2">
                        {tags}
                    </div>
                </div>

                <div className="body grow px-2 text-sm font-medium min-h-[6em]">{note.content}</div>

                <div className="footer flex min-h-10 w-full items-center justify-between gap-1 rounded-bl-md rounded-br-md bg-slate-200 px-2 py-2">
                    <h5 className="grow text-wrap opacity-80">{note.desciption}</h5>
                    <div className="tags flex-none self-end py-2">
                        {categories}
                    </div>
                </div>
            </div>
        </div>
    </div>
}