const body = document.body;

function openGlobe() {
  document.getElementById("myGlobe").style.display = "block";
  body.setAttribute("style", "overflow: hidden;");
}

function closeGlobe() {
  document.getElementById("myGlobe").style.display = "none";
  body.setAttribute("style", "overflow: visible;");
}

function openForm() {
  document.getElementById("myNav").style.display = "block";
  body.setAttribute("style", "overflow: hidden;");
}

function closeForm() {
  document.getElementById("myNav").style.display = "none";
  body.setAttribute("style", "overflow: visible;");
}

function formValidation() {
  let name = document.getElementById('nameInput');
  let email = document.getElementById('emailInput');
  let tel = document.getElementById('telInput');
  let mission = document.getElementById('missionInput');

  let inputs = [name.value, email.value, tel.value, mission.value];
  let errors = [name, email, tel, mission];
  let data = 0;

  for (let i = 0; i < 4; i++) {
    if (inputs[i] === '') {
      errors[i].style.border = '1px solid red'
    } else {
      data = data + 1;
    }
  }
}

function  isEmpty() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');
  let inputs = [name.value, email.value, subject.value, message.value];
  let errors = [name, email, subject, message];


  for(let i = 0; i < 4; i++) {
    if (inputs[i] === '') {
      errors[i].style.border='1px solid red';
    }
  }
}