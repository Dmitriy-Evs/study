let randomPointsArr = [1, 3, 5, 2, 4];

//Выведем строчку из 10 символов. Сначала все все символы *, затем в случайном порядке заменяем их на 0 и выводим строчку
outerColumn = 5;

function print(column, arr) {
  let result = "";
  let point = [];
  for (let j = 0; j <= arr.length - 1; j++) {
    point.push(arr[j]);
    console.log(point);
    for (let i = 0; i <= column - 1; i++) {
      if (i === point[i + 1]) {
        result += "0";
      } else {
        result += "*";
      }
    }
    console.log(result);
    result = "";
  }
}

print(outerColumn, randomPointsArr);
