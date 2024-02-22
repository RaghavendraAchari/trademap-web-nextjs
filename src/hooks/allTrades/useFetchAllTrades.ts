
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import backendUrls from "@/constants/backendUrls";
import Trade from "@/models/trade/Trade";
import { SORT } from "@/constants/SortType";
import TradeFilters from "@/types/filters";


export default function useFetchAllTrades(url: string, sort?: SORT, filters?: TradeFilters) {
    const [list, setList] = useState<Trade[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = () => {
        setLoading(true)

        axios.get(url, {
            params: {
                sort: sort,
                ...filters
            }
        })
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
    }, [sort, filters])

    return {
        data: list,
        error: error,
        loading,
        refresh
    }
}