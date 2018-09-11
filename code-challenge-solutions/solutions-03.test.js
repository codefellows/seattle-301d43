'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named findFourteen that returns the number 14 from the nested array.
// Hint: refresh on how to access elements at a specific index in an array.
// ------------------------------------------------------------------------------------------------

const nestedArray = [ [ [1, 2, 3], [4, 5, 6] ], [ [7, 8, 9], [10, 11, 12] ], [ [13, 14, 15], [16, 17, 18] ] ];

const findFourteen = (array) => {
  //<solution>
  return array[2][0][1];
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named howManyTreats that will return the quantity of treats
// you need to pick up from the pet store today from this array.
// ------------------------------------------------------------------------------------------------

const errands = [
  { store: 'Grocery store',
    items: [ { name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  { store: 'Drug store',
    items: [ { name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash',quantity: 1 } ]
  },
  { store: 'Pet store',
    items: [ { name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 } ]
  }
]

const howManyTreats = (arr) => {
  //<solution>
  return arr[2].items[1].quantity;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named battleship that accepts a 2D array and two numbers, a row coordinate and a column coordinate.
// Return "hit" or "miss" depending on if there's part of a boat at that position in the array.
// Assume the array has only one of two values at each index. '# for part of a boat, or ' ' for open water.
//
// Here is a sample board:
// [
//   ['#', ' ', '#', ' '],
//   ['#', ' ', '#', ' '],
//   ['#', ' ', ' ', ' '],
//   [' ', ' ', '#', '#'],
// ]
//
// The top row of the board is considered row zero and row numbers increase as they go down.
// ------------------------------------------------------------------------------------------------

const battleship = (board, row, col) => {
  // <solution>
  if (board[row][col] === '#') {
    return 'hit';
  }
  return 'miss';
  // </solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named calculateProduct that takes in a two-dimensional array of numbers,
// multiplies all of the numbers in each array, and returns the final product.
// This function should work for any number of inner arrays.
//
// For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
// ------------------------------------------------------------------------------------------------

const calculateProduct = (numbers) => {
  //<solution>
  let product = 1;

  for(let i=0; i < numbers.length; i++) {
    for(let j=0; j < numbers[i].length; j++) {
      product *= numbers[i][j];
    }
  }
  return product;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Write a function named averageDailyTemperature that accepts a two-dimensional array representing
// average daily temperatures grouped week-by-week.
// Calculate the average daily temperature during that entire period. (Your output should be a single number.)
// Write your function so it could accept an array with any number of weeks given to it.
// ------------------------------------------------------------------------------------------------

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const averageDailyTemperature = (weather) => {
  //<solution>
  let days = 0;
  let totalTemperature = 0;
  for (let i = 0; i < weather.length; i++) {
    for (let j = 0; j < weather[i].length; j++) {
      days++;
      totalTemperature += weather[i][j];
    }
  }
  return totalTemperature / days;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named lowestWeeklyAverage that accepts a two-dimensional array
// of daily temperatures grouped week-by-week.
// Calculate the average temperature for each week and return the value of
// the lowest weekly average temperature.
//
// For example, in the data set below, the lowest weekly average temperature should be 46.
// ------------------------------------------------------------------------------------------------

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const lowestWeeklyAverage = (weather) => {
  //<solution>
  // use 200 as a very-high initial lowest
  let lowest = 200;

  for (let i = 0; i < weather.length; i++) {
    let days = 0;
    let totalTemperature = 0;
    for (let j = 0; j < weather[i].length; j++) {
      days++;
      totalTemperature += weather[i][j];
    }

    let weekAverage = totalTemperature / days;
    if (weekAverage < lowest) {
      lowest = weekAverage;
    }
  }
  return lowest;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
// Write a function called excel that accepts a string representing rows and columns.
// Rows are seperated by newline "\n" characters. Columns are seperated by spaces.
// You should parse the string as rows and columns and compute the sum of the values for each row.
// Return an array with the sum of the values in each row.
//
// Here's an algorithm you can use:
//
// create an empty array to store the sum value of each row
// split the input string on newline "\n" characters
//
// use a for loop to iterate over each row
//   initialize a variable to store the row sum as zero
//   split the row string on commas "," to get an array of column values
//   use a for loop to iterate over each column value
//     use parseInt() to convert each column string to a number
//     add the number to the total for the row
//   push the row total onto the very first array
// return the array with all the row sums
//
// Here is a sample data set: '1,1,1\n4,4,4\n9,9,9'
// ------------------------------------------------------------------------------------------------

const excel = (str) => {
  //<solution>
  const sums = [];

  const rows = str.split('\n');
  rows.forEach(row => {
    let sum = 0;
    const cols = row.split(',');
    cols.forEach(col => {
      const num = parseInt(col);
      sum += num;
    });
    sums.push(sum);
  });
  return sums;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named detectTicTacToeWin that accepts a 2D array of strings. Each string is
// guaranteed to be either "X", "O" or an empty string. Your function should check to see if
// any row, column, or either diagonal has three matching "X" or "O" symbols (non-empty strings)
// three-in-a-line. Your function should return either true or false to indicate if
// someone won the game.
//
// Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals
// consider writing one helper function that accepts three coordinate pairs and checks the values
// of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).
// Writing that helpCheck function to check evey possible win line is way easier than writing for loops!
//
// Here is a sample board:
// [
//   ['X', '', 'O'],
//   ['X', 'O', ''],
//   ['X', 'O', 'X'],
// ];
// ------------------------------------------------------------------------------------------------

const detectTicTacToeWin = (board) => {
  //<solution>
  const helpCheck = (row1, col1, row2, col2, row3, col3) => {
    return board[row1][col1] === board[row2][col2] &&
           board[row2][col2] === board[row3][col3];
  }
  let isWin = false;
  isWin = isWin || helpCheck(0, 0, 0, 1, 0, 2); // top row
  isWin = isWin || helpCheck(1, 0, 1, 1, 1, 2); // middle row
  isWin = isWin || helpCheck(2, 0, 2, 1, 2, 2); // last row

  isWin = isWin || helpCheck(0, 0, 1, 0, 2, 0); // left column
  isWin = isWin || helpCheck(0, 1, 1, 1, 2, 1); // middle column
  isWin = isWin || helpCheck(0, 2, 1, 2, 2, 2); // right column

  isWin = isWin || helpCheck(0, 0, 1, 1, 2, 2); // forward slash
  isWin = isWin || helpCheck(2, 0, 1, 1, 0, 2); // back slash

  return isWin;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function called minesweeper that accepts a 2D array representing a game of minesweeper.
// The function should create a new array the same size as the initial array. Do not modify the original array.
//
// Each cell contains only either `null` or the string "*" to represent a bomb.
// Your function should return a 2D array where each cell is a number that represents
// how many bombs that cells is touching.
// Cells that do not touch any bomb should contain a zero.
// Cells that contain a bomb themselves should contain a 9.
//
// Consider writing a helper function getCellValue(arr, row, col) that returns either the value at the
// cell or `null` if the value is out of the bounds of the array (going off the top, bottom, left or right).
// This helper function allows you easier iterate through the 2D array checking surrounding cells from
// one cell location without worrying about accessing things outside of the array.
//
// Here is a sample board:
// [
//   [ null, null, null, null, '*' ],
//   [ null, null, null, null, '*' ],
//   [ '*', null, null, null, null ],
//   [ null, null, null, '*', null ],
//   [ null, '*', null, null, null ],
// ];
// ------------------------------------------------------------------------------------------------

const minesweeper = (board) => {
  //<solution>
  const getValue = (row, col) => {
    if (row < 0 || row >= board.length) {
      return null;
    }
    if (col < 0 || col >= board[row].length) {
      return null;
    }
    return board[row][col];
  }

  const mineValue = (row, col) => {
    if (getValue(row, col) === null) {
      return 0;
    }
    return 1;
  }

  const newBoard = [];
  board.forEach((row, rowi) => {
    const newRow = [];
    row.forEach((col, coli) => {
      if (board[rowi][coli]) {
        newRow.push(9);
      } else {
        let mines = 0;

        // top row
        mines += mineValue(rowi - 1, coli - 1);
        mines += mineValue(rowi - 1, coli);
        mines += mineValue(rowi - 1, coli + 1);

        // left / right
        mines += mineValue(rowi, coli - 1);
        mines += mineValue(rowi, coli + 1);

        // bottom row
        mines += mineValue(rowi + 1, coli - 1);
        mines += mineValue(rowi + 1, coli);
        mines += mineValue(rowi + 1, coli + 1);

        newRow.push(mines);
      }
    });
    newBoard.push(newRow);
  });

  return newBoard;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenge-03.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should return the number 14', () => {
    expect(findFourteen(nestedArray)).toStrictEqual(14);
  });
  test('It should also work for other input arrays', () => {
    expect(findFourteen([[], [], [[0,1,2]]])).toStrictEqual(1);
  })
});

describe('Testing challenge 2', () => {
  test('It should return the number 24', () => {
    expect(howManyTreats(errands)).toStrictEqual(24);
  });
  test('It should also work for other arrays of objects', () => {
    expect(howManyTreats([0,0,{items: [0, {quantity: 7}]}])).toStrictEqual(7);
  })
});

describe('Testing challenge 3', () => {
  const battleshipData = [
    ['#', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    ['#', ' ', ' ', ' '],
    [' ', ' ', '#', '#'],
  ];

  test('It should return "hit" when it hits a boat', () => {
    expect(battleship(battleshipData, 0, 0)).toStrictEqual('hit');
    expect(battleship(battleshipData, 1, 0)).toStrictEqual('hit');
  });

  test('It should return "miss" when it doesn\'t hit a boat', () => {
    expect(battleship(battleshipData, 0, 1)).toStrictEqual('miss');
    expect(battleship(battleshipData, 3, 0)).toStrictEqual('miss');
  });
});

describe('Testing challenge 4', () => {
  test('It should multiply all the numbers together', () => {
    expect(calculateProduct([[1,2], [3,4], [5,6]])).toStrictEqual(720);
  });

  test('It should return zero if there are any zeroes in the data', () => {
    expect(calculateProduct([[2, 3, 4, 6, 0], [4, 3, 7], [2, 4, 6]])).toStrictEqual(0);
  });
  test('It should work even if some of the arrays contain no numbers', () => {
    expect(calculateProduct([[1,2], [], [3,4,5]])).toStrictEqual(120);
  });
});

describe('Testing challenge 5', () => {
  test('It should calculate and return the average temperature of the data set', () => {
    expect(averageDailyTemperature(weeklyTemperatures)).toStrictEqual(60.25);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the lowest weekly average temperature within the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(57);
    expect(lowestWeeklyAverage(lowestWeeklyTemperatureData)).toStrictEqual(46);
  });
});

describe('Testing challenge 7', () => {
  test('It should return the total count for each row', () => {
    let result = excel('1,1,1\n4,4,4\n9,9,9');
    expect(result.length).toStrictEqual(3);
    expect(result[0]).toStrictEqual(3);
    expect(result[1]).toStrictEqual(12);
    expect(result[2]).toStrictEqual(27);
  });
});

describe('Testing challenge 8', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([ ['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X'] ])).toStrictEqual(true);
    expect(detectTicTacToeWin([ ['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([ ['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X'] ])).toStrictEqual(false);
  });
});

describe('Testing challenge 9', () => {
  test('It should return the number of adjacent bombs', () => {
    const minefield =
    [ [ null, null, null, null, '*' ],
      [ null, null, null, null, '*' ],
      [ '*', null, null, null, null ],
      [ null, null, null, '*', null ],
      [ null, '*', null, null, null ] ];
    const expected =
      [ [0, 0, 0, 2, 9],
        [1, 1, 0, 2, 9],
        [9, 1, 1, 2, 2],
        [2, 2, 2, 9, 1],
        [1, 9, 2, 1, 1] ];
    expect(minesweeper(minefield)).toStrictEqual(expected);
  });
});
