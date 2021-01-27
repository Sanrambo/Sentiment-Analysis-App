# Sentiment Analysis Website

This repo is your full code for the Sentiment Analysis Console project.

I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Meaningcloud has put a public facing API in front of their NLP system.

## Getting started
Use anyway you like to extract the rapistory to run and test the project

## Start by installing all the needed packages
- Install them by using `npm install`

## API KEY
Go to [Meaningcloud](https://www.meaningcloud.com/) and request for your personal api key, then create .env file in the root to add your api key there.

## Building Envoriments
Since Webpack is used, there are two modes to run the application which is **Production** and **Development** mode.

* **Production**: run "npm run build-prod" in the terminal then start the server by using "npm start" and it will be ran on the given port.
* **Development**: run "npm run build-dev" in the terminal and it will run and open the page automatically.

## Port
The assigned port in the server is **7070**. To run the localhost go to **http://localhost:7070/**.

## Testing
To test the app by using **Jest** run "npm run test".



