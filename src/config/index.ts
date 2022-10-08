import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../.env') });

interface Config{
    DEBUG: number
    BASE_URL: string
}

export const Config: Config = {
    DEBUG: process.env.DEBUG as unknown as number || 0,
    BASE_URL: 'https://api.engagespot.co/v3'
}

