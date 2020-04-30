const Array = require('./array');
const Memory = require('./memory');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  // length: 1, _capacity: 3, ptr: 0
  // arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // what is ptr actaully refering to ??
  // length: 5, _capacity: 12, ptr: 3
  arr.pop();
  arr.pop();
  arr.pop();


  console.log(arr);

  // print 1st item of array
  console.log(arr.get(0));

  // empties array
  arr.pop();
  arr.pop();

  // push new item
  arr.push("tauhida");
  console.log(arr.get(0));

}


console.log(main());

// 2-1)What is the length, capacity and memory address of your array?
// 1,3,0
// 2-2)What is the length, capacity and memory address of your array?
// 6,12,3 our code adds additional capacity to the array, to allow it some comfort room when adding more values in the future.
// 3)What is the length, capacity, and address of your array?
// 3,12,3 our code does not resize down after poping out elements of the array, it simply stays the capacity it once had been.
// 4-1)What is the result? Can you explain your result?
// It shows Not a Number, that is due that the memory being assigned is kept as a numbers.
// 4-2) What is the purpose of the _resize() function in your Array class?
// When the array runs out of capacity it allocates more memory for the array.