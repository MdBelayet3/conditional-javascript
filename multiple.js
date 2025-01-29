const isCar = false ;
const salary = 25000;
const isBCS = true ;
const height = 66;
 
if(salary > 20000 && isBCS == true){
    console.log('You are selected')
}
else{
    console.log('You are rejected')
}

if(salary > 30000 || isCar == true){
    console.log('Bolo baba kabul')
}
else{
    console.log('shor baba babul')
}

//------------ more and more condition -----------

if(height >= 70 && isBCS == true && isCar == true){
    console.log('shu----patro')
}
else{
    console.log('onno patro khuji')
}

//-----------------Complex condition -----------
if((salary > 30000 && isCar == true) || isBCS == true){
    console.log('We will like you')
}
else{
    console.log('We dont like you')
}