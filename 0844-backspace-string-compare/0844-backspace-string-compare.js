/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let stacks = [];
    let stackt = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#") {
            stacks.push(s[i]);
        } else {
            stacks.pop();
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== "#") {
            stackt.push(t[i]);
        } else {
            stackt.pop();
        }
    }
    let a = stacks.join("");
    let b = stackt.join("");
    return a == b;
};