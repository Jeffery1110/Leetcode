/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0 || strs[0] == null) 
        return "";
    else if(strs.length == 1)
        return strs[0];
    else{
        var same = strs[0];
        for(var i=1;i<strs.length;i++){
            var str = strs[i];
            for(var j=0; j<str.length; j++){
                if(same[j] != str[j])
                    break;
            }
            same = same.slice(0,j);
        }
    }
    return same
};