/* 
Creating form
*/

let myForm = document.createElement('form')
let myAnimalLabel = document.createElement('label')
let myAnimalInput = document.createElement('input')

myAnimalLabel.innerHTML = 'Animal'

myForm.append(myAnimalLabel)
myForm.append(myAnimalInput)

document.body.append(myForm)

let myLocationLabel = document.createElement('label')
let myLocationInput = document.createElement('input')

myLocationLabel.innerHTML = 'Location'

let myDateLabel = document.createElement('label')
let myDateInput = document.createElement('input')

myDateLabel.innerHTML = 'Day/Month/Year'

mySubmitButton = document.createElement('button')
mySubmitButton.innerHTML = 'Submit'

myForm.append(myLocationLabel)
myForm.append(myLocationInput)

myForm.append(myDateLabel)
myForm.append(myDateInput)

myForm.append(mySubmitButton)

console.log(myForm)

myForm.style.backgroundColor = 'rgb(210, 55, 25)'
myForm.style.color = 'white'
myForm.style.fontFamily = 'courier'
myForm.style.textAlign = 'center'

myForm.style.display = 'flex'
myForm.style.alignItems = 'center'
myForm.style.flexDirection = 'column'
myForm.style.maxWidth = '500px'



/* 
Creating table
*/

let myTable = document.createElement('table')
let myTr = document.createElement('tr')
let myTdAnimal = document.createElement('td')
let myTdLocation = document.createElement('td')
let myTdDate = document.createElement('td')

myTdAnimal.innerHTML = 'Animal'
myTdLocation.innerHTML = 'Location'
myTdDate.innerHTML = 'Date'

myTable.append(myTr)
myTr.append(myTdAnimal)
myTr.append(myTdLocation)
myTr.append(myTdDate)

document.body.append(myTable)

myTable.style.textAlign = 'center'
myTable.style.color = 'rgb(210, 55, 25)'
myTable.style.border = '3px dotted rgb(237, 142, 74)'
myTable.style.fontFamily = 'courier'
myTable.style.maxWidth = 'flex'

console.log(myTable)

