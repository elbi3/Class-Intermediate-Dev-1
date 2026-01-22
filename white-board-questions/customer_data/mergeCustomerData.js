let customerData1 = [101,104,107,0,0,0];
let customerData2 = [102,105,108];
let m = 3
let n = 3

function mergeCustomers(array1, array2, m, n) {
    for(let i = 0; i < array2.length; i++) {
        for(let j = 0; j < array1.length; j++) {
            if(array2[i] > array1[j]) {
                //index, how many items, what item
                array1.splice(j, 0, array2[i]);
                console.log("array1: ", array1);
            }
        }
    }
    console.log("array1 at end: ", array1);
    return array1;
}

mergeCustomers(customerData1, customerData2, m, n);