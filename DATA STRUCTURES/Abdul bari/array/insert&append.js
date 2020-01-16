function insert(idx, value) {
    if (arr.length < idx) {
        return 'invalid insert'
    }
    for (let i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];
    }
    arr[idx] = value;

}

let arr = [1, 2, 3, 4, 5, 7, 8];
console.log(arr);

insert(5, 6);
console.log(insert(9, 6));


console.log(arr);
