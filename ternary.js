const age = 10;
//---------------- if else operation ---------------
// if(age > 18){
//     console.log('You will get a vote')
// }
// else{
//     console.log('You will not get a vote')
// }


//--------------that's ternary operation-------------

age >= 18 ? console.log('You will get a vote') : console.log('You will not get a vote')


//----------------another if else operation ----------

 let price = 1100;
 const isLeader = true;
// if(isLeader === false){
// price = 0;
//     console.log("He is Leader ")
// }
// else{
//     price = price + 100 ;
//     console.log('He is not Leader')
// }
// console.log(price)

//---------------For it's ternary operation-----------


price = isLeader === true ? console.log(0) : console.log(price+100);

//------------- another if else operation ----------

let appelPrice = 1200;
// if(isLeader == true){
//     if(appelPrice > 1000){
//         appelPrice = appelPrice / 2;
//     }
//     else{
//         appelPrice = 0;
//     }
// }
// else{
//     appelPrice = appelPrice + 100;
// }
// console.log(appelPrice)


//------------------ it's ternary operation-------------


appelPrice = isLeader === true ?
             appelPrice > 1000 ?
                 appelPrice = appelPrice / 2 
                 : appelPrice = 0 
            : appelPrice + 100;
console.log(appelPrice)