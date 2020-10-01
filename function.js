const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const sign = document.querySelector('#sign');
const clear = document.querySelector('#clear');
const percentage = document.querySelector('#percentage');
const minus = document.querySelector('#minus');
const add = document.querySelector('#plus');
const square = document.querySelector('#square');
const sqrt = document.querySelector('#sqrt');


var number1 = 0;
var number2 = 0;
var flagM = 0;
var flagA = 0;
var flagD = 0 ;
var flagS = 0;

const inputNumber = document.querySelector('#inputNumber');


one.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="1";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "1";
   }
  }
});

two.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="2";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "2";
   }
  }
});

three.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="3";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "3";
   }
  }
});

four.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="4";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "4";
   }
  }
});
five.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="5";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "5";
   }
  }
});
six.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="6";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "6";
   }
  }
});
seven.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="7";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "7";
   }
  }
});
eight.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="8";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "8";
   }
  }
});
nine.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="9";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "2";
   }
  }
});
zero.addEventListener("click", function(){
  if(inputNumber.value=="0"){
    inputNumber.value="0";
  }
  else {
   {
     var x = inputNumber.value;
     inputNumber.value= x + "0";
   }
  }
});

clear.addEventListener("click", function(){
  inputNumber.value="0";
   number1 = 0;
   number2 = 0;
   flagM = 0;
   flagA = 0;
   flagD = 0 ;
   flagS = 0;

});



multiply.addEventListener("click", function(){
number1 = inputNumber.value;
inputNumber.value="0";
flagM = 1;
});

divide.addEventListener("click", function(){
number1 = inputNumber.value;
inputNumber.value="0";
flagD = 1;
});

minus.addEventListener("click", function(){
number1 = inputNumber.value;
inputNumber.value="0";
flagS = 1;
});

add.addEventListener("click", function(){
number1 = inputNumber.value;
inputNumber.value="0";
flagA = 1;
});

percentage.addEventListener("click", function(){
number1 = inputNumber.value;
inputNumber.value= (parseInt(number1)/100);
});

square.addEventListener("click", function(){
number1 = inputNumber.value;
number1= parseFloat(number1);
x = new Big(number1);
inputNumber.value = x.pow(2).valueOf();
});

sqrt.addEventListener("click", function(){
  number1 = inputNumber.value;
  number1= parseFloat(number1);
  x = new Big(number1);
  inputNumber.value = x.sqrt().valueOf();
});

sign.addEventListener("click", function(){
  number1 = inputNumber.value;
  number1 = parseInt(number1);
  if(number1>0){
    inputNumber.value = "-" + inputNumber.value;
  }
  else
  {
    inputNumber.value = inputNumber.value ;
  }

});

equals.addEventListener("click", function(){
var number2 = inputNumber.value;

number2= parseFloat(number2);
number1= parseFloat(number1);


if ((Number.isInteger(number1))& (Number.isInteger(number2)))
{
  if (flagM == 1){
    inputNumber.value = number1*number2;
    flagM=0;
  }
  else if (flagA==1){
    inputNumber.value = number1+number2;
    flagA=0;
  }
  else if (flagD==1) {
    inputNumber.value = number1/number2;
    flagD=0;
  }else if (flagS==1) {
    inputNumber.value = number1-number2;
    flagS=0;
  }else {
    window.alert("Invalid Input");
  }
}
else
{
  var a = new Big(number1);
  var b = new Big(number2);
  if (flagM == 1){
    inputNumber.value = a.times(number2).valueOf();
    flagM=0;
  }
  else if (flagA==1){
    inputNumber.value = a.plus(b).valueOf();
    flagA=0;
  }
  else if (flagD==1) {
    inputNumber.value = a.div(b).valueOf();
    flagD=0;
  }else if (flagS==1) {
    inputNumber.value = a.minus(b).valueOf();
    flagS=0;
  }else {
    window.alert("Invalid Input");
  }
}


number1 = 0;
number2 = 0;
flagM = 0;
flagA = 0;
flagD = 0 ;
flagS = 0;

});
