//Первоначальные переменные
let row = 10;
let column = 10;
let pauseDuration = 2000;

//Эти переменные нужны для создания массива из случайных точек
let randomPointY;
let randomPointX;
let pointY;
let pointX;

//Считаем количество точек в зоне для заполнения
let countPoints = row * column - (row * 2 + column * 2 - 4);
let randomPointsArr = []; // Создаем массив, который содержит вложенные массивы, в котором хранятся случайные точки
let createdOneDot = []; // Это массив, содержащий одну точку, который будет добавлен в основной.
console.log("Количество точек " + countPoints);

//Создаем случайную точку, исключаем значения на границах
function createArrayOfDot(row, column) {
    pointY = Math.floor(Math.random() * (row - 2)) + 2;
    pointX = Math.floor(Math.random() * (column - 2)) + 2;
    createdOneDot = [pointY, pointX];
}
//
//randomPointsArr = createdOneDot


for (p = 0; p <= countPoints - 1;) {
    createArrayOfDot(row, column)
    //for (let j = 0; j <= createdOneDot.length - 1; j++) {
    if (isExist(randomPointsArr, createdOneDot)) {
        createArrayOfDot(row, column)
    } else {
        randomPointsArr.push(createdOneDot);
        p++;
    }
}

function isExist(randomPointsArr, createdOneDot) {
    for (let i = 0; i <= randomPointsArr.length - 1; i++) {
        bool = randomPointsArr[i] === createdOneDot
        console.log(bool)
        return bool
    }
}



// Проверяем, что каждый элемент массива randomPointsArr не равен createdOneDot
//Условие проверки я спросил у гпт

/* randomPointsArr.every((value) =>
  value.some((val, index) => val !== createdOneDot[index]) // Переписать без every
) */
console.log(randomPointsArr);
console.log("Длина главного массива " + randomPointsArr.length);