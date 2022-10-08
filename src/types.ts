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

type Channel = 'inApp' | 'webPush' | 'email' | 'mobilePush'

export interface IEngagespotOverride{
    channels?: Array<Channel>
    mailgun?: IEngagespotProviderOverrideConfig;
    sendgrid_email?: IEngagespotProviderOverrideConfig;
    ses?: IEngagespotProviderOverrideConfig;
    smtp_email?: IEngagespotProviderOverrideConfig;
    default_webpush?: IEngagespotProviderOverrideConfig;
    fcm?: IEngagespotProviderOverrideConfig;
}

export interface IEngagespotSendParams {
    notification: IEngagespotNotification,
    recipients: Array<string>,
    override?: IEngagespotOverride
}

