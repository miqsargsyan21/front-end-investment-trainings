function addMessage () {
    let userName = document.getElementById('nameUser').value,
        userEmail = document.getElementById('emailUser').value,
        userMessage = document.getElementById('messageUser').value;

    if (userEmail != "" && userEmail != " " && userName != "" && userName != " " && userMessage != "" && userMessage != " ") {
        let newEmail = new Email(userName, userEmail, userMessage);
        emails.push(newEmail);
    } else {
        alert('Please input right data');
    }

    userName = document.getElementById('nameUser').value = "";
    userEmail = document.getElementById('emailUser').value = "";
    userMessage = document.getElementById('messageUser').value = "";
}