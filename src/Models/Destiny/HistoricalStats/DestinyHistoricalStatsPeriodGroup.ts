import { DestinyHistoricalStatsActivity } from "./DestinyHistoricalStatsActivity";
import { DestinyHistoricalStatsValue } from "./DestinyHistoricalStatsValue";

export interface DestinyHistoricalStatsPeriodGroup {
    period: string;
    activityDetails?: DestinyHistoricalStatsActivity;
    values: { [key: string]: DestinyHistoricalStatsValue };
}