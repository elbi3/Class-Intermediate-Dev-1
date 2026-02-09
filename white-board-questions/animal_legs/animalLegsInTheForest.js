// reference arrays

const fourLegs = ['lion', 'deer', 'elephant', 'horse', 'dog', 'cat'];
const twoLegs = ['monkey', 'parrot', 'ostrich'];
const noLegs = ['snake', 'worm'];
const moreThanFour = ['spider', 'ant', 'centipede'];


const animalsTest1 = ['lion', 'monkey', 'deer', 'snake', 'elephant']; //output 3

const animalsTest2 = ['frog', 'horse', 'spider', 'ant']; //output 1

const animalsTest3 = ['spider', 'ant', 'centipede']; //output 0

const animalsTest4 = []; //output 0

const animalsTest5 = ['horse', 'horse', 'horse', 'horse']; //output 4

const animalsTest6 = [ 'rabbit' ]; //ouput 0 - not in legObject, but has 4 legs

const legObject = {
    'lion': 4,
    'deer': 4,
    'elephant': 4,
    'horse': 4,
    'dog':4, 
    'cat': 4,
    'monkey': 2,
    'parrot': 2,
    'ostrich': 2,
    'snake': 0,
    'worm': 0,
    'spider': 5,
    'ant': 5,
    'centipede': 5
};

function countFourLegs(array) {
    let num = 0;
    let myKeys = Object.keys(legObject);

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < myKeys.length; j++) {
            if((array[i] === myKeys[j])) {
                let animal = array[i];
                let numLegs = legObject[animal];
                if(numLegs === 4) {
                    num++;
                }
            }
        }
    }

    return num;
}

// tests
const result = countFourLegs(animalsTest1);
console.log("result: ", result);
const result2 = countFourLegs(animalsTest2);
console.log("result2: ", result2);
const result3 = countFourLegs(animalsTest3);
console.log("result3: ", result3);
// edge case tests
const result4 = countFourLegs(animalsTest4);
console.log("result4: ", result4);
const result5 = countFourLegs(animalsTest5);
console.log("result5: ", result5);
const result6 = countFourLegs(animalsTest6);
console.log("result6: ", result6);