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
console.log(intSum(-1,2));