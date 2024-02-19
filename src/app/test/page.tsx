"use client"
import { useEffect, useState } from "react";
import TradeImageList from "./components/tradeImageList";
import axios, { AxiosError } from "axios";

export interface Image {
    "id": string,
    "author": string,
    "width": number,
    "height": number,
    "url": string,
    "download_url": string
}

export default function Test() {
    const [images, setImages] = useState<Image[]>()
    const [error, setError] = useState<string>()
    // useEffect(() => {
    //     axios.get<Image[]>("https://picsum.photos/v2/list?page=1&limit=5")
    //         .then((res) => {
    //             setImages(res.data);
    //         })
    //         .catch((err: AxiosError) => setError(err.message))
    // }, [])

    return <div className='md:flex md:flex-row md:grow md:h-full md:max-h-full md:divide-x overflow-y-visible md:overflow-y-auto bg-slate-50'>
        {/* {images !== undefined && !error ? <TradeImageList images={images} /> : "No images"} */}
    </div>
}