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

//PART 4
//Endpoint /app/roll/ that returns JSON for a default roll of two six-sided dice one time. 
//Example output might look like: {"sides":6,"dice":2,"rolls":1,"results":[12]}.
app.get('/app/roll/', (req, res) => {
    ans = roll(6, 2, 1);
    console.log(ans);
    res.send(ans);
    res.end();
});


//PART 5
//Endpoint /app/roll/ should ALSO accept either JSON or URLEncoded data body for sides, dice, and rolls. 
//Example URLEncoded string for data body: ?sides=20&dice=4&rolls=3. Example JSON data body: {"sides":20,"dice":4,"rolls":3}. The format of the resulting JSON should look like: {"sides":20,"dice":4,"rolls":3,"results":[19,3,60]}.

//PART 6
//Endpoint /app/roll/:sides/ that returns JSON for a default number of rolls and dice with whatever number of sides is specified in the parameter. 
//For example, /app/roll/6/ should return JSON for two six-sided dice, rolled one time, whereas /app/roll/10/ should return JSON for two ten-sided dice, rolled 1 time. The format of the resulting JSON should look like: {"sides":10,"dice":2,"rolls":1,"results":[17]}.


//PART 7
//Endpoint /app/roll/:sides/:dice/ that returns JSON for a default number of rolls with whatever number of sides and dice specified in the parameters. 
//For example, /app/roll/6/2/ should return JSON for two six-sided dice, rolled one time, whereas /app/roll/10/3/ should return JSON for three ten-sided dice, rolled 1 time. The format of the resulting JSON should look like: {"sides":10,"dice":3,"rolls":1,"results":[27]}.


//PART 8
//Endpoint /app/roll/:sides/:dice/:rolls/ that returns JSON for the specified number of rolls with whatever number of sides and dice specified in the parameters. 
//For example, /app/roll/6/2/1/ should return JSON for two six-sided dice, rolled one time, whereas /app/roll/10/3/8/ should return JSON for three ten-sided dice, rolled 1 time. The format of the resulting JSON should look like: {"sides":10,"dice":3,"rolls":8,"results":[6,13,30,17,16,27,4,29]}.

//listen at the end

