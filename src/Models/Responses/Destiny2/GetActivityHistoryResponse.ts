import { DestinyActivityHistoryResults } from "Models/Destiny"

export interface GetActivityHistoryResponse {
    Response: DestinyActivityHistoryResults;
    ErrorCode: number;
    ThrottleSeconds: number;
    ErrorStatus: string;
    Message: string;
    MessageData: { [key: string]: string };
    DetailedErrorTrace?: string;
}