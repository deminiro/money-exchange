// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let value = currency;
    if(currency<=10000 && currency>0){
        if(value>=50){
        for(var h=0, H=50;currency-H>=0;H+=50){
            value-=50;
            h++;
        }
        if(h>0){var cur1 = currency - value;}
        else{ cur1 = value;}
    }
     
    if(value>=25){
        for(var q=0, Q=25;Q<=cur1;Q+=25){
            cur1-=25;
            q++;
        }
        
    }
    
    if(cur1>=10){
        for(var d=0, D=10;D<=cur1;D+=10){
            cur1-=10
            d++;
        }
    }
    
    if(cur1>=5){
        for(var n=0, N=5;N<=cur1;N+=5){
            cur1-=5;
            n++;
        }
    }
    
    if(cur1>=1){
        for(var p=0,P=1;P<=cur1;P+=1){
            cur1--;
            p++;
        }
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
