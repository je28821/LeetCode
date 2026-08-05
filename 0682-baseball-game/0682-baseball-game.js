/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        let top = Number(stack[stack.length -1]);
        if (operations[i] >= -Infinity && operations[i] <= Infinity) {
            stack.push(Number(operations[i]));
        } else if (operations[i] =="+") {
            let second = Number(stack[stack.length -2]);
            stack.push(second + top);
        }else if (operations[i] =="D"){
            stack.push(top *2);
        }else{
            stack.pop();
        }
    }
    let ans = stack.reduce((acc,sum) => acc + sum ,0);
    return ans;
};