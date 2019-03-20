// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   let value = currency;
    if(currency<=10000 && currency>0){
        for(var h=0, H=50;H<=value;H+=50){
            value - 50;
            h++;
        }
        for(var q=0, Q=25;Q<=value;Q+=25){
            value - 25;
            q=Math.floor(q/2)+1;
        }
        for(var d=0, D=10;D<=value;D+=10){
            value - 10;
            d=Math.floor(d/5)+1;
        }
        for(var n=0, N=5;N<=value;N+=5){
            value - 5;
            n=Math.floor(n/10)+1;
        }
        for(var p=0,P=1;P<=value;P+=1){
            value - 1;
            p=Math.floor(p/2)+1;
        }
        return 'H:'+ h + ' Q:' + q + ' D:' + d + ' N:' + n + ' P:' + p;
    }else{
        return "error:(You are rich, my friend! We don't have so much coins for exchange)";
    }
}
