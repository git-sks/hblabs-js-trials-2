"use strict";


// 1. printIndices
//
// Print each item in the list, followed by its index.
//
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
//
// Print an array of every other item in a given array, starting with index 0.
//
function everyOtherItem(items) {
  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
        result.push(items[i]);
    }
  }

  console.log(result);
}


// 3. smallestNItems
//
// Print a list of the 'n' smallest integers in 'items'.
// Order the integers in descending order.
// You can assume that 'n' will be less than the length of the list.
//
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse();

  console.log(sortedNItems);
}
