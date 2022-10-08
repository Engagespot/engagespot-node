"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const client = (0, __1.EngagespotClient)({
    apiKey: 'od9t6x45udt1m3g0nznag',
    apiSecret: 'fjtjb5kjsig21at4h1ijbphd1f31726e48372b0deddb29db5'
});
try {
    client.send({
        notification: {
            title: 'Test from SDK'
        },
        recipients: ['anand@logidots.com']
    });
}
catch (error) {
    console.log(error.response);
}
