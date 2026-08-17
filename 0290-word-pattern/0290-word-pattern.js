/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let pMap = new Map();
    let sMap = new Map();
    let sArr = s.split(" ");
    if(pattern.length !== sArr.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (pMap.has(pattern[i]) && pMap.get(pattern[i]) !== sArr[i]) {
            return false;
        }

        if (sMap.has(sArr[i]) && sMap.get(sArr[i]) !== pattern[i]) {
            return false;
        }

        pMap.set(pattern[i], sArr[i]);
        sMap.set(sArr[i], pattern[i]);
    }
    return true;
};