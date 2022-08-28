/*Maximum Profit Stock
Problem – Given an array denoting the cost of stock on different days. Your task is to find the
maximum profit which can be earned after buying or selling the stock on that particular day. For
example –
Input – {100, 180, 260, 310, 40, 535, 695}
Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)
Naive Approach – We can iterate through the array and buy and sell stock everyday to check if
we are getting maximum profit or not. If we get more profit, we can update our maximum profit so
far.
We can use nested loop in this case to get the desired value */

/*approch sudo code=>
[100, 180, 260, 310, 40, 535, 695, 20]

Current Buy - Day 5
Current Sell - Day 6 => 655.
Buy on Day 1 -> 100
Sell on Day 2 -> 180-100 => 80. P
Sell on Day 3 -> 260-100 => 160. 
Sell on Day 4 -> 310-100 => 210.
Sell on Day 5 -> 40-100 => -60
Buy on Day 5
Sell on Day 6 > 535-40 => 495
Sell on Day 7 -> 695-40 => 655
Sell on Day 8 -> 80-40 => 40 */

function findmaxProft(array){
    let maxProfit = 0;
    let buyingPrice = 0;
    let sellingPrice = 0;
    let changeBuyingPrice = true;

    for(let i=0; i<array.length-1; i++){
        sellingPrice = array[i+1];
        
        if(changeBuyingPrice){
            buyingPrice = array[i];
        }
        if(sellingPrice<buyingPrice){
            //lose
            changeBuyingPrice = true;
            continue;
        }else{
            //profit
            let profit = sellingPrice - buyingPrice;
            if(profit > maxProfit){
                maxProfit = profit;
            }
            changeBuyingPrice = false;
        }
    }
    console.log(maxProfit);
}
findmaxProft([100, 180, 260, 310, 40, 535, 695]);