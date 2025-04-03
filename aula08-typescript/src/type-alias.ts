type age = number;
type name = string;

let a: age = 25;
let n: name = 'John Doe';

type Person = {
    name: string;
    age: number;
};

const p: Person = {
    name: 'John Doe',
    age: 25
};

type Date = {
    day: number;
    month: number;
    year: number;
};

const d: Date = {
    day: 1,
    month: 3,
    year: 2021
};

export { Person, Date }