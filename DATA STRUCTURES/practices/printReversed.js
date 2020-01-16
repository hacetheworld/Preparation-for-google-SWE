function printReversed(current = root) {
    if (!current) {
        return ;
    }

    printReversed(current.next);

    console.log(current.value);

}

// 1 -> 2 -> 3 -> 4

// 4 -> 3 -> 2 -> 1

printReversed();
