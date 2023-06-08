
/* 
Creating table
*/

let myAnimalTable = document.createElementById('myAnimalTable');

function createAnimal () {
    let aName = document.getElementById('aName').value;
    let aLocation = document.getElementById('aLocation').value;
    let aDate = document.getElementById('aDate').value;
    let aNameCol = document.createElement('td');
    let aLocationCol = document.createElement('td');
    let aDateCol = document.createElement('td');

    aNameCol.innerHTML = aName;
    aLocationCol.innerHTML = aLocation;
    aDateCol.innerHTML = aDate;

    let formRow = myAnimalTable.insertRow();
    formRow.appendChild(aNameCol);
    formRow.appendChild(aLocationCol);
    formRow.appendChild(aDateCol);

    document.getElementById('aName').value = "";
    document.getElementById('aLocation').value = "";
    document.getElementById('aDate').value = "";
}

function deleteRow(row) {
    myAnimalTable.deleteRow(row.rowIndex);
}