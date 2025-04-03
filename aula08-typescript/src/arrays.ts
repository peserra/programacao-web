// type inference
const v1 = [1, 2, 3];
const v2 = ['hello', 'world'];
const v3 = [true, false];
const v4 = [1, 'hello', true];

// explicit typing
const v5: number[] = [1, 2, 3];
const v6: string[] = ['hello', 'world'];
const v7: boolean[] = [true, false];
const v8: (number | string | boolean)[] = ['hello', true, 1];
// const v9: [number, string, boolean] = [1, 'hello', 1];

// immutable arrays
const v10: readonly number[] = [1, 2, 3];

// v10[0] = 4; // Error

export {}