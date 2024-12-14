// Code your solutions in this file
const names = ['Naftaly', 'Katherine', 'Jeremy']

function writeCards(array){
    let newArray = []
    for (let x = 0; x < array.length; x++) {
        const element = array[x];
        newArray.push(`Thank you, ${element}, for the wonderful surprise gift!`);
    }
    return newArray
}

console.log(writeCards(names));

function countDown(i){
    let array = [];
    for (let x = i; x >= 0 ; x--) {
        console.log(x);
        array.push(x);        
    }
    return array;
}

console.log(countDown(5))
