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
    templateId?: string,
    title?: string,
    message?: string,
    url?:string,
    icon?:string
}

export interface IEngagespotProviderOverrideConfig{
    _config?: any
    [key: string]: number;
}

type Channel = 'inApp' | 'webPush' | 'email' | 'mobilePush' | 'sms'

export interface IEngagespotOverride{
    channels?: Array<Channel>
    mailgun?: IEngagespotProviderOverrideConfig;
    sendgrid_email?: IEngagespotProviderOverrideConfig;
    ses?: IEngagespotProviderOverrideConfig;
    smtp_email?: IEngagespotProviderOverrideConfig;
    default_webpush?: IEngagespotProviderOverrideConfig;
    fcm?: IEngagespotProviderOverrideConfig;
    twilio_sms?:IEngagespotProviderOverrideConfig;
}

export interface IEngagespotSendParams {
    notification: IEngagespotNotification,
    recipients: Array<string>,
    category?: string,
    override?: IEngagespotOverride
}

export interface IEngagespotUserProfile {
    email?: string
    phoneNumner?: string
    [key: string]: any
}