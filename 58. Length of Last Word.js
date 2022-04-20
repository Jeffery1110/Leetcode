/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(' ');
    if(s.length == 0) return 0;
    if(arr.length == 0) return 0;
    while(arr.length > 0){
        var word = arr.pop();
        if(word.length > 0)
            return word.length;
    }
};