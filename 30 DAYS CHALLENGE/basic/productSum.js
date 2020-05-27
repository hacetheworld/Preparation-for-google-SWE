function productSum(arr) {
    let output = [];
    let product;

    for (let i = 0; i < arr.length; i++) {
        product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        output[i] = product;
    }
    return output;
}



console.log(productSum([1, 2, 3, 4]));

