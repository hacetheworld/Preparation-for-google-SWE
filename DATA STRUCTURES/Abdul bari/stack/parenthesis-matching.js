function IsparenthesisBalanced(stmt) {

    let stk = [];

    for (let i = 0; i < stmt.length; i++) {
        if (stmt[i] === '(' || stmt[i] === '{' || stmt[i] === '[') {
            stk.push(stmt[i]);
        } else if (stmt[i] === ')' || stmt[i] === '}' || stmt[i] === ']') {
            if (stk.length === 0) {
                return false;
            }
            let top = stk.pop();

            switch (stmt[i]) {
                case ']':
                    if (top === '(' || top === '{') {
                        return false;
                    }
                    break;

                case ')':
                    if (top === '{' || top === '[') {
                        return false;
                    }
                    break;
                case '}':
                    if (top === '[' || top === '(') {
                        return false;
                    }
                    break;
            }
        }
    }
    if (stk.length > 0) {
        return false;
    }
    return true;
}



console.log(IsparenthesisBalanced('((a+b)*(c-d)))'));
console.log(IsparenthesisBalanced('{([a+b]*[c-d])/e}'));
