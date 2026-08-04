/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copy = x;
    let ans = 0;
    while(x > 0){
        let rem = x % 10;
        ans = ans * 10 + rem;
        x = Math.floor(x /10);
    }
    if(ans === copy) return true;
    return false;
};