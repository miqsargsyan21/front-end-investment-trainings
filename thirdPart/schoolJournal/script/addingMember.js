function addingMemberInTable () {
    let nameMember = document.getElementById('name'),
        surnameMember = document.getElementById('surname'),
        ageMember = document.getElementById('age'),
        gradeMember = document.getElementById('grade');

    if (nameMember.value && surnameMember.value && ageMember.value && gradeMember.value) {
        let newMember = document.createElement('tr');
        newMember.setAttribute('id', String(idMember));
        document.getElementById('bodyOfTable').appendChild(newMember);

        let idMemberInTable = document.createElement('th');
        idMemberInTable.setAttribute('scope', 'col');
        idMemberInTable.setAttribute('id', ('id' + String(idMember)));
        idMemberInTable.innerText = idMember++;
        newMember.appendChild(idMemberInTable);

        let nameMemberInTable = document.createElement('td');
        nameMemberInTable.setAttribute('class', ('col' + String(idMember - 1)));
        nameMemberInTable.setAttribute('scope', 'col');
        nameMemberInTable.innerText = nameMember.value;
        newMember.appendChild(nameMemberInTable);

        let surnameMemberInTable = document.createElement('td');
        surnameMemberInTable.setAttribute('scope', 'col');
        surnameMemberInTable.setAttribute('class', ('col' + String(idMember - 1)));
        surnameMemberInTable.innerText = surnameMember.value;
        newMember.appendChild(surnameMemberInTable);

        let ageMemberInTable = document.createElement('td');
        ageMemberInTable.setAttribute('scope', 'col');
        ageMemberInTable.setAttribute('class', ('col' + String(idMember - 1)));
        ageMemberInTable.innerText = ageMember.value;
        newMember.appendChild(ageMemberInTable);

        let gradeMemberInTable = document.createElement('td');
        gradeMemberInTable.setAttribute('scope', 'col');
        gradeMemberInTable.setAttribute('class', ('col' + String(idMember - 1)));
        gradeMemberInTable.innerText = gradeMember.value;
        newMember.appendChild(gradeMemberInTable);

        let editMemberInTable = document.createElement('td');
        editMemberInTable.setAttribute('scope', 'col');
        editMemberInTable.setAttribute('class', 'actionPerson');
        editMemberInTable.setAttribute('onclick', `editingMember(${idMember - 1})`);
        editMemberInTable.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
        newMember.appendChild(editMemberInTable);

        let deleteMemberInTable = document.createElement('td');
        deleteMemberInTable.setAttribute('scope', 'col');
        deleteMemberInTable.setAttribute('id', ('id1' + String(idMember)));
        deleteMemberInTable.setAttribute('class', 'actionPerson');
        deleteMemberInTable.setAttribute('onclick', `deletingMember(${idMember})`);
        deleteMemberInTable.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
        newMember.appendChild(deleteMemberInTable);

        nameMember.value = '';
        surnameMember.value = '';
        ageMember.value = '';
        gradeMember.value = '';
    } else {
        alert('Input all data!');
    }
}