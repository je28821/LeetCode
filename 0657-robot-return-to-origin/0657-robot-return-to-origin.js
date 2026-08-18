/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let obj = {
        U: 0,
        D: 0,
        L: 0,
        R: 0
    }
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            if (obj.D > 0) {
                obj.D--;
            } else {
                obj.U++;
            }
        }
        if (moves[i] === "D") {
            if (obj.U > 0) {
                obj.U--;
            } else {
                obj.D++;
            }
        }
        if (moves[i] === "L") {
            if (obj.R > 0) {
                obj.R--;
            } else {
                obj.L++;
            }
        }
        if (moves[i] === "R") {
            if (obj.L > 0) {
                obj.L--;
            } else {
                obj.R++;
            }
        }
    }
    for (let [key, value] of Object.entries(obj)) {
        if (value > 0) {
            return false;
        }
    }
    return true;
};