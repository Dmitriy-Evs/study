let str = "asda  sdasd laksdj dn laksd. еще какие-то слова и предлоги в конце."

// Метод преобразуется строку в массив, разделяя каждое слово сепаратором из аргумента метода
let strArr = str.split(/ |, |\.|\. |: |\? |! |\s/)

// Теперь удалим пустные строки (случаи с двойным пробелом). Метод создаем новый массив, не изменяет текущий
let strArrNoSpace = strArr.filter(strArr => strArr !== "");

console.log("Текст содержит " + strArrNoSpace.length + " слов.") //Выводим количество слов в массиве

//Находим самое длинное слово с помощью метода sort(). В него можно задать любые критерии для сравнения.
//Метод использует свой алгоритм сорировки (там сложна). Если значение а меньше b, то значение а окажется впереди.
sortStr = strArrNoSpace.sort(((a, b) => a.length - b.length))

//Если самых длинных слов несколько, нужно найти их все. Найдем длину последнего элемента массива.
let longestWord = sortStr[sortStr.length - 1].length

console.log("Самые длинные слова это:")
// Выведем самые длинные слова, сравнив их длину с длиной последнего элемента
for (i = 0; i <= sortStr.length - 1; i++){
    if (sortStr[i].length === longestWord)
        console.log(sortStr[i]) // Если у условия только одна строчка исполняемого кода, то можно опусить фигурные скобки
}

//Тут я прикрепил то, что выводится в консоль:
/* Текст содержит 12 слов.
Самые длинные слова это:
какие-то
предлоги */
