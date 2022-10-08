import { IEngagespotOptions, IEngagespotSendParams } from "./types";

const send = (options: IEngagespotOptions) => {

  return async (params: IEngagespotSendParams) => {

    const response = await options.httpClient.post("/notifications", params);

    return response.data as string;

  }
};

export const engagespot = (options: IEngagespotOptions) => {
  return {
    send: send(options)
  };
};
