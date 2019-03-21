// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let result = {

    }
    let value = currency;
    if(currency<=10000 && currency>0){
        if(value>=50){
        for(var h=0, H=50;currency-H>=0;H+=50){
            value-=50;
            h++;
        }
        if(h>0){
             result.H = h;
    }
}
     cur1 = value;
    if(value>=25){
        for(var q=0, Q=25;Q<=cur1;Q+=25){
            cur1-=25;
            q++;
        }
        if(q>0){
            result.Q = q;
    }
}
    cur2 = cur1;
    if(cur1>=10){
        for(var d=0, D=0;D<=cur2;D+=10){
            cur2-=10;
            d++;
        }
        if(d>0){
            result.D = d;
        }
    }
    cur3 = cur2;
    if(cur3>=5){
        for(var n=0, N=5;N<=cur3;N+=5){
            cur3-=5;
            n++;
        }
        if(n>0){
            result.N = n;
        }
    }
    cur4 = cur3
    if(cur4>=0){
        for(var p=0,P=0;P=cur4;P+=1){
            cur4--;
            p++;
        }
        if(p>0){
            result.P = p;
        }
    }

    return result;
}   
    else if(currency>10000){
        return "{\nerror: "+'"You are rich, my friend! We don'+"'t have so much coins for exchange\n}";
    }else if(currency<=0){
        return result;
    }
}
