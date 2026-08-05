/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let match = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (
            j < match.length &&
            j < strs[i].length &&
            match[j] === strs[i][j]
        ) {
            j++;
        }

        match = match.slice(0, j);

        if (match === "") return "";
    }
    return match;
};