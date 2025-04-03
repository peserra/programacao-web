"use strict";
/**
 * Function with return type inference.
 *
 * @param n the number
 * @returns the square
 */
function squareOf(n) {
    return n * n;
}
/**
 * Function with explicit return type.
 *
 * @param n the number
 * @returns the square
 */
function squareOf2(n) {
    return n * n;
}
console.log(squareOf(10));
console.log(squareOf2(10));
/**
 * Functions are first-class citizens, so an anonymous
 * function can be stored in a variable.
 *
 * @param n the number
 * @returns the square
 */
const square3 = function (n) {
    return n * n;
};
/**
 * Lambdas can act as concise syntax for functions.
 *
 * @param n the number
 * @returns the square
 */
const square4 = (n) => n * n;
/**
 * Every function has a function-type, that can be infered
 * or explicitly declared. If explicit, the function-type must match
 * the function-value
 * @param x the first number
 * @param y the second number
 * @returns the sum
 */
let add;
const sum = (a, b) => a + b;
const concat = (a, b) => a + b;
add = sum; // success
// add = concat // error 
console.log(add(10, 20));
/**
 * Parameters can be optional if the corresponding variable
 * is nullable.
 *
 * @param x the first number
 * @param y the second number
 * @param z the third number
 */
const add2 = function (x, y, z) {
    return x + y + (z ? z : 0);
};
console.log(add2(10, 20));
console.log(add2(10, 20, 30));
/**
 * An optional parameter can have a default value.
 *
 * @param x the first number
 * @param y the second number
 * @param z the third number
 * @returns the sum
 */
const add3 = function (x, y, z = 0) {
    return x + y + z;
};
const add4 = function (x, y, ...otherNumbers) {
    function sum(array) {
        let s = 0;
        for (const n of array) {
            s += n;
        }
        return s;
    }
    return x + y + sum(otherNumbers);
};
console.log(add4(10, 20, 30, 40, 1, 2, 3, 4));
