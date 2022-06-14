//generate a random number and display it with alert method
window.alert(Math.random() * 100); 

function addition_numbers() {
    var addition = 2+2; 
    document.getElementById("math_sum").innerHTML= addition;
} 
function subtraction_numbers() {
    var subtraction =5 -3; 
    document.getElementById("math_sub").innerHTML=subtraction;
} 
function division_numbers(){
    var division= 10 /2; 
    document.getElementById("math_div").innerHTML=division;
} 
function multi_numbers(){
    var multiple = (2+2) * 10 /2 -3;  
    document.getElementById("math_multi").innerHTML=multiple;

} 
function modulus_numbers() {
    var modulus = 25 % 3; 
    document.getElementById("math_mod").innerHTML=modulus;
}  
function increment_numbers () {
var x = 2; 
x++; 
document.getElementById("math_inc").innerHTML= x; 
}   
function decrement_numbers () {
    var x = 5; 
    x--; 
    document.getElementById("math_dec").innerHTML= x; 
    }  




