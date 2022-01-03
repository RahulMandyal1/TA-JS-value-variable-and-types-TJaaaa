/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here

// let completePhone = PHONE_PRICE+ACCESSORY_PRICE;
// let total = completePhone*TAX_RATE;


while(amount< bank_balance){   // 0< 303.91
    amount= amount + PHONE_PRICE; // 0 = 0+99.99
    if(amount<SPENDING_THRESHOLD){ // 99.99 < 200 
        amount+=ACCESSORY_PRICE; // 99.99 + 9.99
    }
}
let tax = amount*TAX_RATE;

let total= `$${tax+amount}`;
console.log(total);
// let totalamount = ();
// ⛑ Answer of the above will `$334.76`.
