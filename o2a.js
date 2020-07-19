// const obj = {
//   database : 'A database is an organized collection of data',
//   api : "An API is a server that doesn't send HTML. Instead, APIs sends only data, often in JSON.",
//   client: ' A client is a program that requests data from a server.'
// }

// const arrOfKeys = Object.entries(obj)

// const concatedstr = arrOfKeys.map((entry) => {

//   const [thing, expl] = entry

//   return `a ${thing} is ${expl}`

// })

// console['log'](concatedstr)



// console['log']('_______________')


// const formatted = arrOfKeys.join()

// console['log'](formatted)


const steps = ['add', 'commit', 'push']

const standard = steps.join()
console.log('default test:', standard)

const dash = steps.join(' - ')
console.log('dash test:', dash)

const empty = steps.join('')
console.log('empty test:', empty)

const line = steps.join('\n')
console.log('line test:', line)