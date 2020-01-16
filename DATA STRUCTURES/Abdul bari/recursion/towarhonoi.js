function towerOfHonai(n, start, mid, end) {

    if (n === 0) {
        return;
    }
    if (n > 0) {
        towerOfHonai(n - 1, start, end, mid);
        console.log(`Move disk from ${start} to ${end}`);
        towerOfHonai(n - 1, mid, start, end);
    }
}

towerOfHonai(3, 'Twoer1', 'Tower2', 'Tower3');
