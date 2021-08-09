var data = [
    ["Astro Motion", "Home", "Gallery", "About", "Contact"],
    ["Copyright 2021 Astro Motion Company Limited. All rights reserved.", "Designed by Michael Sargsyan"],
    {
        "title": "Welcome to Astro Motion",
        "texts": ["This HTML template has a motion video background loop which is provided by <span class = 'greenTexts'>Get Free Pictures</span>. This is one-page responsive layout for your websites. Feel free to use this for a commercial purpose.", 
                  "You are not permitted to redistribute this template on your Free CSS collection websites. Please <span class = 'greenTexts'>contact us</span> for more information.", "View Gallery"],
        "images": ["images/home-img-1.jpg", "images/home-img-2.jpg"]
    },
    ["images/gallery-img-01.jpg", "images/gallery-img-02.jpg", "images/gallery-img-03.jpg",
     "images/gallery-img-04.jpg", "images/gallery-img-05.jpg", "images/gallery-img-06.jpg",
     "images/gallery-img-07.jpg", "images/gallery-img-08.jpg", "images/gallery-img-09.jpg"],
    {
        "title": "About our company",
        "texts": ["You are <span class = 'greenTexts'>allowed</span> to use Astro Motion HTML Template for your websites. You are not allowed to re-distribute this template ZIP file on any Free CSS template collection website. Illegal redistribution is strongly prohibited.",
                  "Praesent auctor rhoncus arcu, vitae blandit est vestibulum sit amet. Integer erat turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat at. Thank you for visiting Template Mo."]
    },
    {
        "title": "Contact Us",
        "text": "Integer erat turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum enim mi, at tristique leo feugiat at.",
        "email": "info@company.com",
        "tel": "Tel: 010-020-0340"
    }
];

class Email {
    constructor (email, name, text) {
        this.email = email;
        this.name = name;
        this.text = text;
    }
}

var emails = [];
                
let header = document.getElementById('headOfSite');
let firstDivOfHeader = document.createElement('div');
firstDivOfHeader.setAttribute('id', 'divOfTitle');
header.appendChild(firstDivOfHeader);
        
let p = document.createElement('p');
p.setAttribute('id', 'titleOfHeader')
p.innerText = data[0][0];
firstDivOfHeader.appendChild(p);

let secondDivOfHeader = document.createElement('div');
secondDivOfHeader.setAttribute('class', 'tab');
secondDivOfHeader.setAttribute('id', 'tabID');
header.appendChild(secondDivOfHeader);

//tab links
for (let i = 1; i < 5; i++) {
    let buttonsDiv = document.createElement('div');

    if (i == 1) {
        buttonsDiv.setAttribute('class', 'tablinks active');
    } else {
        buttonsDiv.setAttribute('class', 'tablinks');
    }

    buttonsDiv.setAttribute('onclick', `openPage(event, ${data[0][i]})`);
    secondDivOfHeader.appendChild(buttonsDiv);

    let button = document.createElement('button');
    button.innerText = data[0][i];
    buttonsDiv.appendChild(button);

    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle${i}`);
    buttonsDiv.appendChild(circle);
}

let responsiveMenu = document.createElement('div');
responsiveMenu.setAttribute('class', 'tab');
responsiveMenu.setAttribute('id', 'tab-responsive');
header.appendChild(responsiveMenu);

let ul = document.createElement('ul');
responsiveMenu.appendChild(ul);

let li = document.createElement('li');
li.setAttribute('class', 'tablinks');
li.setAttribute('id', 'link-menu');
li.innerText = 'Menu';
ul.appendChild(li);

let circle = document.createElement('div');
circle.setAttribute('class', 'circleOfButton-r');
circle.setAttribute('id', `circle-r-home`);
li.appendChild(circle);

for (let i = 1; i < 5; i++) {
    li = document.createElement('li');
    li.innerText = data[0][i];
    
    if (i == 1) {
        li.setAttribute('class', 'tablinks active hidden-links');
    } else {
        li.setAttribute('class', 'tablinks hidden-links');
    }
    
    li.setAttribute('onclick', `openPage(event, ${data[0][i]})`);
    ul.appendChild(li);

    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton-r');
    circle.setAttribute('id', `circle-r${i}`);
    li.appendChild(circle);
}

//Home
let home = document.getElementById('Home');

for (let i = 1; i <= 2; i++) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle2${i}`);
    home.appendChild(circle);
}

let container = document.createElement('div');
container.setAttribute('class', 'container');
home.appendChild(container);

let row = document.createElement('div');
row.setAttribute('class', 'row justify-content-around');
container.appendChild(row);

let firstCol = document.createElement('div');
firstCol.setAttribute('class', 'col-5');
firstCol.setAttribute('id', 'homeFirstConatainer');
row.appendChild(firstCol);

let secondCol = document.createElement('div');
secondCol.setAttribute('class', 'col-3');
secondCol.setAttribute('id', 'homeSecondConatainer');
row.appendChild(secondCol);

let h4 = document.createElement('h4');
h4.innerText = data[2].title;
firstCol.appendChild(h4);

for (let i = 0; i < 2; i++) {
    p = document.createElement('p');
    p.innerHTML = data[2].texts[i];
    firstCol.appendChild(p);

    let img = document.createElement('img');
    img.setAttribute('alt', 'image');
    img.setAttribute('src', data[2].images[i]);
    secondCol.appendChild(img);
}

for (let i = 3; i <= 4; i++) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle2${i}`);
    home.appendChild(circle);
}

//Gallery
let gallery = document.getElementById('Gallery');

for (let i = 1; i <= 2; i++) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle3${i}`);
    gallery.appendChild(circle);
}

let slideContainer = document.createElement('div');
slideContainer.setAttribute('class', 'slideshow-container');
slideContainer.setAttribute('id', 'slide-gallery');
gallery.appendChild(slideContainer);

for (let j = 0; j < 3; j++) {
    let slideDiv = document.createElement('div');
    slideDiv.setAttribute('class', 'mySlides fade');
    slideContainer.appendChild(slideDiv);

    if (j == 0) {
        slideDiv.setAttribute('class', 'mainSlide mySlides fade');
    }

    for (let i = 0; i < 5; i++) {
        let divs = document.createElement('div');
        divs.setAttribute('class', 'img-container');

        if (i != 4) {
            divs.setAttribute('style', 'margin-right: 2.5%;');
        }

        slideDiv.appendChild(divs);

        let img = document.createElement('img');
        img.setAttribute('alt', 'image');
        img.setAttribute('src', data[3][i + j]);
        img.setAttribute('style', 'width: 100%; display: block;');
        divs.appendChild(img);
    }
}

slideContainer = document.createElement('div');
slideContainer.setAttribute('class', 'slideshow-container');
slideContainer.setAttribute('id', 'slide-gallery-r');
gallery.appendChild(slideContainer);

for (let j = 0; j < 3; j++) {
    let slideDiv = document.createElement('div');
    slideDiv.setAttribute('class', 'mySlides fade');
    slideContainer.appendChild(slideDiv);

    if (j == 0) {
        slideDiv.setAttribute('class', 'mainSlide mySlides fade mainSlide-r');
    }

    for (let i = 0; i < 3; i++) {
        let divs = document.createElement('div');
        divs.setAttribute('class', 'img-container-r');

        if (i != 2) {
            divs.setAttribute('style', 'margin-right: 3.3%;');
        }

        slideDiv.appendChild(divs);

        let img = document.createElement('img');
        img.setAttribute('alt', 'image');
        img.setAttribute('src', data[3][i + j]);
        img.setAttribute('style', 'width: 100%; display: block;');
        divs.appendChild(img);
    }
}

let controlSlide = document.createElement('div');
controlSlide.setAttribute('style', 'text-align: center; margin-top: 20px; display: block; width: 100%;');
gallery.appendChild(controlSlide);

for (let i = 1; i <= 3; i++) {
    let span = document.createElement('span');
    span.setAttribute('class', 'dot');
    

    if (i == 1) {
        span.setAttribute('class', 'dot active');
    }

    span.setAttribute('onclick', `currentSlide(${i})`);
    controlSlide.appendChild(span);
}

//About
let about = document.getElementById('About');

for (let i = 1; i <= 2; i++) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle4${i}`);
    about.appendChild(circle);
}

let containAbout = document.createElement('div');
containAbout.setAttribute('id', 'mainDivAbout');
about.appendChild(containAbout);

let titleAbout = document.createElement('h1');
titleAbout.innerText = data[4].title;
containAbout.appendChild(titleAbout);

for (let i = 0; i < 2; i++) {
    let textAbout = document.createElement('p');
    textAbout.innerHTML = data[4].texts[i];
    containAbout.appendChild(textAbout);
}

for (let i = 3; i <= 4; i++) {
    let circle = document.createElement('div');
    circle.setAttribute('class', 'circleOfButton');
    circle.setAttribute('id', `circle4${i}`);
    about.appendChild(circle);
}

//Contact
let contact = document.getElementById('Contact');

let leftContainerContact = document.createElement('div');
leftContainerContact.setAttribute('id', 'left-contain');
contact.appendChild(leftContainerContact);

let rightContainerContact = document.createElement('div');
rightContainerContact.setAttribute('id', 'right-contain');
contact.appendChild(rightContainerContact);

let input = document.createElement('input');
input.setAttribute('placeholder', 'Name');
input.setAttribute('id', 'nameUser');
input.setAttribute('type', 'text');
leftContainerContact.appendChild(input);

input = document.createElement('input');
input.setAttribute('placeholder', 'Email');
input.setAttribute('id', 'emailUser');
input.setAttribute('type', 'email');
leftContainerContact.appendChild(input);

input = document.createElement('textarea');
input.setAttribute('placeholder', 'Message');
input.setAttribute('id', 'messageUser');
leftContainerContact.appendChild(input);

input = document.createElement('input');
input.setAttribute('value', 'Send');
input.setAttribute('type', 'button');
input.setAttribute('onclick', 'addMessage()');
leftContainerContact.appendChild(input);

let titleContact = document.createElement('h1');
titleContact.innerText = data[5].title;
rightContainerContact.appendChild(titleContact);

let textContact = document.createElement('p');
textContact.innerText = data[5].text;
rightContainerContact.appendChild(textContact);

let mailContact = document.createElement('p');
mailContact.innerHTML = `Tel: <a href = "mailto:${data[5].email}">${data[5].email}</a>`;
rightContainerContact.appendChild(mailContact);

let telContact = document.createElement('p');
telContact.innerHTML = `Tel: <a href = "tel:${data[5].tel}">${data[5].tel}</a>`;
rightContainerContact.appendChild(telContact);

let mapContact = document.createElement("iframe");
mapContact.setAttribute('id', 'map-contact');
mapContact.setAttribute('src', 'https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed');
rightContainerContact.appendChild(mapContact);

//footer
let footer = document.getElementById('footer');

let leftFooter = document.createElement('div');
leftFooter.setAttribute('id', 'left-footer');
footer.appendChild(leftFooter);

let rightFooter = document.createElement('div');
rightFooter.setAttribute('id', 'right-footer');
footer.appendChild(rightFooter);

let textFooter = document.createElement('p');
textFooter.innerText = data[1][0];
leftFooter.appendChild(textFooter);

textFooter = document.createElement('p');
textFooter.innerText = data[1][1];
rightFooter.appendChild(textFooter);