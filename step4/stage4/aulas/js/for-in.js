// FOR IN -> Objetos

let person = {
  name: 'Luiz',
  age: 24,
  city: 'Boa Vista',
  state: 'Roraima',
  country: 'Brasil'
}

for(let property in person) {
  // console.log(property)
  console.log(person[property])
}
// Acessar propriedades de um objeto como se fosse um Array de maneira dinâmica