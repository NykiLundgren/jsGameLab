//prompt to play
confirm("Do you want to play a game?");
let name = prompt("What is your name?");
let userHealth;
let grantHealth;
let grantDeath = 0;

//main game
while(grantDeath < 3){

    randomHitGenerator(40, 10);

    if(grantDeath === 3){
        console.log("Congratulations ", name, "!",
        " You defeated Grant the Mighty Chicken!");
        break;

    }else if(grantHealth === 0 & grantDeath < 3){
        grantHealth = 10;
        userWin++;
        grantDeath++;
       
        console.log(name, " has ", userHealth, " health left. ");
        console.log("Grant the Mighty Chicken has ", grantHealth,
        " health left.");
        console.log(name, " has ", userWin, " wins.");
        randomHitGenerator(userHealth, grantHealth);
    
    }else if(userHealth === 0 & grantDeath < 3){
        console.log(name, " has ", userHealth,
        " points, Grant the Mighty Chicken wins.");
        randomHitGenerator(userHealth, grantHealth);
    
    }else{
        randomHitGenerator(userHealth, grantHealth);
        console.log(name, " has ", userHealth, " health left. ");
        console.log("Grant the Mighty Chicken has ", grantHealth,
        " health left.");
    
    }
    
    
}

/**
 * calculates how much health each player loses per turn
 * returns user's and Grant's health
 * @param {40} userHealth 
 * @param {10} grantHealth 
 */
//random health hit generator
function randomHitGenerator(userHealth, grantHealth){
    userHealth - Math.floor(Math.random()* 2)+1;
    grantHealth - Math.floor(Math.random()* 2)+1;
    return userHealth, grantHealth;
}


    