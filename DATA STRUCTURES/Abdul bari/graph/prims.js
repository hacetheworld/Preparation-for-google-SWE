function prims() {
    let I = Infinity;
    let COST = [
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

    let min = I, u, v, n = 7;
    let i = 1;
    let j

    for (i = 1; i <= n; i++) {
        for (j = i; j <= n; j++) {
            if (COST[i][j] < min) {
                min = COST[i][j];
                u = i;
                v = j;
            }
        }
    }

    result.push([u, v]);
    near[u] = near[v] = 0;


    for (i = 1; i <= n; i++) {
        if (near[i] !== 0) {
            if (COST[i][u] < COST[i][v]) {
                near[i] = u;
            } else {
                near[i] = v;
            }
        }
    }

    for (let i = 1; i < n - 1; i++) {
        min = I;
        let k;
        for (j = 1; j <= n; j++) {
            if (near[j] !== 0 && COST[j][near[j]] < min) {
                min = COST[j][near[j]];
                k = j;
            }
        }

        result.push([near[k], k]);
        near[k] = 0;

        for (j = 1; j <= n; j++) {
            if (near[j] !== 0 && COST[j][k] < COST[j][near[j]]) {
                near[j] = k;
            }
        }
    }
    return result;
}

console.log(prims());
