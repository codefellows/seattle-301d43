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

const firstPike = [ 17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18 ];
const seaTac = [ 26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43 ];
const seattleCenter = [ 7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29 ];
const capHill = [ 5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62 ];
const alkiBeach = [ 33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17 ];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
  //<solution>
  const hourlySales = [];

  for(let i = 0; i < stores[0].length; i++) {
    let hourlyTotal = 0;
    for(let j = 0; j < stores.length; j++) {
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
    salesOverview.push( {
      sales: `${value} cookies`,
      time: hours[idx]
    } )
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
  for( let i = 0; i <= list.length - 1; i++ ) {
    for( let j = 0; j <= list.length - 1; j++ ) {
      if(list[i] === list[j]) { continue; }
      trackValentines.push(`${list[i]} gives a Valentine to ${list[j]}.`);
    }
  }

  return trackValentines;
  //</solution>
};

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-02.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 1', () => {
  test('It should add the hourly totals array', () => {
    expect(grandTotal(cookieStores)).toStrictEqual([ 88, 153, 252, 286, 139, 161, 145, 232, 276, 207, 161, 169 ]);
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
