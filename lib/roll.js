#!/usr/bin/env node
export default function roll(sides, dice, rolls){
    let results = [];
    //number of rolls
    for(let i=0; i<rolls; i++){
        var rolls_count=0;
        //number of dices for each roll
        for(let j=0;j<dice;j++){
            let randomRoll = Math.floor(Math.random()*sides)+1;
            rolls_count+=randomRoll;
        }
        //add the roll to the list of results
        results.push(rolls_count);
    }
    const resultObj= {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };

    return JSON.stringify(resultObj);
}