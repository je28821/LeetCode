/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function (n) {
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }
    while (binary.length < 32) {
        binary = "0" + binary;
    }
    let digit = 0;
    for(let i =0 ; i < binary.length ; i++){
        if(binary[i] == "1"){
            digit += 2 ** i;
        }
    }
    return digit;
};