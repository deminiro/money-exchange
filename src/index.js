// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let value = currency;
    if(currency<=10000 && currency>0){
        for(var h=0,H=50;H<=currency;H++){
            for(var q=0,Q=25;Q<=currency;Q++){
                for(var d=0, D=10;D<=currency;D++){
                    for(var n= 0, N=5;N<=currency;N++){
                        for(var p=0, P=1;P<=currency;P++){
                            value-=1;
                            p++;
                        }
                        value-=5;
                        n++;
                    }
                    value-=10;
                    d++;
                }
                value-=25;
                q++;
            }
            value-=50;
            h++;
        }
        return {H:h,
                Q:q,
                D:d,
                N:n,
                P:P}
    }else if(currency>10000){
        return "error: "+'"'+ "You are rich, my friend! We don't have so much coins for exchange";
    }else{
        '{}';
    }
}
