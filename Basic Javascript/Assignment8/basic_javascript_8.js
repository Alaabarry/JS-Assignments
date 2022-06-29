function connect_fun() { // concat method connect  strings together
    var part1 ="I have"; 
    var part2 =" a good"; 
    var part3 =" day brother !"; 
    full_sen = part1.concat(part2, part3); 
    document.getElementById("text-a").innerHTML=full_sen;
} 
function slice_fun() { //slice method slice string based on the numbers of characters
    var sentance = "I practice coding every day"; 
    var slice_sen = sentance.slice(11,18); 
    document.getElementById("text-b").innerHTML=slice_sen;
} 
function upper_fun() { //Touppercase method to convert string to uppercase
    var text ="hello world"; 
    var upper_text =text.toUpperCase(); 
    document.getElementById("text-c").innerHTML=upper_text;
} 
function search_fun() {// search method to return the index of first letter of searched string
    var serch_str ="I watch netflix"; 
    var find_str =serch_str.search("netflix"); 
    document.getElementById("text-d").innerHTML=find_str;
} 
function str_fun() { //Tostring method to convert dataType to string
    var x =123; 
    document.getElementById("text-f").innerHTML=x.toString();
} 
function pre_fun() { // format number to spec length
    var y =12367.3445656; 
    document.getElementById("text-g").innerHTML=y.toPrecision(8);
}  
function Fix_fun() { // rounds a number to a given number of digits.
    var u =9.86; 
    document.getElementById("text-y").innerHTML=u.toFixed(0);
}  


   //ValueOf()  method return number as number

