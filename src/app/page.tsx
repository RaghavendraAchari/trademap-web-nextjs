'use client';

import DisplayDate from "@/components/commons/DisplayDate";
import TradeDetails from "@/components/commons/TradeDetails";
import PendingDetails from "@/components/commons/PendingDetails";
import { useState } from "react";


export default function Home() {

  const [forDate, setForDate] = useState<Date>(new Date())

  return (
    <main className='container mx-auto'>
      <h1 className='text-2xl font-extrabold pt-4'>Dashboard</h1>
      <DisplayDate />

      <div className='flex flex-col lg:flex-row pt-4 space-y-4 lg:space-y-0 lg:space-x-2' >

        <TradeDetails forDate={forDate} setForDate={setForDate} />

        <PendingDetails setForDate={setForDate} forDate={forDate} />

      </div>


    </main>
  )
}
