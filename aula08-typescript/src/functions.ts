
/**
 * Untyped parameters are inferred as any (error in strict mode).
 */
// function add(a, b) {
//     return a + b
// }

/**
 * Function with return type inference.
 * 
 * @param n the number
 * @returns the square
 */
function squareOf(n: number) {
    return n * n; // inferred as number
    // return n * n + ""; // inferred as string
}

/**
 * Function with explicit return type.
 * 
 * @param n the number
 * @returns the square
 */
function squareOf2(n: number): number {
    return n * n
}

console.log(squareOf(10));
console.log(squareOf2(10));

/**
 * Every function has a function-type, that can be infered
 * or explicitly declared. If explicit, the function-type must match 
 * the function-value
 * @param x the first number
 * @param y the second number
 * @returns the sum
 */
let add: (a: number, b: number) => number

const sum = (a: number, b: number) => a + b
const concat = (a: string, b: string) => a + b

add = sum // success
// add = concat // error 
console.log(add(10, 20))

/**
 * Type alias for a function-type
 */
type Add = (a: number, b: number) => number

let addx: Add
addx = sum // success
// addx = concat // error

// equivalent to full explicit typing (verbose)
let addy: (a: number, b: number) => number = (a: number, b: number): number => a + b;

console.log(addy(10, 20));

/**
 * Parameters can be optional if the corresponding variable 
 * is undefined.
 * This is not overloading
 * 
 * @param x the first number
 * @param y the second number
 * @param z the third number
 */
const add2 = function (x: number, y: number, z?: number): number {
    console.log(z);
    return x + y + (z ? z : 0)
}

console.log(add2(10, 20))
console.log(add2(10, 20, 30))

/**
 * An optional parameter can have a default value. 
 * 
 * @param x the first number
 * @param y the second number
 * @param z the third number
 * @returns the sum
 */
const add3 = function (x: number, y: number, z: number = 0): number {
    return x + y + z
}

/**
 * Function overloading
 * Define a series of overloaded signatures and a single implementation signature.
 */
// Overload signatures
function add4(a: number, b: number): number;
function add4(a: string, b: string): string;
function add4(a: number, b: string): string;
function add4(a: string, b: number): string;

// Implementation signature
function add4(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return String(a) + String(b);
  }
}
