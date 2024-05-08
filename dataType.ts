let fastName = 'manik'; // implasive data type
// let lastName: String = 'molla'; // explasive data type.
let lastName: string = 'molla'; // remove 'String' and use 'string' instead.
let roll: number = 12345; // number data type.
let isAdmin: boolean = true; // boolean data type.
let x: undefined = undefined; // undefined data type
let y: null = null; // null data type

// let d; // anytype data. Not use.Back JS.
// d = 123;
// d = true;

let e : number;
e = 1245;

// Non-primitive data

//Array
let friends: string[] = ['ass', 'dddd', 'fffffff']
let lists: number[] = [1, 2, 44, 22,]
console.log(friends);

// Tuple: special type of array(mentained oders)
let coordinates : [number, number] = [1,5];
let ageName : [number, string, boolean] = [50, 'Mr X', true];
ageName[0] = 45;

//Object
// const user: {
//     company: string,
//     name: string,
//     isMarrited: boolean,
// } = {
//     company: 'Programming Hero',
//     name: 'Mir vai',
//     isMarrited: true,
// }

const user: {
    company: 'Programming Hero', // type: literal types
    name: string,
    isMarrited: boolean, // optional type.
} = {
    company: 'Programming Hero',
    name: 'Mir vai',
    isMarrited: true,
}