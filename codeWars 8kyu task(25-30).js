// **************** CodeWars level(8 kyu) task(26) Ensure question **********************

// Напишите строковую функцию, которая возвращает строку с завершающим вопросительным знаком ("?"),
//  если исходная строка не заканчивается знаком вопроса, и в этом случае она возвращает исходную строку.
// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

function ensureQuestion(s) {
    let lestLetterInString = s[s.length-1];
    return (lestLetterInString ==='?') ?  s :  s + '?';
}
// **************** CodeWars level(8 kyu) task(27) Exclusive "or" (xor) Logical Operator **********************

//   В некоторых языках сценариев, таких как PHP, существует логический оператор (например, &&, ||, и, или и т. д.),
//    который называется «исключающее ИЛИ» (отсюда и название этого ката). Исключающее или оценивает два логических значения.
//     Затем он возвращает true, если ровно одно из двух выражений истинно, и false в противном случае. Например:

//     false xor false == false // since both are false
//     true xor false == true // exactly one of the two expressions are true
//     false xor true == true // exactly one of the two expressions are true
//     true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
    
//   Поскольку мы не можем определить ключевые слова в Javascript (ну, по крайней мере, я не знаю, как это сделать),
//    ваша задача — определить функцию xor(a, b), где a и b — два выражения, которые нужно вычислить. Ваша функция xor должна иметь поведение,
//     описанное выше, возвращая true, если ровно одно из двух выражений оценивается как true, иначе false.

function xor(a, b) {
    return ( a && b == true ) ? false : a||b;
}
// **************** CodeWars level(8 kyu) task(28) Remove the time **********************

// Вы перепроектируете блог, и записи в блоге имеют следующий формат для отображения даты и времени публикации:
// День недели Месяц День, время, например, пятница, 2 мая, 19:00
// У вас заканчивается свободное место на экране, и на некоторых страницах вы хотите отображать более короткий формат,
//  день недели, месяц, день, без времени.
// Напишите функцию shortenToDate, которая принимает дату/время веб-сайта в исходном строковом формате и возвращает сокращенный формат.
// Предположим, что ввод shortenToDate всегда будет строкой, например. «Пятница, 2 мая, 19:00». Предположим,
//  что вывод shortenToDate будет сокращенной строкой, например, «Пятница, 2 мая».

function shortenToDate(longDate) {
    let shortList = longDate.split(',')[0];;
    return shortList;
}
// **************** CodeWars level(8 kyu) task(29) Calculate BMI**********************

//   Write function bmi that calculates body mass index (bmi = weight / height2).
//   if bmi <= 18.5 return "Underweight"
//   if bmi <= 25.0 return "Normal"
//   if bmi <= 30.0 return "Overweight"
//   if bmi > 30 return "Obese"
  
function bmi(weight, height) {
    let result = weight/height**2;
    if ( result <= 18.5 ) {
        return "Underweight";
    } else if ( result <=25.0 ){ 
        return 'Normal';
    } else if ( result <= 30.0 ) {
        return 'Overweight';
    } else if ( result >30 ) {
        return 'Obese';
    }
}
// **************** CodeWars level(8 kyu) task(30)Sum of positive**********************

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] > 0 ) {
        sum +=arr[i];
      }
    } return sum;
  }
  
