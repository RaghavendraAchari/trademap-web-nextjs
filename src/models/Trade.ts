export default interface Trade {
    id: number;
    day: number;
    dateTime: Date;
    noTradingDay: boolean;
    isHoliday: boolean;
    instrumentType: string;
    instrumentName: string;
    setupName: string;
    remarks: string;
    riskToReward: Number;
    riskToRewardOnPremium: Number;
    pnl: Number;
    imagePaths: Array<String>;
}