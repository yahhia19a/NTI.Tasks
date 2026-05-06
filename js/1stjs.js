
/*
let kg = prompt("ENTER Weigth in kg:");
let m = prompt("ENTER Height in Meters");
 let BMI = kg / (m **2);
 console.log(BMI);
 let result;
 if(BMI<18.5){
    console.log("Under Weigth")}
 else if(BMI>=18.5 && BMI<=24.9999){
    result="NORMAL Weight"
 }
 else if(BMI>=25.0 && BMI<=29.9999){
    result="OVER Weight"
 }  
else if(BMI>=30.0 && BMI<=34.9999){
    result="Obesity Class I"
}
else if(BMI>=35.0 && BMI<=39.9999){
   result="Obesity Class II"
}
else{result="Obesity Class III"}
console.log(result)*/

let year = prompt("Enter Birth Year")
let equ = year % 12
console.log(equ)
let result
switch (equ) {
    case (0): result = "Tiger"; break;
    case (1): result = "Pig"; break;
    case (2): result = "Mouse"; break;
    case (3): result = "Cow"; break;
    case (4): result = "Snake"; break;
    case (5): result = "Parrot"; break;
    case (6): result = "Turtle"; break;
    case (7): result = "Bird"; break;
    case (8): result = "Baba"; break;
    case (9): result = "Bato"; break;
    case (10): result = "Ti"; break;
    case (11): result = "Tigiriii"; break;

}

console.log(result)