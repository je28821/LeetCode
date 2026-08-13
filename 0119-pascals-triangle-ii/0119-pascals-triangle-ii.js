/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) return [1];
    let ans = [];
    for (let i = 0; i <= rowIndex; i++) {
        let j = 0;
        ans[i] = [];
        while (j < i + 1) {
            if(j == 0 || j == i){
                ans[i][j] = 1;
            }else{
                ans[i][j] = ans[i -1][j-1] + ans[i -1][j];
            }
            j++;
        }
        if(i === rowIndex){
            return ans[i];
        }
    }
};