function My_dictionary() {
    var animal = {
        species :"Dog", 
        color: "black", 
        breed:"labrador", 
        age:5, 
        sound:"Bark !"

    }; 
    delete animal.sound; 
    document.getElementById("dictionary").innerHTML=animal.sound;
}