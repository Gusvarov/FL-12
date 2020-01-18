function Fighter(fighter) {
    this.getName = function() {
        return fighter.name;
    }
    this.getDamage = function() {
        return fighter.damage;
    }
    this.getStrength = function() {
        return fighter.strength;
    }
    this.getAgility = function() {
        return fighter.agility;
    }
    this.getHealth = function() {
        return fighter.hp;
    }

    let fighterWins = 0;
    let fighterLoss = 0;
    const hundred = 100;

    this.attack = function(defender) {
        let hundredPercent = Math.floor(Math.random() * hundred)
        let succesAttack = Math.floor(Math.random() * Math.floor(this.getStrength() + this.getAgility()));
        if (succesAttack > hundredPercent) {
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            defender.dealDamage(this.getDamage());
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    this.logCombatHistory = function() {
        return `Name: ${this.getName()}, Wins: ${fighterWins}, Losses: ${fighterLoss}`;
    }
    this.heal = function(hp) {
        fighter.hp += hp;
    }
    this.dealDamage = function(damage) {
        fighter.hp -= damage;
    }
    this.addWin = function() {
        fighterWins++;
    }
    this.addLoss = function() {
        fighterLoss++;
    }   
}

function battle(attacker, defender) {
    function attack() {
        attacker.attack(defender);
        defender.attack(attacker);
        if (attacker.getHealth() <= 0 && defender.getHealth() >= 0) {
            attacker.addLoss();
            defender.addWin();
            console.log(`${defender.getName()} has Won!`);
        } else if (defender.getHealth() <= 0 && attacker.getHealth() >= 0) {
            defender.addLoss();
            attacker.addWin();
            console.log(`${attacker.getName()} has Won!`);
        } 
    }
    while(attacker.getHealth() > 0 || defender.getHealth() > 0) {
        if (attacker.getHealth() <= 0) {
            console.log(`${attacker.getName()} is dead and can't fight`);
            break;
        }
        if (defender.getHealth() <= 0) {
            console.log(`${defender.getName()} is dead and can't fight`);
            break;
        }
        attack();
        if (!attacker.getHealth() > 0 || !defender.getHealth() > 0) {
            break;
        }
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 25, agility: 25});
const myFighter2 = new Fighter({name: 'Andrey', damage: 25, hp: 100, strength: 35, agility: 15});

battle(myFighter, myFighter2);