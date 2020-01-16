class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }


    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
            this.keyMap[index].push([key, value]);
        } else {
            this.keyMap[index].push([key, value]);
        }
    }

    get(key) {
        let index = this._hash(key);
        let data;
        if (this.keyMap[index]) {
            data = this.keyMap[index].filter(data => data[0] === key);
        } else {
            return undefined;
        }

        return data[0][1];
    }

    keys() {
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) {
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }

        }

        return keys;
    }

    values() {
        let values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }

        }

        return values;
    }




    _hash(key) {
        let total = 0;
        let WEIRED_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRED_PRIME + value) % this.keyMap.length;

        }

        return total;
    }
}



let hash = new HashTable();

hash.set('full Name', 'Ajay Meena');
hash.set('full Name', 'Ajay Meena');
hash.set('is Singal ?', 'Yes');
hash.set('age', 19);
console.log(hash.keys());
console.log(hash.values());
console.log(hash);
