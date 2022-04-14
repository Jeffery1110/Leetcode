var twoSum = function(nums, target) {
    var map = {};
    for(var i=0 ; i<= nums.length; i++){
        var temp = nums[i];
        if(map[target-temp]>=0)
            return [map[target-temp],i];
        else
            map[temp] = i;
    }
};