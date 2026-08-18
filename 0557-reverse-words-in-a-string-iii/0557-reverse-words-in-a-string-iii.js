/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        let j = 0;
        let k = s[i].length - 1;
        let arr = s[i].split("");
        while (j < k) {
            [arr[j], arr[k]] = [arr[k], arr[j]];
            j++;
            k--;
        }
        s[i] = arr.join("");
    }
    return s.join(" ");
};