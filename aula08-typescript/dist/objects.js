"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// structural typing
let o1 = { p1: 12 };
o1 = { p1: 13 };
// o1 = {p1: 'a'} // Error: Type 'string' is not assignable to type 'number'.
let s1 = { name: 'John', age: 25 };
s1 = { name: 'Mary', age: 30 };
// s1 = {name: 'Mary', age: '30'} // Error
// optional properties
let o2 = { p1: 12 };
o2 = {};
o2 = { p1: 13 };
let o3;
o3 = { name: 'Mary' };
o3 = { name: 'Mary', age: 30 };
