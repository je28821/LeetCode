/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(let i = 0 ; i < nums1.length; i++){
        let j = nums2.indexOf(nums1[i]);
        let num = nums2[j];
        while(j < nums2.length){
            if(num < nums2[j]){
                ans.push(nums2[j]);
                break;
            }
            j++;
        }
        if(!ans[i]){
            ans.push(-1);
        }
    }
    return ans;
};