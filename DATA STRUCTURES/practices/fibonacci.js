function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    if (!visited[n]) {
        visited[n] = fibonacci(n - 1) + fibonacci(n - 2);
        //return visited[n];
    }
    return visited[n];
}

// 0 1 1

let visited = {}
console.log(fibonacci(100));
