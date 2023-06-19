const express = require('express');
const fetch = require('node-fetch');
const {data, AnalyzingCurrentTemp} = require("./Utils")
const cors = require('cors');

const app = express();
// returns code coverage information if available
// https://github.com/cypress-io/code-coverage
/* istanbul ignore next */
if (global.__coverage__) {
    require('@cypress/code-coverage/middleware/express')(app)
}
const port = 8081;

app.use(cors());

app.get('/api/temperature/:id', (req, res) => {
    fetch(
        `https://hasydbj5c4gpa2oozfpjpc677a0hxuob.lambda-url.ap-southeast-2.on.aws/sensor/${req.params.id}`
    )
        .then((response) => response.json())
        .then((response) => res.send(AnalyzingCurrentTemp(response)));
});

app.get('/api/productList', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`SensorTech server at http://localhost:${port}`);
});
