/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let i = 0, j = s.length - 1;
    s = s.split("");
    const isLetter = (ch) => /[a-zA-Z]/.test(ch);
    while (i < j) {
        if (isLetter(s[i]) && isLetter(s[j])) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        } else if (!isLetter(s[i])) {
            i++;
        } else {
            j--;
        }
    }
    return s.join("");
};