data = {
    dataOfHeader: ['About', 'Menu', 'Contact'],
    dataOfAbout: {
        title: 'About Catering',
        paragraph: 'Tradition since 1889',
        text1: `The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, 
                consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur.We only use <span id = "seasonalSpan"> seasonal </span> ingredients.`,
        text2: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.`
    },
    menu: [
        {
            title: 'Bread Basket',
            subTitle: 'Assortment of fresh baked fruit breads and muffins 5.50',
        },
        {
            title: 'Honey Almond Granola with Fruits',
            subTitle: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00',
        },
        {
            title: 'Belgian Waffle',
            subTitle: 'Vanilla flavored batter with malted flour 7.50',
        },
        {
            title: 'Scrambled eggs',
            subTitle: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50',
        },
        {
            title: 'Blueberry Pancakes',
            subTitle: 'With syrup, butter and lots of berries 8.50',
        },
    ],
    contact: {
        text1: `We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.`,
        text2: `You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:`,
        address: `Catering Service, 42nd Living St, 43043 New York, NY`,
    }
};

let bodyOfDocument = document.getElementsByTagName('body')[0];

//header
let div1 = document.createElement('div');
div1.setAttribute('style', 'position: realative; margin-top: 0px;');
div1.setAttribute('class', 'container-fluid');
bodyOfDocument.appendChild(div1);

let div4 = document.createElement('div');
div4.setAttribute('class', 'row');
div1.appendChild(div4);

let div2 = document.createElement('div');
div2.setAttribute('class', 'col-6');
div4.appendChild(div2);

let div3 = document.createElement('div');
div3.setAttribute('id', 'firstItemHeader');
div2.appendChild(div3);

let a = document.createElement('a');
a.innerText += 'Gourmet au Catering';
div3.appendChild(a);

div2 = document.createElement('div');
div2.setAttribute('class', 'col-6');
div4.appendChild(div2);

for (let i = 0; i < 3; i++) {
    div3 = document.createElement('div');
    div3.setAttribute('class', 'itemsHeader');
    div2.appendChild(div3);
    a = document.createElement('a');
    a.innerText += data.dataOfHeader[i];
    div3.appendChild(a);
}

//Main page
div1 = document.createElement('div');
div1.setAttribute('style', 'height: 600px; background-image: url(images/hamburger.jpg); background-size: cover; position: relative');
bodyOfDocument.appendChild(div1);

let p = document.createElement('p');
p.innerText = "Le Catering";
p.setAttribute('style', 'position: absolute; bottom: 20px; font-size: 40px; color: grey; left: 40px;')
div1.appendChild(p);

//About
div1 = document.createElement('div');
div1.setAttribute('class', 'container-fluid');
bodyOfDocument.appendChild(div1);

div2 = document.createElement('div');
div2.setAttribute('class', 'row');
div1.appendChild(div2);

div3 = document.createElement('div');
div3.setAttribute('class', 'col-6');
div2.appendChild(div3);

let image = document.createElement('img');
image.setAttribute('src', 'images/tablesetting2.jpg');
image.setAttribute('alt', 'Tablesetting');
image.setAttribute('style', 'margin: 10%; width: 90%')
div3.appendChild(image);

div3 = document.createElement('div');
div3.setAttribute('class', 'col-6');
div2.appendChild(div3);

let h1 = document.createElement('h1');
h1.innerText = data.dataOfAbout.title;
h1.setAttribute('style', 'margin-top: 12%; margin-left: 25%;');
div3.appendChild(h1);

let span = document.createElement('span');
span.innerText = data.dataOfAbout.paragraph;
span.setAttribute('style', 'margin-left: 35%;')
div3.appendChild(span);

div3.innerHTML += `<br><br><br>`;

span = document.createElement('span');
span.innerHTML = data.dataOfAbout.text1;
div3.appendChild(span);

div3.innerHTML += `<br><br><br>`;

span = document.createElement('span');
span.innerText = data.dataOfAbout.text2;
span.setAttribute('style', 'color: lightgray;')
div3.appendChild(span);

bodyOfDocument.innerHTML += `<hr>`;

//menu
div1 = document.createElement('div');
div1.setAttribute('class', 'container-fluid');
bodyOfDocument.appendChild(div1);

div2 = document.createElement('div');
div2.setAttribute('class', 'row');
div1.appendChild(div2);

div3 = document.createElement('div');
div3.setAttribute('class', 'col-6');
div2.appendChild(div3);

h1 = document.createElement('h1');
h1.innerText = 'Our Menu';
h1.setAttribute('style', 'margin-top: 12%; margin-left: 30%;');
div3.appendChild(h1);

for (let i = 0; i < 5; i++) {
    div3.innerHTML += `<br><br><br>`;
    span = document.createElement('span');
    span.innerText = data.menu[i].title;
    span.setAttribute('style', 'margin-left: 10%');
    div3.appendChild(span);
    div3.innerHTML += `<br><br>`;
    span = document.createElement('span');
    span.innerText = data.menu[i].subTitle;
    span.setAttribute('style', 'margin-left: 10%; color: lightgray;');
    div3.appendChild(span);
}

div3 = document.createElement('div');
div3.setAttribute('class', 'col-6');
div2.appendChild(div3);

image = document.createElement('img');
image.setAttribute('src', 'images/tablesetting.jpg');
image.setAttribute('alt', 'Tablesetting');
image.setAttribute('style', 'margin-right: 10%; margin-top: 10%; width: 90%')
div3.appendChild(image);

bodyOfDocument.innerHTML += `<br><br><br><hr>`;

//contact
div1 = document.createElement('div');
div1.setAttribute('class', 'container-fluid');
bodyOfDocument.appendChild(div1);

h1 = document.createElement('h1');
h1.innerText = 'Contact';
h1.setAttribute('style', 'margin-top: 5%; margin-left: 5%;');
div1.appendChild(h1);

div1.innerHTML += `<br><br><br>`;

span = document.createElement('p');
span.innerText = data.contact.text1;
span.setAttribute('style', 'margin-left: 5%;  margin-right: 5%;');
div1.appendChild(span);

span = document.createElement('p');
span.innerText = data.contact.address;
span.setAttribute('style', 'margin-left: 5%;  margin-right: 5%; color: lightblue');
div1.appendChild(span);

span = document.createElement('p');
span.innerText = data.contact.text2;
span.setAttribute('style', 'margin-left: 5%; margin-right: 5%;');
div1.appendChild(span);

let form = document.createElement('form');
div1.appendChild(form);

let input = document.createElement('input');
input.setAttribute('placeholder', 'Name');
input.setAttribute('class', 'form-control');
form.appendChild(input);

input = document.createElement('input');
input.setAttribute('placeholder', 'How many people');
input.setAttribute('class', 'form-control');
input.setAttribute('type', 'number')
form.appendChild(input);

input = document.createElement('input');
input.setAttribute('class', 'form-control');
input.setAttribute('type', 'date')
form.appendChild(input);

input = document.createElement('input');
input.setAttribute('placeholder', 'Message / Special requirements');
input.setAttribute('class', 'form-control');
form.appendChild(input);

let button = document.createElement('button');
button.setAttribute('class', 'btn btn-success');
button.setAttribute('style', 'margin-top: 15px;')
button.setAttribute('type', 'submit');
button.innerText += 'Send message';
form.appendChild(button);