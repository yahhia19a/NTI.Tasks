
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
console.log(result)
*/

/*let year = prompt("Enter Birth Year")
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
*/


/*let user= {
   name:"yahia",
   age=20,
   showData:function(){
      console.log(this)
   }
};

let users= {
   showData:function(){
      console.log(this)
   },
   printMe:() => {
      console.log(this) //global window

   }
};
user.showData()
user.printMe()

const z =(a,b) => a+b
console.log(y(5,3))

*/

/*const add=function(v){
let res=0
for(let i=0; i<v.length; i++){
   res+=v[i]
}
return res
}



 let count= +prompt("Enter count of numbers to be added:"), val=[];
 for(let i=0;i<count;i++){
   val.push(+prompt("Enter number:"))
 }


 console.log(add(val))
*/

/*let d =document.getElementById("data")

let btn= document.getElementById("showhide")

btn.addEventListener("click" ,function(){
d.classList.toggle("d-none")

if( btn.textContent=="show"){

   btn.textContent="hide"
   btn.className="btn btn-danger"
}
else{
   btn.textContent="show"
   btn.className="btn btn-success"
}
})

let x = document.querySelector("div.toto")
*/

let headers = document.querySelectorAll(".header");
    let contents = document.querySelectorAll(".content");

    headers.forEach((h, i) => {

      h.addEventListener("click", function () {

        // check if current content is already open
        let isOpen = !contents[i].classList.contains("d-none");

        // close all
        contents.forEach((c) => c.classList.add("d-none"));

        // if it was closed before, open it
        if (!isOpen) {
          contents[i].classList.remove("d-none");
        }

      });

    });