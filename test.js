let arr1 = [1, 3]
let arr2 = [[2, 4], [1, 3], [3, 7]]


function isExist(point, pointsArr) {
    let isExistValue = false
    for (let i = 0; i <= pointsArr.length - 1; i++) {
        let point2 = pointsArr[i]
        if (point[0] === point2[0] && point[1] === point2[1]){
            isExistValue = true
        }
    } return isExistValue
}

function isExist2(point, pointsArr) {
    for (let i = 0; i <= pointsArr.length - 1; i++) {
        let point2 = pointsArr[i]
        if (point[0] === point2[0] && point[1] === point2[1]){
            return true
        }
    } return false
}


console.log("Результат выполнения функции: " + isExist2(arr1, arr2))