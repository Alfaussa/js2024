/*
function func (){
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
func()*/

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
