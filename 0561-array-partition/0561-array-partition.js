/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let n = nums.length -1;
    let sum = 0;
    for(let i = 0; i <=n ; i += 2){
        sum += nums[i];
    }
    return sum;
};