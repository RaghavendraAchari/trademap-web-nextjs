'use client';

import TradesList from "@/components/commons/TradeDetails";
import PendingDays from "@/components/commons/PendingDetails";
import { useState } from "react";
import useCurrentDate from "@/components/commons/useCurrentTime";
import PageHeader from "@/components/commons/PageHeader";
import useRefreshEvent from "@/components/commons/useRefreshEvent";


export default function Home() {

  const [forDate, setForDate] = useState<Date>(new Date())
  const { dateAsString } = useCurrentDate();
  const { refreshComponents } = useRefreshEvent()

  const onDataSubmit = () => {
    refreshComponents()
  }

  return (
    <div className='page'>
      <PageHeader title="Dashboard" description={"Date and Time: " + dateAsString} />

      <div className='md:grow md:overflow-y-auto flex flex-col lg:flex-row pt-0 space-y-4 lg:space-y-0 lg:space-x-2 m-2 ' >
        <TradesList forDate={forDate} setForDate={setForDate} onDataSubmit={onDataSubmit} />
        <PendingDays setForDate={setForDate} forDate={forDate} />
      </div>
    </div>
  )
}
