#!/usr/bin/env node
export default function roll(sides, dice, rolls){
    const results = [];
    //number of rolls
    for(let i=0; i<rolls; i++){
        var rolls=0;
        //number of dices for each roll
        for(let j=0;j<dice;j++){
            let randomRoll = Math.floor(Math.random()*numSides)+1;
            rolls+=randomRoll;
        }
        //add the roll to the list of results
        results.push(rolls);
    }
    //console.log("sides: " + sides.toString())
    //console.log("dice: " + dice.toString())
    //console.log("rolls: " + rolls.toString())

    return {"sides": sides, "dice": dice, "rolls": rolls, "results": results};
}
