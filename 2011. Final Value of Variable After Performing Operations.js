var finalValueAfterOperations = function(operations) {
    let count = 0;
    for(let i = 0 ; i < operations.length ; i++){
        if(operations[i].includes('+'))
            count ++;
        else
            count--
    }
    return count
};