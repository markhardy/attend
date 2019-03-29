/***************************************************************************
bestreads_service.js

Web service for best reads. This file handles incoming requests for data
and returns it in JSON. Node and Express required to run.

Run through terminal in folder by: node bestreads_service.js

Created by: Mark Hardy
Last Updated: 3/25/2019
***************************************************************************/

"use strict";

const express = require("express");
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static('public'));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers",
	"Origin, X-Requested-With, Content-Type, Accept");
	next();
});

console.log("web service started");

app.get('/', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	const queryParams = req.query;
	var json = {};

	var class = req.query.class;
	var student = req.query.student;

	res.send(JSON.stringify(json));
})

// Incoming Check-in
app.post('/', jsonParser, function (req, res) {
	const user = req.body.user;				// req.body gets post request parameters, req.query gets get request

	res.send("Success");
});
