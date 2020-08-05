const startGame = () => {let userResponse=prompt('Would you like to play a game? yes or no');
if (userResponse === "yes"){
    let userName = prompt("Enter your username");
    console.log (`${userName} will do battle with Grant!`)
    startCombat = true
}else {(userResponse != "yes")
    startCombat = false
console.log("Aww that's too bad")
  }
}
startGame()

let userHealth = 40
let grantHealth = 10
let grantsLife =3
// startCombat = true
// startCombat= false

while (startCombat === true){

  let decision = prompt("Attack or Quit?");
      decision = decision.toLowerCase();
     if(decision === "attack") {
  grantHealth = grantHealth - getDamage(1,5)
  console.log(`Grant has ${grantHealth} health left`)
  userHealth = userHealth - getDamage(1,5)
  console.log(`You have ${userHealth} health left`)
 
     }else{decision !="attack"
     console.log("Ok, see ya later....loser")
     break}

  if(grantHealth <= 0){
    console.log("Grant died")
    --grantsLife
    grantHealth = 10
    if(grantsLife<=0){
      console.log("You WIN!")
      break
    }
  }
  if(userHealth <= 0){
    console.log("You died")
    break
  }
}

function getDamage(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// randomIntFromInterval()