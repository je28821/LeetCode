/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let i = 0;
    let no= 0;
    while ( no < n){
        no = 4 ** i ;
        if(no === n) return true;
        i++;
    }
    return false;
};