import { AxiosInstance } from "axios"

export interface IEngagespotClientOptions {
    baseUrl?: string
    apiKey: string
    apiSecret: string
}

export interface IEngagespotOptions {
    httpClient: AxiosInstance
}

export interface IEngagespotNotification {
    title: string,
    message?: string,
    url?:string,
    icon?:string
}

export interface IEngagespotProviderOverrideConfig{
    _config?: any
    [key: string]: number;
}

export interface IEngagespotOverride{
    [key: string]: IEngagespotProviderOverrideConfig;
}

export interface IEngagespotSendParams {
    notification: IEngagespotNotification,
    recipients: Array<string>,
    override?: IEngagespotOverride
}

