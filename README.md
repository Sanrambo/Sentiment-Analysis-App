# Sentiment Analysis

This repo is your full code for the Sentiment Analysis Console project.

I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Meaningcloud has put a public facing API in front of their NLP system.

## Getting started

I installed everything I need for the project using
- `npm install`

## API_KEY
Api key is stored in .env file using npm dotenv so users can not access the api key and get it in server side to use it for api link.

## HTML
Using Webpack, build the app and add the html file to dist folder and removing all the linked files to html and add them to single link.

## CSS to SCSS
converted the css files to scss and combine them to single file in dist folder.

## Single Js
Combine all javascript files into single file in dist folder.

## Implementation
Making an end point to post the recieved text to the url and encode it so it can fit the url and fetch it.


## Jest
Install Jest to try testing formHandler

## Service Workers
A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.
Installing and adding it to the project.

