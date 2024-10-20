let text = "  это не оно вот_самое_длинное1!!! и вот_самое_длинное2 после него ? что  "

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
    let longestWordLength = 0
    let currentWordLength = 0
    let lastSeparator = -1
    let longestWord = ""
    //В цикле мы проходимся по всей строке и записываем длину и само слово в переменные
    for (let i = 0; i <= str.length - 1;) {
        if (isSeparator(str[i])) { //Сюда мы попдаем всегда, когда есть сепаратор. Это нужно, чтобы отделять слова
            //Это для перезаписи самого длинного слова. Всегда истина после получения первого символа
            if (currentWordLength > longestWordLength) { //Сюда мы попадем только тогда, когда уже получили хотя бы один символ. В первом цикле не попадаем.
                longestWordLength = currentWordLength //В первом цикле мы всегда определяем длину самого длинного слова как у текущего
                longestWord = str.slice(i - currentWordLength, i) //Присваиваем самому длинному слову значение, вырезанное из строки
            }
            lastSeparator = i
            currentWordLength = 0 //Когда в стретили сепаратор, обуняем длину слова. В условии ниже так же обнуляется и значение текущего слова. Но самое длинное перезапишется только тогда, когда сработает условие из 38 строки
            i++ //Я переместил шаг сюда, чтобы не пропускать сепаратор, иначе я не попадал в условие на 34 строчке, так как у меня теперь есть вложенный цикл на 45
        } else {
            //Теперь этим циклом мы проходимя по слову и увеличиваем счетчик, с попомщью величины которого получаем значение слова на 38 строчке
            while (!isSeparator(str[i]) && i <= str.length - 1) { //Второе условие для того, чтобы мы не выходили за рамки строки, если последним символом не является сепаратор
                currentWordLength++
                i++
            }
        }
    } return longestWord
}
console.log("Последнее самое длинное слово - " + findLongestWord(text) + ". Оно содержит " + findLongestWord(text).length + " символов.")

//Консоль выводит:
//В твоем тексте 9 слов.
//Последнее самое длинное слово - вот_самое_длинное1. Оно содержит 18 символов.
