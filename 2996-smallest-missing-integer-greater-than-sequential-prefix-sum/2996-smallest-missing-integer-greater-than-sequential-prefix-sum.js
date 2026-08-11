/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    if(nums.length == 1) return nums[0] +1;
    let i = 0;
    let sum = 0;
    while (i < nums.length) {
        if (nums[i] >= nums[i + 1] || nums[i+1] != nums[i] +1) {
            sum += nums[i];
            break;
        }
        sum += nums[i];
        i++;
    }
    let map = new Map();
    while (i < nums.length) {
        console.log(nums[i] , sum);
        if (nums[i] < sum) {
            i++;
            continue;
        } else if (nums[i] == sum) {
            sum++;
        } else {
            map.set(nums[i], nums[i]);
        }
        i++;
    }
    for (let [value] of map) {
        if (map.get(sum)) {
            sum++;
        }
        else {
            break;
        }
    }
    return sum;
};