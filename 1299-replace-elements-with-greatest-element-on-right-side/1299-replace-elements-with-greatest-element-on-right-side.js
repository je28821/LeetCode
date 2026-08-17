/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length === 1) return [-1];
    let ans = [];
    let max = -1;
    for(let i = arr.length -1 ; i >= 0 ; i--){
        if(arr[i] > max){
            ans[i] = max;
            max = arr[i];
        }else {
            ans[i] = max;
        }
    }
    return ans;
};