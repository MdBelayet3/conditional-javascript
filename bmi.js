const weight = 54.5;
const height = 1.77;
BMI = weight / (height * height);
console.log(BMI)
if(BMI < 18.5){
    console.log('You are Underweight.');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('You are Normal.');
}
else if(BMI >=25 && BMI <= 29.9){
    console.log('You are overweight.');
}
else{
    console.log('You are Obese.');
}