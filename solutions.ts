export {};

/* 
Assalamualaikum sir, I am Mursalin , and this is my solution to the assignment 1.
if you want to run the code for cheaking the output,you have to take  action .
 1 remove the comment from the code ( line 91 to line 101)
 2 run the code using the command "npx ts-node solutions.ts"
 3 check the output in the terminal. 

*/


// Problem 1: filterEvenNumbers - returns only even numbers from the input array.
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

// Problem 2: reverseString - reverses the input string character by character.
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

// Problem 3: StringOrNumber - union type for values that can be string or number.
type StringOrNumber = string | number;

// Problem 3: checkType - uses a type guard to return "String" or "Number".
function checkType(value: StringOrNumber): "String" | "Number" {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

// Problem 4: getProperty - safely returns an object's property value using a valid key.
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };

// Problem 5: Book - interface representing a book with basic details.
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

// Problem 5: toggleReadStatus - returns a new book object with isRead set to true.
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true
  };
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

// Problem 6: Person - base class for a person.
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Problem 6: Student - inherits Person and adds grade information.
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  // Problem 6: getDetails - returns details in the exact required output format.
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");

// Problem 7: getIntersection - returns common elements from both arrays.
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  const secondArraySet = new Set(secondArray);
  return firstArray.filter((number) => secondArraySet.has(number));
}


// testing the code
/*

console.log("Problem 1 Output:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("Problem 2 Output:", reverseString("typescript"));
console.log("Problem 3 Output (String):", checkType("Hello"));
console.log("Problem 3 Output (Number):", checkType(42));
console.log("Problem 4 Output:", getProperty(user, "name"));
console.log("Problem 5 Output:", toggleReadStatus(myBook));
console.log("Problem 6 Output:", student.getDetails());
console.log("Problem 7 Output:", getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
*/