/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let ans = "";

    while (i >= 0 && j >= 0) {
        let str = "" + carry + a[i] + b[j];

        if (str === "111") {
            ans = "1" + ans;
            carry = 1;
        } else if (str === "110" || str === "101" || str === "011") {
            ans = "0" + ans;
            carry = 1;
        } else if (str === "100" || str === "010" || str === "001") {
            ans = "1" + ans;
            carry = 0;
        } else {
            ans = "0" + ans;
            carry = 0;
        }

        i--;
        j--;
    }

    while (i >= 0) {
        let str = "" + carry + a[i];

        if (str === "11") {
            ans = "0" + ans;
            carry = 1;
        } else if (str === "10") {
            ans = "1" + ans;
            carry = 0;
        } else if (str === "01") {
            ans = "1" + ans;
            carry = 0;
        } else {
            // "00"
            ans = "0" + ans;
            carry = 0;
        }

        i--;
    }

    while (j >= 0) {
        let str = "" + carry + b[j];

        if (str === "11") {
            ans = "0" + ans;
            carry = 1;
        } else if (str === "10") {
            ans = "1" + ans;
            carry = 0;
        } else if (str === "01") {
            ans = "1" + ans;
            carry = 0;
        } else {
            // "00"
            ans = "0" + ans;
            carry = 0;
        }

        j--;
    }

    if (carry) {
        ans = "1" + ans;
    }

    return ans;
};