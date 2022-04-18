/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--) {
        let last = digits[i];
        if(last < 9) {
            digits[i] = last + 1;
            return digits;
        }
        digits[i] = 0; 
    }
    return [1, ...digits];
};