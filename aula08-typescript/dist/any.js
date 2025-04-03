"use strict";
/**
 * The any type disables all type checking, i.e.,
 * typing falls back to standard JS behavior.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function processValue(value) {
    // no type checks are required, many mistakes will be made
    console.log(value + 1);
    console.log(value.toUpperCase());
    console.log(value.length);
}
processValue("Hello"); // Output: HELLO
