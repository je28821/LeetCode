/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
    let ans = [];
    for(let value of n2){
        if(n1.has(value)){
            ans.push(value);
        }
    }
    return ans;
};