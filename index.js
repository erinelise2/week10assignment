/* 
Creating form


let myForm = document.createElement('form')
let myAnimalLabel = document.createElement('label')
let myAnimalInput = document.createElement('input')

myAnimalLabel.innerHTML = 'Animal'

myForm.append(myAnimalLabel)
myForm.append(myAnimalInput)

document.getElementById('formId').append(myForm)

let myLocationLabel = document.createElement('label')
let myLocationInput = document.createElement('input')

myLocationLabel.innerHTML = 'Location'

let myDateLabel = document.createElement('label')
let myDateInput = document.createElement('input')

myDateLabel.innerHTML = 'Month/Day/Year'

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
myForm.style.maxWidth = '1000px'
*/

/* 
Creating table
*/

let myAnimalTable = document.createElementById('myAnimalTable');

function createAnimalTable () {
    let aName = document.getElementById('aName').value;
    let aLocation = document.getElementById('aLocation').value;
    let aDate = document.getElemendById('aDate').value;
    let aNameCol = document.createElement('td');
    let aLocationCol = document.createElement('td');
    let aDateCol = document.createElement('td');

    aNameCol.innerText = aName;
    aLocation.innerText = aLocation;
    aDateCol.innerText = aDate;

    buttonCol.appendChild(button);

    let formRow = myAnimalTable.insertRow(1);
    formRow.appendChild(aNameCol);
    formRow.appendChild(aLocationCol);
    formRow.appendChild(aDateCol);
    formRow.appendChild(buttonCol);

document.getElementById('aName').value = "";
document.getElementById('aLocation').value = "";
document.getElementById('aDate').value = "";
}

function deleteRow(row) {
    empTable.deleteRow(row.rowIndex);
}

/*
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
myTable.style.border = '3px dotted rgb(210, 55, 25)'
myTable.style.backgroundColor = 'rgb(237, 142, 74)'
myTable.style.width = '500px'
myTable.style.fontFamily = 'courier'

function add(){
    let  = document.getElementById('');
    let  = document.getElementById('');
  
}
console.log(myTable)
*/
