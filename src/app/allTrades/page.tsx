'use client';

import TradeDetailsList from "@/components/tradeDetails/TradeDetailsList";
import { useToast } from "@/components/ui/use-toast";
import { Dispatch, HTMLAttributes, SetStateAction, useState } from "react";
import Loading from "../loading";
import { DotIcon, Edit2, MoreVertical, Terminal, Trash2 } from "lucide-react";
import { SORT } from "@/constants/SortType";
import { SortByDate } from "@/components/commons/SortByDate";
import useFetchAllTrades from "../../hooks/allTrades/useFetchAllTrades";
import backendUrls from "@/constants/backendUrls";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import TradeFilters from "@/types/filters";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function AllTrades() {
    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [sort, setSort] = useState<SORT>("DESC")

    const [filters, setFilters] = useState<TradeFilters>({
        showHoliday: true,
        showNoTradingDay: true,
        showWeekend: true,
        instrumentType: {
            index: true,
            stock: true,
            commodity: true,
        }
    })
    console.log(filters);

    const { data: trades, error, loading: fetchingData, refresh } = useFetchAllTrades(backendUrls.tradeDetails.allTrades, sort, filters)
    const { toast } = useToast()

    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <div className="grow h-full flex flex-col md:overflow-y-auto">
            <div className="w-full border-b flex-none text-lg font-bold bg-background py-2 flex flex-row justify-between items-center px-3">
                <span>Trades</span>
                <div className="flex flex-row space-x-1">
                    <SortByDate sort={sort} setSort={setSort} />
                    <DropdownMenu open={filtersOpen} onOpenChange={setFiltersOpen} >
                        <DropdownMenuTrigger asChild className="cursor-pointer ml-1 md:hidden block">
                            <Button className="space-x-1 " size={"icon"} variant={"ghost"}>

                                <MoreVertical size={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="text-xs">
                            <DropdownMenuLabel>Filters</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem
                                checked={filters.showHoliday}
                                onCheckedChange={(checked) => {
                                    setFilters(state => {
                                        return { ...state, showHoliday: checked }
                                    })
                                }}
                            >
                                Show holiday
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={filters.showNoTradingDay}
                                onCheckedChange={(checked) => {
                                    setFilters(state => {
                                        return { ...state, showNoTradingDay: checked }
                                    })
                                }}
                            >
                                Show no trading days
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem
                                checked={filters.showWeekend}
                                onCheckedChange={(checked) => {
                                    setFilters(state => {
                                        return { ...state, showWeekend: checked }
                                    })
                                }}
                            >
                                Show weekends
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="grow flex flex-col md:max-h-full md:overflow-y-auto px-3 py-2">
                {
                    fetchingData && <Loading />
                }
                {
                    fetchingData === false && trades && trades.length > 0
                        ? <div className="md:grid md:grid-cols-8 gap-1 divide-x overflow-y-auto">
                            <ScrollArea className="col-span-6 max-h-full overflow-y-auto md:pr-3">
                                <TradeDetailsList tradesList={trades} showFullDate={true} />
                                <DotIcon className="self-center mx-auto opacity-50 w-10 h-10" />
                            </ScrollArea>

                            <TradeFiltersWindow filters={filters} setFilters={setFilters} />
                        </div>
                        : null
                }
                {
                    fetchingData === false && trades && trades.length === 0 ? <Alert variant={"default"}>
                        <Terminal />
                        <AlertTitle>No trades found</AlertTitle>
                        <AlertDescription>It looks like you have not taken any trades.</AlertDescription>
                    </Alert> : null
                }
            </div>
        </div>
    )
}

interface TradeFiltersWindowProps extends HTMLAttributes<HTMLDivElement> {
    filters: TradeFilters,
    setFilters: Dispatch<SetStateAction<TradeFilters>>
}

function TradeFiltersWindow({ filters: state, setFilters: setFilterState, className }: TradeFiltersWindowProps) {
    const [filters, setFilters] = useState<TradeFilters>(state);

    let showOnlyTrades = filters.showWeekend === false && filters.showHoliday === false && filters.showWeekend === false;

    return <div className={cn("col-span-2 p-2 max-h-full overflow-auto md:block hidden", className)}>
        <h3 className="font-medium text-muted-foreground border-b px-2 py-1">Filters:</h3>
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="holiday"
                name="holiday"
                checked={filters.showHoliday}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, showHoliday: checked }
                    })

                }}
            />
            <Label className="cursor-pointer" htmlFor="holiday">Include holidays</Label>
        </div>
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="notradingday"
                name="notradingday"
                checked={filters.showNoTradingDay}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, showNoTradingDay: checked }
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="notradingday">Include no trading days</Label>
        </div>
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="weekend"
                name="weekend"
                checked={filters.showWeekend}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, showWeekend: checked }
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="weekend">Include weekends</Label>
        </div>

        <Separator />
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="showOnlyTrades"
                name="showOnlyTrades"
                checked={showOnlyTrades}
                onCheckedChange={(checked: boolean) => {
                    setFilters((state) => {
                        return { ...state, showWeekend: !checked, showHoliday: !checked, showNoTradingDay: !checked } as TradeFilters
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="showOnlyTrades">Only show trades</Label>
        </div>

        <h3 className="text-md mt-4">Instrument Type:</h3>
        <Separator />
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="Stock"
                name="Stock"
                checked={filters.instrumentType.stock}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, instrumentType: { ...state.instrumentType, stock: checked } }
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="Stock">Stock</Label>
        </div>

        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="Index"
                name="Index"
                checked={filters.instrumentType.index}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, instrumentType: { ...state.instrumentType, index: checked } }
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="Index">FnO</Label>
        </div>
        <div className="flex space-x-1 items-center p-2">
            <Checkbox
                id="commodity"
                name="commodity"
                checked={filters.instrumentType.commodity}
                onCheckedChange={(checked: boolean) => {
                    setFilters(state => {
                        return { ...state, instrumentType: { ...state.instrumentType, commodity: checked } }
                    })
                }}
            />
            <Label className="cursor-pointer" htmlFor="commodity">Commodity</Label>
        </div>
        <div className="flex space-x-1 items-center justify-end p-2">
            <Button variant={"outline"} size={"sm"} onClick={() => setFilterState(filters)}>Apply Filters</Button>
        </div>

    </div>
}
