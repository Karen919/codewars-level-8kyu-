                      // **************** CodeWars level(8 kyu) task(15) Thinkful - Logic Drills: Traffic light **********************

//You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
// to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the
//  current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
// FUNDAMENTALS

function updateLight(current) {
  
   switch (current) {
       case 'green':
       return 'yellow';
       
       case 'yellow':
       return 'red';
       
       case 'red':
       return 'green';
   }
 }

                        // **************** CodeWars level(8 kyu) task(16) Drink about  **********************

//  Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {

   if ( old <  14 ) {
     return 'drink toddy';
   } else if ( old < 18 ) {
     return 'drink coke';
   } else if ( old < 21 ) {
     return 'drink beer'
   } else if ( old >= 21 ) {
     return 'drink whisky'
   }
 }

                         // **************** CodeWars level(8 kyu) task(17) Grasshopper - Personalized Message  **********************

//  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
   return name === owner ? 'Hello boss' : 'Hello guest';

}
                         // **************** CodeWars level(8 kyu) task(18) Who is going to pay for the wall? **********************

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall 
// between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors 
// to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span,
//  and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating 
//  their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name
//  is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name){
   let x = [name];
   let y = name.substr(0,2);
   if ( name.length > 2 ) {
     x.push(y);
     return x;
   } else return x;
   
   
 }
                         // **************** CodeWars level(8 kyu) task(19) Plural **********************


//  We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used 
//  with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
//  You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural 
//  (not one of something).
//  All values will be positive integers or floats, or zero.
 
function plural(n) {
   if ( n === 1 ) {
     return false;
   } else return true;
 }
                         // **************** CodeWars level(8 kyu) task(20) Count the Monkeys!**********************


//  You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
//   but your son is too young to just appreciate the full number, he has to start counting them from 1.
//  As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers 
//  up to and including that number, but excluding zero.
 
//  For example(Input --> Output):
//  10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   1 --> [1]
 
function monkeyCount(n) {
   let monkeys = [];
   for ( let i = 1; i <= n; i ++ ) {
      monkeys.push(i);
      }
   return monkeys;
 }