var runningSum = function(nums) {
    var temp = 0 ;
    var arr = [];
    for(let i = 0; i < nums.length; i++){
        temp += nums[i];
        arr.push(temp);
    }
    return arr;
};