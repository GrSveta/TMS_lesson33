// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//
//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

interface ICountry {
        country: string,
        abbreviation: string,
        city: string,
        currency_name: string,
        population: number
}
const countries: ICountry[] = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959

    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
]

//Task_1================Создать строку из названий стран через запятую================
function contrNames (countries: ICountry[]): string {
   let countries_Names = [];
   for (let i = 0; i < countries.length; i += 1) {
       countries_Names.push(countries[i].country);
   }
   const stringOfCountries: string = countries_Names.join(', ')
   return stringOfCountries
}

//Task_2================Посчитать общее количнство людей в данном массиве стран================
function sumOfPopulation(countries: ICountry[]): number {
    return countries.reduce((priv: number, cur: ICountry): number => priv + cur.population, 0)
}

//Task_3================Создать функцию, которая бы принимала массив стран и сортировала бы их по названию================
function allCountries(countries: ICountry[]): string[] {
    let countries_Names = [];
    for (let i = 0; i < countries.length; i += 1) {
        countries_Names.push(countries[i].country);
    }
    const sortCountries: string[] = countries_Names.sort()
    return sortCountries
}

//Task_4================Получить массив валют================

function allCurrencies(countries: ICountry[]): string[] {
    let currencies = [];
    for (let i = 0; i < countries.length; i += 1) {
        currencies.push(countries[i].currency_name);
    }
    return currencies
}

//Task_5================Получить массив городов, отсортированных в алвавитном порядке================

function allCities(countries: ICountry[]): string[] {
    let cities_Names = [];
    for (let i = 0; i < countries.length; i += 1) {
        cities_Names.push(countries[i].city);
    }
    const sortCitties: string[] = cities_Names.sort()
    return sortCitties
}

//Task_6================Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах================
function averagePopulation(countries: ICountry[]): number {
    const average: number =  countries.reduce((priv: number, cur: ICountry): number => priv + cur.population, 0)/3
    return Math.floor(average)
}

//==================================================================================================================

console.log(contrNames(countries))
console.log('Total population is', sumOfPopulation(countries))
console.log(allCountries(countries))
console.log(allCurrencies(countries))
console.log(allCities(countries))
console.log('Average population is', averagePopulation(countries))