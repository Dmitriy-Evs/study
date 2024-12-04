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
//console.log("Количество точек " + countPoints);

//Создаем случайную точку, исключаем значения на границах
function createArrayOfDot(row, column) {
  pointY = Math.floor(Math.random() * (row - 2)) + 2;
  pointX = Math.floor(Math.random() * (column - 2)) + 2;
  createdOneDot = [pointY, pointX];
}
//Создаем первую точку
createArrayOfDot(row, column);

for (let i = 1; i <= countPoints; ) {
  // Проверяем, что каждый элемент массива randomPointsArr не равен createdOneDot
  //Условие проверки я спросил у гпт
  if (
    randomPointsArr.every((value) =>
      value.some((val, index) => val !== createdOneDot[index])
    )
  ) {
    randomPointsArr.push(createdOneDot);
    i++; //Увеличиваем шаг только тогда, когда точка создана
  } else {
    createArrayOfDot(row, column); //Иначе создаем новую
  }
}

//console.log(randomPointsArr);

function printZero(row, column) {
  process.stdout.write("\x1Bc"); //Чистим консоль
  // Массив обновляется каждую итерацию, чтобы отрисовать все созданные точки
  let dotI = [];
  let dotJ = [];
  for (p = 0; p <= randomPointsArr.length - 1; p++) {
    // В этом цикле мы берем первую точку из основного массива, который создали заранее и добавляем в массивы для отрисовки
    dotI.push(randomPointsArr[p][1]);
    dotJ.push(randomPointsArr[p][0]);
    for (let i = 1; i <= row; i++) {
      // Зашли на строчку
      let result = "";
      for (let j = 1; j <= column; j++) {
        //Двигаемся вправо, по колонкам
        if ((i === 1 || i === row) && (j === column || j === 1)) {
          result += "*";
        } else {
          if (i === 1 || i === row) {
            result += "-";
          } else if (j === 1 || j === column) {
            result += "|";
          } else {
            for (l = 0; l <= randomPointsArr.length; l++) {
              if (dotI[l] === i && dotJ[l] === j) {
                // Когда мы попадаем на текущую случайную точку, отрисовываем 0
                result += "0";
              }
            }
            result += " "; // Иначе рисуем пробем. Проблема именно тут, программа должна рисовать 0 вместо пробела, а у нас всегда отрисовывается проблел.
          }
        }
      }
      console.log(result);
    }
    pause(199);
    process.stdout.write("\x1Bc");
  }
}

function pause(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

//Функция для моргания прямоугольника (сейчас не используется)
function blinkRect(row, column, pauseDuration) {
  for (p = 0; p <= randomPointsArr.length - 1; p++) {
    printZero(row, column);
    pause(pauseDuration);
    process.stdout.write("\x1Bc");
  }
}

printZero(row, column);
//blinkRect(row, column, pauseDuration)
