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
func();*/

let str = 'строка';

function func(){
    for(let i = str.length - 1; i >= 0; i --){
  console.log(str[i]) ;
       
}
}
func()