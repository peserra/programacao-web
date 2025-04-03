import { Person, Date } from './type-alias';

// literal union types
type Campus = 'SA' | 'SBC';
type Status = 'presente' | 'ausente' | 'afastado';
type StatusCode = 200 | 404 | 500;

const sede: Campus = 'SA';
const situacao: Status = 'presente';
const code: StatusCode = 200;

// literal types with contradiction become never
type CampusNever = 'SA' & 'SBC';

let sedeNever: CampusNever;

// union object types
type Circle = {
    radius: number;
};

type Square = {
    side: number;
};

type Triangle = {
    base: number;
    height: number;
};

/**
 * a shape can have a radius or a side or a base and height
 * (poor modeling)
 */
type Shape = Circle | Square | Triangle;

const circle: Shape = {
    radius: 10
};

const square: Shape = {
    side: 10
};

const triangle: Shape = {
    base: 10,
    height: 5
};

const s: Shape = {
    radius: 10
};

const x: Shape = {
    radius: 10,
    side: 10,
    base: 10
};


/**
 * intersection object types
 * 
 * a student is a person with registration and admission (required)
 */
type Student = Person & {
    registration: number;
    admission: Date;
};

const student: Student = {
    name: 'John Doe',
    age: 24,
    registration: 123456,
    admission: {
        day: 1,
        month: 3,
        year: 2021
    }
};


type BasicConfig = {
    theme: "light" | "dark";
    language: "en" | "es";
};

type AdvancedConfig = {
    debugMode: boolean;
    logLevel: "info" | "warn" | "error";
};

type FullConfig = BasicConfig & AdvancedConfig;

const config: FullConfig = {
    theme: "dark",
    language: "en",
    debugMode: true,
    logLevel: "info"
};

export {}