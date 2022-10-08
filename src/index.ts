import axios from "axios";
import { engagespot } from "./client";
import { Config } from "./config";
import { IEngagespotClientOptions } from "./types";

export const EngagespotClient = (options: IEngagespotClientOptions) => {

    if (!(options.apiKey && options.apiSecret) ) {
        throw new Error("Both apiKey and apiSecret are required");
    }

    const baseUrl = options.baseUrl || Config.BASE_URL
    const version = process.env.npm_package_version;

    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers:{
            'Content-Type': 'application/json',
            'X-ENGAGESPOT-API-KEY': options.apiKey,
            'X-ENGAGESPOT-API-SECRET': options.apiSecret
        }
        
    });

    return engagespot({httpClient:axiosInstance})

}