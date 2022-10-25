import { IEngagespotOptions, IEngagespotSendParams, IEngagespotUserProfile } from "./types";

const send = (options: IEngagespotOptions) => {

  return async (params: IEngagespotSendParams) => {

    const response = await options.httpClient.post("/notifications", params);

    return response.data as string;

  }
};

const createOrUpdateUser = (options:IEngagespotOptions) => {

  return async (identifier: string, profile?: IEngagespotUserProfile) => {

    const response = await options.httpClient.put("/users/"+identifier, profile);

    return response.data as string;

  }
};

export const engagespot = (options: IEngagespotOptions) => {
  return {
    send: send(options),
    createOrUpdateUser: createOrUpdateUser(options)
  };
};
