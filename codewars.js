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

//Возведение в квадрат каждой цифры, сложение их как строк, возвращение результата как числа
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

//Расчет статуса клуба игроков в крикет
let memberStats = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
function statUS (stats) {
    result = [];
    for (i = 0; i < stats.length; i++){
        if(stats[i][0] >= 55 && stats[i][1] > 7 && stats[i][1] <= 26){
            result[i] = 'Senior';
        } else 
        {
            result[i] = 'Open';
        }
    }
        return console.log(result);
}
statUS(memberStats);
// топовое решение с кодварс 
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
//----

//Сумма чисел от 1 до введенного числа
function numToSum (num) {
result = 0;
    for (let i = 1; i <= num; i++) {
    result += i;
}
return result;
}
console.log(numToSum(8));

//Ошибки печати на коробках на производсве
function printer_error(str) {
str = str.split('').sort();
rightColor = 'abcdefghijklm';
rightColor = rightColor.split('').sort();
//console.log(rightColor, str);
let result = str.length;
for (let j = 0; j < str.length; j++) { 
    for (let i = 0; i < rightColor.length; i++) {
        //console.log(`str[${j}] работает с rightColor[${i}] `);
        //console.log(`j[${j}] = ${str[j]}; i[${i}] = ${rightColor[i]}`);
        if (str[j] == rightColor[i]) {
            //console.log('RIGHT COLOR')
            result -= 1;
            break;
        }
    }
}
return console.log(`Ошибок ${result}/${str.length}`);
}
printer_error('aaabbbbhaijjjm');

//находим следующий ИДЕАЛЬНЫЙ квадрат
function findNextSquare(num){
    if (Number.isInteger(Math.sqrt(num)) == false){
        return -1;
    } else {
        num++;
        while (Number.isInteger(Math.sqrt(num)) == false) {
        num++
        }
    }
    return num;
}
console.log(findNextSquare(121));

//Расчет прироста населения
function nbYear(pFirst,pPersent,pYear,pResult) {
    let persent = 0;
    let num = 0;
    console.log(pFirst,pPersent,pYear,pResult);
  if (pPersent == 0) {
    do {      
        console.log(pFirst = pFirst + pYear);
        console.log(num++);
    } while (pFirst <= pResult);
    return num-1;
    } else {
    do {
        persent = pFirst / 100 * pPersent;
        Math.trunc(pFirst = pFirst + persent + pYear);
        num++;
    } while (pFirst <= pResult+1);
    return num;
    }
}
console.log(nbYear(1000,2,50,1214));
//костыльный мусор, отсутствие логики, понимания, блять, мозгов
//кое-как оно работает, но выглядит максимально ненадежно

//some leetcode
let arr = [3,2,3];
function twoSum(nums,target) {
    let result =[];
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (i==j){
                continue;
            } else if((nums[i] + nums[j]) == target){
                result[0] = i;
                result[1] = j;
                break;
            } else {console.log('error');}
            
        }
    }
    return result;
}
console.log(twoSum(arr,6));

//some leetcode
function addTwoNumbers(l1, l2){
    l1 = l1.reverse().join('');
    l2 = l2.reverse().join('');
    let a = +l1;
    let b = +l2;
    let sum = a+b;
    sum += ''; 
    sum = sum.split('');
    return  sum.reverse();

}
console.log(addTwoNumbers([2,4,3],[5,6,4])); //работает, но на литкод таких методов не существует

// определяем играеет ли чел на бонго по букве R or r в начале его имени. Sounds easy enough
function bongo(name){
    // let result = '';
    arr = name.toUpperCase().split('');
    return result = (arr[0]== 'R') ? `${name} plays banjo`: `${name} does not play banjo`;
}
console.log(bongo('robot'));

//считаем количество тру в массиве. Sounds easy enough
function ezpz(someArray){
let result = 0;
    for (i = 0; i<=someArray.length; i++){
        if (someArray[i] == true){
            result++;
        } else continue;
}
return result;
}
console.log(ezpz([true, true, false, true, false]));

//кал
function digitize(n) {
    n = '' + n;
    n = n.split('').reverse();
    for (let i = 0; i < n.length; i++){
        n[i] = parseInt(n[i]);
   }
    return n;
  }
console.log(digitize(321));

//кал2
function kal2 (n,x){
    let a = 0;
    arr = [];
    for(i = 0; i < x; i++) {
        a += n;
        arr[i] = a;
    }
    return arr;
}
console.log(kal2(2, 10));

//сумма массива и чет-нечет
function odd_even (arr) {
    let arrSum = 0;
    arr.forEach(a => {
        arrSum += a;
    })
    return result = ((arrSum % 2) == 0) ? 'even': 'odd';
}
console.log(odd_even([0, -1, -5]));

//считаем овец. ez but kata points is kata points
function sheepCounterStrike_1_6 (num) {
    let arr = '';
    for (let i = 1; i <= num; i++){
        arr += `${i} sheep...`;
    }
    return arr;
}
console.log(sheepCounterStrike_1_6(3));

//отфильтровываем стринг, оставляем намбер в массиве
function yeas(arr){
    for(i=0; i < arr.length; i++){
        if (typeof(arr[i]) == 'string'){
            arr.splice(i,1);
            i--
        }
   } 
   
    return arr;
}
console.log(yeas([1,2,"aasf","1","123",123])); //мда, конечно, решения кибератлетов с кодварс в пол строки, норм так бьет по желанию продолжать

//считает гласные (кроме y) в строке
function abudabamjuneba (arr){
    let counter = 0;
    let eq = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < eq.length; j++){
            if (arr[i] == eq[j]){
                counter++;
            }
        }
   }
   return counter;
}
console.log(abudabamjuneba('Clowne'));

//возвращает true, если количество оо и хх в введенной строке совпадает.
function xo(str){
    str = str.toLowerCase();
    let xCounter = 0;
    let oCounter = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] == 'x'){
            xCounter++;
        } else if (str[i] == 'o'){
            oCounter++;
        }
    }
    return xCounter == oCounter;
}
console.log(xo('xxofdfdo'))

