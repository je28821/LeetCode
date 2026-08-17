/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let left = 0;
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            max = Math.max(max, i -left);
            left = i ;
        }
    }
    max = Math.max(max, nums.length  - left);
    return max;
};