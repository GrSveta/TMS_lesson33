//С ниже приведенным объектом решить следующие задачи:

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

//1
const strng = Object.keys(subjects).join(', ')
console.log(strng)


//2
const val = Object.values(subjects)
let studs = amount1()
    function amount1(subjects, values) {
    return val.reduce((priv, cur) => priv + cur.students, 0)
    }
let teachs =amount2()
function amount2(subjects, values) {
    return val.reduce((priv, cur) => priv + cur.teachers, 0)
}
const total = studs + teachs
const newO = {studs, teachs, total}
console.log(newO);

//3

function average(subjects) {
    return val.reduce((priv, cur) => priv + cur.students / val.length, 0)
}
console.log(average(subjects));

//4
function allSubj(subjects){
    const bob = Object.keys(subjects)
    return bob.map(item => {return item = {item}})
}
console.log(allSubj(subjects))

//5
function sortTeachs(subjects){
    const bob = Object.keys(subjects)
      return bob.sort((priv, cur) => subjects[cur].teachers - subjects[priv].teachers)
  }
  console.log(sortTeachs(subjects))


//6 Написать функцию, которая будет возвращать сумму всех чисел во всех массивах
const matrix = [[1,2], [3,2], [5, 6, 2], [4]]
function summa(matrix) {
    return matrix.
           flat().
           reduce((priv, cur) => priv + cur)};

console.log(summa(matrix));