const age = 62;
const price = 600;
if (age <= 12) {
    console.log('The food is free')
}
else if (age >= 60) {
    // 50% discount
    const discountPrice = price - (price * 50 / 100);
    console.log(discountPrice)
}
else if (age >= 50 && age <= 60) {
    //30% discount
    const discountPrice = price - (price * 30 / 100);
    console.log(discountPrice)
}
else {
    console.log(price)
}