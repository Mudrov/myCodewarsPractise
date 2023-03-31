const someString = 'This is some strange string';

function reve(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    // return str.split('').reverse().join('');

    // Решение при помощи цикла
    /* let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
         newStr += str[i];
    }
    return newStr */

    //str.split("").reverse().join();
}
console.log(reverse(someString));
// сверху задача из юдеми

//Чет Нечет
function EveOdd(q) {
    if (q%2) {
        return 'Odd';
    } else {
        return 'Even';
    }
};
console.log(EveOdd(1));

//Камень ножницы бумага
function RokcPaperScissors(p1,p2) {
if (p1 === p2) {
    return 'Draw!';
} 

if (p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!';
} else if ( p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!';
} else if ( p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!';
} else {
    return 'Player 2 won!'
}

}

//Разворот цифровой строки
const reverseSeq = n => {
  let result = [];
  let f = 0;
  for (let i = 0; i < n ; i++){
    f = n - i;
    result[i] = f;
  }
  return result;
};
console.log(reverseSeq(5));

//сумма квадратов
"use strict";
function squareSum(numbers){
    let result = +[];
    console.log(`'numbers' right now is = ${numbers} and his type is '${typeof(numbers)}'`);
    const str = (numbers+'');
    console.log(`'str' right now is = ${str} and his type is '${typeof(str)}'`);
    const arr = str.split('');
    console.log(`the final array for function is = ${arr}`);
    
    for (let i = 0; i < arr.length; i++) {

        console.log(`arr[${i}] = ${result} + ${arr[i]}*${arr[i]} = ${result + arr[i]*arr[i]}`);
        result += +(arr[i]*arr[i]);
        console.log(`this itteration result is ${result}`);
    }
    
    return result;
}
console.log(squareSum(22)); //022 нельзя

//возвращает сумму положительных чисел
const data = 0;

function plusSum(a) {
    result = 0;
    if (a.length == 0 ) {
        return 0;
    }
    for (let i = 0; i < a.length; i++){
        if (a[i] <= 0) {
            continue;
        } else
        result += a[i];
    } 
    return result;
}
console.log(plusSum(data));

//среднее число в массиве
const some = [5,5,5];
function findAverage(array) {
    result = 0;
    if (array.length == 0 ) {
        return 0;
    }
    for (let i =0; i < array.length; i++){
        result += array[i]; 
    }
    
    return (result/array.length);
  }
console.log(findAverage(some));

// вес тела с "определением" нормальности
function dmi (weight,height){
let result = 0;
result = weight/(height*height);
console.log(result);
if (result <= 18.5) {
    return "Underweight";
} else if (result >18.5 && result <=25.0){
    return "Normal";
} else if (result > 25.0 && result <= 30){
    return "Overweight";
} else if (result > 30){
    return "Obese";
}
}
console.log(dmi(80,1.8));

//Инициалы из строки
let NameSurname = 'Johnny Silverhand'
function initials (str) {
    let result = '';
    const arr = str.split(' ');
    let name = arr[0];
    let surname = arr[1];
    result = name[0]+'.'+ surname[0];
    return result.toUpperCase();
}
console.log(initials(NameSurname));

//Заменить все гласные в строке
let scam = 'This website is for losers LOL!';
function change(str) {
   let result = str.replace(/[aeiouy]/gi, '');
   return result;
}
console.log(change(scam));

//Возведение в квадрат кажой цифры, сложение их как строк, возвращение результата как числа
function wtfIsTHAT (number) { 
    let result = '';
    let sqr = 0;
    const str = (number+'');
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        sqr = arr[i]*arr[i];
        result += sqr;
    }
    return +result;
}
console.log(wtfIsTHAT(9119));