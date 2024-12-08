function printFilledRect(row, column) {
  for (let i = 1; i <= row; i++) {
    // зашли на строчку
    let result = "";
    for (let j = 1; j <= column; j++) {
      result += "*";
    }
    console.log(result);
  }
}
//printFilledRect(3,4)

function printRect(row, column) {
  for (let i = 1; i <= row; i++) {
    // зашли на строчку
    let result = "";
    for (let j = 1; j <= column; j++) {
      if (i === 1 || i === row || j === column || j === 1) {
        result += "*";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}
//printRect(3,4)

function printNiceRect(row, column) {
  for (let i = 1; i <= row; i++) {
    // зашли на строчку
    let result = "";
    for (let j = 1; j <= column; j++) {
      if ((i === 1 || i === row) && (j === column || j === 1)) {
        result += "*";
      } else {
        if (i === 1 || i === row) {
          result += "-";
        } else if (j == 1 || j === column) {
          result += "|";
        } else {
          result += " ";
        }
      }
    }
    console.log(result);
  }
}

//printNiceRect(3, 4)


function printZero(row, column) {
  // Определение случайной точки
  function randomRaw(row) {
    let rowRandom = Math.floor(Math.random() * (row - 2)) + 2;
    return rowRandom;
  }

  function randomColumn(column) {
    let columnRandom = Math.floor(Math.random() * (column - 2)) + 2;
    return columnRandom;
  }

  let resultRundomRaw = randomRaw(row);
  let resultRundomColumn = randomColumn(column);
  console.log(resultRundomRaw, resultRundomColumn);
  for (let i = 1; i <= row; i++) {
    // зашли на строчку
    let result = "";
    for (let j = 1; j <= column; j++) {
      if ((i === 1 || i === row) && (j === column || j === 1)) {
        result += "*";
      } else {
        if (i === 1 || i === row) {
          result += "-";
        } else if (j == 1 || j === column) {
          result += "|";
        } else {
          if (i === resultRundomRaw && j === resultRundomColumn) {
            result += "0";
          } else {
            result += " ";
          }
        }
      }
    }
    console.log(result);
  }
}


let row = 10
let column = 10
let pauseDuration = 2000
function pause(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

//Функция для моргания прямоугольника
function blinkRect(row, column, pauseDuration){
  while (true) {
    printZero(row, column);
    pause(pauseDuration);
    process.stdout.write("\x1Bc");
  }
} 

blinkRect(row, column, pauseDuration)