// Returns the rectangle object with width and height parameters and getArea() method

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function() {
    return this.width * this.height;
  };
}

let rect = new Rectangle(5, 10);

// Returns the n last items of the specified arrays

function getTail(arr, n) {
  let x = arr.length - n;
  return arr.filter(function(item, index) {
    if (index >= x) {
      return item;
    }
  });
}

// Inserts the item into specified array at specified index

function insertItem(arr, item, index) {
  this.index = index;
  this.item = item;
  arr.splice(index, 0, item);
}

// Returns an array of positive numbers from the specified array in original order

function getArrayOfPositives(arr) {
  return arr.filter(item => item > 0);
}

// Returns array containing only unique values from the specified array

function distinct(arr) {
  let cash = [];
  arr.forEach(function(item) {
    if (cash.includes(item)) {
      return;
    } else cash.push(item);
  });
  return cash;
}
