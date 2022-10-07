const techs = ['js', 'html', 'css']

techs.push('nodejs')
// techs.pop()
techs.unshift('reactjs')
// techs.shift()

console.log(techs.slice(0,2))

console.log(techs.indexOf('reactjs'))
console.log(techs.indexOf('nodejs'))
console.log(techs.indexOf('css'))

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log('---Final---')
console.log(techs)