//Первоначальные переменные
let row = 10;
let column = 10;

//Считаем количество точек в зоне для заполнения
let outerCountPoints = row * column - (row * 2 + column * 2 - 4);
//let randomPointsArr = []; // Создаем массив, который содержит вложенные массивы, в котором хранятся случайные точки
//console.log("Количество точек " + countPoints);

//Создаем случайную точку, исключаем значения на границах
function createArrayOfDot(row, column) {
    let pointY = Math.floor(Math.random() * (row - 2)) + 2;
    let pointX = Math.floor(Math.random() * (column - 2)) + 2;
    return [pointY, pointX]
}
//
console.log("Создаем одну точку " + createArrayOfDot(row, column))

function createArrayRandomPoins(countPoints) {
    let randomPointsArr = []
    for (p = 0; p <= countPoints - 1;) {
        let createdOneDot = createArrayOfDot(row, column)
        if (!isExist(createdOneDot, randomPointsArr)) {
            randomPointsArr.push(createdOneDot);
            p++;
        }
    } return randomPointsArr
}

console.log("Создаем массив рандомных точек " + createArrayRandomPoins(outerCountPoints))

function isExist(point, pointsArr) {
    for (let i = 0; i <= pointsArr.length - 1; i++) {
        let point2 = pointsArr[i]
        if (point[0] === point2[0] && point[1] === point2[1]) {
            return true
        }
    } return false
}

/* randomPointsArr.every((value) =>
  value.some((val, index) => val !== createdOneDot[index]) // Переписать без every
) */

//console.log(createArrayRandomPoins(countPoints));
//console.log("Длина главного массива " + randomPointsArr.length);

//Прочитать три функции по шагам и переписать селлс3