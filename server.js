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