
// Comments in Kotlin are very similar to C/C++
// Single line comments

/*
Multi
line
comments!
*/

/*
Variables:
---------

val = constant
var = mutable
var count: Int = 10
*/

/*
Data types:
----------
https://kotlinlang.org/docs/basic-types.html

Byte, Short, Int, Long
UByte, UShort, UInt, ULong
Float, Double
Char, String
Boolean

All number types support conversions to other types:
toByte()
toShort()
toInt()
toLong()
toFloat()
toDouble()
toChar()
*/

/*
Strings:
-------

Strings are immutable. Once you initialize a string, you can't change its
value or assign a new value to it. All operations that transform strings
return their results in a new String object
*/
val str = "abcd"
println(str.uppercase())


/*
A raw string is delimited by a triple quote (""")
*/
val text = """
    for (c in "foo")
        print(c)
"""

/*
Arrays:
------

Can be defined as a C++ template class: Array<T>
There are predefined array types: ByteArray, ShortArray, IntArray, etc
There are factory methods to create arrays
*/
val myInts1: IntArray = intArrayOf(1, 2, 3)
val myInts2: IntArray(5)




// Main function
fun main() {
  println("Hello World!")
}
