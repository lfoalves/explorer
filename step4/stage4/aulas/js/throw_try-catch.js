
function syMyName(name) {
  console.log(name)
  if (name == '') {
    throw new Error('Insira nome')
  }
  console.log('Depois do error')
}


try {
  syMyName('')
} catch (e) {
  console.error(e)
}

console.log('Após Try Catch')