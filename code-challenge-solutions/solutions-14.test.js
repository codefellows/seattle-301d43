'use strict';


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
// Run your tests from the console: jest challenge-14.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Testing challenge 8', () => {
  test('It should return true if there are three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['X', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(true);
    expect(detectTicTacToeWin([['O', '', 'X'], ['X', 'O', 'X'], ['X', '', 'O']])).toStrictEqual(true);
  });

  test('It should return false if there are not three in a row', () => {
    expect(detectTicTacToeWin([['X', '', 'O'], ['O', 'O', ''], ['X', 'O', 'X']])).toStrictEqual(false);
  });
});

describe('Testing challenge 9', () => {
  test('It should return the number of adjacent bombs', () => {
    const minefield =
      [[null, null, null, null, '*'],
      [null, null, null, null, '*'],
      ['*', null, null, null, null],
      [null, null, null, '*', null],
      [null, '*', null, null, null]];
    const expected =
      [[0, 0, 0, 2, 9],
      [1, 1, 0, 2, 9],
      [9, 1, 1, 2, 2],
      [2, 2, 2, 9, 1],
      [1, 9, 2, 1, 1]];
    expect(minesweeper(minefield)).toStrictEqual(expected);
  });
});
