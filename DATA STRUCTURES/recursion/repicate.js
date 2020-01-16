function replicate(rep, num) {

    if (rep <= 0) {
        return [];
    }

    let arr = [num];


    return arr.concat(replicate(rep - 1, num));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []