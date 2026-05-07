//Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
    const evenNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        let pushNumber = numbers[i];
        if (pushNumber % 2 === 0) {
            evenNumbers.push(pushNumber);
        }
    }
    return evenNumbers;
};

//Problem 2:
const reverseString = (input: string): string => {
    let reversedOutput: string = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversedOutput = reversedOutput + input[i];
    }
    return reversedOutput;

};


//Problem 3:
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): StringOrNumber => {
    if (typeof input === "string") {
        return "String";
    } else if (typeof input === "number") {
        return "Number";
    } else {
        return "Your input wasn't a 'string' or 'number'."
    }
};


//Problem 4:
const getProperty = <T, K extends keyof T>(object: T, key: K) => {
    return object[key];
};


//Problem 5:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
};

const toggleReadStatus = (book: Book): object => {
    return { ...book, isRead: true };
};


//Problem 6:
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        let details = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
        return details;
    }
};


//Problem 7:
const getIntersection = (fistArray: number[], secondArray: number[]): number[] => {
  const output: number[] = [];

for (let i = 0; i < fistArray.length; i++) {
    
    for (let j = 0; j < secondArray.length; j++) {
      if (fistArray[i] === secondArray[j]) {
        output.push(fistArray[i]);
        break; 
      }
    }
  }

  return output;
};