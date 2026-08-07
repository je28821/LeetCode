/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let j = numbers.length -1 , i = 0;
    while(i < j){
        if(numbers[i] + numbers[j] == target){
            return [i+1 ,j+1];
        }else if(numbers[i] + numbers[j] > target){
            j--;
        }else{
            i++;
        }
    }
};