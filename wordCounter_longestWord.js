let text = "  это не оно вот_самое_длинное1!!! и вот_самое_длинное2 после него ? что    ...."

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
function charCounter(str) {
    let charCounter = 0
    let longestWordLength = 0
    let currentWordLength = 0
    let lastSeparator = -1
    let currentWord = ""
    let longestWord = ""
    //В цикле мы проходимся по всей строке и записываем длину и само слово в переменные
    for (i = 0; i <= str.length - 1; i++) {
        if (isSeparator(str[i])) { //Сюда мы попдаем всегда, когда есть сепаратор. Это нужно, чтобы отделять слова
            if (currentWordLength !== 0) { //Сюда мы попадем только тогда, когда уже получили хотя бы один символ. В первом цикле не попадаем.
                if (currentWordLength >= longestWordLength) { //Это для перезаписи самого длинного слова. Всегда истина после получения первого символа
                    longestWordLength = currentWordLength //В первом цикле мы всегда определяем длину самого длинного слова как у текущего
                    longestWord = currentWord //А вот тут мы определяем значение самого длинного слова.
                }
            }
            lastSeparator = i
            charCounter = 0 //Когда встретили сепаратор, обуняем длину слова. В условии ниже так же обнуляется и значение текущего слова. Но самое длинное перезапишется только тогда, когда сработает условие из 38 строки
        } else {
            //Тут мы записываем записываем длину для первого символа и его значение
            if ((i - 1) === lastSeparator) {
                charCounter++
                currentWordLength = charCounter
                currentWord = str[i]
                //А тут мы находимся внутри слова (если перед нами не сепаратор) и увеличиваем счетчик, а так же прибавляем значение текущего символа к уже существующему  
            } else {
                charCounter++
                currentWordLength = charCounter
                currentWord += str[i]
            }
        }
    } return longestWord
}
console.log("Последнее самое длинное слово - " + charCounter(text) + ". Оно содержит " + charCounter(text).length + " символов.")

//В консоли получаем:
//В твоем тексте 9 слов.
//Последнее самое длинное слово - вот_самое_длинное2. Оно содержит 18 символов.
