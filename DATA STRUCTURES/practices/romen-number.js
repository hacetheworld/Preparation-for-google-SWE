/*A number containing several decimal places is represented, as in the Arabic system, by writing its power-of-ten parts – thousands, hundreds, tens and units – in sequence, from left to right, in descending order of value. For example:

Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1,000


*/


function intToRoman(val) {
    const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX",
        "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if (val > 3999 || val < 1) {
        return null;
    }
    let result = '';
    let i = 0;
    while (val > 0) {

        if (val - values[i] >= 0) {
            result += numerals[i];
            val -= values[i];
        } else {
            i++;
        }
    }
    return result;

}


console.log(intToRoman(8));
console.log(intToRoman(18));
console.log(intToRoman(246));
console.log(intToRoman(49));
