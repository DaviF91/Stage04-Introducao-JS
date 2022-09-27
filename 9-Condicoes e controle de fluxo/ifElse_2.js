// if ... else
// dentro do ( temos uma condicional)

let temp = 36
let hightTemp = temp >= 37.5
let mediumTemp = temp < 37.5 && temp >=37

if(hightTemp){
  console.log('Febre alta')
} else if(mediumTemp) {
  console.log('Febre moderada')
} else {
  console.log('saudavel')
}