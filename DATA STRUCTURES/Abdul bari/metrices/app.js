class DiagonalMetrices {

    set(matrix, i, j, val) {

        if (i === j) {
            matrix[i] = val;
        }
    }

    get(matrix, i, j) {

        if (i == j) {
            return matrix[i];
        } else {
            return 0;
        }
    }

    display(matrix) {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i == j) {
                    console.log(matrix[i]);

                } else {
                    console.log('0');

                }

            }

        }

    }
}




let DMatrix = new DiagonalMetrices();

let matrix = [];
DMatrix.set(matrix, 0, 0, 3);
DMatrix.set(matrix, 1, 1, 7);
DMatrix.set(matrix, 2, 2, 4);
DMatrix.set(matrix, 3, 3, 9);

console.log(matrix);

//DMatrix.display(matrix);