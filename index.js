//1. What do each of the following Boolean
true && false 
console.log(true && false)// => true
true||false 
console.log(true||false)// => false
false && false
console.log(false && false) //=> false
true && (true||true)
console.log(true && (true||true))// => true
false||1 < 5 
console.log(false||1 < 5)// => true
5 >= 4 && 1 > 3 
console.log(5 >= 4 && 1 > 3) //=>false
10 < 4 || 1 > 4 
console.log(10 < 4 || 1 > 4) //=>false
12 >= 2 && 1 < 24 
console.log(12 >= 2 && 1 < 24)// =>true
'Hello'.charAt(0) === 'h' 
console.log('Hello'.charAt(0) === 'h')// =>false

//2. Boolean Variable
let isHotOutSide = true;
console.log(isHotOutSide);
let isWeekday = true;
console.log(isWeekday);
let hasMoneyInPocket = true;
console.log(hasMoneyInPocket);
//3. Create the following variable
let costOfMilk = 2.4;
let moneyInWallet = 100;
let thirstLevel = 4;
//4. Create Variable for the following scenarios
let shouldByIcecream = isHotOutSide && hasMoneyInPocket;
console.log(shouldByIcecream);
let willGoSwimming = isHotOutSide || !isWeekday;
console.log(willGoSwimming);
let isAGoodDay = isHotOutSide || (hasMoneyInPocket && !isWeekday);
console.log(isAGoodDay);
let willBuyMilk = (isHotOutSide && thirstLevel >= 3)&& (moneyInWallet >= costOfMilk * 2);
console.log(willBuyMilk);

