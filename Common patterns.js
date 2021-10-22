//Create hashmap
let hashMap = {};
let arr = s.split(""); //Convert string to array
arr.forEach((c) => (hashMap[c] = (hashMap[c] || 0) + 1));

//Sort hashmap
var keys = Object.keys(hashMap);
keys.sort((a, b) => {
    return hashMap[b] - hashMap[a];
});

//Arrays////////////////////////////////////////////////////////////////
//convert array to string
let resStr = result.join("");

// Check if an array includes a certain value among its enties
str.includes(val);
// Returns the position of the value, or -1 if not found.
str.indexOf(val);
// Removes whitespace from beginning and end. Useful for input fields or data cleaning.
str.trim();
// returns the part of the string between the start and end indexes:
str.substring(startIndex, endIndex);
// Adds to end of an array.
arr.push(val);
// Removes last value of an array and returns it.
arr.pop();
// Copies an array.
arr.slice();
// Makes a copy of an array at some start index (inclusive) and end index (exclusive).
arr.slice(startIndex, endIndex);
// Removes the first item of the array and returns the array.
arr.shift();
// Adds a value as the first item of the array and returns the new length. shift and unshift are useful for Queues.
arr.unshift(val);
// Useful for reducing all the values in an array to a single value. 
arr.reduce(function, initialValue)
// Removing an Item from an Array
arr.splice(arr.indexOf(val), 1);

//Objects////////////////////////////////////////////////////////////////////////////////
// Returns an array with a list of the keys as strings.
Object.keys(obj);
// Returns an array with a list of the values as strings.
Object.values(obj);

//Sets////////////////////////////////////////////////////////////////
// They are basically unordered arrays, and cannot store duplicate values.
//Declare a new set 
let set = new Set(array);
let set = new Set();

//remove duplicates from the array
uniq = [...new Set(array)];

//check the size of the Set
set.size
//add val to the set
set.add(val);
//remove val from the set
set.delete(val);
//check if set has certain val
set.has(val);