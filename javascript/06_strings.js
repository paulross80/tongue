
// String length is a property
// (NOT a function!)
let my_str = "Hello World!";
let length = str.length;


// String methods:
// --------------

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

// trim()
// Removes whitespace from both sides of a string
let trim_text = "         Hello World!  ".trim();


// Add padding to text
// First parameter is the final text length
// Second parameter is the padding character to insert
let five = "5";
// Add padding to the start
let five_left_pad = five.padStart(4, "0");   // "0005"
// Add padding to the end
let five_right_pad = five.padEnd(4, "0");    // "5000"


// String split
// Returns an array of splitted strings
// Parameter: character used as delimiter
// If the parameter is empty, it returns an array of characters
let CSV = "18,24,72,114,1084";
const CSV_array = CSV.split(",");
let first_value = CSV_array[0];     // "18"


// Upper/lower case
let uc_HELLO = hello.toUpperCase(); // "HELLO"
let lc_world = world.toLowerCase(); // "world!"


/*
Extracting characters from strings:
 - charAt(position)
 - charCodeAt(position)
 - operator[]
*/

let STRING = 'This is a string';
let first_char = STRING.charAt(0);  // "T"

// Unfortunately charCodeAt returns a UTF-16 code -.-
let first_char_code = STRING.charCodeAt(0); // 84

let direct_access = STRING[1];  // "h"


// String search methods:
// indexOf: returns the index to the first occurrence
// of a text in a string, or -1 if not found
let awesome_text = "This text is absolutely perfect. Yes, absolutely!";
let absolutely1 = awesome_text.indexOf("absolutely");       // 13

// lastIndexOf: returns the last occurrence of text in a string,
// or -1 if not found
let absolutely2 = awesome_text.lastIndexOf("absolutely");   // 38

// Both methods accept a second parameter
// as the starting position for the search
// This will return the last occurrence of "absolutely"
let absolutely3 = awesome_text.indexOf("absolutely", 36);

// search()
// Similar to indexOf, but:
//  - cannot take a second parameter to specify starting position
//  - can process regular expressions
let perfect = awesome_text.search("perfect");               // 24

// match()
// Searches a string for a match against a regular expression,
// and returns the matches as an array object
// Returns null if no match is found
const match_array = awesome_text.match(/is/g);      // ["is", "is"]

// includes()
// Returns true if string includes a specified text
// Can take a starting position as the second argument
let includes_yes = awesome_text.includes("Yes");            // true

// startsWith()
// Returns true if string starts with a specified text
// Can take a starting position as the second argument
let starts_with_this = awesome_text.startsWith("This");     // true

// endsWith()
// Returns true if string ends with a specified text
// Can take a starting position as the second argument
let ends_with_wrong = awesome_text.endsWith("wrong");       // false


// String templates:
// ----------------

// Template literals use back-ticks (`) to define strings
// With template literals, you can use both single and double
// quotes inside a string. They also allows multiline strings
let templ1 = `This is my string`;
let templ2 =
`
Really
long
string
!
`;

// Formatting (or "string interpolation")
{
    let name = 'Ana';
    let half_age = 15;
    let text = `${name} is ${age * 2} years old`;
}
