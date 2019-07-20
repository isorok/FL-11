function fighterInfo(key) {
    let name = 'John';
    let damage = 20;
    let hp = 100;
    let agility = 25;
    let history = [];


    let getFighterOptions = function getFighterOption() {
        return { key, name, damage, hp, agility, history };
    }

    let getName = function getName() {
        return { name };
    }

    let getDamage = function getDamage() {
        return { damage };
    }

    let getHealth = function getHeal() {
        return { hp };
    }

    let getAgility = function getAgility() {
        return { agility };
    }

    let attack = function attack(punch) {
        hp -= punch;
        return hp;

    }

    let logCombatHistory = function logCombatHistory(action) {
        history = action;
        return history;
    }

    let heal = function heal(value) {
        hp += value;
        return hp;
    }

    let dealDamage = function dealDamage(dmg) {
        hp -= dmg;
        return hp;

    }
    let addWin = function addWin(value) {
        let winCount = 0;
        winCount += value;
        return winCount;
    }

    let addLoss = function addLoss(value) {
        let lossCount = 0;
        lossCount += value;
        return lossCount;
    }

    return {
        getFighterOptions: getFighterOptions,
        getName: getName,
        getDamage: getDamage,
        getHealth: getHealth,
        getAgility: getAgility,
        attack: attack,
        logCombatHistory: logCombatHistory,
        heal: heal,
        dealDamage: dealDamage,
        addWin: addWin,
        addLoss: addLoss

    }
}

function battle(fighter1, fighter2) {
    let result = fighter1 - fighter2;
    return result;
}

class fighter {
    constructor(name) {
        this.name = name;
        this.fighters = [];
    }
    addFighter() {
        this.fighters.push(fighterInfo(this.fighters.length + 1));
    }
    getFighterByKey(index) {
        return this.fighters[index - 1];
    }
}