function reverseStr(str) {

    let arrStr = str.split('');
    //Loop throw and start two pointer start them from both side start to middle and end to middle

    for (let fromStart = 0; fromStart < arrStr.length / 2; fromStart++) {

        //Pointer from end
        let fromEnd = arrStr.length - fromStart - 1;

        //Swap it
        let temp = arrStr[fromStart];
        arrStr[fromStart] = arrStr[fromEnd];
        arrStr[fromEnd] = temp;

    }

    return arrStr.join('');

}


console.log(reverseStr('ajay'));
