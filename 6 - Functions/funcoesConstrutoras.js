// Aula funções construtoras

/* 
    Function() constructor

    *expressão new
    *criar um novo objeto
    * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function(){
    return this.name + " andando"
  }
}
const davi = new Person("davi")
const joao = new Person("joao")
console.log(davi.walk())
console.log(joao.walk())

// molde para criar diversos objetos
// temos a expressão new que sera usada na frente da função, ela automaticamente vai retornar um objeto, dentro podemos ir fazendo o molde do objeto usando a palavra "This".
// já existem diversas funções construtoras no JavaScript
//Ex. abaixo
let date = new Date ("2020-12-01")
console.log(date)