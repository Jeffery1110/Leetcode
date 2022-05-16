var moveZeroes = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length;) {
        if(nums[i] == 0) {
            count++;
            nums.splice(i, 1);
            continue;
        }
        i++;
    }
    for(let i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums
};