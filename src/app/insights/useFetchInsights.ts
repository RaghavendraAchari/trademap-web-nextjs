import { useEffect, useState } from "react";
import Insight from "./Insight.model";
import axios, { AxiosError } from "axios";
import backendUrls from "@/constants/backendUrls";


export default function useFetchInsights(url: string) {
    const [list, setList] = useState<Insight[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = () => {
        setLoading(true)

        axios.get(url)
            .then(res => {
                setList(res.data)
                setLoading(false)
            })
            .catch((err: AxiosError) => { setError(err.message); setLoading(false) })
    }

    const refresh = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data: list,
        error: error,
        loading,
        refresh
    }
}

export function useFetchInsightDetails(url: string, id: number) {
    const [insight, setInsight] = useState<Insight | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = () => {
        setLoading(true)

        axios.get(url + "/" + id.toString())
            .then(res => {
                setInsight(res.data)
                setLoading(false)
            })
            .catch((err: AxiosError) => { setError(err.message); setLoading(false) })
    }

    const refresh = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        insight,
        error,
        loading,
        refresh
    }
}

