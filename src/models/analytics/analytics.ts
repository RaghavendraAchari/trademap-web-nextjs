export default interface Analytics {
    useId: number; //for future reference
    totalInvestment: number
    totalDays: number
    totalWeekends: number
    totalNoTradingDays: number
    totalHolidays: number
    totalTrades: number
    totalTradesInStock: number
    totalTradesInIndex: number
    totalTradesInCommodity: number
    totalPnl: number
    maxProfitInADay: number
    maxLossInADay: number
    dateOfMaxProfit: string
    dateOfMaxLoss: string
    noOfProfitTrades: number
    noOfLossTrades: number
}