// if else statement
// let age = 20;
// if (age >= 21) {
//   console.log("You Can Marry");
// } else {
//   console.log("You Are not able to get marry");
// }

// Metrimonial Site (Nested If else)
let gender = "Male";
let age = 25;
let area = "Mohakhali";
let salary = 155000;

if (gender == "Male") {
  if (age <= 30 && age >= 21) {
    if (salary >= 100000 || area == "Dhaka") {
      console.log("Yes!!!! Candidate Matched");
    } else {
      console.log("we are looking for better");
    }
  } else {
    console.log("Age does not match our Requirement");
  }
} else {
  console.log("We are looking for 'Female' candidate");
}
