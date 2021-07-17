function deletingMember (ids) {
    let myBodyTable = document.getElementById('bodyOfTable');
    let parent = document.getElementById(String(ids - 1));
    myBodyTable.removeChild(parent);
    
    for (let i = ids; i < idMember; i++) {
        let changingMemberID = document.getElementById(String(i));
        changingMemberID.setAttribute('id', String(i - 1))

        let changingMemberIDtext = document.getElementById(('id' + String(i)));
        changingMemberIDtext.innerText = String(i - 1);
        changingMemberIDtext.setAttribute('id', ('id' + String(i - 1)));

        let changingMemberDelete = document.getElementById(('id1' + String(i + 1)));
        changingMemberDelete.setAttribute('onclick', `deletingMember(${i})`);
        changingMemberDelete.setAttribute('id', ('id1' + String(i)));

        let changingMemberEdit = document.getElementById(('id2' + String(i + 1)));
        changingMemberEdit.setAttribute('onclick', `editingMember(${i})`);
        changingMemberEdit.setAttribute('id', ('id2' + String(i)));

        document.getElementsByClassName(('col' + String(i)))[0].setAttribute('class', ('col' + String(i - 1)));
        document.getElementsByClassName(('col' + String(i)))[0].setAttribute('class', ('col' + String(i - 1)));
        document.getElementsByClassName(('col' + String(i)))[0].setAttribute('class', ('col' + String(i - 1)));
        document.getElementsByClassName(('col' + String(i)))[0].setAttribute('class', ('col' + String(i - 1)));
    }
    
    learnersData.splice(ids - 2, 1);

    idMember--;
}