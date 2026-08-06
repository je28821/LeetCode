/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let ans = [];
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    for(let i = min ; i < max ; i++){
        if(nums.includes(i)){
            continue;
        }else{
            ans.push(i);
        }
    }
    return ans;
};