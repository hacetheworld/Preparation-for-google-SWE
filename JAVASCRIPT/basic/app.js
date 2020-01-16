function printName() { return 'Ajay Meena' }

function findName() {
    return printName();
}

function sayMyName() {
    return findName();
}

console.log(sayMyName());
