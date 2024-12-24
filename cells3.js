//Первоначальные переменные для области отрисовки
let outerRow = 10
let outerColumn = 10
let pauseDuration = 2000

//Создаем случайную координату, исключаем значения на границах фигуры
function createNewRandomPoint(row, column) {
  let pointY = Math.floor(Math.random() * (row - 2)) + 2
  let pointX = Math.floor(Math.random() * (column - 2)) + 2
  return [pointY, pointX]
}

//Функция для провери текущей рандомной координаты и координаты из массива рандомных координат
function areEqual(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}

//Проверяем существование координаты в массиве перед ее созданием
function isExist(point, pointsArr) {
  for (let i = 0; i <= pointsArr.length - 1; i++) {
    let point2 = pointsArr[i]
    if (areEqual(point, point2)) {
      return true
    }
  }
  return false
}

//Создаем массив рандомных координат, используя функцию проверки дублирования
function createArrayRandomPoins(countPoints) {
  let resultArr = [];
  for (p = 0; p <= countPoints - 1; ) {
    let createdOneDot = createNewRandomPoint(outerRow, outerColumn);
    if (!isExist(createdOneDot, resultArr)) {
      resultArr.push(createdOneDot)
      p++
    }
  }
  return resultArr;
}

// Функция для последовательного заполнения всех внутренних координат фигуры
function isExistBeforeP(p, point, pointsArr) {
  for (let o = 0; o <= p; o++) {
    if (areEqual(point, pointsArr[o])) {
      return true
    }
  }
  return false
}

//Функция для зарержки перед следующей отрисовкой фигуры
function pause(duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {}
}

function blinkFullRect(row, column) {
  //Создаем массив случайных координат
  let outerCountPoints = row * column - (row * 2 + column * 2 - 4)
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
            if (isExistBeforeP(p, currentPoint, randomPointsArr)) { // Тут используем логику из нескольких функций для отрисовки в нужной координате "0"
              result += "0"
            } else {
              result += " "
            }
          }
        }
      }
      console.log(result)
    }
    pause(300);
    process.stdout.write("\x1Bc") //Метод очистки консоли для VS Code
  }
}

blinkFullRect(outerRow, outerColumn)