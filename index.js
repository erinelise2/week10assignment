
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