// throw

function satMyName(name){
  if (name===''){
    throw new Error("Nome é necessário")
  }
  console.log(name)
}

//try ... catch

try {
  satMyName('Davi')
} catch(e){
    console.log(e)
}

console.log('após o try/catch')