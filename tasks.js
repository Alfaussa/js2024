
/*function func (){
let a = Number(document.getElementById('num').value);
let square = a*a;
let perimetr = (a+a)*2; 
document.getElementById('result1').innerHTML=square;
document.getElementById('result2').innerHTML=perimetr;
}
function wordsCount(){
    let text = document.getElementById('mytext').value;
    let numWords = 0;
    for (let i = 0; i < text.length; i++){
        let currentCharacter = text[i];

        if (currentCharacter == " ") {
            numWords += 1;
        }
    }
    numWords += 1;
    document.getElementById('wordscount').innerHTML= "Количество слов: " + numWords;  


}
let a = 'milk';
let b = 'mold';
function func(){
    if (a[0] == b[0]){
        console.log('mTCH');
    }else{
        console.log("no match")
    }
}
func();

let str = 'строка';

function func(){
    for(let i = str.length - 1; i >= 0; i --){
  console.log(str[i]) ;
       
}
}
func()

let arr = [2, 5, 9, 34, 11];
let result = 0;
function func(){
  
    for (let i = 0; i < arr.length -1; i++){
    if(arr[i] > 0 && arr[i] < 10){
        result += arr[i]}
    }
}
func();
console.log(result);
const str = 'abcde';

     let result = Array.from(str);
     console.log(result);


    let num = 12345;
    let arr = String(num).split('');
    let sum = 0;
    for(let digit of arr){
        sum += Number(digit);
    }
    console.log(sum)
     
     

    let arr = [];
    for(let i = 2; i <=100; i++){
        if(i%2 == 0){
            arr.push(i);
        }
       
    }
console.log(arr

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1,...arr2];
console.log(arr3);)

for (let i = 1; i <= 1000; i++){
    let str = String(i);
    if((parseInt(str[0])+ parseInt(str[1])) === 5){
        console.log(i);
    }
}
let arr =  [1, 2, 3, 4, 5, 6];
let arrhalf1 = arr.length/2;


let half1 = arr.slice(0, arr.length/2).reduce(function(sum, elem){
    return sum + elem
})
let half2 = arr.slice(arr.length/2).reduce(function(sum, elem){
    return sum + elem
})
let result = half2/half1;

console.log(result)

let str = '12,34,56';
let arr = [];
 arr = str.split(",").map(Number);
 console.log(arr);
let sum = arr.reduce(function(sum, elem)
{
    return sum + elem;
})
console.log(sum)
let str = 'aaa bbb ccc';
let arr = str.split(' ');
String.prototype.foo = function () { 
    return this.charAt(0).toUpperCase() + this.slice(1);}
let out = '';
for(let i = 0; i < arr.length; i ++){
    if(i == arr.length - 1){
        out = out + arr[i].foo()
    } else {
        out = out + arr[i].foo() + ' ';
    }
}
 

console.log(out)

let str = '1234567';


var re = /(?=\B(?:\d{3})+(?!\d))/g;

console.log( str.replace( re, ' ' ) );

let num = 123789;
let arr = [];
arr = num.toString().split('');

function func (nums){
    let res = nums.filter(function(num){
        return num %2 ===0
    });
    return res;
}

let number = (func(arr)).join('')

console.log(number)

let num = 123789;
let arr = [];
arr = num.toString().split('');

function func (nums){
    return nums.filter(num => num%2 === 0);
}

let number = (func(arr)).join('')

console.log(number)

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let arr = [...arr1.slice(0, 2), ...arr2,...arr1.slice(2)]


console.log(arr);

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i< arr.length; i++){
    if(arr[i] === arr[i-1]){
        console.log('yes')
    }
}*/

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
function arrayDif(a,b){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
                let x = a.length - b.length;
           if(b.length > a.length ){
               res = b.pop()    
            }  else {
                return b
            }
            arrayDif(a,b)
            }

    }
    
}

console.log(arrayDif(arr1, arr2))