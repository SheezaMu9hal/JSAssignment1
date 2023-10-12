/*Practice exercise 2.1
What are the types of these variables listed below? Verify this with typeof and 
output the result to the console:
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;*/
console.log("  Output exercise 2.1");
let str1 = 'Laurence';
console.log("str1:",str1," DataType:", typeof str1);
let str2 = "Svekis";
console.log("str2:",str2," DataType:", typeof str2);
let val1 = undefined;
console.log("val1:",val1," DataType:", typeof val1);
let val2 = null;
console.log("val2:",val2," DataType:", typeof val2);
let myNum = 1000;
console.log("myNum:",myNum," DataType:", typeof myNum);

/*Practice exercise 2.2
Create a variable for your name, another one for your age, and another one for 
whether you can code JavaScript or not.
Log to the console the following sentence, where name, age and true/false are 
variables: 
Output:
Hello, my name is Sheeza, I am 19 years old and I can code JavaScript: true.*/
console.log("  Output exercise 2.2");
let name = 'Sheeza';
let age = 19;
let test = true;
console.log('Hello, my name is ${name}.I am ${age} years old and I can code JavaScript: ${test}');

/*Practice exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a2 + b2 = c2.
You can use prompt() to get the value for a and b. Write code to get the value from 
the user for a and b. Then square the values of both a and b before adding them 
together and finding the square root. Print your answer to the console.*/
console.log("  Output exercise 2.3");
var a1 = parseFloat(prompt("Enter the value of side 'a':"));

var b1 = parseFloat(prompt("Enter the value of side 'b':"));

    var a2 = a1 * a1;
    var b2 = b1 * b1;
    var c2 = a2 + b2;
    var c2 = Math.sqrt(c2);
    console.log("The hypotenuse 'c' is: ",c2);


/*Practice exercise 2.4
Create variables for three numbers: a, b, and c. Update these variables with the 
following actions using the assignment operators:
• Add b to a
• Divide a by c
• Replace the value of c with the modulus of c and b
• Print all three numbers to the console*/
console.log("  Output exercise 2.4");
var a = 12;
var b = 19;
var c = 20;

a += b;
a /= c;
c %= b;

console.log("The value of a: ", a);
console.log("The value of b: ", b);
console.log("The value of c: ", c);

//                              Chapter project
/*Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the 
value in kilometers in the following format: 
The distance of 130 kms is equal to 209.2142 miles
Define the value in miles*/

console.log("          Chapter project");
console.log("  Miles-to-kilometers converter");

let miles = 10;
let kilometers = miles * 1.60934;

console.log(`The distance of ${miles} miles is equal to ${kilometers} kilometers.`);

/*      BMI calculator
Set values for height in inches and weight in pounds, then convert the values to 
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
divided by squared height (in meters). Output the results to the console.*/
console.log("  BMI calculator");

let heightInInches = parseFloat(prompt("Enter the Height In 'inches':"));
let weightInPounds = parseFloat(prompt("Enter the Weight In 'Pounds':"));
const inchesToCentimeters = 2.54;
const poundsToKilos = 0.453592;

const heightInCentimeters = heightInInches * inchesToCentimeters;
const weightInKilos = weightInPounds * poundsToKilos;

console.log(`HeightInCentimeters: ${heightInCentimeters} inch`);
console.log(`WeightInKilos: ${weightInKilos} pounds`);

const heightInMeters = heightInCentimeters / 100; 
const bmi = weightInKilos / (heightInMeters * heightInMeters);

console.log(`Height in centimeters: ${heightInCentimeters} cm`);
console.log(`Weight in kilograms: ${weightInKilos} kg`);

console.log(`BMI: ${bmi}`);