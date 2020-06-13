// // ***** CHAPTER # 9-11 *****
// document.write("<h1>***Question 1***</h1>")


// var city = prompt("Enter City name: ", "Karachi")
// city1 = city.toLowerCase()
// if (city1 === "karachi"){
// document.write("Welcome to the city of lights")
// }

// document.write("<h1>***Question 2***</h1>")

// var gender = prompt("Enter your Gender:" , "Male/Female")
// gender = gender.toLowerCase()
// if (gender == "male"){
//     document.write("Good Morning Sir!")
// }else if (gender == "female"){
//     document.write("Good Morning Ma'am!")
// }else {
//     document.write("Good Morning!")
// }

// document.write("<h1>***Question 3***</h1>")

// var color = prompt("Enter color: ", "red")
// color = color.toLowerCase()
// if (color == "red"){
//     document.write("Must Stop")
// }else if (color == "Yellow"){
//     document.write("Ready to move")
// }else if (color == "green"){
//     document.write("Move Now")
// }else {
//     document.write("Please enter color like Red,Yelleo and Green")
// }

// document.write("<h1>***Question 4***</h1>")

// var remainingfule =prompt("Enter current fule","0.25liters")
// if (remainingfule <= "0.25liters"){
//     document.write("Please refill the fule in  your car")
// }

// document.write("<h1>***Question 5***</h1>")

// var a = 4
// if (++a === 5){
//      alert("given condition for variable a is true")
//     } 
// var b = 82
//  if (b++ === 83){
//      alert("given condition for variable b is true")
//  } 
 
// var c = 12
// if (c++ === 13){ 
//     alert("condition 1 is true") 
// } if (c === 13){ 
//     alert("condition 2 is true")
// } if (++c < 14){ 
//     alert("condition 3 is true")
//  } if(c === 14){
//     alert("condition 4 is true") 
//     } 
     
// var materialCost = 20000
// var laborCost = 2000;
// var totalCost = materialCost + laborCost
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals") 
// } 
     
// if (true){
//     alert("True")
// } if (false){
//      alert ("false")
//     } 
// if("car" < "cat"){
//     alert("car is smaller than cat") 
// } 

// document.write("<h1>***Question 6***</h1>")

// var total =parseInt( prompt("Enter total marks of all three subjects"))
// var marks1 =parseInt( prompt("Enter obtained marks of subject1: " ))
// var marks2 =parseInt( prompt("Enter obtained marks of subject2: " ))
// var marks3 =parseInt( prompt("Enter obtained marks of subject3: "))
// var parcentage = (marks1 + marks2 + marks3) * 100 / total
// document.write("Total marks: " +total + "<br>")
// document.write("Marks obtained: " + (marks1 + marks2 + marks3) + "<br>")
// document.write("percentage:" + parcentage + "<br>")
// if (parcentage >= 80){
//     document.write("Grade: A-one <br> Remarks:Excellent")
// }else if (parcentage >= 70){
//     document.write("Grade: A <br> Remarks:Good")
// }else if (parcentage >= 60){
//     document.write("Grade: B <br> Remarks:You need to improve")
// }else{
//     document.write("Grade: Faile <br> Remarks:Sorry")
// }

document.write("<h1>***Question 7***</h1>")

var secrectnumber = 4
var guessnumber = parseInt( prompt("Guess the secrect number from 1 to 10"))
if (secrectnumber === guessnumber){
    document.write("Bingo!Correct answer")
}else if (guessnumber == secrectnumber+1  ||guessnumber == secrectnumber-1){
    document.write("Close enough to the correct answer")
}else {
    document.write("Better Luck next time")
}

document.write("<h1>***Question 8***</h1>")
document.write("<h1>***Question 9***</h1>")
document.write("<h1>***Question 10***</h1>")

var tempreture = parseInt(prompt("Enter today's tempreture"))
if (tempreture > 40){
    document.write("It is too hot outside.")
}else if (tempreture > 30){
    document.write("The Weather today is Normal.")
}else if (tempreture > 20){
    document.write("Today’s Weather is cool.")
}else if (tempreture > 10){
    document.write("OMG! Today’s weather is so Cool.")
}

document.write("<h1>***Question 11***</h1>")

var firstnumber = parseInt(prompt("Enter first number"))
var secondnumber =parseInt(prompt("Enter second number"))