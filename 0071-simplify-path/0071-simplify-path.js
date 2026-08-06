/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = path.split("/");
    let stack = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === "" || arr[i] == "."){
            continue;
        }else if(arr[i] == ".."){
            stack.pop();
        }else{
            stack.push(arr[i]);
        }
    }
    let ans =  "/" + stack.join("/");
    return ans;
};