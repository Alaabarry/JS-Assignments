// main program , while loop example

x =1;  
join_result ="";

function get_result() {
 while (x < 11) { 
    join_result +="<br>"+ x; 
    x++;
 }  
 document.getElementById("result").innerHTML= join_result;

} 
// for loop example 
var students = ["alaa","chris","tommy","hamza"]; 
var student_name =""; 
var i; 
function get_student() {
    for(i=0; i < students.length; i++){
        student_name +="student name :"+ students[i]+"<br>";
    } 
    document.getElementById("text"). innerHTML=student_name;
}
// string length attribute 
var person_name ="Alaa barry"; 
var person_name_length =person_name.length; 
document.getElementById("string_length"). innerHTML= person_name_length;

//  create a array  
function get_list() {
    var rich_people=[]; 
    rich_people[0]="Elon mask"; 
    rich_people[1]="bill gates"; 
    rich_people[2]="jeff Bezos"; 
    document.getElementById("people").innerHTML="The richest people on earth are :"+"<br>"+ rich_people[0] +"<br>"+ rich_people[1] +"<br>"+ rich_people[2] ;
} 

// create an object with const 
function search_instrument() { 
    const instruments={type:"Piano", model:"The Spinet", color:"blue",year:"1960"}; 
    instruments.color="black"; 
    instruments.model="The Console";  
    instruments.price="5000$";
    document.getElementById("instruments").innerHTML="Instrument Type :"+ instruments.type +" &nbsp;"+
    instruments.model+" &nbsp;"+instruments.color+"&nbsp;"+instruments.year +"&nbsp;"+instruments.price;

} 
// create an object 
let car= {
    make:"dodge", 
    model:"viper", 
    year:"2020", 
    color:"black", 
    description:function(){
        return "the car is"+"&nbsp;"+this.make+"&nbsp;" +this.model+"&nbsp;" +this.year+"&nbsp;"+this.color;
    }

}; 
document.getElementById("cars").innerHTML=car.description();