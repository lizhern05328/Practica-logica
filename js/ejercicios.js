// User profile 
let username = "Jack2";
let age = 23;
let movies = ["Aladin", "La Monja", "Toy Story"];

console.log("Su username es: ", username)
console.log("Su edad es: ", age)

let peli = 0;

while (peli < movies.length){
    console.log("The film", movies[peli], "is one of my favorites'.")
    peli++;
}

// Highest number

function numMay(numbers){
    var al = numbers.length;
    maximum = numbers[al-1];
    while (al--){
        if(numbers[al] > maximum){
            maximum = numbers[al]
        }
    }
            return maximum;
};
var numbers = [1, 5, 6, 2, 3, 9, 12, 8, 14, 22];
var resul = numMay(numbers);
console.log("El numero mayor del arreglo: ", numbers, "es: ", resul);

//Alarm

var time = prompt("'--- Set alarm for to bed ---'", "");

setTimeout(getUser, time);

function getUser() {
    console.log(`Time for bed after up ${time * .0010} seconds`);
} 

// Palindrome

let cad = prompt("escriba la palabra: ");
function invertirCadena(cad) {
   
    var nuevaCadena = "";
 
    for (var i = cad.length - 1; i >= 0; i--) { 
        nuevaCadena += cad[i]; 
    }

    return nuevaCadena; 
}
 
let newWord = invertirCadena(cad);

if (cad === newWord){
    console.log("si es");
}
else{
    console.log("no es", newWord);
}

//





