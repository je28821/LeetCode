/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length - 1;
    let n = matrix[0].length - 1;
    let i = 0, j = m;
    while (i <= j) {
        let mR = Math.floor((i + j) / 2);
        let a = 0, b = n;
        while (a <= b) {
            let mC = Math.floor((a + b) / 2);
            if (matrix[mR][mC] == target) {
                return true;
            } else if (matrix[mR][mC] < target) {
                a = mC + 1;
            } else {
                b = mC - 1;
            }
            if((matrix[mR][mC] > target && matrix[mR][mC -1] < target) || (matrix[mR][mC] < target && matrix[mR][mC +1] > target) ) {
                return false;
            }
        }
        if (a == n + 1) {
            i = mR + 1;
        } else if (b == -1) {
            j = mR - 1;
        }
    }
    return false;
};
