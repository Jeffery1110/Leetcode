var containsDuplicate = function(nums) {
    let temp = new Set(nums);
    return temp.size != nums.length
};