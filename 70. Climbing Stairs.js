var climbStairs = function(n) {
    if(n == 1)
        return 1
    let pre = 1;
    let current = 1;
    for(let i = 2; i <= n; i++) {
        let temp = current;
        current = current + pre;
        pre = temp;
    }
    return current
};