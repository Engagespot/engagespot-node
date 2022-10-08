"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngagespotClient = void 0;
const axios_1 = __importDefault(require("axios"));
const client_1 = require("./client");
const config_1 = require("./config");
const EngagespotClient = (options) => {
    if (!(options.apiKey && options.apiSecret)) {
        throw new Error("Both apiKey and apiSecret are required");
    }
    const baseUrl = options.baseUrl || config_1.Config.BASE_URL;
    const version = process.env.npm_package_version;
    const axiosInstance = axios_1.default.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'X-ENGAGESPOT-API-KEY': options.apiKey,
            'X-ENGAGESPOT-API-SECRET': options.apiSecret
        }
    });
    return (0, client_1.engagespot)({ httpClient: axiosInstance });
};
exports.EngagespotClient = EngagespotClient;
