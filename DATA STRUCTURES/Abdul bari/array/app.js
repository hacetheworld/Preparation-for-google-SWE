class NewArray {

    constructor() {
        this.values = new Array();
        this.length = 0;
    }

    push(value) {
        this.values[this.length] = value;
        this.length++;
    }

    pop() {
        let data = this.values[this.length - 1];
        delete this.values[this.length - 1];
        this.length--;
        return data;
    }
    delete(idx) {
        let data = this.values[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.values[i] = this.values[i + 1];
        }
        delete this.values[this.length - 1];
        this.length--;
        return data;
    }


    insert(idx, value) {
        if (this.length < idx) {
            return 'invalid insert'
        }
        for (let i = this.length; i > idx; i--) {
            this.values[i] = this.values[i - 1];
        }
        this.values[idx] = value;
        this.length++;
    }

    // Linear Search

    linerSearch(val) {
        for (let i = 0; i < this.length; i++) {
            if (this.values[i] === val) {
                return true;
            }

        }
        return false;
    }

    reverse() {
        for (let i = 0, j = this.length - 1; i <= j; i++ , j--) {
            let temp = this.values[i];
            this.values[i] = this.values[j];
            this.values[j] = temp;
        }
    }

    insertAtSorted(val) {
        let i = this.length - 1;
        while (this.values[i] >= val) {
            this.values[i + 1] = this.values[i];
            i--;
        }
        this.values[i + 1] = val;
        this.length++;
    }
}


let arr = new NewArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.insert(3, 5);
arr.push(6);

//arr.reverse();
arr.insertAtSorted(4);
console.log(arr);
