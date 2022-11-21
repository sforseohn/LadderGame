/*
- 사다리 높이는 4개라고 가정한다.

- 참여 인원과 높이를 매개변수로 받아서 사다리를 출력하는 printLadder() 함수를 구현한다.

- 가로 개수는 참여 인원 - 1, 
- 세로 개수는 사다리 높이와 동일한 Int 타입 2차원 배열을 만들고

- Math.random으로 랜덤하게 사다리 발판이 있으면 -를 출력하고, 없으면 공백을 출력한다.

발판 사이에는 |로 표시한다.

실행해서 콘솔에 출력되는지 확인한다.
*/

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
    arr.forEach((value) => {
        value.forEach((value) => {
            process.stdout.write(`|${value}`);
        });
        console.log('|\n');
    });
}

