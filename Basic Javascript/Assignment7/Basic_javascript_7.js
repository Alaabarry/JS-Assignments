// get date method, if statment
function get_Date() {
    if (new Date().getHours() <19) {
        document.getElementById("text1").innerHTML=" Wassup !";
    } 
} 


 //if condition example
function My_con() { 
    var x = 10; 
    var y = 15;
    if ( x > y) {
       document.getElementById("result"). innerHTML =" X is "+"&nbsp;"+ x +"&nbsp;"+"greater than Y"+" is &nbsp; &nbsp;"+ y ; 
    } 
    else {
      document.getElementById("result"). innerHTML =" X is "+"&nbsp;"+ x +"&nbsp;"+"smaller than Y"+" is &nbsp; &nbsp;"+ y ;
     } 

} 
 //program the check age for voting using if statment 
function get_Age() {
     Age = document.getElementById("text").value ; 
    if (Age >= 18) {
      window.alert("you old enough to vote mate !"); 
    } 
    else { 
 
      window.alert (" you cant vote mate!");
        
   } 
 
}