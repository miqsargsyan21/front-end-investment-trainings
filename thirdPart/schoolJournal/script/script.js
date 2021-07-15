let registerDiv = document.getElementById('registerDiv');
let idMember = 1;

let rowRegisterDiv = document.createElement('div');
rowRegisterDiv.setAttribute('class', 'row justify-content-around');
rowRegisterDiv.setAttribute('id', 'rowRegisterDiv');
registerDiv.appendChild(rowRegisterDiv);

let nameCol = document.createElement('div');
nameCol.setAttribute('class', 'col-4');
rowRegisterDiv.appendChild(nameCol);

let nameInput = document.createElement('input');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'First name');
nameInput.setAttribute('style', 'padding-left: 15px; padding-right: 15px;');
nameCol.appendChild(nameInput);

let surnameCol = document.createElement('div');
surnameCol.setAttribute('class', 'col-4');
rowRegisterDiv.appendChild(surnameCol);

let surnameInput = document.createElement('input');
surnameInput.setAttribute('id', 'surname');
surnameInput.setAttribute('type', 'text');
surnameInput.setAttribute('placeholder', 'Last name');
surnameInput.setAttribute('style', 'padding-left: 15px; padding-right: 15px;');
surnameCol.appendChild(surnameInput);

let ageInput = document.createElement('input');
ageInput.setAttribute('id', 'age');
ageInput.setAttribute('min', '6');
ageInput.setAttribute('max', '18');
ageInput.setAttribute('placeholder', 'Age');
ageInput.setAttribute('type', 'number');
rowRegisterDiv.appendChild(ageInput);

let gradeInput = document.createElement('input');
gradeInput.setAttribute('id', 'grade');
gradeInput.setAttribute('min', '1');
gradeInput.setAttribute('max', '12');
gradeInput.setAttribute('type', 'number');
gradeInput.setAttribute('placeholder', 'Grade');
rowRegisterDiv.appendChild(gradeInput);

let dataInput = document.createElement('input');
dataInput.setAttribute('id', 'inputData');
dataInput.setAttribute('value', 'Submit');
dataInput.setAttribute('type', 'submit');
dataInput.setAttribute('class', 'btn btn-success');
dataInput.setAttribute('onclick', `addingMemberInTable()`);
rowRegisterDiv.appendChild(dataInput);