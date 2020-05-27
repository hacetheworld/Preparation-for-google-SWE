function infixtopostfix(exp) {
    let percedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 }
    let stack = [];
    let postFixExp = '';

    for (let i = 0; i < exp.length; i++) {
        if (!percedence[exp[i]]) {
            postFixExp += exp[i];
        } else {
            if (stack.length == 0) {
                stack.push(exp[i]);
            } else {
                let top = stack[stack.length - 1];
                if (percedence[top] < percedence[exp[i]]) {
                    stack.push(exp[i]);
                } else {

                    while (stack.length > 0 && percedence[top] >= percedence[exp[i]]) {
                        postFixExp += stack.pop();
                        top = stack[stack.length - 1];
                    }
                    stack.push(exp[i]);
                }
            }
        }
    }

    while (stack.length) {
        postFixExp += stack.pop();
    }

    return postFixExp;
}

console.log(infixtopostfix('a+b*c-d/e'));
console.log(infixtopostfix('(5+15/3)^2-(8*3/3*4/5*32/5+42)*(3*3/3*5/4)'));
