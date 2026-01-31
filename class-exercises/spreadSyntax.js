// Task 1 --------Function-Argument-Expansion-----------------
const numbers = [ 234, 77, 5 ];

function sum(arg1, arg2, arg3) {
    let sum = arg1 + arg2 + arg3;
    return sum;
};

const answer = sum(...numbers);

console.log("answer: ", answer);

// Task 2 ---------Merging-Arrays------------------------------
const array1 = [ 1, 2, 3 ];

const array2 = [ 4, 5, 6 ];

const mergedArray = [ ...array1, ...array2 ];

console.log("mergedArray: ", mergedArray);

// Task 3: ---------Array Element Insertion----------------------
const colors = [ "red", "green", "blue" ];

const extendedColors = [ "yellow", ...colors, "purple" ];

console.log("extendedColors: ", extendedColors);

// Task 4 -----------Cloning-and-Modifying-an-Object--------------
const person = {
    name: "John",
    age: 30
}

const newPerson = {...person};

newPerson.name = "Jane";

newPerson["gender"] = "female";

console.log("person", person);
console.log("newPerson: ", newPerson);

// Task 5 -----------Combining-Objects--------------------
const object1 = {
    a: 1,
    b: 2
};

const object2 = {
    b: 3,
    c: 4
};

const combinedObject = { ...object1, ...object2 };

console.log("combinedObject: ", combinedObject);