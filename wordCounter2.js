let str = " Привет! Как твои  дела, какой-то там сотрудник? Ну и ладно! !!  "
//Вариант с массивом
let separator = []
//let strArr = []
// Найдем индекс всех разделителей и запишем его в массив
for (i = 0; i<= str.length; i++){
    if (str[i] === " " || str[i] === "." || str[i] === "," || str[i] === "!" || str[i] === "?"){
        separator.push(i)
    }
}

//Если разница между двумя соседними элементами массива >1 - то перед нами слово и запишем его в переменную
let wordsCounter = 1 //Считаем, что перед первым словом нет сепаратора и задаем его сразу.
for (i = 0; i <= separator.length - 1 ; i++){
    if ((separator[i + 1] - separator[i]) > 1){
        wordsCounter++
    }
}
console.log(`В тексте ${wordsCounter} слов.`)

//Вариант без массива
let wordsCounter = 0
for (i = 0; i <= str.length - 1; i++){
    let notSeparator = (str[i] !== " " && str[i] !== "." && str[i] !== "," && str[i] !== "!" && str[i] !== "?")
    let separatorNext = (str[i + 1] === " " || str[i + 1] === "." || str[i + 1] === "," || str[i + 1] === "!" || str[i + 1] === "?")

    if (notSeparator) { //Тут находим индекс, где слово начинается
        if (separatorNext) // Не совсем понял, но, видимо, тут идет проверка, на разделитель. И если он найден, увеличиваем счетчик и идем дальше
            wordsCounter++       
    }
}
console.log(`В тексте ${wordsCounter} слов.`)
