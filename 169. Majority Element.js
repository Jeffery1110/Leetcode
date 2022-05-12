var majorityElement = function(nums) {
    var result = {};
    nums.forEach(function(item) {
      result[item] = result[item] ? result[item] + 1 : 1;
    });

    for(let i = 0; i < Object.keys(result).length ; i++){
       if(Object.values(result)[i] > nums.length/2)
        return Object.keys(result)[i]
    }
};