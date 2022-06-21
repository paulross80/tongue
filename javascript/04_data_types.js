// Variable types in javascript are dynamic
let v;              // v is undefined
v = 'Hello World!'; // v is String now
v = 120;            // v is Number now

// Numbers can have decimals
let x = 14;
let y = 2.05;

// Booleans can be true or false
let b = true;
let equals = (x == y);  // false

// Arrays are usually declared const
// Their indexes are zero-based
const items = ["First", "Second", "Third"];


// Javascript Objects are like dictionaries in Python
// (key:value pairs)
const animation = {texture: "sprite.png", num_frames: 10,
                   first_frame: 0, repeat: true};

// Access object properties:
let tex = animation.texture;
let frames = animation["num_frames"];

// Objects can also have functions/methods
const obj = {
    first: "First",
    second: "Second",
    everything: function() {
        return this.first + " " + this.second;
    }
};

// Call the function/method
let all = obj.everything();


// The typeof operator
typeof "";          // string
typeof "Hi";        // string
typeof 0;           // number
typeof 1.2;         // number


// Undefined
// Variables without value have the value undefined
// Their type is also undefined
let undef;
typeof undef;       // undefined

// Variables can be emptied by setting their value to undefined
// Their type is also undefined
v = undefined;
