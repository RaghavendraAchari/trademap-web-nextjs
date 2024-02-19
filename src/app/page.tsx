'use client';

import TradesDetails from "@/components/dashboard/TradeDetails";
import PendingDays from "@/components/dashboard/PendingDetails";
import { useState } from "react";
import useCurrentDate from "@/hooks/useCurrentTime";
import PageHeader from "@/components/commons/PageHeader";
import useRefreshEvent from "@/hooks/useRefreshEvent";
import backendUrls from "@/constants/backendUrls";
import useFetch from "@/hooks/useFetch";
import { getDateInISOAsLocalDate } from "@/lib/dateUtils";
import Trade from "@/models/trade/Trade";


export default function Home() {

  const [forDate, setForDate] = useState<Date>(new Date())
  const { dateAsString } = useCurrentDate();

  let url = "";

  if (forDate === null || forDate === undefined) {
    url = backendUrls.tradeDetails.allTrades + "/today"
  } else {
    url = backendUrls.tradeDetails.allTrades + "/forDate?date=" + getDateInISOAsLocalDate(forDate).substring(0, 10);
  }

  const { data: trades, error: tradeError, loading: tradeLoading, refresh: refreshTrades } = useFetch<Trade[]>(url);
  const { data: pendingDaysList, refresh: refreshPendingDays, loading: pendingDaysLoading, error: pendingDaysError } = useFetch<string[]>(backendUrls.tradeDetails.pendingDays);


  const onDataSubmit = async () => {
    console.log("Data submited");

    await refreshTrades()
    await refreshPendingDays()
  }

  return (
    <div className="md:flex md:flex-row md:grow md:max-h-full md:divide-x">
      <TradesDetails
        className='flex-grow flex flex-col w-full max-h-full lg:flex-auto lg:w-[70%] bg-background p-3 overflow-y-auto'
        forDate={forDate}
        trades={trades}
        error={tradeError}
        loading={tradeLoading}
        setForDate={setForDate}
        onDataSubmit={onDataSubmit} />

      <PendingDays
        className="grow flex flex-col w-full lg:flex-grow lg:w-[30%] bg-background p-3"
        days={pendingDaysList}
        loading={pendingDaysLoading}
        error={pendingDaysError}
        setForDate={setForDate}
        forDate={forDate} />
    </div>
  )
}


/* TODO list
Notes: 
add menu button with options
-add sort by date
-pin
-edit
-delete -> confirmation with dialog
-add filters
-add pagination

Navbar
-add user login icon

*/
