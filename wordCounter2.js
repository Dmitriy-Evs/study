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
function checkWord(i){
    if (str[i] !== " " && str[i] !== "." && str[i] !== "," && str[i] !== "!" && str[i] !== "?")
        if (str[i + 1] === " " || str[i + 1] === "." || str[i + 1] === "," || str[i + 1] === "!" || str[i + 1] === "?"){
            wordsCounter++
        } 
}

for (i = 0; i <= str.length - 1; i++){
    checkWord(i)
}
console.log(`В тексте ${wordsCounter} слов.`)
