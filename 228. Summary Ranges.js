var summaryRanges = function(nums) {
    let i = 0 
    let arr = []
    for(let j = 0; i < nums.length; j++) {
        if(nums[j+1] == nums[j]+1) 
            continue;
        else {
            if(i == j) 
                arr.push(nums[i] + "")
            else
                arr.push(nums[i]+'->'+nums[j])
            i = j + 1;
        }
    }
    return arr
};