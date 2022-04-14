var isPalindrome = function(x) {
    var stringx = x.toString()
    var stringArray = x.toString().split("");
    if(x<0)
        return false;
    else{
        var reverseArray = stringArray.reverse();
        var reverseString = reverseArray.join("");
        if(stringx == reverseString)
            return true;
        else
            return false;
    }
};