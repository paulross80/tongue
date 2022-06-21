
// String length is a property
// (NOT a function!)
let my_str = "Hello World!";
let length = str.length;

// slice(start, end)
// Extracts part of a string, from start to end - 1
// If any parameter is negative, it is counted from the end
// Returns a new string
let hello = my_str.slice(0, 5);
// From start to end
let world = my_str.slice(6);

// substring(start, end)
// Same as slice
// If values are negative, they are treated as 0
let hello2 = my_str.substring(-1, 5);

// substr(start, length)
// Same as slice
// But the second parameter specifies a length
// If the first parameter is negative, it counts from the end
let hello3 = my_str.substr(0, 5);
let world2 = my_str.substr(-6, 5);


// replace()
// Returns a new string
// Finds and replaces the first match only
let everybody = my_str.replace("World", "Everybody");

// concat()
// Joins two or more strings
let hello_world = hello.concat(" ", world);

// Upper/lower case
let uc_HELLO = hello.toUpperCase(); // "HELLO"
let lc_world = world.toLowerCase(); // "world!"
