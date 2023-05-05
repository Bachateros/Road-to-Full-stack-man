/**
 * Warning
 * 
 * Do not rename function names or change arguments.
 */

// ----==== Basic exercises (15 items) ====---- 
/**
  * Exercise 1
  *
  * Write a function that returns odd array values.
  * [1,2,3,4] => [1,3]
  */
const getOddValues = numbers => {
    let oddArr = [];
    
    for (const iterator of numbers) {
      if ( iterator % 2 == 1)
        oddArr.push(iterator);
    }
    
    return oddArr;
};
console.log( getOddValues([1,2,2,3,4]) );
/**
  * Exercise 2
  *
  * Write a function that returns the smallest value of an array
  * [4,2,10,27] => 2
  */
const getSmallestValue = numbers => {
  let minim = numbers[0];  
  for (const element of numbers) {
    if ( element < minim ) minim = element;
  }
  return minim;
};
console.log(getSmallestValue([4,20,-10,27]));
/**
  * Exercise 3
  *
  * Write a function that returns the biggest value of an array
  * [5,22,9,43] => 43
  */
const getBiggestValue = numbers => {
  let biggest = numbers[0];
  for (const element of numbers) {
    if ( element > biggest ) biggest = element;
  }
  return biggest;
};
console.log(getBiggestValue([4,200,10,27]));
/**
  * Exercise 4
  *
  * Write a function that takes an array of strings as input
  * and returns only those shorter than 20 characters
  *
  *[
  * 'I am a short string',
  * 'I seem to be short too',
  * 'And I am a long string'
  *] => [
  * 'I am a short string',
  *]
  *
  * Use: filter
  */
const getShorterStrings = (strings, characters = 20) => {
  let results = strings.filter( item => item.length < characters);
  return results;
};
console.log(getShorterStrings([
   'I am a short string',
   'I seem to be short too',
   'And I am a long string',
   'I am a string',
  ]));
/**
  * Exercise 5
  *
  * Write a function that takes the following data as input:
  *
  *[
  * { name: 'shark', likes: 'ocean' },
  * { name: 'turtle', likes: 'pond' },
  * { name: 'otter', likes: 'fish biscuits' }
  *]
  *
  * And returns an array of strings:
  *
  * [ 'shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits' ]
  *
  * Use: map
  */
const getComputedStrings = fish => {
  return fish.map( item => `${item.name} likes ${item.likes}` );
};
console.log(getComputedStrings([
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }
]));
/**
  * Exercise 6
  *
  * Write a function that takes 2 objects as input and returns 1 with  
  * common properties. If properties have the same keys use the latter.
  *
  * [{ name: 'Alice' }, { age: 11 }] => { name: 'Alice', age: 11 }
  *
  * We use: ...
  */
const mergeObjects = objects => {
  let obj = objects[0];
  objects.shift();
  for (const item of objects) {
    for (const key in item) {
      obj[key] = item[key];
    }
  }
  objects.length = 0;
  objects.push(obj);
  return objects;
};
console.log (mergeObjects( [{ name: 'Alice' }, { age: 11 }, { age: 13 }] ) );
/**
  * Exercise 7
  *
  * Write a function that returns the smallest value of an array
  * [5,200,-5,41] => -5
  *
  * Use: operator ... and Math.min
  */
const getSmallestValue2 = numbers => {
  let minim = numbers[0];
  for (const item of numbers) {
    minim = Math.min(item, minim);
  }
  return minim;
};
console.log(getSmallestValue2( [5,-200,-5,41] ));
/**
  * Exercise 8
  *
  * Write a function that returns odd array values.
  * [77,2,30,51] => [77,51]
  *
  * Use: reduce
  */
const getOddValues2 = numbers => {
  return numbers.reduce((oddArr, item) => {
      if ( item % 2 ){
        oddArr.push(item);
      }
      return oddArr;
    }, []);
};
console.log( getOddValues2( [77,2,30,51] ) );
/**
  * Exercise 9
  *
  * Write a function that accepts data from the basket as input in the following form:
  *
  *[
  * {price: 10, count: 2},
  * {price: 100, count: 1},
  * {price: 2, count: 5},
  * {price: 15, count: 6},
  *]
  * where price is the price of the item and count is the quantity.
  *
  * The function should return the total price for this order.
  *
  * Use: reduce
  */
const calculateTotal = products => {
  return products.reduce( (sum, item) => sum + item.price * item.count, 0)
};
console.log( calculateTotal( [
   {price: 10, count: 2},
   {price: 100, count: 1},
   {price: 2, count: 5},
   {price: 15, count: 6},
  ] ));
/**
  * Exercise 10
  *
  * Implement a function that has an array of numbers as input and an array of unique values as output
  * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
  *
  * Use: reduce and indexOf
  */
const getUniqueValues = numbers => {
  return numbers.reduce( ( uniqArr, item ) =>{
    if( uniqArr.indexOf(item) == -1 ){
      uniqArr.push(item);
    }
    return uniqArr;
  }, [])
  /* 
    return Array.from( new Set(numbers) );
  */
};
console.log( getUniqueValues([1, 2, 2, 4, 5, 5, 1, 3]) );
/**
  * Exercise 11
  *
  * Implement a function whose input is a numeric code of an error, the output is a string with a message
  * 500 => Server Error
  * 401 => Authorization failed
  * 402 => Server Error
  * 403 => Access denied
  * 404 => Not found
  *
  * Use: switch case or object like a map structure
  */
const getErrorMessage = code => {
  /*switch (code){
    case 500:
      return 'Server Error';
    case 401:
      return 'Authorization failed';
    case 402:
      return 'Server Error';
    case 403:
      return 'Access denied';
    case 404:
      return 'Not found';
  }*/
  //second variant
  let codes = {
    500: 'Server' ,
    401: 'Authorization failed',
    402: 'Server Error',
    403: 'Access denied',
    404: 'Not found',
  }
  return codes[code];
};
console.log(getErrorMessage(401));
/**
  * Exercise 12
  *
  * Write a function that returns the 2 smallest values of an array
  * [4,3,2,1] => [1,2]
  *
  * Use: .sort()
  */
const get2SmallestValues = numbers => {
  numbers.sort((a,b) => a-b);
  numbers.length = 2;
  return numbers;
};
console.log( get2SmallestValues([4,3,2,1]) );
/**
  * Exercise 13
  *
  * Implement a function, at the input of which an object of the following form:
  * {
  * firstName: 'Peter',
  * secondName: 'Vasiliev',
  * patronymic: 'Ivanovich'
  *}
  * output line with the message 'Name: Petr Ivanovich Vasiliev'
  */
const getFullName = user => {
  return `Name: ${user.firstName} ${user.patronymic} ${user.secondName}`;
};
console.log( getFullName({
   firstName: 'Peter',
   secondName: 'Vasiliev',
   patronymic: 'Ivanovich'
  }) );
/**
  * Exercise 14
  *
  * Implement a function that takes 2 arguments as input: an array of numbers and a multiplier,
  * a returns an array of the original array, each element of which has been multiplied by a factor:
  *
  * [1,2,3,4], 5 => [5,10,15,20]
  *
  * Use: map
  */
const multiplyTo = (numbers, multiplier) => {
  return numbers.map( item => item*multiplier);
};
console.log(multiplyTo([1,2,3,4], 5));
/**
  * Exercise 15
  *
  * Implement a function that takes 2 arguments as input: an array and a franchise,
  * and returns a string with the names of the heroes separated by a comma:
  *
  *[
  * {name: "Batman", franchise: "DC"},
  * {name: "Ironman", franchise: "Marvel"},
  * {name: "Thor", franchise: "Marvel"},
  * {name: "Superman", franchise: "DC"}
  *],
  * Marvel
  * => Ironman, Thor
  *
  * Use: filter, map, join
  */
const getСharacterNames = (characters, franchise) => {
  let needFranch = characters.filter( item => item.franchise == franchise);
  needFranch = needFranch.map( item => item.name);
  return needFranch.join(', ');
};
console.log( getСharacterNames( [
{name: "Batman", franchise: "DC"},
{name: "Ironman", franchise: "Marvel"},
{name: "Thor", franchise: "Marvel"},
{name: "Superman", franchise: "DC"}
], 'Marvel') );

// ----==== Advanced exercises (8 items) ====----
/**
  * Exercise 16
  *
  * Write a function that returns an array of the smallest row values of a two-dimensional array
  *[
  * [10,1,300,4],             [10,300,1,4],
  * [20,2,300,400],           [20,2,300,400],
  * [30,3,300,4],             [30,3,300,4],
  * [40,4,300,4],             [40,4,300,4],
  *]
  * => [1,2,3,4]
  */
const getSmallestRow = numbers => {
  return numbers.reduce( (arr, item) =>{
    arr.push( item.sort( ( a, b ) => a - b )[0]);
    return arr;
  }, [] )
};
console.log(getSmallestRow([
   [10,1,300,4], 
   [20,2,300,400],
   [30,3,300,4],  
   [40,4,300,4],
  ]));
  /**
  * Exercise 17
  *
  * Write a function that returns an array of the smallest column values of a two-dimensional array
  *[
  * [1,2,3,4],
  * [1,2,3,4],
  * [1,2,30,4],
  * [1,2,3,40],
  *]
  * => [1,2,3,4]
  */
const getSmallestColumn = numbers => {
  let arr = numbers[0];
  let length = arr.length;
  for (const item of numbers) {
    for (let i = 0; i < length; i++){
      arr[i] = Math.min( arr[i], item[i] );
    }
  }
  return arr;
};
console.log(getSmallestColumn([
  [10,1,300,4], 
  [20,2,300,400],
  [30,3,300,4],  
  [40,4,30,4],
 ]));
/**
  * Exercise 18
  *
  * Write a function that returns the 2 biggest value of an array
  * [4,3,2,1] => [4,3]
  */
const get2BiggestValues = numbers => {
  return numbers.sort( (a, b) => a - b ).reverse().slice(0,2);
};
console.log( get2BiggestValues([2,4,3,2,1]) );
/**
  * Exercise 19
  *
  * Write a function that returns the number of vowels in a string in English
  * ( a, e, i, o, u ).
  *
  * 'Return the number (count) of vowels in the given string.' => 15
  */
const getNumberOfVowels = string => {
  let vowels = 'aeiou'.split('');
  string = string.toLowerCase();
  return vowels.reduce( (total, char) => {
    let start = 0;
    while(start != -1){
      start = string.indexOf(char, start+1);
      total++;
    }
    total--;
    return total;
  }, 0)
};
console.log( getNumberOfVowels('Return the number (count) of vowels in the given string.') );
/**
  * Exercise 20
  *
  * Write a function that returns an array of two strings where the first element
  * is the original string with uppercase even letters, and the second
  * with capital odd.
  * 'abcdef' => ['AbCdEf', 'aBcDeF']
  */
const getCapitalizedStrings = string => {
  let strArray = string.split('');
  let arr = ['',''];
  /*-----------WHYYYYYYYYYYYYYYYYYYYYYY-------------------------------*/
  /*arr.map( function(item, mainIndex) {
    item = strArray.reduce( (str, char, index) => {
      if( index % 2 == mainIndex )
        str += char.toUpperCase();
      else str += char;
      return str;
    }, '');
    return item;
  });*/
  arr[0] = strArray.reduce( (str, char,index) => {
    if( index % 2 == 0 )
      str += char.toUpperCase();
    else str += char;
    return str;
  }, '');
  arr[1] = strArray.reduce( (str, char,index) => {
    if( index % 2 )
      str += char.toUpperCase();
    else str += char;
    return str;
  }, '');
  return arr;
};
console.log(getCapitalizedStrings('abcdef'));
/**
  * Exercise 21
  *
  * Write a function that satisfies the following conditions:
  *
  * the function takes a string S, consisting of N letters of the English alphabet in lowercase [a-z]
  * the function returns a string that does not contain three identical letters in a row
  * the function removes the minimum number of letters from the string S
  *
  * Examples:
  * S = "eedaaad", the function returns "eedaad". One "a" has been removed.
  * S = "xxxtxxx", the function returns "xxtxx". The same letters can occur more than three times in a string, but not in a row.
  * S = "uuuuxaaaaxuuu", the function returns "uuxaaxuu".
  *
  * Assumptions:
  * N is an integer in the range [1..200,000]
  * S consists only of lowercase letters [a-z]
  */
const getCorrectString = string => {
  let stringArray = string.split('');
  for (let i = 1; i < stringArray.length - 1; i++){
    if( stringArray[i - 1] == stringArray[i] && stringArray[i + 1] == stringArray[i]){
      stringArray.splice(i - 1, 1);
      i--;
    }
  }
  return stringArray.join('');
};
console.log(getCorrectString('eedaaad'));
console.log(getCorrectString('xxxtxxx'));
console.log(getCorrectString('uuuuxaaaaxuuu'));
/**
 * Exercise 22
 *
 * Implement a flatten function that takes an array of arbitrary nesting arrays as input
 * and returns an array of all their elements without nesting.
 * [1, 2, [3, 4], 5, [[6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const getFlattenedArray = numbers => {
  //let array = [];
  return numbers.reduce( (array, item) => {
    if( typeof item == 'object'){
      array = array.concat( getFlattenedArray(item) );
    } else {
      array.push(item);
    }
    return array;
  },[])
};
console.log(getFlattenedArray([1, 2, 1, [3, 4], 5, [[6, 7], 8], 9]));
  /**
  * Exercise 23
  *
  * Implement a function that has an array of numbers as input and an array of not unique values as output.
  * 
  * [1, 2, 2, 4, 5, 5] => [2, 5]
  */
const getNotUniqueValues = numbers => {
  /*return numbers.reduce( (arr,item,index) => {
    if( numbers.indexOf(item, index + 1) > 0 && !arr.includes(item) ){
      arr.push(item);
    } 
    return arr;
  }, []);*/
  let map = new Map();
  for (const item of numbers) {
    map.has(item) ? map.set(item,map.get(item) + 1) : map.set(item, 0);
  }
  for (const key of map.keys()) {
    if(map.get(key) == 0){
      map.delete(key);
    }
  }
  return Array.from(map);
};
console.log( getNotUniqueValues([1,  2,  1, 4, 5]) );


