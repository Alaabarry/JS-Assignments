function My_fun() { //creating function named myfun

    var str ="JavaScript make websites more dynamic and aesthetic";  //assign variable to string value
    str +="untyped and scripting langauge";  // assign another value to variable
    var result =str.fontcolor("gray"); //using font color method on variable str
    document.getElementById("text").innerHTML= result.fontsize(6); // using function fontsize on variable str and print it inside paragraph assigned with id text

} 
;

