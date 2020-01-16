function swapWithoutTemp(val1, val2) {
    val1 = val1 + val2;
    val2 = val1 - val2;
    val1 = val1 - val2;
    return [val1, val2]
}


console.log(swapWithoutTemp(2, 3));
