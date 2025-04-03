/**
 * void is applied to functions that do not return a value.
 */
function log(message: string): void {
    console.log(message);
}

log('Hello, World!');

/**
 * never represents impossible states.
 * never is applicable to functions that throw errors or run forever
 * even though these functions can also return void.
 */

type Contradiction = 10 & 30 & 'hello';

let x: Contradiction; // never

function throwError(message: string): never {
    throw new Error(message);
}

throwError('This is an error!');

function runForever(): never {
    while (true) {
        console.log('Running forever...');
    }
}

export {}