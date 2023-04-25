// Prompt: Write a function that removes the last element of an array and returns it.
function removeLastElement(arr) {
  return arr.pop();
}

// Prompt: Write a function that adds an element to the end of an array and returns the new length of the array.
function addElementToEnd(arr, element) {
  return arr.push(element);
}

// Prompt: Write a function that removes the first element of an array and returns it.
function removeFirstElement(arr) {
  return arr.shift();
}


// Prompt: Write a function that adds an element to the beginning of an array and returns the new length of the array.
function addElementToBeginning(arr, element) {
  return arr.unshift(element);
}

// Prompt: Write a function that returns a section of an array based on a start and end index.
function getArraySection(arr, start, end) {
  return arr.slice(start,end);
}

// Prompt: Write a function that removes a section of an array and returns the removed elements.
function removeArraySection(arr, start, end) {
  return arr.splice(start,end);
}

const test = [1,2,3,4,5];

removeLastElement(test);
console.log( test );
addElementToEnd(test, 6);
console.log( test );
removeFirstElement(test);
console.log( test );
addElementToBeginning(test, 0);
console.log( test );
const section = getArraySection(test, 1, 3);
console.log( section );
const removed = removeArraySection(test, 1, 3);
console.log( removed );