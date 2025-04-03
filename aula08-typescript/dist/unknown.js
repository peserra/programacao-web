"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Unknown forces the compiler to require type checking
 * before using the value, contrary to any, that disables
 * all type checking requirementss.
 *
 * @param value the unknown value
 */
function processValue(value) {
    if (typeof value === "number") {
        console.log(value + 1);
    }
    if (typeof value === "string") {
        // We can safely use value as a string now
        console.log(value.toUpperCase());
    }
    else if (Array.isArray(value)) {
        // We can safely use value as an array now
        console.log(value.length);
    }
    else {
        // We don't know the type of value, so we handle it accordingly
        console.log("Unsupported value type");
    }
}
processValue(1); // Output: 2
processValue("Hello"); // Output: HELLO
processValue([1, 2, 3]); // Output: 3
processValue(true); // Output: Unsupported value type
