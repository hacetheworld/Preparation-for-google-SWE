function kruskal() {
    let I = Infinity;
    let edges = [
        [1, 1, 2, 2, 3, 4, 4, 5, 5],
        [2, 6, 3, 7, 4, 5, 7, 6, 7],
        [25, 5, 12, 10, 8, 16, 14, 20, 18]
    ];
    let set = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

    let included = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let result = [];

    function join(u, v) {


        if (set[u] < set[v]) {
            set[u] += set[v];
            set[v] = u;
        } else {
            set[v] += set[u];
            set[u] = v;
        }
    }

    function check(u) {
        let x = u;
        while (u !== x) {
            v = set[u];
            set[u] = x;
            u = v;
        }


        while (set[x] > 0) {
            x = set[x];
        }
        //console.log(u, x);



        return x;
    }
    let i = 0, k, n = 7, e = 9, min, u, v;

    while (i < n - 1) {
        min = I;
        for (let j = 0; j < e; j++) {
            if (included[j] == 0 && edges[2][j] < min) {
                min = edges[2][j];
                k = j;
                u = edges[0][j];
                v = edges[1][j];
            }
        }
        if (check(u) !== check(v)) {
            result.push([u, v]);
            join(check(u), check(v));
            i++;
        }
        included[k] = 1;
    }

    return result;

}

console.log(kruskal());
