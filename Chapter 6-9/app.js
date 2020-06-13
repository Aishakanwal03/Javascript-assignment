
// ***** CHAPTER # 6-9 *****

// Question 1

var a = 10

document.write("Result:<br>The value of a is: "+ a + "<br>...................................<br>")
document.write("<br>The value of ++a is: "+ ++a + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>The value of a++ is: "+ a++ + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>The value of --a is: "+ --a + "<br>")
document.write("Now the value of a is: " + a + "<br>")
document.write("<br>The value of a-- is: "+ a-- + "<br>")
document.write("Now the value of a is: " + a + "<br>")


// Question 2

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
document.write("a is: " + a + "<br>")
document.write("b is: " + b + "<br>")
document.write("result is: " + result + "<br>")

// Question 3

var user = prompt("Enter your name: ", "User")
document.write("Welcome " + user + "<br>" )


// Question 4

// question not found

// Question 5

var number = parseInt(prompt("Enter number: " , "5"))
for (i = 1 ; i <= 10 ; i++ ) {
    document.write(number + " x " +i+ " = " + (number*i) + "<br>");
}

// Question 6

var sub1 = prompt("Enter First subject name: ", "Subject 1")
var sub2 = prompt("Enter Second subject name: ", "Subject 2")
var sub3 = prompt("Enter Third subject name: ", "Subject 3")

var marks1 = parseInt(prompt("Enter obtained marks of " +sub1  , "33"))
var marks2 = parseInt(prompt("Enter obtained marks of "+sub2  , "33"))
var marks3 = parseInt(prompt("Enter obtained marks of "+sub3  , "33"))

totalMarks = 100

var percentage = Math.round((marks1 + marks2 + marks3) * 100/(100*3))

document.write("<table>")

    document.write("<tr>")
    document.write("<th>Subject</th>")
    document.write ("<th>Total Marks</th>")
    document.write("<th>Obtained Marks</th>")
    document.write("<th>Percentage</th>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>"+sub1+"</td>")
    document.write("<td>"+totalMarks+"</td>")
    document.write("<td>"+marks1+"</td>")
    document.write("<td>"+((marks1*100)/totalMarks)+"%</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>"+sub2+"</td>")
    document.write("<td>"+totalMarks+"</td>")
    document.write("<td>"+marks2+"</td>")
    document.write("<td>"+((marks2*100)/totalMarks)+"%</td>")
    document.write("</tr>")

    document.write("<tr>")
    document.write("<td>"+sub3+"</td>")
    document.write("<td>"+totalMarks+"</td>")
    document.write("<td>"+marks3+"</td>")
    document.write("<td>"+((marks3*100)/totalMarks)+"%</td>")
    document.write("</tr>")
    document.write("<tr>")

    document.write("<th></th>" )
    document.write("<th>"+totalMarks*3+"</th>")
    document.write("<th>"+(marks1 + marks2 + marks3)+"</th>")
    document.write("<th>"+percentage+"%</th>")
    document.write("</tr>")

    document.write("</table>")
