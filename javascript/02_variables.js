
/*
Variable names:
- can contain letters, digits, underscores, and dollar signs
- must begin with a letter, or can also begin with $ and _
- names are case sensitive
*/

// Compatible with old browsers
var x = 5;

/*
Variables defined with the let keyword:
- cannot be redeclared
- must be declared before use
- have block scope
*/
let y = 14;

{
    // w cannot be used outside this code block
    let w = 120;
}


// Strings can be written inside double or single quotes
let name = 'Paul';
let surname = "Ross";

// Variables can be declared and initialized in one line
let one = 'One', two = 'Two';


// NOTE:
// If you put a number in quotes, the rest of the numbers will be
// treated as strings, and everything will be concatenated
let my_str = 10 * 2 + "5";
// Result: "205"


// This is a constant (reference to a constant value)
// The value itself will never change
// It's value must be assigned in the declaration
const PLAYER_MOVE_SPEED = 25.3

// const follows the same block rules as let
