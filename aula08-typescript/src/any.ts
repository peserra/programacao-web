/**
 * The any type disables all type checking, i.e.,
 * typing falls back to standard JS behavior.
 */

function processValue(value: any): void {
  // no type checks are required, many mistakes will be made
  console.log(value + 1);
  console.log(value.toUpperCase());
  console.log(value.length);
}

processValue("Hello"); // Output: HELLO
// processValue([1, 2, 3]); // Output: 3
// processValue(true); // Output: Unsupported value type

export {}