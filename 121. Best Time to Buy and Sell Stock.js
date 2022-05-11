let buy = 0;
let sell = 1;
let profit = 0;
let arr = [];
while(sell < prices.length) {
    profit = prices[sell] - prices[buy];
    if(profit < 0) 
        buy = sell;
    else
        arr.push(profit);
    sell ++ ;
}
let answer = Math.max(...arr)
if(arr.length == 0)
    return 0;
else
    return answer