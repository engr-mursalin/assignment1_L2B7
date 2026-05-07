# Assignment 1 - L2B7

This repository contains my solutions for the Advanced Problem Solving with TypeScript & OOP assignment.

## Assignment Overview

The assignment includes 7 TypeScript problems focused on:
- function design and array/string operations
- union types and type guards
- generics with key constraints
- interfaces and object extension
- classes, inheritance, and methods

## Files

- `solutions.ts` - main submission file with all 7 problem solutions in one file (as required)
- `my_testing_purpose.ts` - separate runnable file for testing outputs with `console.log`
- `blog-1.md` - blog writing task file
- `blog-2.md` - blog writing task file

## Problem List

1. `filterEvenNumbers(numbers: number[]): number[]`
2. `reverseString(input: string): string`
3. `StringOrNumber` + `checkType(value)`
4. `getProperty<T, K>(obj, key)`
5. `Book` + `toggleReadStatus(book)`
6. `Person` and `Student` with `getDetails()`
7. `getIntersection(firstArray, secondArray)`

## How to Run

Make sure Node.js is installed.

### Run the testing file directly

inside the terminal :

npx ts-node my_testing_purpose.ts


### Or compile and run with Node

```bash
npx tsc my_testing_purpose.ts
node my_testing_purpose.js
```

## Notes

- The main assignment requirement is satisfied in `solutions.ts`.
- The testing file is separate so the main solution structure stays clean.

