class Heap {
    constructor() {
        this.values = [];

    }


    insert(key) {
        this.values.push(key);

        let lastIdx = this.values.length - 1;
        let parentIdx = Math.floor((lastIdx - 1) / 2);
        let temp;

        while (this.values[parentIdx] < this.values[lastIdx]) {
            temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[lastIdx];
            this.values[lastIdx] = temp;
            lastIdx = parentIdx;
            parentIdx = Math.floor((lastIdx - 1) / 2);
        }
    }
}


let HP = new Heap();

HP.insert(41);
HP.insert(39);
HP.insert(33);
HP.insert(18);
HP.insert(27);
HP.insert(12);
HP.insert(55);
HP.insert(1);
console.log(HP);
