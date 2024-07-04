
/* This will show an example of how to use an array 
  by Carl Mesias

  .unshift will insert elements to the beginning of the array
  .slice does not modify the original array
  .splice will modify the original array
  .unshift will add an array to the beginning of the array
  .push will add an array to the end of the array


*/

// Welcome message
console.log('Grocery List by Carl Mesias');

// Create array for a greocery list
const groceries = ["Milk", "Eggs", "Rice", "Bread", "Chicken"];

// Print array
console.log(groceries);

// Remove index 2 only
groceries.splice(2, 1);

// Print array
console.log(groceries);

// Remove "Bread", and insert "Biscuits" at the same index
let indexOfBread = groceries.indexOf("Bread");              // get index of "Bread"
groceries.splice(indexOfBread, 1, "Biscuits");              // remove "Bread" by index and insert "Biscuits"

// Print array
console.log(groceries);

// Insert "Butter" and "Flour" to beginning of array
groceries.unshift("Butter", "Flour");

// Print array
console.log(groceries);

// Remove the first element
groceries.shift();

// Print array
console.log(groceries);

// Remove the last element
groceries.pop();

// Print array
console.log(groceries);

// Add "Bananas" to the end of the array
groceries.push("Bananas");

// Print array
console.log(groceries);

// Print out from "Eggs" to the end of the array into the console
let indexOfEggs = groceries.indexOf("Eggs");                // get index of "Eggs"
console.log(groceries.slice(indexOfEggs));                  // use slice to get a shallow copy of a portion of the array from "Rice" to the end of the array

// Print the whole array
console.log(groceries);
