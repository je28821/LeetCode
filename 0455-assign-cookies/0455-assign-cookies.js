/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b) => a- b);
    s = s.sort((a,b) => a- b);
    let a = 0 , b= 0 , ans = 0;
    while(a < g.length && b < s.length){
        if(s[b] >= g[a]){
            ans++;
            a++;
            b++;
        }else if(g[a] > s[b]){
            b++;
        }else {
            a++;
        }
    }
    return ans;
};