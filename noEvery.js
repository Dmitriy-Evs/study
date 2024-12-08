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
let randomPointsArr = [[],[]]; // Создаем массив, который содержит вложенные массивы, в котором хранятся случайные точки
let createdOneDot = []; // Это массив, содержащий одну точку, который будет добавлен в основной.
//console.log("Количество точек " + countPoints);

//Создаем случайную точку, исключаем значения на границах
function createArrayOfDot(row, column) {
    pointY = Math.floor(Math.random() * (row - 2)) + 2;
    pointX = Math.floor(Math.random() * (column - 2)) + 2;
    createdOneDot = [pointY, pointX];
}

//Создаем первую точку
createArrayOfDot(row, column);
//Создаем первую точку в массиве randomPointsArr


/* randomPointsArr[0][0] = createdOneDot[0]
randomPointsArr[0][1] = createdOneDot[1] */
console.log("Весь массив перед циклом " + randomPointsArr)
//console.log(createdOneDot)


for (let p = 0; p <= countPoints;) {
    console.log("Точка в начале цикла " + createdOneDot)
    

    //for (let j = 0; j <= createdOneDot.length - 1; j++) {
        if (createdOneDot[0] !== randomPointsArr[p][0] && createdOneDot[1] !== randomPointsArr[p][1]) {
            randomPointsArr.push(createdOneDot);
            p++; //Увеличиваем шаг только тогда, когда точка создана
        } else {
            createArrayOfDot(row, column); //Иначе создаем новую
            //console.log(createdOneDot);
        }
    //}
}

// Проверяем, что каждый элемент массива randomPointsArr не равен createdOneDot
    //Условие проверки я спросил у гпт

    /* randomPointsArr.every((value) =>
      value.some((val, index) => val !== createdOneDot[index]) // Переписать без every
    ) */
console.log(randomPointsArr);
console.log("Длина главного массива " + randomPointsArr.length);