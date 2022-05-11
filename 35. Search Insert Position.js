var searchInsert = function(nums, target){
    if(nums.indexOf(target) != -1){
        return nums.indexOf(target)
    }
    else{
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[nums.length - 1] < target)
                return nums.length 
            if(nums[i] > target)
                return i 
            if(nums[i] < target && nums[i+1] > target){
                return i + 1
            }
        }
    }
};