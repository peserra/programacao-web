/**
 * Tuples are arrays with fixed number of elements and types
 * Require explicit typing
 */

let v1: [number, string, boolean] = [1, 'hello', true];

v1 = [2, 'world', false];
// v1 = [3, '!', true, 1]; // Error

const v2: [number, string] = [1, 'hello'];
const v3: [boolean, number] = [true, 2];
const v4: [string, boolean] = ['world', false];
