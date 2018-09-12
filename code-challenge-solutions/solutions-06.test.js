'use strict';

// ------------------------------------------------------------------------------------------------
// CHALLENGE 1
//
// Write a function named getKeys that takes in an object and returns an array containing the keys
// from the object.
// ------------------------------------------------------------------------------------------------

const getKeys = (obj) => {
  //<solution>
  return Object.keys(obj);
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 2
//
// Write a function named getValues that takes in an object and returns an array containing the
// values from the object.
// ------------------------------------------------------------------------------------------------

const getValues = (obj) => {
  //<solution>
  return Object.values(obj);
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 3
//
// Write a function named getEntries that takes in an object and returns an array of the entries
// (key/value pairs) from the object.
// ------------------------------------------------------------------------------------------------

const getEntries = (obj) => {
  //<solution>
  return Object.entries(obj);
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 4
//
// Write a function named getFrom that takes in an object and a property name and returns the
// information from the object. For example, if invoked with "courseInfo" and "keys" as arguments,
// it should return an array containing the keys for the courseInfo object
// (['name', 'duration', 'topics', 'finalExam']).
//
// This will make our code more dynamic and DRY.
// ------------------------------------------------------------------------------------------------
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true };

const getFrom = (obj, property) => {
  //<solution>
  return Object[property](obj);
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 5
//
// Use the characters data below for the rest of the challenges.
//
// Write a function named totalCharacters that takes in an array and returns the number of
// characters in the array. Use the getFrom function you wrote in challenge 4.
// ------------------------------------------------------------------------------------------------

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    children: [],
    house: 'Stark'
  },
  {
    name: 'Jon',
    spouse: null,
    children: [],
    house: 'Snow'
  }
]

const totalCharacters = (arr) => {
  //<solution>
  return getFrom(arr, 'keys').length;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 6
//
// Write a function named getHouses that returns an array of the houses in the data set.
// Use the getFrom function you wrote in challenge 4.
// ------------------------------------------------------------------------------------------------

const getHouses = (arr) => {
  //<solution>
  let houses = [];

  getFrom(arr, 'values').forEach(person => {
    houses.push(person.house);
  })

  return houses;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 7
//
//  Write a function named hasChildrenValues that takes in the data and a name and returns a boolean
// based on whether that character has children. Use the getFrom function you wrote in challenge 4.
// ------------------------------------------------------------------------------------------------

const hasChildrenValues = (arr, character) => {
  //<solution>
  let children = 0;

  getFrom(characters, 'values').forEach(person => {
    if(person.name === character) {
      children = person.children.length > 0 ? true : false;
    }
  })

  return children;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 8
//
// Write a function named hasChildrenEntries that is similar to your hasChildrenValues function
// from challenge 7, but uses the data's entries instead of its keys.
// Use the getFrom function you wrote in challenge 4.
// ------------------------------------------------------------------------------------------------

const hasChildrenEntries = (arr, character) => {
  //<solution>
  let children = 0;

  getFrom(characters, 'entries').forEach(item => {
    item.forEach(person => {
      if(person.name === character) {
        children = person.children.length > 0 ? true : false;
      }
    })
  })

  return children;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 9
//
// Write a function named houseSize that takes in the array and returns an object for each house
// containing the name of the house and the number of members.
// For example: { house: 'Stark', members: 7 }. Use the getFrom function you wrote in challenge 4.
// ------------------------------------------------------------------------------------------------

const houseSize = (arr) => {
  //<solution>
  const sizes = [];
  getFrom(arr, 'values').forEach(person => {
    let sum = 1;
    if(person.spouse) sum++;
    person.children.forEach(() => sum++);
    sizes.push({
      house: person.house,
      members: sum,
    })
  })

  return sizes;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// CHALLENGE 10
//
// As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."
//
// We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.
//
// Write a function named houseSurvivors. Modify your houseSize function from challenge 9 to use
// as the basis of this function.
// If the spouse is deceased, do not include him/her in the total number of family members.
// ------------------------------------------------------------------------------------------------

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  //<solution>
  const sizes = [];
  getFrom(arr, 'values').forEach(person => {
    let sum = 1;
    if(person.spouse && !deceasedSpouses.includes(person.spouse)) sum++;
    person.children.forEach(() => sum++);
    sizes.push({
      house: person.house,
      members: sum,
    })
  })

  return sizes;
  //</solution>
}

// ------------------------------------------------------------------------------------------------
// TESTS
//
// All the code below will verify that your functions are working to solve the challenges.
//
// DO NOT CHANGE any of the below code.
//
// Run your tests from the console: jest challenges-06.test.js
//
// ------------------------------------------------------------------------------------------------

describe('Tests using the course info object', () => {
  const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
    topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
    finalExam: true };

  describe('Testing challenge 1', () => {
    test('It should return the keys from an object', () => {
      expect(getKeys(courseInfo)).toStrictEqual([ 'name', 'duration', 'topics', 'finalExam' ]);
    });
  });

  describe('Testing challenge 2', () => {
    test('It should return the values from an object', () => {
      expect(getValues(courseInfo)).toStrictEqual([ 'Code 301', { dayTrack: '4 weeks', eveningTrack: '8 weeks' }, [ 'SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming' ], true ]);
    });
  });

  describe('Testing challenge 3', () => {
    test('It should return the entries from an object', () => {
      expect(getEntries(courseInfo)).toStrictEqual([ [ 'name', 'Code 301' ], [ 'duration', { dayTrack: '4 weeks', eveningTrack: '8 weeks' } ], [ 'topics', [ 'SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming' ] ], [ 'finalExam', true ] ]);
    });
  });

  describe('Testing challenge 4', () => {
    test('It should return the keys from an object', () => {
      expect(getFrom(courseInfo, 'keys')).toStrictEqual([ 'name', 'duration', 'topics', 'finalExam' ]);
    });

    test('It should return the values from an object', () => {
      expect(getFrom(courseInfo, 'values')).toStrictEqual([ 'Code 301', { dayTrack: '4 weeks', eveningTrack: '8 weeks' }, [ 'SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming' ], true ]);
    });

    test('It should return the entries from an object', () => {
      expect(getFrom(courseInfo, 'entries')).toStrictEqual([ [ 'name', 'Code 301' ], [ 'duration', { dayTrack: '4 weeks', eveningTrack: '8 weeks' } ], ['topics', [ 'SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming' ] ], [ 'finalExam', true ] ]);
    });
  });
})

describe('Testing challenge 5', () => {
  test('something specific', () => {
    expect(totalCharacters(characters)).toStrictEqual(7);
  });
});

describe('Testing challenge 6', () => {
  test('something specific', () => {
    expect(getHouses(characters)).toStrictEqual([ 'Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Stark', 'Snow' ]);
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 7', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 8', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 9', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)).toStrictEqual([ { house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Stark', members: 2 }, { house: 'Snow', members: 1 } ]);
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 10', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Stark', members: 2 }, { house: 'Snow', members: 1 } ]);
  });
});
