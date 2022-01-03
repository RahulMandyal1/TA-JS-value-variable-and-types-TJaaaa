// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
userAge =+prompt("Enter your  age to know  can you participate  in the  marathon or not");

if(userAge>=12&&userAge<55){
  console.log("Yes you can  participate in the marathon");
}
else if(userAge>=4&&userAge<=11){
  console.log(`You are too young to participate in the marathon`);
}
else if(userAge<4){
  console.log(`Hey Kiddo! Can You Walk`);
}
else{
  console.log(`You are too old to participate in the marthon`);
}



// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
//👇
*/

let helloNumber =Number(prompt("Enter  a number to specify how many times number e occurs in the  hello"));

let helloFirstPart = "h";
let helloMiddlePart ="";
let helloLastPart = "llo";
for (let i =helloNumber ; i>0;i= i-1){
     helloMiddlePart +="e";
}

// console.log(`${helloFirstPart}${helloMiddlePart}${helloLastPart}`);

//Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
//👇

let nNumbers= Number(prompt("Enter  n numbers to get  their sum "));
let sum=0;
for (let i =0 ; i<=nNumbers; i= i+1){
  sum= sum+i;
}
console.log(`The sum of ${nNumbers} is :  ${sum}`);



/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/



userInput = +prompt("Enter  a number");
switch(true){
  case userInput==1 :
    alert("ONE");
    break;
  case userInput==2 :
    alert("TWO");
    break;
  case userInput==3:
    alert(`THREE`);
    break;
  case userInput==4:
    alert(`FOUR`);
    break;
  case userInput==5:
    alert(`FIVE`);
    break;
  case userInput==6:
    alert(`SIX`);
    break;
  case userInput==7:
    alert(`SEVEN`);
    break;
  case userInput==8:
    alert(`EIGHT`);
    break;
  case userInput==9:
  alert(`NINE`);
  break;
  default:
    alert(" PLEASE TRY AGAIN");
}



/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/



let userMarks = +prompt(`Enter your marks to know your Grade`);

switch(true){
  case userMarks>90:
    alert(`Your  Grade is AA`);
    break;
  case userMarks>80 && userMarks <=90:
    alert(`Your Grade is AB`);
    break;
  case userMarks>70 && userMarks<=80:
    alert(`Your Grade is BB`);  
    break;
  case userMarks>60 && userMarks<=70:
    alert(`Your Grade is BC`);  
    break;

  case userMarks>50 && userMarks<=60:
    alert(`Your Grade is CC`);  
    break;
  case userMarks>40 && userMarks<=50:
    alert(`Your Grade is CD`);  
    break;
  case userMarks>30 && userMarks<=40:
    alert(`Your Grade is DD`);  
    break;
  case userMarks<=30:
    alert(`Your Grade is FF`);  
    break;
  default:
    alert(`Enter valid input`);
}



/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/

let firstNum = +prompt(`Enter the first number`);
let secondNum = +prompt(`Enter the second number`);

if(firstNum >secondNum){
  alert(`${firstNum } is larger  than ${secondNum}`);

}
else{
  alert(`${secondNum } is larger  than ${firstNum}`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/



let x = +prompt("Enter the first number to find  the  sign ");

let y = +prompt("Enter the second number to find  the  sign ");

let z = +prompt("Enter the third number to find  the  sign ");


if(x>0 && y>0 && z>0){
  alert(`The sign is +`);
}
else{
  alert(`The sign is -`);
}



/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let firstNumber = Number(prompt(`Enter the first  number`));
let secondNumber = Number(prompt(`Enter  second number`));
let operationSign = String(prompt(`Enter operation to be performed 
                                   Add
                                   Sub
                                   Mul
                                   Div
                                   ! Note that opertion Name is case sensitive`
));

if(operationSign=="Add"){
  alert(`The sum of these two numbers is ${firstNumber+secondNumber}`);
}
else if(operationSign=="Sub"){ // Using nested if else statement 
  if(firstNumber>secondNumber){
    alert(`substraction of these two numbers is  ${firstNumber-secondNumber}`);
  }
  else{
    alert(`Can not perform  substraction  because  Number one is not greater than number two `);
  }
}
else if(operationSign=="Mul"){
  alert(`Multiplication of these two numbers is ${firstNumber*secondNumber}`);
}
else if(operationSign=="Div"){ // Using nested if else statement 
  if(firstNumber>secondNumber){
    alert(`Division of these two numbers is  ${firstNumber/secondNumber} `);
  }
  else{
    alert(`Can not perform  Division  because  Number one is not greater than number two `);
  }
}
 


// [Your code goes here]
