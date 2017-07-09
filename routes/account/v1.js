let router = require('express').Router();
let request = require('request');

var config = require('../../config');
if (!process.env.LOTTERY_API_URL) {
    process.env.LOTTERY_API_URL = config.dev.env.LOTTERY_API_URL;
}
const API_URI = process.env.LOTTERY_API_URL;

var baseRequest = request.defaults({
    headers: { 'HTTP_USER_AGENT': 'lottery-webapp' }
})

router.get('/user', (req, resp) => {
    baseRequest.get(`${API_URI}/account/v1/user`, (error, response, body) => {
        console.log(response);
        return resp.json(body);
    });
});

module.exports = router;