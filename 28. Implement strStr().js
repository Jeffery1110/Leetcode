/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      return haystack.indexOf(needle);
};
var strStr = function(haystack, needle){
    for(let i=0; i<=haystack.length; i++){
        var str = haystack.substr(i,needle.length);
        if(str == needle)
            return i
    }
    return -1
};

