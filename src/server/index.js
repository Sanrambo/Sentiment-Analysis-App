const projectData = [];
const fetch = require('node-fetch');
var path = require('path');
const express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");

const dotenv = require('dotenv')
dotenv.config();

const App_API = process.env.API_KEY;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

const FormingURL = async (url) => {

    const link = `https://api.meaningcloud.com/sentiment-2.1?key=${App_API}&of=json&url=${url}&lang=en`;
    const res = await fetch(link);
    console.log(res);

    try {
        const result = await res.json();
        return result;
    } catch (error) {
        console.log("error", error);
    }
};

// Get Endpoint
app.get("/path", function (req, res) {
    res.send(projectData);
});

// Post Endpoint
app.post('/analyse', (req, res) => {
    const recieved = req.body.recieved;
    const UrlValid = encodeURI(recieved);

    const result = (output) => {

        retrievedData = {

            agreement: output.agreement,
            subjectivity: output.subjectivity,
            confidence: output.confidence,
            irony: output.irony

        }
        projectData.push(retrievedData);
        res.send(projectData);
    }

    FormingURL(UrlValid)
        .then(result);

});



// designates what port the app will listen to for incoming requests
app.listen(7070, function () {
    console.log('Example app listening on port 7070!')
})
