// structural typing
let o1: {p1: number} = {p1: 12}

o1 = {p1: 13}
// o1 = {p1: 'a'} // Error: Type 'string' is not assignable to type 'number'.

let s1: {name: string, age: number} = {name: 'John', age: 25}

s1 = {name: 'Mary', age: 30}
// s1 = {name: 'Mary', age: '30'} // Error

// optional properties
let o2: {p1?: number} = {p1: 12}

o2 = {}
o2 = {p1: 13}

let o3: {name: string, age?: number}

o3 = {name: 'Mary'}
o3 = {name: 'Mary', age: 30}
// o3 = {name: 'Mary', age: 30, city: 'São Paulo'} \\ Error

// immutable properties
let o4: {readonly p1: number, p2: string};

o4 = {p1: 12, p2: 'hello'};
o4.p2 = 'world';
// o4.p1 = 13; // Error


export {}