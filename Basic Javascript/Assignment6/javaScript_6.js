// constructer object
function vehicle ( make,model,year,color){
    this.vehicle_make =make; 
    this.vehicle_model=model; 
    this.vehicle_year=year; 
    this.vehicle_color= color; 

} 

var jack = new vehicle("dodge", "charger",1970, "black"); 
var emily = new vehicle("bmw", "shark",2008, "blue"); 
var chris = new vehicle("keonigessg", "agera-r",2014, "red");  

function myfunction() {
    document.getElementById("data").innerHTML="chris drive"+"<br>"+chris.vehicle_make+
 "<br>"+" type" +"<br>"+chris.vehicle_model+ "<br>"+"color"+"<br>"+chris.vehicle_color; 
 
}  


//Nested Functions 

function Nested_function () {
    document.getElementById("text").innerHTML=count(); 


function count(){   
    var starting_point =9; 
    function plus_1 () { 
        starting_point+=1; 
    } 
    plus_1(); 
    return starting_point;
} 

} 
