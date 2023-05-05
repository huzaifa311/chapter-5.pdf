//                                      MATH EXPRESSION

/*Question no 01: Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

/*Question no 02: Repeat task1 for subtraction, multiplication, division & modulus. */
var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modulus = num1 % num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br />");
document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br />");
document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br />");
document.write("Quotient of " + num1 + " and " + num2 + " is " + quotient + "<br />");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

/*Question no 03: Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value after decrement is: 12”.
k. Show the remainder after dividing the variable’s value by 3.
l. Output : “The remainder is : 0”.*/
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is : " + remainder + "<br>");

/*Question no 04: Cost of one movie ticket is 600 PKR. Write a script to store
ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:*/
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost to buy 5 movie tickets is: " + totalCost + " PKR");

/*Question no 05: Write a script to display multiplication table of any number in your browser. E.g*/
var num = prompt("Enter a number to display its multiplication table:");
document.write("<h2>Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + (num*i) + "<br>");
}

/*Question no 06: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.
Conversion Formulae:*/
var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br />");
var fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C" + "<br />");

/*Question no 07: Write a program to implement checkout process of a shopping cart system for an e-commerce 
website.Store the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/
var item1Price = 500;
var item2Price = 1000;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 200;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("<h2>Shopping Cart Receipt</h2>");
document.write("<p>Price of Item 1: " + item1Price + "</p>");
document.write("<p>Quantity of Item 1: " + item1Quantity + "</p>");
document.write("<p>Price of Item 2: " + item2Price + "</p>");
document.write("<p>Quantity of Item 2: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<p><b>Total Cost of Your Order: " + totalCost + "</b></p>");

/*Question no 08: Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in your browser*/
var totalMarks = 500;
var obtainedMarks = 350;
document.write("<h2> Mark Sheet </h2>");
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");

/*Question no 09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/
var totalCurrency = (10 * 104.80) + (25 * 28);
document.write("<h2>Currency in PKR</h2>" +"Total currency in PKR: " + totalCurrency);

/*Question no 10: Write a program to initialize a variable with some number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/
var num = +prompt("add a number");
var result = ((num + 5) * 10) / 2;
console.log(result);

/*Question no 11: The Age Calculator: Forgot how old someone is? Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN years old”.*/
var currentYear = new Date().getFullYear();
var birthYear = prompt("Birth Year?");
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("Current Year: " + currentYear + "<br />");
document.write("Birth Year: " + birthYear + "<br />");
document.write("You are either " + age1 + " or " + age2 + " years old.");

/*Question no 12: The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
let radius = prompt("Enter the radius of the circle:");
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius ** 2;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
document.write("The area is: " + area.toFixed(2));

/*Question no 13: The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is? Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of your life.
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.*/
let favoriteSnack = "chocolate chip";
let currentAge = 15;
let maximumAge = 65;
let amountPerDay = 3;
let yearsRemaining = maximumAge - currentAge;
let daysRemaining = yearsRemaining * 365;
let totalSnacks = daysRemaining * amountPerDay;
document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write(`Favorite Snack: ${favoriteSnack}` + "<br />");
document.write(`Current age: ${currentAge}` + "<br />");
document.write(`Estimated Maximum Age: ${maximumAge}` + "<br />");
document.write(`Amount of snacks per day: ${amountPerDay}` + "<br />");
document.write(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`);


