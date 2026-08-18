/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("");
    for(let i = 0; i < s.length ; i += 2 * k){
        left  = i;
        right  = Math.min(i + k -1, s.length);

        while(left < right){
            [s[left],s[right]] = [s[right],s[left]];
            left++;
            right--;
        }
    }
    return s.join("");
};