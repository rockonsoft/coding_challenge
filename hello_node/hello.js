console.log('Hello World')

const listOfFruits = ['Apple', 'Oranges', 'Bananas', 'Kiwis']
console.log('FOR')
for (let i = 0; i < listOfFruits.length; i++) {
  console.log(listOfFruits[i])
}
console.log('FOR EACH')
listOfFruits.forEach((element) => {
  console.log(element)
})

console.log("I've looked at maps() and it's a silly function to use in this case because it makes a new array each time it's used")
