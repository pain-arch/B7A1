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