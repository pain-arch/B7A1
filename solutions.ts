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