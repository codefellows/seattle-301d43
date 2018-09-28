'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named pushIntoSecond which takes in an array and uses a for loop
// to push all of the elements from the initial array into a second array.
//
// Return the second array.
// ------------------------------------------------------------------------------------------------

const pushIntoSecond = (arr) => {
  const second = [];
  //<solution>
  for (let i = 0; i < arr.length; i++) {
    second.push(arr[i]);
  }

  return second;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named addBonusPoints that takes in an array of raw test scores
// and adds five bonus points to each score.
//
// Use the "for...of" syntax.
//
// As we did in Challenge 1, return a new array of scores that have had the bonus points added.
// ------------------------------------------------------------------------------------------------

const addBonusPoints = (arr) => {
  //<solution>
  let bonusPoints = [];

  for (let score of arr) {
    bonusPoints.push(score + 5);
  }

  return bonusPoints;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named addCurve that takes in an array of raw test scores and increases each score by 5%.
//
// Use the "for...in" syntax.
//
// As we did in Challenge 1, return a new array of curved scores.
// ------------------------------------------------------------------------------------------------

const addCurve = (arr) => {
  //<solution>
  let curvedScores = [];

  for (let score in arr) {
    curvedScores.push(arr[score] * 1.05);
  }

  return curvedScores;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named greeting that takes in a string and returns the string in all uppercase letters.
//
// Then, write a function named speaker that takes in a string and a callback function.
// The speaker function should return the string in all uppercase letters only by invoking the callback.
// ------------------------------------------------------------------------------------------------

const greeting = (word) => {
  //<solution>
  return word.toUpperCase();
  //</solution>
}

const speaker = (message, callback) => {
  //<solution>
  return callback(message);
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.
//
// Then, write a function named addNumbers that takes in four arguments:
//   - A number to be added to an array
//   - An array into which the number should be added
//   - The number of times the number should be added
//   - A callback function to use to add the numbers to the array (Hint: you already defined it)
//
// Within the addNumbers function, invoke the callback function as many times as necessary,
// based on the third argument of the addNumbers function.
//
// Return the modified array.
// ------------------------------------------------------------------------------------------------

const addValues = (arr, value) => {
  //<solution>
  arr.push(value);
  //</solution>
}

const addNumbers = (num, arr, times, callback) => {
  //<solution>
  for (let i = 0; i < times; i++) {
    callback(arr, num);
  }
  return arr;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named removeOne that takes in a number and an array.
// If the number divided by three has a remainder of two, pop one element off of the array.
// Hint: you may want to look into the modulo operation.
//
// Then, write a function named removeElements that takes in an array and a callback.
// This function should iterate over the array and invoke the callback once for each element in the array.
// For this function, use a for loop, for...in syntax, or for...of syntax.
//
// Return the modified array.
// ------------------------------------------------------------------------------------------------

const removeOne = (num, arr) => {
  //<solution>
  if (num % 3 === 2) arr.pop();
  //</solution>
}

const removeElements = (arr, callback) => {
  //<solution>
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], arr);
  }

  return arr;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function named removeWithForEach that produces the same output as challenge 6, but uses forEach.
// ------------------------------------------------------------------------------------------------

const removeWithForEach = (arr, callback) => {
  //<solution>
  arr.forEach(number => callback(number, arr));

  return arr;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named removeWithAnon that produces the same output as challenges 6 and 7.
//
// This function should use forEach again, but rather than taking in a callback as an argument,
// define an anonymous function as the argument to forEach.
//
// This anonymous function should accept up to three arguments: the element, the index, and the array.
// ------------------------------------------------------------------------------------------------

const removeWithAnon = (input) => {
  //<solution>
  input.forEach(function(ele, idx, arr) {
    if (ele % 3 === 2) {
      arr.pop();
    }
  });

  return input;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named createList that takes in an array of the current store intentory.
//
// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]
//
// This function should use forEach to populate your grocery list based on the store's inventory.
// If the item is available, add it to your list. Return the final list.
// ------------------------------------------------------------------------------------------------

const createList = (availableItems) => {
  //<solution>
  let list = [];

  availableItems.forEach(item => {
    if (item.available) {
      list.push(item.name)
    }
  })

  return list;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// Write a function named fizzbuzz that takes in an array of numbers.
//
// Iterate over the array using forEach to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
//
// Return the resulting output array.
// ------------------------------------------------------------------------------------------------

const fizzbuzz = (arr) => {
  //<solution>
  let output = [];

  arr.forEach(num => {
    if (num % 5 === 0 && num % 3 === 0) {
      output.push('Fizz Buzz');
    } else if (num % 3 === 0) {
      output.push('Fizz');
    } else if (num % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(num);
    }
  })

  return output;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-01.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should push all of the elements from the first array into the second array', () => {
    expect(pushIntoSecond([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe('Testing challenge 2', () => {
  test('It should add five bonus points to each raw score', () => {
    expect(addBonusPoints([55, 79, 100, 85, 92])).toStrictEqual([60, 84, 105, 90, 97]);
  });
});

describe('Testing challenge 3', () => {
  test('It should increase each raw score by 5%', () => {
    const resultScores = addCurve([55, 79, 100, 85, 92]);
    const expectedScores = [57.75, 82.95, 105, 89.25, 96.60000000000001];
    for (let i in expectedScores) {
      expect(resultScores[i]).toBeCloseTo(expectedScores[i]);
    }
  });
});

describe('Testing challenge 4', () => {
  test('It should return the message with all uppercase characters', () => {
    expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
  });
});

describe('Testing challenge 5', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  test('It should remove three elements from the array', () => {
    expect(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(removeElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne).length).toStrictEqual(7);
  });
});

describe('Testing challenge 7', () => {
  test('It should remove three elements from the array', () => {
    expect(removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(removeWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], removeOne).length).toStrictEqual(7);
  });
});

describe('Testing challenge 8', () => {
  test('It should remove three elements from the array', () => {
    expect(removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(removeWithAnon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(7);
  });
});

describe('Testing challenge 9', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

describe('Testing challenge 10', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
