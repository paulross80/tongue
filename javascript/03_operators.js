
// The = operator assigns a value to a variable
let x = 2;

// Assignment operators
x += 5;
x -= 1;
y *= 2;
y /= 2;
power **= 2;

// Prefix/postfix increment/decrement
x++;
--y;


// Addition
let y = x + 5;
let z = x + y;

// Multiplication
let w = x * y;

// Division
let q = y / x;

// Exponentiation
let power = x ** 2;
// Same as
let power2 = Math.pow(x, 2);

// Modulus (Division Remainder)
let modulus = y % x;


// The + operator can also be used to concatenate strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1 + " " + text2;

// Concatenate strings and numbers
let ten = "Ten = " + 10;


/*
Comparison operators:
  ==  equal to
  === equal value AND equal type
  !=  not equal
  !== not equal value OR not equal type
  >   greater than
  <   less than
  >=  greater than or equal to
  <=  less than or equal to
  ?   ternary operator
*/

/*
Logical operators:
  &&  logical AND
  ||  logical OR
  !   logical NOT
*/

/*
Type operators:
  typeof      returns the type of a variable
  instanceof  returns true if an object is instance of an object type
*/

/*
Bitwise operators:
Any numeric operand is converted to a 32 bit number
The result is converted back to a JavaScript number

  &   AND
  |   OR
  ~   NOT
  ^   XOR
  <<  left shift
  >>  right shift
  >>> unsigned right shift
*/
let one = 5 & 1;
let five = 5 | 1;
