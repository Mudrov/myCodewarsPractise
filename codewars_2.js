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
// let result = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
// if (result == strEnd){
//     return true;
// } else {
//     return false
// }
let result = '';
for (i = 1; i <= strEnd.length; i++){
    result += str[str.length - i];
}
result = result.split().reverse();
return result;
}
console.log(twoLetters('abcde', 'cde'));