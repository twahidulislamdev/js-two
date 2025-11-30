// if else statement
// let age = 20;
// if (age >= 21) {
//   console.log("You Can Marry");
// }
// else {
//   console.log("You Are not able to get marry");
// }

// Metrimonial Site (Nested If else)
// let gender = "Male";
// let age = 25 ;
// let area = "Mohakhali";
// let salary = 155000;

// if (gender == "Male") {
//   if (age  <= 30 && age >= 21 ) {
//     if(salary >= 100000 || area == "Dhaka" ){
//       console.log("Yes!!!! Candidate Matched");
//     }
//     else{
//       console.log("we are looking for better");
//     }
//   }
//   else{
//     console.log("Age does not match our Requirement");
//   }
// }
// else {
//   console.log("We are looking for 'Female' candidate");
// }

// Login Form (Nested If else)
// let email = "twahid746@gmail.com";
// let password = 27985;
// let name = "Twahidul Islam";
// let birth = "7 july 2005"

// if (email == "twahid746@gmail.com") {
//   if (password == 27985) {
//     if(name == "Twahidul Islam"){
//       if (birth == "7 july 2003") {
//         console.log("Login SuccessFull");
//       }
//       else{
//         console.log("You Did Some Thing wrong!!! login Failled!!!");
//       }
//     }
//     else{
//       console.log("You Did Some Thing wrong!!!");

//     }
//   }
//   else{
//     console.log("You Did Some Thing wrong!!!");

//   }
// }
// else{
//   console.log("Email Did not match in our record");
//   // console.log("You Did Some Thing wrong!!!");

// }

// let gender = "Female"
// let age = 25;
// let salary = 60000;
// if(gender == "Female"){
//   console.log("Gender Matched");
// }
// else if (age >= 21 && age <= 30){
//   console.log("Age Matched");
// }
// else if(salary >= 50000 ){
//   console.log("Salary Matched")
// }
// else{
//   console.log("You did some thing Wrong. Fill the correct information.");

// }

// let gender = "Male"
// let age = 25;
// let salary = 70000;
// if (gender == "Male") {
//   console.log("Gender Matched");

// }
// else{
//   console.log("You did some thing Wrong. Fill the correct information.");

// }
// if (age >= 21 && age <= 30) {
//   console.log("Age Matched");

// }
// else{
//   console.log("You did some thing Wrong. Fill the correct information.");

// }
// if (salary >=50000) {
//   console.log("Salary Matched");

// }
// else{
//   console.log("You did some thing Wrong. Fill the correct information.");

// }

// Reauslt sheet (else if Statement)
let marks = 25;
if (marks < 0 || marks > 100) {
  console.log("Invalid Value Entry");
} else if (marks >= 33 && marks < 40) {
  console.log("You Got D");
} else if (marks >= 40 && marks < 50) {
  console.log("You Got C");
} else if (marks >= 50 && marks < 60) {
  console.log("You Got B");
} else if (marks >= 60 && marks < 70) {
  console.log("You Got A-");
} else if (marks >= 70 && marks < 80) {
  console.log("You Got A");
} else if (marks >= 80 && marks <= 100) {
  console.log("You Got A+");
} else {
  console.log("You are Failled");
}
