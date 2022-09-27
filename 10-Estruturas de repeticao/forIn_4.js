//for..in

let person = {
  name: 'johan',
  age: 30,
  weight: 87.4,
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}