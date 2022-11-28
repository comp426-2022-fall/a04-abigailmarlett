#!/usr/bin/env node
export default function roll(sides, dice, rolls){
    const results = [];
    //number of rolls
    for(let i=0; i<rolls; i++){
        var rolls=0;
        //number of dices for each roll
        for(let j=0;j<dice;j++){
            let randomRoll = Math.floor(Math.random()*sides)+1;
            rolls+=randomRoll;
        }
        //add the roll to the list of results
        results.push(rolls);
    }
    const resultObj= {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };

    return JSON.stringify(resultObj);
}