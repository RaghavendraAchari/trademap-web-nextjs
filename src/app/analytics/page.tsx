"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import TotalInvestment from "@/components/analytics/totalInvestment";
import DaysSegregation from "@/components/analytics/daysSegregation";
import TradedSegmentsDetails from "@/components/analytics/tradedSegmentsDetails";
import PnlAnalytics from "@/components/analytics/pnlAnalytics";
import useFetchAnalytics from "@/hooks/analytics/useFetchAnalytics";
import backendUrls from "@/constants/backendUrls";
import Loading from "../loading";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { TerminalIcon } from "lucide-react";

export default function Analytics() {
    const { data, error, loading, refresh } = useFetchAnalytics(backendUrls.analytics);

    return (
        <div className='page p-3 space-y-2 overflow-y-scroll'>

            {
                (data && !loading && error === null)
                    ? <>
                        <TotalInvestment amount={data.totalInvestment} />

                        {/* Total number of days */}
                        <div>
                            <DaysSegregation />
                        </div>

                        {/* Traded days */}
                        <div className="">
                            <TradedSegmentsDetails />
                        </div>

                        {/* pnl related */}
                        <div>
                            <PnlAnalytics />
                        </div>
                    </>
                    : null
            }
            {
                loading ? <Loading /> : null
            }
            {
                error
                    ? <Alert>
                        <TerminalIcon />
                        <AlertTitle >Error</AlertTitle>
                    </Alert>
                    : null
            }

        </div>
    )
}





