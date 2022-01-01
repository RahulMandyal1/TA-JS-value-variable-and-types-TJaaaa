// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/


let userNumber = Number(prompt(`Enter a number to check weather the number is even or odd `));

if(userNumber %2==0){
  console.log(`The number ${userNumber} is  Even`);
}
else{
  console.log(`The number ${userNumber} is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let firstNumber = Number(prompt(`Enter  first number to  check weather the max value`));
let secondNumber =  Number(prompt(`Enter second number to check weather  the max value`));

if(firstNumber > secondNumber){
  alert(` ${firstNumber} is  greater than  ${secondNumber}`);
}
else{
  alert(`${secondNumber} is greater than ${firstNumber}`);
}

// 3. Convert the above code using`?` terniary operator

// *************  Even odd program using the ternary operator ****************  
userNumber %2==0 ? console.log(`The number ${userNumber} is  Even`)
                 : console.log(`The number ${userNumber} is odd`);


// ************ Max value program using the ternary operator  *****************

firstNumber > secondNumber ? alert(` ${firstNumber} is  greater than  ${secondNumber}`)
                           : alert(`${secondNumber} is greater than ${firstNumber}`);


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = String(prompt(`Enter the house  Name : `));
if (houseName === "stark" ){
  console.log(`Winter is coming`);
}
else if (houseName=== "Lannister"){
  console.log(` A Lannister always  pay his debt`);
}
else{
  console.log(`All mens must  die`);
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark" ? console.log(`Winter is coming`)
:houseName=== "Lannister" ? console.log(` A Lannister always  pay his debt`)
:console.log(`All mens must  die`);

// Switch

switch (houseName){
  case "stark":
    console.log(`Winter is coming`);
    break;

  case "Lannister":
      console.log(` A Lannister always  pay his debt`);
      break;

  default:
    console.log(`All mens must  die`)
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let monthNumber = Number(prompt("Enter  a month  number  1 to 12 to know  how many days in that month "));

switch (monthNumber){
  case 1 :
    alert(`The number of Days in january is : 31`);
  break;
  case 2 :
    alert(`The number of Days in February is : 28`);
  break;
  case 3 :
    alert(`The number of Days in March is : 31`);
  break;
  case 4 :
    alert(`The number of Days in April is : 30`);
  break;
  case 5 :
    alert(`The number of Days in May is : 31`);
  break;
  case 6 :
    alert(`The number of Days in June is : 30`);
  break;
  case 7 :
    alert(`The number of Days in July is : 31`);
  break;
  case 8 :
    alert(`The number of Days in August  is : 31`);
  break;
  case 9 :
    alert(`The number of Days in September is : 30`);
  break;
  case 10 :
    alert(`The number of Days in October is : 31`);
  break;
  case 11 :
    alert(`The number of Days in November is : 30`);
  break;
  case 12 :
    alert(`The number of Days in December is : 31`);
  break;

  default:
    alert("Enter month in number from 1 to 12")
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let userSalary = Number(prompt(`Enter Your salary to know the  hand amount after deducting the tax amount `));

if (userSalary<= 20000){
  alert(`Your  hand amount is : ${userSalary/100*10-userSalary} `);
}
else if (userSalary<= 40000){
  alert(`Your  hand amount is : ${userSalary/100*20-userSalary} `);
}
else if (userSalary > 50000){
  alert(`Your  hand amount is : ${userSalary/100*30-userSalary} `);
}
else{
  alert(`Enter  a valid amount in Numbers`);
}
//  if..else vs switch

switch(true){
  case userSalary<=20000:
    alert(`Your  hand amount is : ${userSalary/100*10-userSalary} `);
    break;

  case userSalary<= 40000:
    alert(`Your  hand amount is : ${userSalary/100*20-userSalary} `);
    break;

  case userSalary>50000:
    alert(`Your  hand amount is : ${userSalary/100*30-userSalary} `);
    break;
  
  default:
      alert(`Enter  a valid amount in Numbers`);
}

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let userMarks = Number(prompt(`Enter your Marks to know you Grade`));

if(userMarks>= 80 && userMarks<=100 ){
   alert(`Your Grade is  A`);
}
else  if (userMarks>=50 && userMarks<80 )
{
  alert(`Your Grade is B`);
}
else  if (userMarks>=30 && userMarks<50 )
{
  alert(`Your Grade is C`);
}
else  if (userMarks>= 0 && userMarks<30 )
{
  alert(`Your Grade is D`);
}
else
{
  alert(`Marks can't be greater than 100`);
}



// Switch version 

switch(true){
  case userMarks>= 80 && userMarks<=100:
    alert(`Your Grade is  A`);
    break;
  case userMarks>=50 && userMarks<80:
    alert(`Your Grade is  B`);
    break;

  case userMarks>=30 && userMarks<50 :
    alert(`Your Grade is  C`);
    break;

  case userMarks>= 0 && userMarks<30 :
    alert(`Your Grade is  D`);
    break;
    
  default:
    alert(`Marks can't be greater than 100`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let userWeather = prompt("What is the weather like outside :");

if(userWeather==="sunny"){
  alert(`Wear  a T-shirt`);
}
else if(userWeather=== "rainy"){
  alert(`Don't forget to take your raincoat`);
}
else if (userWeather=== "hot"){
  alert(`Get  a hanky`);
}
else if (userWeather === "freezing"){
  alert(`Get you a sweeter on`);  
}
else {
  alert(`Not  a valid input `)
}
