[![npm version](https://badge.fury.io/js/@engagespot%2Fnode.svg)](https://badge.fury.io/js/@engagespot%2Fnode)

This is the official node.js library for communicating with Engagespot REST API. Send multi-channel notifications from your node app.

# Installation

```
npm install @engagespot/node
```

# Prerequisites
You need Engagespot API KEY and API SECRET from your [dashboard](https://portal.engagespot.co) to get started. If you don't have one, just get one for free.

# Getting Started

```javascript
import { EngagespotClient } from "@engagespot/node";

const client = EngagespotClient({
    apiKey:'ENGAGESPOT_API_KEY',
    apiSecret:'ENGAGESPOT_API_SECRET'
})


client.send({
    notification:{
        title: "Agent X commented on your support ticket #T-793465",
        message: "Dear Customer, We're working on your ticket.",
        url: "https://support.mydomain.com/tickets/793465",
        icon: "https://cdn.support.mydomain.com/images/agent_x_profile.png"
    },
    recipients:['customer@gmail.com']
});
```

Refer [Engagespot REST API Docs](https://documentation.engagespot.co/docs/rest-api) to get the list of all supported parameters.

# Advanced Configurations

Methods and supported parameters.

```javascript
import { EngagespotClient } from "@engagespot/node";

const client = EngagespotClient({
    apiKey:'ENGAGESPOT_API_KEY',
    apiSecret:'ENGAGESPOT_API_SECRET'
})

const params = {
    notification:{
        title: "Agent X commented on your support ticket #T-793465",
        message: "Dear Customer, We're working on your ticket.",
        url: "https://support.mydomain.com/tickets/793465",
        icon: "https://cdn.support.mydomain.com/images/agent_x_profile.png"
    },
    recipients:['customer@gmail.com']
}

client.send(params);

//Creating or Updating a user
client.createOrUpdateUser("identifier",{
    "optional":"profile key value pair",
})
```