// **************** CodeWars level(8 kyu) task(31)Stringy Strings**********************

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

function stringy(size) {
    let sum = '1';
     for ( let i = 1;  i < size; i++ ) {
      sum += (sum.charAt(sum.length - 1) === '1') ? '0' : '1';
     } 
    return sum;
  }
  // **************** CodeWars level(8 kyu) task(32)Grandma learning to text**********************

//   Напишите функцию, которая заменяет «два», «тоже» и «до» на число «2». Даже если звук встречается в середине слова (как в осьминоге)
//   или не в нижнем регистре, бабушка все равно считает, что его нужно заменить на 2. Благослови ее.
// 'I love to text' becomes 'I love 2 text'
// 'see you tomorrow' becomes 'see you 2morrow'
// 'look at that octopus' becomes 'look at that oc2pus'

function textin(s){
    let result = s.replace(/too|to|two/gi, '2');
     return result;
}
  // **************** CodeWars level(8 kyu) task(33)Miles per gallon to kilometers per liter**********************

// Иногда мне нужно быстро преобразовать мили на имперский галлон в километры на литр.
// Создайте приложение, которое будет отображать количество километров на литр (выходные данные)
//  на основе количества миль на имперский галлон (входные данные).
// Не забудьте округлить результат до двух знаков после запятой.
// Некоторые полезные ассоциации, относящиеся к этому ката: 1 имперский галлон = 4,54609188 литров, 1 миля = 1,609344 километра.

function converter (mpg) {
    let result = mpg/(4.54609188/1.609344);
    return Number(result.toFixed(2));
}
  // **************** CodeWars level(8 kyu) task(34)Sum without highest and lowest number**********************

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element,
//  return 0.

function sumArray(array) {
    if (!array || array.length <= 1) {
      return 0;
    }
    let sortArr = array.sort((a, b) => a - b);
    let result = 0;
    for (let i = 1; i < sortArr.length - 1; i++) {
      result += sortArr[i];
    }
    return result;
  }
  
  // **************** CodeWars level(8 kyu) task(35)**********************

