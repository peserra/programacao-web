"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberStack = [];
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack);
numberStack.pop();
console.log(numberStack);
/**
 * Here we have a type-specific queue class.
 */
class NumberQueue {
    constructor() {
        this.toString = () => this.elements.toString();
        this.elements = [];
    }
    enqueue(item) {
        this.elements.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, nothing to dequeue.");
        }
        else {
            return this.elements.shift() || 0;
        }
    }
    isEmpty() {
        return this.elements.length == 0;
    }
}
const numberQueue = new NumberQueue();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
numberQueue.enqueue(30);
console.log(numberQueue + "");
console.log(numberQueue.dequeue());
console.log(numberQueue + "");
// numberQueue.enqueue("a");
/**
 * Now we define a generic queue class.
 */
class GenericQueue {
    constructor() {
        this.toString = () => this.elements.toString();
        this.elements = [];
    }
    enqueue(item) {
        this.elements.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty, nothing to dequeue.");
        }
        else {
            return this.elements.shift();
        }
    }
    isEmpty() {
        return this.elements.length == 0;
    }
}
const stringQueue = new GenericQueue();
stringQueue.enqueue("hello");
stringQueue.enqueue("ufabc");
stringQueue.enqueue("how");
stringQueue.enqueue("are");
stringQueue.enqueue("you");
console.log(stringQueue + "");
console.log(stringQueue.dequeue());
console.log(stringQueue + "");
