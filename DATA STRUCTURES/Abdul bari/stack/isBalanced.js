function isBalancedExp(exp) {

    let stk = new Array();

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[') {
            stk.push(exp[i]);
        } else if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') {
            let last = stk[stk.length - 1];

            switch (exp[i]) {
                case ')':
                    if (last == '{' || last == '[') {
                        return false;
                    }
                    break;
                case '}':
                    if (last == '(' || last == '[') {
                        return false;
                    }
                    break;
                case ']':
                    if (last == '{' || last == '(') {
                        return false;
                    }
                    break;

            }
            stk.pop();
        }

    }

    if (stk.length > 0) {
        return false;
    }
    return true;

}


console.log(isBalancedExp('{[{}{}]}'));
console.log(isBalancedExp('{()}[)}'));
