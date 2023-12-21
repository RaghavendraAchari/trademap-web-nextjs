"use client";

import { useEffect, useState } from "react";

export default function DisplayDate() {
    const [time, setTime] = useState<null | String>(new Date().toLocaleString())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    return (
        <>
            <h3 suppressHydrationWarning className='text-sm lg:text-md pt-2'>Date and Time: {time}</h3>
        </>
    );
}