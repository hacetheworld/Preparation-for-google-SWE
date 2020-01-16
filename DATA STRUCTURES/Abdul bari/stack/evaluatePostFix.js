function EvaluatePostFix(exp) {

    let stk = [];
    let operators = { '+': true, '-': true, '/': true, '*': true };

    for (let i = 0; i < exp.length; i++) {
        if (!operators[exp[i]]) {
            stk.push(exp[i]);
        } else {
            let v2 = parseInt(stk.pop()), v1 = parseInt(stk.pop()), result;

            switch (exp[i]) {
                case '+':
                    result = v1 + v2;
                    stk.push(result);
                    break;
                case '-':
                    result = v1 - v2;
                    stk.push(result);
                    break;
                case '*':
                    result = v1 * v2;
                    stk.push(result);
                    break;
                case '/':
                    result = v1 / v2;
                    stk.push(result);
                    break;

            }

        }
    }

    return stk.pop();
}


console.log(EvaluatePostFix('82/'));
console.log(EvaluatePostFix('138*+'));
console.log(EvaluatePostFix('545*+5/'));
