function primsAlgo() {
    let I = Infinity;
    let G = [
        [I, I, I, I, I, I, I, I],
        [I, I, 25, I, I, I, 5, I],
        [I, 25, I, 12, I, I, I, 10],
        [I, I, 12, I, 8, I, I, I],
        [I, I, I, 8, I, 16, I, 14],
        [I, I, I, I, 16, I, 20, 18],
        [I, 5, I, I, I, 20, I, I],
        [I, I, 10, I, 14, 18, I, I]
    ];

    let near = [I, I, I, I, I, I, I, I];
    let result = [];
    let min = I, edge1, edge2;

    for (let i = 1; i < G.length; i++) {
        for (let j = i; j < G[i].length; j++) {
            if (min > G[i][j]) {
                edge1 = i;
                edge2 = j;
                min = G[i][j];
            }
        }
    }
    near[edge1] = near[edge2] = 0;
    result.push([edge1, edge2]);

    k = 1;
    while (k < near.length) {

        if (near[k] !== 0) {
            if (G[k][edge1] > G[k][edge2]) {
                near[k] = edge2;
            } else {
                near[k] = edge1;
            }
        }
        k++;
    }
    j = 2;
    while (j < near.length - 1) {
        min = I;
        for (i = 1; i < near.length; i++) {
            if (near[i] !== 0 && min > G[i][near[i]]) {
                edge1 = near[i];
                edge2 = i;
                min = G[i][near[i]];
            }
        }

        result.push([edge1, edge2]);
        near[edge2] = 0;
        j++;
        k = 1;
        while (k < near.length) {
            if (near[k] !== 0) {
                if (G[k][edge1] > G[k][edge2]) {
                    near[k] = edge2;
                } else {
                    near[k] = edge1;
                }
            }
            k++;
        }

    }

    return result;
}

console.log(primsAlgo());
