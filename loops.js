// Print even number using while loop
let evenNumber = 0;
while( evenNumber <= 100){
    if(evenNumber % 2 == 0){
        console.log(evenNumber);
    }
    evenNumber++;
}
// Print every 3rd number backwards
let i = 100;
while(i >= 0){
    if(i % 3 == 0){
        console.log(i)
    }
    i--;
}
//Print Every other number from 0 to 100
for(let number = 0; number < 100; number += 2 ){
    console.log(number);
}

for (i = 0; i <= 100; i++){
    console.log(i);
    if (i % 3 == 0){
        console.log("Hello");
    }else if(i % 5 == 0 ){
        console.log("Word");
    }else if((i % 3 && i % 5) == 0){
        console.log("HelloWorld");
    }else{
        console.log("Sorry");
    }
}