// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPieceTime = () => timeWithoutDestruction;

//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return 'Boom'
//     };
//     setInterval(passTime, 1000);
//     return {
//         totalPieceTime: totalPieceTime
//     }
// }

// let Nuclear = makeNuclearButton();
// console.log(Nuclear.totalPieceTime());


// let dragon = {
//     name: 'Tanya',
//     fire: true,
//     fight() {
//         return 5;
//     },
//     sing() {
//         if (this.fire) {
//             return `I'm ${this.name} , Breather of fire.`;
//         }
//     }
// }


// let lizard = {
//     name: 'kiki',
//     fight() {
//         return 1;
//     }
// }


// lizard.__proto__ = dragon;

// console.log(lizard.sing());
// console.log(lizard.fight());




// let human = {
//     mortal: true
// }

// let socrates = Object.create(human);
// function he(g) {
//     return g;
// }

// console.log(human);

let date = new Date();

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}

console.log(date.lastYear());

Array.prototype.map = function () {
    let data = this.values();

    for (let i = 0; i < this.length; i++) {
        console.log(data.next());
    }


}

let arr = [1, 2, 3];

console.log(arr.map());
