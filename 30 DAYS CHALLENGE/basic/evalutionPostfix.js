function evalPostfix(exp) {

    let stack = [];
    let operator = { '+': true, '-': true, '*': true, '/': true }

    let result;

    for (let i = 0; i < exp.length; i++) {
        if (!operator[exp[i]]) {
            stack.push(exp[i]);
        } else {
            let last = parseInt(stack.pop());
            let first = parseInt(stack.pop());

            switch (exp[i]) {
                case '+':
                    result = last + first;
                    break;

                case '-':
                    if (last > first) {
                        result = last - first;
                    } else {
                        result = first - last;
                    }
                    break;
                case '*':
                    result = last * first;
                    break;
                case '/':
                    if (last > first) {
                        result = last / first;
                    } else {
                        result = first / last;
                    }

                    break;
            }

            stack.push(result);
        }

    }

    result = stack.pop();

    return result;
}


console.log(evalPostfix('35*62/+4-'));
