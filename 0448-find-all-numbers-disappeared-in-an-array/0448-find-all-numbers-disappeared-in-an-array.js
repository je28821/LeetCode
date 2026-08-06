/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map = new Map();
    let ans = [];
    for(let i = 0; i< nums.length ; i++){
        map.set(nums[i], map.get(nums[i])+1 || 1);
    }
    for(let i = 1 ; i <= nums.length; i++){
        if(map.get(i) == undefined){
            ans.push(i);
        }
    }
    return ans;

};