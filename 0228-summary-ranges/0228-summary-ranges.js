/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ans = [];
    let start = -1;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i+1] == nums[i] +1 && start >0){
            continue;
        }else if(nums[i+1] == nums[i] +1 && start == -1){
            start = i;
        }else if(nums[i+1] != nums[i] +1 && start > -1){
            ans.push(`${nums[start]}->${nums[i]}`);
            start = -1;
        }else if(nums[i+1] != nums[i] +1 && start == -1){
            ans.push(`${nums[i]}`);
        }
    }
    return ans;
};