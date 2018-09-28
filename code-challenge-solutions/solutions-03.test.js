'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies.
// Pat has data for the hourly sales of cookies per hour for each store.
// He wants to create an array of the total number of cookies sold per hour for all of his stores combined.
//
// Write a function named grandTotal that adds up the cookies sales for each hour of operation
// for all of the stores combined. The first element in the hourlySales array should be
// the sum of the cookies sold in the 9:00 hour at all five stores combined.
//
// For this example, the total at 9:00 is 17 + 26 + 7 + 5 + 33, or 88 total cookies.
//
// Return the array of total number of cookies sold per hour for all of the stores combined.
// ------------------------------------------------------------------------------------------------

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
  //<solution>
  const hourlySales = [];

  for (let i = 0; i < stores[0].length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j][i];
    }
    hourlySales.push(hourlyTotal);
  }

  return hourlySales;
  //</solution>

}



// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Pat has decided that he would also like to organize his data as objects containing
// the number of cookies sold per hour and the time.
// Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.
//
// Write a function named salesData that uses forEach to iterate over the hourlySales array
// and create an object for each hour. Return an array of the formatted data.
// ------------------------------------------------------------------------------------------------

const salesData = (hours, data) => {
  //<solution>
  const salesOverview = [];

  data.forEach((value, idx) => {
    salesOverview.push({
      sales: `${value} cookies`,
      time: hours[idx]
    })
  })

  return salesOverview;
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named giveValentines that takes in an array of names.
// The function should iterate over the array and ensure that each person
// gives a Valentine to every other person in the array, except themself.
//
// Create a message for each valentine exchange following this format:
// "Jerry gives a Valentine to Elaine."
// Use template literals, no string concatenation. Return an array of messages.
// ------------------------------------------------------------------------------------------------

const giveValentines = (list) => {
  //<solution>
  const trackValentines = [];
  for (let i = 0; i <= list.length - 1; i++) {
    for (let j = 0; j <= list.length - 1; j++) {
      if (list[i] === list[j]) { continue; }
      trackValentines.push(`${list[i]} gives a Valentine to ${list[j]}.`);
    }
  }

  return trackValentines;
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
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
// CHALLENGE 5
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
// CHALLENGE 6
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
// CHALLENGE 7
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
// CHALLENGE 8
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
// CHALLENGE 9
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
// CHALLENGE 10
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
  test('It should add the hourly totals array', () => {
    expect(grandTotal(cookieStores)).toStrictEqual([88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169]);
  });
});

describe('Testing challenge 2', () => {
  test('It should create an object of data for each store', () => {
    expect(salesData(hoursOpen, grandTotal(cookieStores))).toStrictEqual([
      { sales: '88 cookies', time: '9 a.m.' },
      { sales: '153 cookies', time: '10 a.m.' },
      { sales: '252 cookies', time: '11 a.m.' },
      { sales: '286 cookies', time: '12 p.m.' },
      { sales: '139 cookies', time: '1 p.m.' },
      { sales: '161 cookies', time: '2 p.m.' },
      { sales: '145 cookies', time: '3 p.m.' },
      { sales: '232 cookies', time: '4 p.m.' },
      { sales: '276 cookies', time: '5 p.m.' },
      { sales: '207 cookies', time: '6 p.m.' },
      { sales: '161 cookies', time: '7 p.m.' },
      { sales: '169 cookies', time: '8 p.m.' }
    ]);

    expect(salesData(hoursOpen, grandTotal(cookieStores)).length).toStrictEqual(hoursOpen.length);
  });
});

describe('Testing challenge 3', () => {
  test('It should return a list of valentine exchanges', () => {
    expect(giveValentines(['Jerry', 'George', 'Elaine', 'Kramer', 'Newman'])).toStrictEqual([
      'Jerry gives a Valentine to George.',
      'Jerry gives a Valentine to Elaine.',
      'Jerry gives a Valentine to Kramer.',
      'Jerry gives a Valentine to Newman.',
      'George gives a Valentine to Jerry.',
      'George gives a Valentine to Elaine.',
      'George gives a Valentine to Kramer.',
      'George gives a Valentine to Newman.',
      'Elaine gives a Valentine to Jerry.',
      'Elaine gives a Valentine to George.',
      'Elaine gives a Valentine to Kramer.',
      'Elaine gives a Valentine to Newman.',
      'Kramer gives a Valentine to Jerry.',
      'Kramer gives a Valentine to George.',
      'Kramer gives a Valentine to Elaine.',
      'Kramer gives a Valentine to Newman.',
      'Newman gives a Valentine to Jerry.',
      'Newman gives a Valentine to George.',
      'Newman gives a Valentine to Elaine.',
      'Newman gives a Valentine to Kramer.'
    ]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the number 14', () => {
    expect(findFourteen(nestedArray)).toStrictEqual(14);
  });
});

describe('Testing challenge 5', () => {
  test('It should return the number 24', () => {
    expect(howManyTreats(errands)).toStrictEqual(24);
  });
});

describe('Testing challenge 6', () => {
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

describe('Testing challenge 7', () => {
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

describe('Testing challenge 8', () => {
  test('It should calculate and return the average temperature of the data set', () => {
    expect(averageDailyTemperature(weeklyTemperatures)).toStrictEqual(60.25);
  });
});

describe('Testing challenge 9', () => {
  test('It should return the lowest weekly average temperature within the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(57);
    expect(lowestWeeklyAverage(lowestWeeklyTemperatureData)).toStrictEqual(46);
  });
});

describe('Testing challenge 10', () => {
  test('It should return the total count for each row', () => {
    let result = excel('1,1,1\n4,4,4\n9,9,9');
    expect(result.length).toStrictEqual(3);
    expect(result[0]).toStrictEqual(3);
    expect(result[1]).toStrictEqual(12);
    expect(result[2]).toStrictEqual(27);
  });
});
