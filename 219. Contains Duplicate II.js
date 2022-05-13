var containsNearbyDuplicate = function(nums, k) {
    if(nums.length == 1) return false;
    let map = {};

    for(let i in nums) {
        let v = nums[i];
        if(map[v] && i - map[v] <= k){
            //console.log('1');
            return true;
        }
        map[v] = i;
        //console.log('map', map)
    }
    return false
};