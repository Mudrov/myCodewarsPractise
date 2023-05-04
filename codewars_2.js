//ок, поросячий язык, lets try it
function pigLang (str) {
    let charPos = 0;
    str = str.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : pigLang(str.slice(1) + str[0], charPos + 1);
}
console.log(pigLang('leg')); //ай в очко

//опять чет нечет лепесток
function inLove (a, b) {
    let oddEven = ['odd', 'even'];
    if (a%2 == 0){
        a = oddEven[1];
    } else {
        a = oddEven[0];
    }
    
    if (b%2 == 0){
        b = oddEven[1];
    } else {
        b = oddEven[0];
    }

    if (a != b){
        return true;
    } else {
        return false;
    }
}
console.log(inLove(2,3));

//Вернуть массив с именами из 4 букв
function friendNames (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i].length == 4) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(friendNames(["Ryan", "Kieran", "Mark"]));

//сумма между двумя введенными числами
function intSum (a,b){
    result = 0;
    arrSum = [];
    if (a < b) {
        for (let i = a; i <= b; i++){
            arrSum.push(i);
        } 
    } else  if (a > b){
        for (let i = b; i <= a; i++){
            arrSum.push(i);
        } 
    } else if (a == b){
        return a;
    }
    for (let j = 0; j < arrSum.length; j++){
            result += arrSum[j];
 
    }
    return result;
}
console.log(intSum(2,2));

//max min array 
function max_min (arrInt){
let max = Math.max(...arrInt);
let min = Math.min(...arrInt);
let result = `max = ${max} min = ${min} `;
return result;
}
console.log(max_min([4,6,2,566,9,63,-134,1]));

//alphabet position
function alphabetNum (str) {
    console.log(str[str.length-1]);
    let result = '';
    str = str.toLowerCase();
    const alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    }
for (let i = 0; i < str.length; i++){
    for(let key in alphabet){
        if (str[i] == key){
            result += ' ' + alphabet[key];
        } else continue;
    }
}
return result = result.slice(1);
}
console.log(alphabetNum("The sunset sets at twelve o' clock"));

//сравниваем две последние две буквы строки, если они совпадают со вторым аргументом - возвращаем тру
function twoLetters (str, strEnd) {
let result = '';
for (i = 1; i <= strEnd.length; i++){
    result += str[str.length - i];
}
result = result.split('').reverse().join('');
if (result == strEnd){
    return true;
} else {
    return false
}
}
console.log(twoLetters('abcsde', 'cde')); //работает, бат.. решается она в одну строку методом str.endWith(strEnd)....

//Фибоначчи Трибоначчи (как Фибоначчи, только следующее число является суммой трех чисел)
function tribonacci(signature,n){
    let resultArr = signature;
    let result = 0;
    for (i = 0; i < n; i++) {
        // result = signature[i]+signature[i+1]+signature[i+2];
        result = resultArr[i]+resultArr[i+1]+resultArr[i+2]
        resultArr[i+3] = result;
    }
    resultArr.splice(n, 3);
    return resultArr;
  }
  console.log(tribonacci([1,1,1], 0));

//Разделение слов по камэл кейс
function cCase (str) {
str = str.split('');
for (i = 0; i < str.length; i++){
    if (str[i] != str[i].toLowerCase()) {
        str[i-1] += ' ';
    }
}
str = str.join('');
return str;
}
console.log(cCase('camelCasingTest'));

//количество умножения, пока не получим одинарное число
function persistence(num) {
    let count = 0;
    while (num > 9) {
      let result = 1;
      while (num > 0) {
        result *= num % 10;
        num = Math.floor(num / 10);
      }
      num = result;
      count++;
    }
    return count;
  }
console.log(persistence(999));

//Функция миллисекунд с полуночи
function timeB (hour, minute, second){
hour = hour*3600000;
minute = minute * 60000;
second = second *1000;
return hour+minute+second;
}
console.log(timeB(0,1,1));

//тру, если строка содержит валью
function isEq (arr, x) {
    let result = false
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            result = true;
        }
    }
    return result;
}
console.log(isEq('sraka', 'b'));

//на входе строка, на выходе масив по пробелам, изи, 8 kyu хуль
function eZ (arr) {
return arr.split(' ');
}
console.log(eZ('I love arrays they are my favorite'));

// another 8 kyu (они в обратную сторону по сложности идут?) Проверак на тру и фолс, ретерн да или нет
function boolToWord( bool ){
    return bool === true ? 'Yes' : 'No'
}

//8 kyu, пох, набиваю руку для кода в одну строчку, эм ай райт?

function sum (numbers) {
    "use strict";
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
};

console.log(sum([1, 5.2, 4, 0, -1]));

//все слова начинаются с заглавной
function toJadenCase (str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++){
        if (str[i] == ' '){
        //    str = str.replace(str[i+1], str[i+1].toUpperCase());
        str[i+1] = str[i+1].toUpperCase();
        }
    }
    return str.join('');
}
console.log(toJadenCase('How can mirrors be real if our eyes arent real'));

//счетчик +1, если хоть один символ повторяется
function duplicateCount(text) {
    text = text.toLowerCase();
    let duplicateCheck = {};
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (!duplicateCheck[text[i]]){
            duplicateCheck[text[i]] = 1;
        }
        else if (duplicateCheck[text[i]] < 2) {
            duplicateCheck[text[i]] += 1;
            counter++;
        }
    }
    return counter;
}
console.log(duplicateCount('aabbcde'));

//возвращаем массив из заданной строки, если символы повторяются, 
//выводим только один до следующего повторения, 6 kyu, хз почему, даже я справился за 5 минут
function dup (str){ 
    result = [];
      for (let i = 0; i < str.length; i++){
          if (str[i] == str[i-1]){
              continue;
          } else {
              result.push(str[i]);
          }
      }
      return result;
}
console.log(dup('AAAABBBCCDAABBB'));

//удаляем из массива а все значения, которые есть в массиве б, возвращаем новый массив сохранив порядок
function arrayDiff(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {  
          if (a[i] != b[j]) {
                continue;
            } else if (a[i] == b[j]){
                delete a[i];
            }
        }
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] == undefined) {
            continue;
        } else {
            result.push(a[i]);
        }
    }
return result;
}
console.log(arrayDiff([1,2,3],[1,2]));

//pangram

function isPangram(str){
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  console.log(str);  
  str = str.toLowerCase().split('').sort();
    hubStr = '';
  console.log(str);

    for (let i = 0; i < str.length; i++) {
        if (str[i] == undefined || str[i] == ',' || str[i] == '.'|| str[i] == ' ') {
            continue;
        } else {
            hubStr += str[i];
            console.log(hubStr);
        }
    }
    hubStr = hubStr.replace(/[0-9]/g, '');
    let result ='';
    for (let i = 0; i < str.length; i++){
        if (hubStr[i] == hubStr[i-1] || hubStr[i] == undefined){
            continue;
        } else {
            result += hubStr[i];
            console.log(result);
        }
    }
    // result = result.substring(1);
    console.log(result);
    for (let i = 0; i < alphabet.length; i++) {
        console.log(`${result[i]} = ${alphabet[i]}`, result[i] == alphabet[i]);
    }
return result == alphabet;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));