const bergerPrice = 340;
const cokePrice = 30;
if(bergerPrice >= 500){
    totalPay = bergerPrice;
    console.log('Coke is free and total Price is ');
    console.log(totalPay);
}
else{
    totalPay = bergerPrice + cokePrice;
    console.log('You pay coke price and total price is ')
    console.log(totalPay);
}