function TOH(t, t1, t2, t3) {
    if (t > 0) {
        TOH(t - 1, t1, t3, t2);
        console.log(`move disk ${t1} to ${t3}`);

        TOH(t - 1, t2, t1, t3);
    }
}

TOH(3, 'T1', 'T2', 'T3');