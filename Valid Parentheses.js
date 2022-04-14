const isValid = function(str) {
    const arr = [];
    const map = {
        "}": "{",
        ")": "(",
        "]": "[",
    }    
    for(let item of str){
       if(item === '{' || item === '(' || item === '['){
          arr.push(item);
       }else{
           if(arr.pop() !== map[item] ){
              return false;
           }
       }
    }
    return arr.length === 0;
};