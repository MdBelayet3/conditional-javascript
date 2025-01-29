/**
 * More_level comparison
 */

const price = 5000;
if (price >= 5000) {
    //10% discount
    const discountPrice = price - (price * 10 / 100);
    console.log(discountPrice)
}
else if (price >= 2000){
    //5%
    const discountPrice = price - (price * 5 /100);
    console.log(discountPrice)
}
else{
    console.log(price)
}