import Trade from "@/models/Trade";
import TradeDetailsCard from "./TradeDetailsCard";

interface Props {
    tradesList: Array<Trade>,
    showFullDate: boolean
}

export default function TradeDetailsList({ tradesList, showFullDate }: Props) {
    return tradesList.map(trade => {
        return <TradeDetailsCard key={trade.id} trade={trade} showFullDate={showFullDate} />
    })
}