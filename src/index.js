// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const stack = [];
    const price ={
        H:0,
        Q:0,
        D:0,
        N:0,
        P:0
    }
    if(currency<=10000 && currency>0){
        for(price[P];price[P]<=currency;price[P]++){
            for(price[N];price[N]<=currency;price[N]++){
                for(price[D];price[D]<=currency;price[D]++){
                    for(price[Q];price[Q]<=currency;price[Q]++){
                        for(price[H];price[H]<=currency;price[H]++){
                            stack.push(price[H]);
                            const H = price[h];
                        }
                        stack.push(price[Q]);
                    }
                    stack.push(price[D]);
                }
                stack.push(price[N]);
            }
            stack.push(price[P]);
        }
        return{
            "H":1,"Q":1,"D":1,"N":1,"P":1  
        }
    }else{
        return "You are rich, my friend! We don't have so much coins for exchange";
    }
}
