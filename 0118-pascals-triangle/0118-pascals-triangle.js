/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 1) return [[1]];
    let ans = [];
    for (let i = 0; i < numRows; i++) {
        let j = 0;
        ans[i] = [];
        while (j < i + 1) {
            if(j == 0 || j == i){
                ans[i][j] = 1;
            }else{
                sum = ans[i -1][j-1] + ans[i -1][j];
                ans[i][j] = sum;
            }
            j++;
        }
    }
    return ans;
};