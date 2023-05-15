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

<<<<<<< HEAD
//some math
function hz (num) {
    let result = 0;
    subNum = 4;
    hubNum = 0;
    if (num == 1 || num == 0) {
        result = num + '.00'
    } else {
        for (let i = 0; i < num-1; i++){
            hubNum += (1/subNum);
            subNum += 3;
        }
        result = 1 + hubNum;
        result = result.toFixed(2)+'';
    }
    return result;
}
console.log(typeof(hz(2)));
// let num = 1.56978021978022;
// console.log(num.toFixed(2));

//max min 7 kuy
function minMax(arr){
    let result = [];
    result[0] = Math.min(...arr);
    result[1] = Math.max(...arr);
    return result;
  }
  console.log(minMax([1])); //мда

//average grade
function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3)/3;
    let result = '';

}
console.log(getGrade(89,70,90));
=======
//bus people
function bus (busStops) {
    let result = 0;
    for (let i = 0; i < busStops.length; i++){
        result += busStops[i][0] - busStops[i][1];
    }
    return result;
}
console.log(bus([[10,0],[3,5],[5,8]]));

//превод человеческих лет на кэт и дог йерс
function humanCatDog (humanYears){
    let resultArr = [humanYears,15,15];
    if (humanYears > 1) {
            resultArr[1] += 9;
            resultArr[2] += 9;

    }
    if (humanYears >= 2) {
        for (let i = 2; i < humanYears; i++) {
            resultArr[1] += 4;
            resultArr[2] += 5;
        }
    }
    return resultArr;
}
console.log(humanCatDog(10));

//letter counter
function count(string) {
    let letters = {};
    for (let i = 0; i < string.length; i++) {
            letters[string[i]] = 0;
    }
    for (let i = 0; i < string.length; i++) {
        letters[string[i]] += 1;
    }
    return letters;
}
console.log(duplicateCount('aabbcde'));

//allowed pin 
function atmPin (pin) {
    if (pin.length === 4 || pin.length === 6) {
        for (let i = 0; i < pin.length; i++) { 
          if (isNaN(parseInt(pin[i]))) { 
            return false; 
          }
        }
        return true; 
      } else {
        return false; 
      }
}
console.log(atmPin('123456')); 

//is my points better
function betterThanAverage(classPoints, yourPoints) {
    let averagePoins = 0;
    for (i = 0; i < classPoints.length; i++) {
        averagePoins += classPoints[i];
    }
    let result = averagePoins/classPoints.length;
    return (yourPoints >= result) ? true : false;
  }
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  
//clac
function basicOp(operation, value1, value2)
{
    return (operation == '+') ? value1+value2 : (operation == '-') ? value1-value2 : (operation == '*') ? value1*value2 : (operation == '/') ? value1/value2 : false;
}
console.log(basicOp('/',5, 5));

//sum without max and min
function sumArray(array) {
    if (array == NaN || array == null) {
        return 0;
    }

    array.sort(function(a, b) {
        return a - b;
      });

        array.pop();
        array.shift();

    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == undefined) {
            continue;
        } else {
            result += array[i];
        }
    }
    return result;
}
console.log(sumArray([ 6, 2, 1, 8, 10 ]));

//prime numbers
// function primeFactors(n) {
// 	function isPrime(num) {
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0){
//                 return false;
//             }
//         }
//     return true;
//     }
//     let result = [];
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0 && isPrime(i)){
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(primeFactors(8)); hz

//найти число которе встречается нечетное количество раз в массиве
function findOdd(A) {
    let numberCounter = {};
    for (let i = 0; i < A.length; i++) {
      numberCounter[A[i]] = 0;
    }
    for (let j = 0; j < A.length; j++) {
      numberCounter[A[j]] += 1;
    }
    const keys = Object.keys(numberCounter);
    let result = null;
    for (let k = 0; k < keys.length; k++) {
      numberCounter[keys[k]] = Number(numberCounter[keys[k]]);
      if ((numberCounter[keys[k]] % 2) != 0) {
        result = keys[k];
      } else {
        continue;
      }
    }
    return Number(result);
  }
  console.log(findOdd([0,1,0,1,0])); //да, люди эту задачу решают в одну строчку...

  //rot13
// function rot13(message){
// }
// console.log(rot13('test'));

//return middle of the string
function getMiddle(s)
{
    if (s.length == 1){
        return s;
    } else if ((s.length%2) == 0) {
        return s[(s.length/2) -1] + s[(s.length/2)];
    } else if ((s.length%2) != 0) {
        return s[(Math.round(s.length/2)) -1];
    }
}
console.log(getMiddle('testing'));

//hz
function countPositivesSumNegatives(input) {
    let result = [0,0];
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        result[0] += 1;
      } else {
        result[1] += input[i];
      }
    }
    return result;
  }
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

  //hz
  function greet(language) {
    const lng = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }

  if(lng[language] != undefined) {
        return lng[language];
    } else {
        return lng.english;
    }
}
console.log(greet('dutchdsdsd'));