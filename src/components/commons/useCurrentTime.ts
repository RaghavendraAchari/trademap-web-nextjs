import { useEffect, useState } from "react";

export default function useCurrentDate() {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            const newDate = new Date()

            setDate(newDate)
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return {
        dateAsString: date?.toLocaleString(),
        date
    }
}