//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for( let num= 0; num <= 10;num=num+1 ){
    console.log(num);
}


// Using `console.log` log all the evan values from 1 to 10.

for (evennumber=0 ;evennumber<=10;evennumber++){
    if(evennumber%2==0){
        console.log(evennumber);
    }
}

// Using `console.log` log all the od values from 1 to 10.
for (oddnumber=0 ;oddnumber<=10;oddnumber++){
    if(oddnumber%2!==0){
        console.log(oddnumber);
    }
}
// Calculate the sum of all numbers from 1 to 10.

let total = 0;
for(let sum=1;sum<10;sum++){
    total+=sum;
}
console.log(`The sum of  1 to 10 is ${total}`);
// Log all the values from 1 to 10 using while loop
let num = 0;
while(num<=10){
    console.log(num);
    num= num+1;
}