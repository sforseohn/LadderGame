// Include process module
const { exit } = require('process');
const process = require('process');
  
// node laddergame.js 3
const args = process.argv[2];

// 사다리 인원이 2명 미만이거나 8명을 초과할 경우 프로그램을 종료
if(args < 2 || args > 8 )
    exit(0);

printLadder(args, 4);

function printLadder(numOfPeople, height) {
    const arr = createTwoDimensionsArray(height, numOfPeople - 1);
    const result = printRandomLines(arr);
    printArr(result);
}

function createTwoDimensionsArray(rows, columns) {
    const arr = Array.from(Array(rows), () => Array(columns).fill(' '));
    return arr;
}

function printRandomLines(arr) {
    const result = arr.map((subArr) => {
        const newArr = subArr.map((value) => {
            const percentage = Math.random();
            if (percentage > 0.5)
                return '-';
            else
                return ' ';
        })
        return newArr;
    });
    return result;
}

function printArr(arr) {
    arr.forEach((subArr) => {
        subArr.forEach((value) => {
            process.stdout.write(`|${value}`);
        });
        console.log('|');
    });
}

