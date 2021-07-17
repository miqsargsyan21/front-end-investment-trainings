function editingMember (ids) {
    let formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'mainDivForm');
    formDiv.setAttribute('class', 'container row justify-content-around');
    document.getElementsByTagName('body')[0].appendChild(formDiv);

    let rowRegisterDivForm1 = document.createElement('div');
    rowRegisterDivForm1.setAttribute('class', 'row justify-content-around');
    rowRegisterDivForm1.setAttribute('id', 'rowRegisterDivForm1');
    formDiv.appendChild(rowRegisterDivForm1);

    let nameColForm = document.createElement('div');
    nameColForm.setAttribute('class', 'col-11');
    rowRegisterDivForm1.appendChild(nameColForm);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('class', 'inputForm');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'nameForm');
    nameInput.setAttribute('placeholder', 'First name');
    nameInput.setAttribute('style', 'padding-left: 15px; padding-right: 15px;');
    nameColForm.appendChild(nameInput);

    let rowRegisterDivForm2 = document.createElement('div');
    rowRegisterDivForm2.setAttribute('class', 'row justify-content-around');
    rowRegisterDivForm2.setAttribute('id', 'rowRegisterDivForm2');
    formDiv.appendChild(rowRegisterDivForm2);

    let surnameColForm = document.createElement('div');
    surnameColForm.setAttribute('class', 'col-11');
    rowRegisterDivForm2.appendChild(surnameColForm);

    let surnameInput = document.createElement('input');
    surnameInput.setAttribute('class', 'inputForm');
    surnameInput.setAttribute('id', 'surnameForm');
    surnameInput.setAttribute('type', 'text');
    surnameInput.setAttribute('placeholder', 'Last name');
    surnameInput.setAttribute('style', 'padding-left: 15px; padding-right: 15px;');
    surnameColForm.appendChild(surnameInput);

    let ageAndGradeColForm = document.createElement('div');
    ageAndGradeColForm.setAttribute('class', 'col-11 row justify-content-around');
    formDiv.appendChild(ageAndGradeColForm);

    let ageInputForm = document.createElement('input');
    ageInputForm.setAttribute('id', 'ageInputForm');
    ageInputForm.setAttribute('min', '6');
    ageInputForm.setAttribute('max', '18');
    ageInputForm.setAttribute('class', 'gradeAndAge');
    ageInputForm.setAttribute('placeholder', 'Age');
    ageInputForm.setAttribute('type', 'number');
    ageAndGradeColForm.appendChild(ageInputForm);

    let gradeInputForm = document.createElement('input');
    gradeInputForm.setAttribute('id', 'gradeInputForm');
    gradeInputForm.setAttribute('class', 'gradeAndAge');
    gradeInputForm.setAttribute('min', '1');
    gradeInputForm.setAttribute('max', '12');
    gradeInputForm.setAttribute('placeholder', 'Grade');
    gradeInputForm.setAttribute('type', 'number');
    ageAndGradeColForm.appendChild(gradeInputForm);

    let submitColForm = document.createElement('div');
    submitColForm.setAttribute('class', 'col-11 row justify-content-around');
    submitColForm.setAttribute('id', 'submitDivForm');
    formDiv.appendChild(submitColForm);

    let dataInputForm = document.createElement('input');
    dataInputForm.setAttribute('id', 'inputDataForm');
    dataInputForm.setAttribute('value', 'Edit');
    dataInputForm.setAttribute('type', 'submit');
    dataInputForm.setAttribute('class', 'btn btn-success');
    dataInputForm.setAttribute('onclick', `processEditing(${ids})`);
    submitColForm.appendChild(dataInputForm);

    let closeForm = document.createElement('input');
    closeForm.setAttribute('id', 'closeForm');
    closeForm.setAttribute('value', 'Close');
    closeForm.setAttribute('type', 'submit');
    closeForm.setAttribute('class', 'btn btn-danger');
    closeForm.setAttribute('onclick', `closingForm()`);
    submitColForm.appendChild(closeForm);
}

function processEditing (ids) {
    let userName = document.getElementById('nameForm');
    let userSurname = document.getElementById('surnameForm');
    let userAge = document.getElementById('ageInputForm');
    let userGrade = document.getElementById('gradeInputForm');
    
    if (userAge.value && userGrade.value && userName.value && userSurname.value) {

        if (userAge.value >= 6 && userAge.value <= 18 && userGrade.value >= 1 && userGrade.value <= 12 && userName.value[0] != " " && userSurname.value[0] != " ") {
            document.getElementsByClassName(('col' + String(ids)))[0].innerText = userName.value;
            document.getElementsByClassName(('col' + String(ids)))[1].innerText = userSurname.value;
            document.getElementsByClassName(('col' + String(ids)))[2].innerText = userAge.value;
            document.getElementsByClassName(('col' + String(ids)))[3].innerText = userGrade.value;
        } else {
            alert('Input right data!');    
	    editingMember(ids);
        }

        learnersData[ids - 1].name = userName.value;
        learnersData[ids - 1].surname = userSurname.value;
        learnersData[ids - 1].age = userAge.value;
        learnersData[ids - 1].grade = userGrade.value;

    } else {
        alert('Input all data!');
	editingMember(ids);
    }

    document.getElementsByTagName('body')[0].removeChild(document.getElementById('mainDivForm'));
}

function closingForm () {
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('mainDivForm'));
}
