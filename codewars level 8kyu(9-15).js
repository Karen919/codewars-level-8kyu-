                    // **************** CodeWars level(8 kyu) task(9) **********************
// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different
// numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
    if ( n < 5 ) {
      return n*100;
    } else if (n >=5 && n < 10) {
     return n* 95;
    } else if ( n >= 10) {
     return n*90
    }
 }
                    // **************** CodeWars level(8 kyu) task(10) **********************

//  Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
//  and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  
    if ( month <= 3 ) {
     return 1;
   } else if (month <= 6) {
      return 2;
   } else if (month <= 9 ) {
      return 3; 
   } else if (month <= 12 ) {
      return 4;}
   }
   
                    // **************** CodeWars level(8 kyu) task(11)  **********************


//    Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
//    When bool is truthy, func1 should be called, otherwise call the func2.

let _if = (bool, func1, func2) => bool ? func1() :func2();

                    // **************** CodeWars level(8 kyu) task(12) Basic Mathematical Operations **********************

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  let result = '';
  if ( operation == '+' ) {
   result = value1 + value2;
  } else if ( operation == '-' ) {
    result = value1 - value2;
  } else if ( operation == '*' ) {
    result = value1 * value2;
  } else if ( operation == '/' ) {
    result = value1 / value2;
  }
  
  return result;
}

                    // **************** CodeWars level(8 kyu) task(13) **********************

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
   if ( typeof x == "number") {
     return ( x * 50 ) + 6;
     
   } else if ( typeof x == 'string' ) {
     return 'Error';
   }
   }

                       // **************** CodeWars level(8 kyu) task(14) Grasshopper - Debug sayHello **********************

   // The starship Enterprise has run into some problem when creating a program to
   //  greet everyone as they come aboard. It is your job to fix the code and get the program working again!
   // Example output:
   // Hello, Mr. Spock
   
   function sayHello(name) {
      return 'Hello, ' + name;
    }
