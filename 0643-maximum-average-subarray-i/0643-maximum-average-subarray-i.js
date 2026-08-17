/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === 1 && k === 1) return nums[0];
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let max = sum / k;
    sum -= nums[0];
    for (let i = k; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, sum / k);
        sum -= nums[i - k +1 ];
    }
    return max;
};