function BS(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == key) return true;
        if (key > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}


function Bsr(arr, key) {
    let left = 0;
    let right = arr.length;
    let mid = Math.floor((left + right) / 2)
    let isFound = BsRecur(arr, mid, left, right, key);
    return isFound;
}

function BsRecur(arr, mid, l, r, key) {
    if (l > r) { return false; }
    if (arr[mid] === key) { return true; }
    if (key > arr[mid]) {
        l = mid + 1;
    } else {
        r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
    return BsRecur(arr, mid, l, r, key);
}




let arr1 = [3, 6, 8, 12, 16, 18, 20, 30, 44];

console.log(Bsr(arr1, 45));
