// Ülesanne: Luua array numbritega ja leida spetsiifilise numbri index
const array = [1,2,3,4,5,6, "hi"]

// Lahendus:
function findMyIndex(array, element){
  return array.indexOf(element) // võib ka näiteks .findIndex()
}

console.log(findMyIndex(array, 4))

// Arrow functions
// Ülesanne: Funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

// Lahendus
function addNumbers(number1, number2){
  return number1 + number2
}

console.log(addNumbers(3,5))

// Ülesanne: ümber kirjutada arrow funktsioonina

// Lahendus:
const arrowFunction = (num1, num2) => {
  return num1 + num2
}

console.log(arrowFunction(3, 5))

// Ülesanne: ümber kirjutada shorthand arrow funktsioonina

// Lahendus:
const arrowFunction2 = (num1, num2) => num1 + num2

// const arrow = () => { return ... }
// const arrow = () => (return) ...

console.log(arrowFunction(3, 5) == arrowFunction2(3, 5))

console.log(arrowFunction2(3, 5))

// Nested 

// Ülesanne: 
// Luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:
// console.log(addNumbers2(3)(4))


// Lahendus: 

// function addNumbers2(num1, num2){
//   return function addNumbersHelper(num2){
//     return num1+num2
//   }
// }

// Ülesanne: Looge samast funktsioonist arrowfunktsioon

// Lahendus:

const addNumbers2 = num1 => num2 => num1+num2

console.log(addNumbers2(3)(4))

// Ülesanne: AF printida "Hello (nimi)" ja kasutada string literals

const nameRaimo = "Raimo"
const name = `Name is ${nameRaimo}`
// ${variableName}

// Lahendus:
const nameString = name => `Name is ${name}`;

console.log(nameString("Raimo"))

// Teema: map ja filter

const numberArray = [1,2,3,4,5]

// Ülesanne: liita igale elemendile juurde +5, et uuel muutujale omandaks [6, 7, 8, 9, 10] väärtuse

// Lahendus:
// const newArray = numberArray.map(element => element + 5)
// .map(() => {})

// Käime läbi ka erinevaid 3 parameetrit, mida saab map ja filtriga välja kutsuda

const newArray = numberArray.map((element, index, array) => {
    console.log({ 
      element: element,
      newElement: element + 5, 
      "index": index, 
      array 
    })

    return element + 5
  })


// Muudame objektiks, et console.log-ides oleks paremini märgata
console.log({ newArray })

// Filter

// Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

const filteredArray = numberArray.filter(element => element < 4)

console.log(1 < 4)

console.log({ numberArray, filteredArray })


// Ülesanne: Luua nimede massivi põhjal objektide massiv, mis koosneb sellisel kujul objektidest:

// {
//   name: 'Anni', 
//   age: 24,
//   email: 'anni@company.com',
//   address: 'Anni Street 55',
//   username: 'innA'
// }

// const data = ...

// const data = names.map(name => {
//   return {
//     name: ...
//   }
// })

// const data = names.map(name => ({ name: ... }))

const names = ['Juku', 'Mari', 'Jaan', 'Anni']

const data = names.map(name => {
  return {
    name, 
    age: name.length + 20,
    email: `${name.toLowerCase()}@company.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join("")
  }
})

console.log(data)

console.log(data[0])

const oldJuku = data[0]

// Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

const newJuku = {
  ...oldJuku,
  height: 175
}

// Tahame muuta eelnevatest andmetest midagi jättes teised samaks

const evenNewerJuku = {
  ...newJuku,
  age: 99
}

console.log({ newJuku, evenNewerJuku })