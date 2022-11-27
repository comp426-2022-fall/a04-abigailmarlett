#!/usr/bin/env node

//import statements
import roll from "./lib/roll.js"
import minimist from "minimist"
import express from "express"

//create app 
const app = express();

//args 
const args = minimist(process.argv.slice(2))

//creating the port and making it 5000 if not specified
const port = args.port || 5000

app.use(express.urlencoded({extended:true}));

//Check endpoint at /app/ that returns 200 OK.
app.get('/app/', (req, res) => {
    res.status(200);
    res.send("200 OK");
});