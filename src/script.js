"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10) + 1;

//
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  return console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => (health <= 0 ? true : false);

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("x", "y", 50, 60);

// challenges

const getGrade = (score) => {
  if (score >= 90) {
    return `A ${score}%`;
  } else if (score < 90 && score >= 80) {
    return `B ${score}%`;
  } else if (score < 80 && score >= 70) {
    return `C ${score}%`;
  } else if (score < 70 && score >= 60) {
    return `D ${score}%`;
  } else {
    return `F ${score}%`;
  }
};
console.log(getGrade(90));

const prioritize = (urgent, important) => {
  if (urgent === true) {
    if (important === true) {
      return "Urgent and Important priority 1";
    } else {
      return "Urgent not important priority 3";
    }
  } else {
    if (important === true) {
      return "Important but not Urgent prioty 2";
    } else {
      return "Not important nor urgent";
    }
  }
};

console.log(prioritize(false, true));

let totalpay = null;
const calcuatePay = (wage, hours) => {
  if (hours > 40) {
    totalpay = wage * 40 + wage * 1.5 * (hours - 40);
    return totalpay;
  } else {
    totalpay = wage * hours;
    return totalpay;
  }
};

console.log(calcuatePay(15, 45));
