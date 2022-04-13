// С ниже приведенным массивом решить следующие задачи.
// Все функции и данные должны быть протипизированы:

// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
}
const users: IUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]


//Task_1====================Создать строку из имен пользователей через запятую====================
function users_names (users: IUser[]): string {
    let allUsersnames: string[]  = [];
    for(let i=0; i < users.length; i++) {
        allUsersnames.push(users[i].name)
    }
    const stringOfUserNames = allUsersnames.join(', ')
    return stringOfUserNames
}

//Task_2====================Посчитать общее количнство машин у пользователей====================
function amountOfUsersCars (users: IUser[]): number {
    let count: number = 0;  
    users.map(el => {
         if (el.cars !== undefined){
             count += el.cars.length;
          }
      })
    return count
  }
  
//Task_3====================Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования====================
function educatedUsers(users: IUser[]): string {
    let withEducation: string[] = [];
    users.forEach((element) => {
      if (element.hasEducation == true) {
        withEducation.push(element.name);
      }
    });
    const usersWithEducation: string = withEducation.join(', ')
    return usersWithEducation;
  }

//Task_4====================Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных====================
function hasAnimals (users: IUser[]): string {
    let withAnimals: string[] = [];
    users.forEach((element) => {
      if (element.animals !== undefined) {
        withAnimals.push(element.name);
      }
    });
    const usersWithAnimals: string = withAnimals.join(', ')
    return usersWithAnimals;
  }

//Task_5====================Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую====================
function hasCars (users: IUser[]): string {
    let withCars = [];
    users.forEach((element) => {
      if (element.cars !== undefined) {
        withCars.push(element.cars);
      }
    });
    const allCars: string = withCars.join(',')
    return allCars;
  }


console.log('All users: ' + users_names (users))
console.log('Total amount of users cars: ' + amountOfUsersCars (users))
console.log('Users with education: ' + educatedUsers(users))
console.log('Users with animals: ' + hasAnimals(users))
console.log('Users cars: ' + hasCars(users))