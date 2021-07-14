function clickingButton () {
    console.log(document.getElementById('mySelect').value);
    let xxhttp = new XMLHttpRequest();
    xxhttp.open('GET', `https://restcountries.eu/rest/v2/name/${document.getElementById('mySelect').value}`, true);
    xxhttp.send();
    xxhttp.onreadystatechange = function () {
        if (xxhttp.status == 200 && xxhttp.readyState == 4) {
            console.log(JSON.parse(xxhttp.responseText));
            let data = JSON.parse(xxhttp.responseText)[0];
            let div2 = document.createElement('div');
            div2.setAttribute('class', 'container-fluid mainContent');
            document.getElementsByTagName('body')[0].appendChild(div2);
            let div3 = document.createElement('div');
            div3.setAttribute('class', 'row justify-content-evenly');
            div2.appendChild(div3);
            let div4 = document.createElement('div');
            div4.setAttribute('class', 'col-3 countriesContent');
            div3.appendChild(div4);
            let name = document.createElement('h1');
            name.innerText = data.name;
            name.setAttribute('class', 'myText');
            div4.appendChild(name);
            div4 = document.createElement('div');
            div4.setAttribute('class', 'col-3 countriesContent');
            div3.appendChild(div4);
            for (let i = 0; i < data.currencies.length; i++) {
                div4.innerHTML += `<p class = "myText">${data.currencies[i].name} (${data.currencies[i].code})</p>`;
            }
            div4 = document.createElement('div');
            div4.setAttribute('class', 'col-4 countiesContent');
            div3.appendChild(div4);
            let image = document.createElement('img');
            image.setAttribute('src', data.flag);
            image.setAttribute('alt', 'flag');
            image.setAttribute('style', 'width: 100%;');
            div4.appendChild(image);
        }
    }
}

let xhttp = new XMLHttpRequest();

xhttp.open('GET', 'https://restcountries.eu/rest/v2/all', true);

xhttp.send();

xhttp.onreadystatechange = function () {
    if (xhttp.status == 200 && xhttp.readyState == 4) {
        let div1 = document.createElement('div');
        div1.setAttribute('id', 'selectDiv')
        document.getElementsByTagName('body')[0].appendChild(div1);
        let select = document.createElement('select');
        select.setAttribute('id', 'mySelect');
        div1.appendChild(select);
        for (let i = 0; i < 250; i++) {
            let option = document.createElement('option');
            option.setAttribute('value', JSON.parse(xhttp.responseText)[i].name)
            option.innerText = JSON.parse(xhttp.responseText)[i].name;
            select.appendChild(option);
        }
        let button = document.createElement('input');
        button.setAttribute('id', 'myButton');
        button.setAttribute('onclick', 'clickingButton()');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Search');
        div1.appendChild(button);
    }
}