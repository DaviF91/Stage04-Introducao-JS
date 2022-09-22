// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável
console.log('2:')
console.log(typeof weight)

/* 3. Declare uma variavel e atribua valores para cada um dos dados:
  name: string
  age: number (integer)
  stars: number (float)
  isSubscriber: boolean
*/
let name, age, stars, isSubscribe

name = 'Davi'
age = 31
stars = 12.5
isSubscribe = true

console.log('3:')
console.log(typeof stars)

/* 4. A variavel student abaixo é de que tipo de dado ?
    4.1. Atribua a ela as mesmas propriedades e valores do exercício 3
    4.2 mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <weight> kg.
      
      Atenção, substitua <name> <age> <weight> pelos valores de cada propriedade do objeto */

let student = {
  name: 'Davi',
  age: '31',
  weight: '65.4'
}

console.log('4:')
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio*/

let students = []

/*6. Reatribua valor para a variável acima, colocando dentro dela o objeto, mas usar o objeto criado e inserir ele no Array */

students = [student]

console.log('6:')
console.log(students)

/*7. Coloque no console o valor da posição zero do Array acima */
console.log('7:')
console.log(students[0])

/*8. Crie um novo student e coloque na posição 1 do Array students */
const john = {
  name: 'John',
  age: 27,
  weight: 85.9,
  isSubscribe: true
}
// uma forma de fazer:
// students = [
//   student,
//   john
// ]

// outra forma
students[1] = john
console.log('8:')
console.log(students[1])

/*9. Sem rodar o código responda qual é a resposta do código abaixo e proque? Após sua resposta, rode o código e veja se você acertou.
console.log(a)
var a = 1 */

// R: A resposta será undefined porque a variavel so foi declarada após o console
console.log(a)
var a = 1
