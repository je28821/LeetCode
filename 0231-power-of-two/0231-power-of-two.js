/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0;
    let no= 0;
    while ( no < n){
        no = 2 ** i ;
        if(no === n){
            return true;
        }
        i++;
    }
    return false;
};