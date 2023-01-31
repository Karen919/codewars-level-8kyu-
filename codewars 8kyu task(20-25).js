// **************** CodeWars level(8 kyu) task(21) Reverse List Order **********************

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    return list.reverse();
}
// **************** CodeWars level (8 kyu )task(22) Hello, Name or World! **********************

// Определите метод hello, который возвращает "Hello, Name!" на заданное имя или говорит Hello, World! если имя не указано
//  (или передано как пустая строка).
// Предполагая, что это имя является строкой, и оно проверяет пользовательские опечатки, чтобы вернуть имя с первой заглавной буквой (Xxxx).
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  if ( name ===  undefined ) {
    return "Hello, World!";
  } else if ( name ==='' )  {
    return "Hello, World!";
  }else {
      name = name + '!';
    let x = name.toLowerCase();
    let y = x.charAt(0).toUpperCase() + x.slice(1);
    return   `Hello, ${y}`;
  }
}
// **************** CodeWars level (8 kyu )task(23)Find out whether the shape is a cube**********************

// Чтобы найти объем (в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу:
// объем = длина * ширина * высота
// Но кто-то забыл использовать правильный учет, поэтому у нас есть только объем и длина одной стороны!
// Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда (= является кубом).
// Возвращает true, если кубоид может иметь равные стороны, в противном случае возвращает false.
// Возвращайте false также для недопустимых чисел (например, объем или сторона меньше или равна 0).
// Примечание: стороны должны быть целыми

var cubeChecker = function(volume, side){
  if ( (volume/side)/ side === side && volume >= 0 ) {
    return true;
  } else  return false;
};
// **************** CodeWars level (8 kyu )task(24)Merge two sorted arrays into one**********************

// Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача — найти способ объединить их в один,
//  отсортированный по возрастанию. Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.
// Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами. Если и arr1, и arr2 пусты, 
// просто верните пустой массив.
// Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. Также arr1 и arr2 могут иметь одинаковые целые числа.
//  Удалить дубликаты в возвращаемом результате.

// Примеры (ввод -> вывод)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10 , 11, 12]

function mergeArrays(arr1, arr2) {
  let calcArray = [...arr1, ...arr2];
  let uniqueNumbers = [...new Set(calcArray)].sort(( a,b )=> a-b)
  return uniqueNumbers;
 }
// **************** CodeWars level (8 kyu )task(25)Sort and Star**********************

//  Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII),
//   а затем вернуть первое значение.
//  Возвращаемое значение должно быть строкой и иметь «***» между каждой буквой.
//  Вы не должны удалять или добавлять элементы из/в массив.

function twoSort(arr) {
  arr.sort();
  let firstValue = arr[0];
  let result = '';
  for (let i = 0; i < firstValue.length; i++) {
    result += firstValue[i] + '***';
  }
  return result.slice(0, -3);
}
