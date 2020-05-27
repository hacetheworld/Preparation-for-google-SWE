// const elf = {
//     name: 'Orwell',
//     weapon: 'bow',
//     attack() {
//         return `attack with ${this.weapon}`;
//     }
// }

// const elf2 = {
//     name: 'Tanaya',
//     weapon: 'Swoard',

// }



// Factory function

// const elfFunctions = {

//     attack() {
//         return `attack with ${this.weapon}`;
//     }
// }

// function CreateElf(name, weapon) {
//     let newElf = Object.create(elfFunctions);
//     newElf.name = name;
//     newElf.weapon = weapon;
//     return newElf;
// }


// const peter = CreateElf('Peter', 'Stones');
// const sam = CreateElf('Sam', 'Fire');

// console.log(peter);
// console.log(peter.attack());

// console.log(sam);
// // console.log(sam.attack());



// // Constructor

// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;

// }

// Elf.prototype.attack = function () {
//     return `attack with ${this.weapon}`;
// }


// const peter = new Elf('Peter', 'Stones');
// const sam = new Elf('Sam', 'Fire');

// console.log(peter);
// console.log(peter.attack());

// console.log(sam);
// console.log(sam.attack());



class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `Attack with ${this.weapon}`;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type
    }

}


let sam = new Elf('Sam', 'Stones', 'House');
//console.log(sam.attack);
console.log(sam);
