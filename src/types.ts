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
    templateId?: number,
    title?: string,
    message?: string,
    url?:string,
    icon?:string
}

export interface IEngagespotProviderOverrideConfig{
    _config?: any
    [key: string]: number;
}

type Channel = "inApp" | "webPush" | "mobilePush" | "email" | "sms" | "chat" | "whatsapp" | "slack";

export interface IEngagespotOverride{
    channels?: Array<Channel>
    mailgun?: IEngagespotProviderOverrideConfig;
    sendgrid_email?: IEngagespotProviderOverrideConfig;
    ses?: IEngagespotProviderOverrideConfig;
    smtp_email?: IEngagespotProviderOverrideConfig;
    default_webpush?: IEngagespotProviderOverrideConfig;
    fcm?: IEngagespotProviderOverrideConfig;
    twilio_sms?:IEngagespotProviderOverrideConfig;
    textlocal_sms?: IEngagespotProviderOverrideConfig;
    gupshup_sms? : IEngagespotProviderOverrideConfig;
    gupshup_whatsapp?: IEngagespotProviderOverrideConfig;
    twilio_whatsapp?: IEngagespotProviderOverrideConfig;
    plivo_sms?: IEngagespotProviderOverrideConfig;
    postmark_email?: IEngagespotProviderOverrideConfig
}

export interface IEngagespotSendParams {
    notification: IEngagespotNotification,
    recipients: Array<string>,
    category?: string,
    override?: IEngagespotOverride
    data?: any;
}

export interface IEngagespotUserProfile {
    email?: string
    phoneNumber?: string
    [key: string]: any
}