/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    let j =  0, k= 0;
    for(let i = 2; i < nums.length ; i++){
        if(arr1[j] > arr2[k]){
            arr1.push(nums[i]);
            j++;
        }else {
            arr2.push(nums[i]);
            k++;
        }
    }
    return arr1.concat(arr2);
};