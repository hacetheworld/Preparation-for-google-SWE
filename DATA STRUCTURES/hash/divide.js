function divide(arr, k) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum % 6 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divide([9, 7, 5, 3], 6));
console.log(divide([92, 75, 65, 48, 45, 35], 10));
console.log(divide([91, 74, 66, 48], 10));

