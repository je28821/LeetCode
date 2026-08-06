/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    for(let i = n ; i <= 100 ; i++){
        let product = 1;
        let no = i;
        while(no >0){
            let rem = no % 10;
            product = product *rem;
            no = Math.floor(no /10);
        }
        if(product % t === 0){
            return i;
        }
    }
};