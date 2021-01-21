const fetch = require('node-fetch');
var path = require('path')
const express = require('express')

const dotenv = require('dotenv')
dotenv.config();

const application_key = process.env.API_KEY;

console.log(application_key);

const app = express()

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('dist'))

app.post('/', (req, res) => {
    const recieved = req.body.recieved;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&of=json&txt=${encodeURI(recieved)}&lang=en`;
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => console.log(err));
});



// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
