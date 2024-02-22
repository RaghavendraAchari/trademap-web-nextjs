import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import StockIcon from "@/assets/stock.svg"
import TotalInvestment from "@/components/analytics/totalInvestment";
import DaysSegregation from "@/components/analytics/daysSegregation";
import TradedSegmentsDetails from "@/components/analytics/tradedSegmentsDetails";
import PnlAnalytics from "@/components/analytics/pnlAnalytics";

export default function Analytics() {

    return (
        <div className='page p-3 space-y-2 overflow-y-scroll'>
            <TotalInvestment />

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
        </div>
    )
}





