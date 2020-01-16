function countDisktinct(arr, k) {
    let count;

    for (let i = 0; i <= arr.length - k; i++) {
        count = 0;
        for (let j = 0; j < k + i - 1; j++) {
            console.log('compare : ' + arr[i], arr[j + 1]);
            if (arr[i] == arr[j + 1]) {
                break;
            }
            count++;
        }

        console.log('wrong answer please fix it');


    }
}


countDisktinct([1, 2, 1, 3, 4, 2, 3], 4)
