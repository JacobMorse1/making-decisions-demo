/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King.
*/ 

let eowynAttack = 50;
let witchkingAttack = 45;

if (eowynAttack > witchkingAttack) {
    console.log ("Eowyn is stronger");
} else if(witchkingAttack > eowynAttack){
    console.log ("Witch King is stronger");
} else {
    console.log("They are the same strength");
};

let eowynHealth = 100;
let eowynDefense = 0;

if(eowynHealth + eowynDefense <= witchkingAttack) {
    console.log("she go bye bye");
} else {
    eowynHealth = eowynHealth - witchkingAttack;
    console.log(`She is down to ${eowynHealth}.`);
};

let coinLandsHeads = true;

if(coinLandsHeads === true) {
    console.log("Witch King gets to run away");
} else {
    console.log("Witch King got stabbed in the face");
};

// for(i = 0; i < 5; i++) {
//     if(eowynHealth > 0) {
//         eowynHealth = eowynHealth - witchkingAttack;
//         console.log(`Eowyn has ${eowynHealth} left.`);
//     } else {
//         console.log(`Eowyn dead.`);
//     };
// };

while(eowynHealth > 0) {
    eowynHealth -= witchkingAttack;
    console.log(`Eowyn has ${eowynHealth}.`);
    if(eowynHealth <= 0) {
    console.log(`Eowyn is dead`)
    }
};