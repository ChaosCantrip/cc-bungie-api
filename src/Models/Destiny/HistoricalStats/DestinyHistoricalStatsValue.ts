import { DestinyHistoricalStatsValuePair } from "./DestinyHistoricalStatsValuePair";

export interface DestinyHistoricalStatsValue {
    statId: string;
    basic: DestinyHistoricalStatsValuePair;
    pga: DestinyHistoricalStatsValuePair;
    weighted: DestinyHistoricalStatsValuePair;
    activityId?: number;
}