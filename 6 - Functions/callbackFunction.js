// Aula Callback function
//Callback - chamar de volta, é uma função quie está passando como parametro uma outra função


function sayMyName(name){
  console.log('antes de executar a função callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(
  () => {
      console.log('estou em uma callback')
  }
)

// Ele salva a função na memoria, executa o sayMyName, ao executar manda pra dentro da função e ela recebe como name, um novo valor que é uma função.