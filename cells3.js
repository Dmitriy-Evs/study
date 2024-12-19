//Первоначальные переменные
let outerRow = 10;
let outerColumn = 10;
let pauseDuration = 2000;

//Считаем количество точек в зоне для заполнения


//Создаем случайную точку, исключаем значения на границах
function createNewRandomPoint(row, column) {
  let pointY = Math.floor(Math.random() * (row - 2)) + 2;
  let pointX = Math.floor(Math.random() * (column - 2)) + 2;
  return [pointY, pointX]
}

//Проверяем существование точки перед ее созданием
function isExist(point, pointsArr) {
  for (let i = 0; i <= pointsArr.length - 1; i++) {
    let point2 = pointsArr[i]
    if (areEqual(point, point2)) {
      return true
    }
  } return false
}

//Создаем массив случайных точек
function createArrayRandomPoins(countPoints) {
  let resultArr = []
  for (p = 0; p <= countPoints - 1;) {
    let createdOneDot = createNewRandomPoint(outerRow, outerColumn)
    if (!isExist(createdOneDot, resultArr)) {
      resultArr.push(createdOneDot);
      p++;
    }
  } return resultArr
}

function areEqual(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1] 
}

// Вынести в функцию проверку уже отрисованных точек на итерации цикла p
function existBeforeP(p, point, pointsArr){
  //Цикл проверяет каждый элемент массива, при этом он должен сохранить предыдущий результат и показать его на следующей отрисовке прямоугольника
  for (let o = 0; o <= p; o++){
    if (areEqual(point, pointsArr[o])){
      return result += "0"
    }
  }
}


function blinkFullRect(row, column) {
  // process.stdout.write("\x1Bc"); //Чистим консоль
  //Создаем массив случайных точек
  let outerCountPoints = row * column - (row * 2 + column * 2 - 4);
  let randomPointsArr = createArrayRandomPoins(outerCountPoints)
  for (p = 0; p < outerCountPoints; p++) {
    // В циклах i и j мы рисуем прямоугольник
    for (let i = 1; i <= row; i++) {
      // Зашли на строчку
      let result = "";
      for (let j = 1; j <= column; j++) {
        let currentPoint = [i, j]
        //Двигаемся вправо, по колонкам
        if ((i === 1 || i === row) && (j === column || j === 1)) {
          result += "*";
        } else {
          if (i === 1 || i === row) {
            result += "-";
          } else if (j === 1 || j === column) {
            result += "|";
          } else {
            if (existBeforeP(p, currentPoint, randomPointsArr)) { 
              result += "0";
            } else {
              result += " ";
            }
          }
        }
      }
      console.log(result);
    }
    pause(199);
    process.stdout.write("\x1Bc");
    //console.log(dotI, dotJ);
  }
}


function pause(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) { }
}

//Функция для моргания прямоугольника (сейчас не используется)
/* function blinkRect(row, column, pauseDuration) {
  for (p = 0; p <= randomPointsArr.length - 1; p++) {
    printZero(row, column);
    pause(pauseDuration);
    process.stdout.write("\x1Bc");
  }
} */

blinkFullRect(outerRow, outerColumn);
//blinkRect(row, column, pauseDuration)
