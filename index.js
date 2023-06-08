
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
    let buttonCol = document.createElement('td');

    aNameCol.innerText = aName;
    aLocationCol.innerText = aLocation;
    aDateCol.innerText = aDate;

    let button = document.createElement('button');
    button.classList = 'btn btn-warning';
    button.innerText = 'Remove';
    button.addEventListener('click', function () {
        deleteRow(formRow);
    });

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
    myAnimalTable.deleteRow(row.rowIndex);
}