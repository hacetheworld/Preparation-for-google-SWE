class LowerTriangleMatrix {

    rowMajorSet(matrix, i, j, val) {
        if (i >= j) {
            matrix[i * (i - 1) / 2 + j - 1] = val;
        }


    }

    rowMajorGet(matrix, i, j) {
        if (i >= j) {
            return matrix[i * (i - 1) / 2 + j - 1];
        } else {
            return 0;
        }
    }
    rowMajorDisplay(matrix) {

        for (let i = 1; i <= matrix.length; i++) {
            for (let j = 1; j <= matrix.length; j++) {
                if (i >= j) {
                    console.log(matrix[i * (i - 1) / 2 + j - 1]);

                } else {
                    console.log(0);

                }

            }

        }
    }

    columnMajorSet(matrix, i, j, val) {

    }
}


let lowerTriangle = new LowerTriangleMatrix();

let matrix = [];

lowerTriangle.rowMajorSet(matrix, 1, 1, 5); lowerTriangle.rowMajorSet(matrix, 2, 1, 6); lowerTriangle.rowMajorSet(matrix, 2, 2, 7); lowerTriangle.rowMajorSet(matrix, 3, 1, 9); lowerTriangle.rowMajorSet(matrix, 3, 2, 10); lowerTriangle.rowMajorSet(matrix, 3, 3, 15); lowerTriangle.rowMajorSet(matrix, 4, 1, 13); lowerTriangle.rowMajorSet(matrix, 4, 2, 18); lowerTriangle.rowMajorSet(matrix, 4, 3, 14); lowerTriangle.rowMajorSet(matrix, 4, 4, 21);


console.log(lowerTriangle.rowMajorGet(matrix, 3, 1));

lowerTriangle.rowMajorDisplay(matrix);