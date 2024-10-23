let text = " cccc 12345 12344 v123123  "

//Функция для поиска разделителя
function isSeparator(char) {
    if (char === " " || char === "." || char === "," || char === "!" || char === "?")
        return true
}

//Функция для поиска количества слов в тексте
function countWords(str) {
    let wordsCounter = 0
    let lastSeparator = -1
    for (i = 0; i <= str.length - 1; i++) {
        if (isSeparator(str[i])) {
            lastSeparator = i
        } else {
            if ((i - 1) === lastSeparator)
                wordsCounter++
        }
    }
    return wordsCounter
}

console.log("В твоем тексте " + countWords(text) + " слов.")

//Функция для поиска последнего самого длинного слова
function findLongestWord(str) {
    let longestWord = ""
    let currentWordStart = -1
    //В цикле мы проходимся по всей строке и записываем длину и само слово в переменные
    for (let i = 0; i <= str.length - 1; i++) {
        if (isSeparator(str[i])) { //Сюда мы попдаем всегда, когда есть сепаратор. Это нужно, чтобы отделять слова
            //Это для перезаписи самого длинного слова. Всегда истина после получения первого символа
            if (i - currentWordStart > longestWord.length && currentWordStart !== -1) { //Сюда мы попадем только тогда, когда уже получили хотя бы один символ. В первом цикле не попадаем.
                longestWord = str.slice(currentWordStart, i) //Присваиваем самому длинному слову значение, вырезанное из строки
            }
            currentWordStart = -1
        } else {
            if (currentWordStart === -1) {
                currentWordStart = i
            } else if (i === str.length - 1){ //Добавил проверку, если самое длинное слово в конце, то мы его и запишем
                longestWord = str.slice(currentWordStart, (str.length - 1)[i])
            }
            //currentWordLength++
        }
    } 
    return longestWord
}
console.log("Первое самое длинное слово - " + findLongestWord(text) + ". Оно содержит " + findLongestWord(text).length + " символов.")

// В консоли выводится:
//В твоем тексте 4 слов.
//Первое самое длинное слово - v123123. Оно содержит 7 символов.
