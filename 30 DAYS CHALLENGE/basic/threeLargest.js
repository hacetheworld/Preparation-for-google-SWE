function ThreeLargest(arr) {

    //#1 first approach we can use any O(nlogn) sorting algorithms and return last 3 items.

    // #2 using hash map

    // let map = {};

    // let output = [];
    // let max;

    // for (let i = 0; i < arr.length; i++) {
    //     if (!map[arr[i]]) {
    //         map[arr[i]] = arr[i];
    //     }
    // }

    // for (i = 0; i < 3; i++) {
    //     max = 0;
    //     for (let j = 0; j < arr.length; j++) {
    //         if (max < map[arr[j]]) {
    //             max = arr[j];
    //         }
    //     }
    //     output.push(max);
    //     map[max] = 0;
    // }

    // return output;


    // #3 O(n)

    let first = second = last = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            last = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second) {
            last = second;
            second = arr[i];
        } else {
            last = arr[i];
        }

    }

    return [first, second, last];
}

console.log(ThreeLargest([10, 4, 3, 50, 23, 90]));
