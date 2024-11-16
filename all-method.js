// Javascript 

// Method

// String Methods

- "hello".charAt(0);             // 'h'
// - "hello".concat(" world");      // 'hello world'
// - "hello".includes("ell");       // true
- "hello".indexOf("l");          // 2
// - "hello".toUpperCase();         // 'HELLO'
// - "  hello ".trim();             // 'hello'
- charAt(index) // Returns the character at the specified index in a string.
- charCodeAt(index) // Returns the Unicode of the character at the specified index.
- concat(string2, string3, ...) // Combines two or more strings into one.
- endsWith(searchString, length) // Checks if a string ends with the specified value.
- includes(searchString, position) // Checks if a string contains the specified value.
- indexOf(searchValue, fromIndex) // Returns the position of the first occurrence of a specified value.
- lastIndexOf(searchValue, fromIndex) // Returns the position of the last occurrence of a specified value.
- match(regex) // Searches a string for a match against a regular expression.
- repeat(count) // Repeats the string a specified number of times.
- replace(searchValue, newValue) // Replaces occurrences of a specified value with another value.
// - slice(beginIndex, endIndex) // Extracts part of a string and returns a new string.
- split(separator, limit) // Splits a string into an array of substrings.
- startsWith(searchString, position) // Checks if a string starts with the specified value.
- substring(startIndex, endIndex) // Returns a part of a string between the start and end indexes.
// - toLowerCase() // Converts the string to lowercase letters.
// - toUpperCase() // Converts the string to uppercase letters.
// - trim() // Removes whitespace from both sides of a string.
// - trimStart() // Removes whitespace from the beginning of a string.
// - trimEnd() // Removes whitespace from the end of a string.


// Number Methods

Number.isInteger(10);          // true
Number.parseInt("10px");       // 10
(3.14159).toFixed(2);          // '3.14'
(123).toString(16);            // '7b'
isFinite(value)
isInteger(value)
isNaN(value)
isSafeInteger(value)
parseFloat(string)
parseInt(string, radix)
toExponential(fractionDigits)
toFixed(digits)
toPrecision(precision)
toString(radix)
valueOf()



// Array Methods

- [1, 2, 3].concat([4, 5]);      // [1, 2, 3, 4, 5]
- [1, 2, 3, 4].find(x => x > 2); // 3
- [1, 2, 3].map(x => x * 2);     // [2, 4, 6]
- [1, 2, 3].filter(x => x > 1);  // [2, 3]
- [3, 1, 4].sort();              // [1, 3, 4]
- [1, 2, 3].reduce((a, b) => a + b); // 6
// - concat(array1, array2, ...) // Joins two or more arrays.
- copyWithin(target, start, end) // Copies part of an array to another location within the same array.
- entries() // Returns a new Array Iterator object with key/value pairs.
- every(callback) // Checks if all elements in the array pass a test.
- fill(value, start, end) // Fills elements in an array with a static value.
- filter(callback) // Creates a new array with elements that pass the test.
- find(callback) // Returns the first element that passes the test.
- findIndex(callback) // Returns the index of the first element that passes the test.
- flat(depth) // Flattens nested arrays.
- flatMap(callback) // Maps each element using a callback function and then flattens the result.
- forEach(callback) // Executes a provided function for each array element.
- includes(element, fromIndex) // Checks if an array contains a specified element.
- indexOf(element, fromIndex) // Returns the first index of a specified element.
- join(separator) // Joins all array elements into a string.
- keys() // Returns a new Array Iterator object containing the keys for each element.
- lastIndexOf(element, fromIndex) // Returns the last index of a specified element.
- map(callback) // Creates a new array with the results of calling a function on every element.
// - pop() // Removes the last element from an array and returns it.
// - push(element1, ..., elementN) // Adds new elements to the end of an array.
- reduce(callback, initialValue) // Reduces the array to a single value by applying a function.
- reduceRight(callback, initialValue) // Same as `reduce`, but processes the array from right to left.
- reverse() // Reverses the order of the elements in an array.
// - shift() // Removes the first element from an array and returns it.
- slice(start, end) // Returns a shallow copy of a portion of an array.
- some(callback) // Checks if any array elements pass a test.
- sort(compareFunction) // Sorts the elements of an array.
- splice(start, deleteCount, item1, item2, ...) // Adds or removes elements from an array.
// - unshift(element1, ..., elementN) // Adds new elements to the beginning of an array.
- values() // Returns a new Array Iterator object containing the values for each element.

// Object Methods

- Object.keys({ a: 1, b: 2 });   // ['a', 'b']
- Object.values({ a: 1, b: 2 }); // [1, 2]
- Object.assign({}, { a: 1 });   // { a: 1 }
- Object.freeze({ a: 1 });       // prevents modification
- assign(target, ...sources) // Copies properties from one or more source objects to a target object.
- create(proto, propertiesObject) // Creates a new object with the specified prototype object.
- defineProperty(object, property, descriptor) // Defines a new property on an object.
- defineProperties(object, descriptors) // Defines multiple properties on an object.
- entries(object) // Returns an array of the object's [key, value] pairs.
- freeze(object) // Freezes an object, preventing new properties from being added or modified.
- fromEntries(iterable) // Creates an object from an array of key-value pairs.
- getOwnPropertyDescriptor(object, property) // Returns the descriptor for a property.
- getOwnPropertyDescriptors(object) // Returns all property descriptors.
- getOwnPropertyNames(object) // Returns an array of all properties (enumerable and non-enumerable).
- getOwnPropertySymbols(object) // Returns an array of all symbol properties.
- getPrototypeOf(object) // Returns the prototype of the specified object.
- hasOwnProperty(property) // Checks if the object has the specified property as its own.
- is(value1, value2) // Compares two values to see if they are the same.
- isExtensible(object) // Checks if an object can have new properties added.
- isFrozen(object) // Checks if an object is frozen.
- isSealed(object) // Checks if an object is sealed.
- keys(object) // Returns an array of the object's own enumerable property names.
- preventExtensions(object) // Prevents any new properties from being added to an object.
- seal(object) // Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
- setPrototypeOf(object, prototype) // Sets the prototype of an object.
- values(object) // Returns an array of the object's own enumerable property values.


// Function Methods

- function greet() { return "Hello"; }
- greet.apply(null);             // 'Hello'
- greet.call(null);              // 'Hello'
- const bound = greet.bind();    // returns a new bound function
- bound();                       // 'Hello'
- apply(thisArg, argsArray) // Calls a function with a given `this` value and arguments provided as an array.
- bind(thisArg, arg1, ..., argN) // Creates a new function that, when called, has its `this` set to the provided value.
- call(thisArg, arg1, ..., argN) // Calls a function with a given `this` value and individual arguments.
// - toString() // Returns the string representation of the function.

// Number Methods

- Number.isInteger(10);          // true
- Number.parseInt("10px");       // 10
- (3.14159).toFixed(2);          // '3.14'
- (123).toString(16);            // '7b'
- isFinite(value) // Checks if the value is a finite number.
- isInteger(value) // Checks if the value is an integer.
- isNaN(value) // Checks if the value is NaN (Not a Number).
- isSafeInteger(value) // Checks if the value is a safe integer (within the safe range).
// - parseFloat(string) // Parses a string and returns a floating-point number.
- parseInt(string, radix) // Parses a string and returns an integer of the specified radix.
- toExponential(fractionDigits) // Returns the string of a number in exponential notation.
- toFixed(digits) // Returns a string of a number with a fixed number of decimal places.
- toPrecision(precision) // Returns a string of a number with a specified precision.
// - toString(radix) // Converts the number to a string, optionally using a specified radix.
- valueOf() // Returns the primitive value of the number.


// Math Methods

- Math.abs(-5);                  // 5
- Math.max(1, 2, 3);             // 3
- Math.random();                 // random between 0 and 1
- Math.sqrt(9);                  // 3
- abs(x) // Returns the absolute value of a number.
- ceil(x) // Rounds a number upward to the nearest integer.
- floor(x) // Rounds a number downward to the nearest integer.
- round(x) // Rounds a number to the nearest integer.
- max(x1, x2, ..., xn) // Returns the largest of zero or more numbers.
- min(x1, x2, ..., xn) // Returns the smallest of zero or more numbers.
- pow(base, exponent) // Returns base raised to the power of exponent.
- random() // Returns a pseudo-random number between 0 and 1.
- sqrt(x) // Returns the square root of a number.


// Date Methods

- const now = new Date();
- now.getFullYear();             // current year
- now.getMonth();                // current month (0-11)
- now.toLocaleDateString();      // formatted date
- now.setDate(15);               // set date to 15th
- Date.now();                    // timestamp in milliseconds
- getDate() // Returns the day of the month (1-31).
- getDay() // Returns the day of the week (0-6).
- getFullYear() // Returns the year (4 digits).
- getHours() // Returns the hour (0-23).
- getMilliseconds() // Returns the milliseconds (0-999).
- getMinutes() // Returns the minutes (0-59).
- getMonth() // Returns the month (0-11).
- getSeconds() // Returns the seconds (0-59).
- getTime() // Returns the number of milliseconds since January 1, 1970.
- now() // Returns the current date and time in milliseconds since January 1, 1970.
- parse(dateString) // Parses a date string and returns the number of milliseconds since January 1, 1970.
- setDate(day) // Sets the day of the month.
- setFullYear(year, month, day) // Sets the full year, optionally including month and day.
- setHours(hour, min, sec, ms) // Sets the hour.
- setMilliseconds(ms) // Sets the milliseconds.
- setMinutes(min, sec, ms) // Sets the minutes.
- setMonth(month, day) // Sets the month.
- setSeconds(sec, ms) // Sets the seconds.

// JSON Methods

- const obj = JSON.parse('{"name":"John"}');  // { name: 'John' }
- JSON.stringify({ name: 'John' });           // '{"name":"John"}'

// Promise Methods

- Promise.resolve(42).then(x => console.log(x));   // logs 42
- Promise.all([p1, p2]).then(results => console.log(results));

// DOM Methods

- document.getElementById('myId');  // gets element by ID
- document.querySelector('.class'); // gets first element matching selector
- element.setAttribute('src', 'img.jpg'); // sets attribute
- element.appendChild(newElem);     // adds a child element