class SetOperation {

    union(arr1, arr2) {

        let arr3 = [];
        let obj = {};
        for (let i = 0; i < arr1.length; i++) {
            arr3.push(arr1[i]);
            if (obj[arr1[i]]) {
                obj[arr1[i]] += 1;
            } else {
                obj[arr1[i]] = 1;
            }
        }

        for (let j = 0; j < arr2.length; j++) {

            if (!obj[arr2[j]]) {
                arr3.push(arr2[j])
            }
        }
        return arr3;
    }

    intersection(arr1, arr2) {
        let arr3 = [];
        let obj = {};
        for (let i = 0; i < arr1.length; i++) {

            if (obj[arr1[i]]) {
                obj[arr1[i]] += 1;
            } else {
                obj[arr1[i]] = 1;
            }
        }

        for (let j = 0; j < arr2.length; j++) {

            if (obj[arr2[j]]) {
                arr3.push(arr2[j]);
                delete obj[arr2[j]];
            }
        }
        return arr3;
    }


    diffrence(arr1, arr2) {
        let arr3 = [];
        let obj = {};
        for (let j = 0; j < arr2.length; j++) {
            if (obj[arr2[j]]) {
                obj[arr2[j]] += 1;
            } else {
                obj[arr2[j]] = 1;
            }

        }

        for (let i = 0; i < arr1.length; i++) {
            if (!obj[arr1[i]]) {
                arr3.push(arr1[i]);
                // delete obj[arr1[j]];
            }

        }


        return arr3;
    }

}


let setOperation = new SetOperation();

console.log(setOperation.union([2, 6, 10, 15, 25, 10, 5], [3, 4, 7, 18, 20, 10, 5]));

console.log(setOperation.intersection([2, 6, 10, 15, 25, 10, 5], [3, 6, 4, 7, 18, 20, 10, 5]));

console.log(setOperation.diffrence([2, 6, 10, 15, 25, 10, 5], [3, 4, 7, 18, 20, 10, 5]));