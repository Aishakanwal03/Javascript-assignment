
// ***** CHAPTER # 5 *****

// Question 1
var a = 10
var b = 20
var c = a + b
document.write("The Sum of " + a + " and " + b + " is " + c + "<br>" )

// Question 2

var a = 10
var b = 20
var c = a - b
document.write("The Subtraction of " + a + " and " + b + " is " + c + "<br>" )

var a = 10
var b = 20
var c = a * b
document.write("The multiplication of " + a + " and " + b + " is " + c + "<br>" )

var a = 10
var b = 20
var c = a / b
document.write("The division of " + a + " and " + b + " is " + c + "<br>" )

var a = 10
var b = 20
var c = a % b
document.write("The modulus of " + a + " and " + b + " is " + c + "<br>" )

// Question 3

var i;
document.write("Value after variable declaration is " + i + "<br>")

i = 9
document.write("Initial value: " + i + "<br>")

i++
document.write("Value after increment is: " + i + "<br>")

i
g = 7
h = i + g
document.write("Value after addition is: " + h +  "<br>" )

h--
document.write("Value after decrement is: " + h + "<br>")

h
e = 3
f = h/e
document.write("The remainder is : " + f + "<br>")

// Question 4

var ticketPrice = 600
var numberOfTicket = 5
document.write("Total cost to buy " + numberOfTicket + " tickets to a movie is " + ticketPrice * numberOfTicket + " PKR" )

// Question 5

document.write("Table of 4<br>");

        for (let i = 1; i <= 10; i++) {
            document.write("4 x " + i + " = " + (4 * i) + "<br>");
        }

// Question 6

var tempInCelsius = 25
var C_to_F = (tempInCelsius *9/5) + 32 
document.write(tempInCelsius + "<sup>o</sup>C is " +C_to_F+ "<sup>o</sup>F <br>")

var tempInFahrenheit = 70
var  F_to_C= (tempInFahrenheit - 32)*5/9
document.write(tempInFahrenheit + "<sup>o</sup>F is " +F_to_C+ "<sup>o</sup>C <br>")

var item1Price = 700
var item2Price = 1500
var item1Quantity = 2
var item2Quantity = 1
var shippingCharges = 200

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + (shippingCharges)

document.write("Price of item 1 is " + item1Price + "<br> Quantity of item 1 is " + item1Quantity + "<br> Price of item 2 is " + item2Price +"<br> Quantity of item 2 is " + item2Quantity + "<br> Shippimng Charges " +shippingCharges+ "<br>")

document.write("<br>Total cost nof your order is " +totalCost+ "<br>")

// Question 8

var marksObtained = 804

var totalMarks = 980

var percentage = marksObtained * 100 / totalMarks 

document.write("Total Marks: "+ totalMarks +"<br>Marks Obtained: " + marksObtained+ "<br> Percentage "+ percentage)

// Question 9

var dollar = 10
var riyal = 25
var dollarRate = 104.80
var riyalRate = 28
total = (dollar * dollarRate) + (riyal * riyalRate)

document.write("<h1>Currency in PKR</h1> <br>Total Currency in PKR: " + total + "<br>")

// Question 10

var number = 10
number = (number + 5) *10 / 2
document.write(number)


// Question 11

var currentYear = 2020
var birthYear = 1996
document.write("<h1>Age Calculator</h1>")
document.write("Current Year: " +currentYear+ "<br>Birth Year: " +birthYear+ "<br>Your age is: " + (currentYear - birthYear))

// Question 12

var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * (radius * radius)
document.write("<h1>The Geometrizer:</h1>")
document.write("Radius of a Circle: "+radius+ "<br>")
document.write("Circumference of Circle: " + circumference+ "<br>")
document.write("Area of Circle is: " +area)

// Question `13

var snack = "Chocolate chip"
var currentAge = 15
var maxAge = 65
var snackPerDay = 3
var needsnack = (maxAge - currentAge) * snackPerDay
document.write("<h1>The Lifetime Supply Calculator:</h1>")
document.write("Favourite Snack: "+ snack+"<br>")
document.write("Current age: " +currentAge+ "<br>")
document.write("Estimated Maximum Age: " + maxAge+ "<br>")
document.write("Amount of snacks per day: "+snackPerDay+ "<br>")
document.write("You will need " + needsnack + " " + snack + "to last you untill the ripe old age of " +maxAge)