/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = current = nums[0];
    for(let i = 1 ; i <= nums.length ; i++){
        current += nums[i];
        if(current < nums[i])
            current = nums[i];
        if(current > max)
            max = current
    }
    return max
};