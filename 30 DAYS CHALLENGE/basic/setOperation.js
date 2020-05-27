function union(A, B) {
    let C = [];
    let hash = {};
    for (let i = 0; i < A.length; i++) {
        if (!hash[A[i]]) {
            C.push(A[i]);
            hash[A[i]] = true;
        }
    }
    for (let j = 0; j < B.length; j++) {
        if (!hash[B[j]]) {
            C.push(B[j]);
        }
    }

    return C;
}

// Intersection

function intersection(A, B) {
    let C = [];
    let hash = {};
    for (let i = 0; i < A.length; i++) {
        if (!hash[A[i]]) {
            hash[A[i]] = true;
        }
    }
    for (let j = 0; j < B.length; j++) {
        if (hash[B[j]]) {
            C.push(B[j]);
        }
    }

    return C;
}


// Diffrence

function diffrence(A, B) {
    let C = [];
    let hash = {};
    for (let j = 0; j < B.length; j++) {
        if (!hash[B[j]]) {
            hash[B[j]] = true;
        }
    }

    for (let i = 0; i < A.length; i++) {
        if (!hash[A[i]]) {
            C.push(A[i]);
        }
    }


    return C;
}
console.log(diffrence([3, 5, 10, 4, 6], [12, 4, 7, 2, 5]));
