import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Rs from "../commons/rs";

export default function TotalInvestment() {
    return <Card className="shadow-lg">
        <CardHeader >
            <CardTitle className="flex flex-row justify-between items-center"><span>Total Investment</span> <span>50,000 <Rs /></span></CardTitle>
        </CardHeader>
    </Card>
}
