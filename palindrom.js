let userStr = "Довод".toLowerCase() // Тут юзер вводит свою строку, мы ее сразу приводим к нижнему регистру, т.к. js чувствителен
let newUserStr = "" // Создаем пустую строку, в которую будем поздсавлять символы, перебирая их с конца в цикле ниже

// Тут все должно быть понятно, при каждом цикле мы в новую строку кладем по одному символу с конца начальной строки
for (let i = 1; i <= userStr.length; i++){
    newUserStr = newUserStr + (userStr[userStr.length - i])
}

// Ну тут понятно
if (userStr === newUserStr){
    console.log(newUserStr + " является палиндромом для твоей строки " + userStr)
} else {
    console.log(newUserStr + " не является палиндромом для твоей строки " + userStr)
}
