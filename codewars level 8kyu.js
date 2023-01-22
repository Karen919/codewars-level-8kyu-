                    // **************** CodeWars level(8 kyu) task(1) **********************

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 ==0) {
      return 'Even' ;
    } else return 'Odd';
  }

                    // **************** CodeWars level(8 kyu) task(2) **********************

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.            

function simpleMultiplication(number) {
    if(number % 2 == 0) {
     return number * 8;
    } else {
      return number * 9;
    }
 } 

                    // **************** CodeWars level(8 kyu) task(3) **********************

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

                    // **************** CodeWars level(8 kyu) task(4) **********************

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(quantity, price){
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
  }


                    // **************** CodeWars level(8 kyu) task(5) **********************

//  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let result = '';
    for (i = 0; i <n; i++) {
      result += s;
    }
    return result;
  }

//                     **************** CodeWars level(8 kyu) task(6) **********************

//  Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let sum = ( (h*60**2) + (m*60) + s) *1000;
    return sum;
  }

//                     **************** CodeWars level(8 kyu) task(7) **********************


// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    let e= time / 2;
   return Math.floor(e);
 }

//                     **************** CodeWars level(8 kyu) task(8) **********************

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let str = x.toUpperCase();
    let arrayWalue = str.split('');
    let reverseArrayValues = arrayWalue.reverse();
    let reverseString =  reverseArrayValues.join('');
     
    if ( str == reverseString ) {
        return true
    } else return false;
    
  }
