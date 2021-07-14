/* Michael Sargsyan */
let bodys = document.getElementsByTagName('body');
let dataC = [
    {
        autherName: 'Tine B.',
        autherText: `Vi anlitade VVL Målerifirma för att målaom
        ett flertal rum i en nyköpt lägenhet. Vi är oerhört nöjdamed det jobb som de
        utförde. Personen som hjälpte oss var något utöver det extra, han var
        lösningsorienterad, serviceminded och väldigt trevlig. De uppfyllde alla våra
        förväntningar och lite till.`,
        starsCount: 5,
    },
    {
        autherName: 'Magnus Ö.',
        autherText: `Jättebra hanterat från offert, planering och målning. Det viktigaste är
        resultatet och deras målare får högsta betyg för jobbet de gjorde som var snabb och väldigt
        bra gjort. Tack VVL målerifirma för måleriarbetet.`,
        starsCount: 3,
    },
    {
        autherName: 'Helena E.',
        autherText: `De tvättade och målade om hela vårt hus. Så bra kontaktperson och projektledare,
        tydlig och trevlig. Byggställningarna kom upp och ner på ett effektivt sätt.
        Målarna gjorde ett jättebra jobb! Vi blev rekommenderade VVL Målerifirma av en
        granne och har nu i vår tur rekommenderat dem vidare till en annan granne!`,
        starsCount: 4,
    },
    {
        autherName: 'Jakob R.',
        autherText: `VVL Målerifirman har målat vårt hus på Thaliavägen i Bromma. Ett utmärkt utfört
        arbete. Offerten och dess bekräftelse på uppdraget kunde ha hanterats smidigare
        och tydligare, dock.`,
        starsCount: 5,
    },
    {
        autherName: 'Mats W.',
        autherText: `VVL Målerifirman hjälpte oss att måla om vårt hus. Allt kändes väldigt proffsigt
        och tryggt från första kontakt med Vardan. Målarna som kom var väldigt noggranna
        och gjorde ett väldigt bra arbete.`,
        starsCount: 2,
    },
    {
        autherName: 'Anders Ö.',
        autherText: `Kan varmt rekommendera VVL Målerifirma. Vardan ordnade med super duktiga
        målare... Några små "bumps" in the road men inget som Vardan ordnade upp på en gång och
        tog ansvar för. Vi rekommenderar VVL Målerifirma till alla våra vänner!`,
        starsCount: 3,
    },
    {
        autherName: 'Lars Christian E.',
        autherText: `Vi anlitade VVL Målerifirma för målning av tak och väggar av två rum i vår
        lägenhet. Förutom ett fantastiskt resultat var bemötandet superbra, snabb kommunikation
        och pålitliga i tider och hur allt skulle utföras. Stark rekommendation.`,
        starsCount: 5,
    },
    {
        autherName: 'Elin A.',
        autherText: `Jag vill starkt rekommendera VVL Målerifirma som både har varit snabba med
        offert och lätta att ha dialog med. De har utfört arbetet på ett fantastiskt sätt när
        de målat om mitt hus och altan. Utförandet var snabbt, snyggt, noggrant och det
        finns inget att klaga på.`,
        starsCount: 4,
    },
    {
        autherName: 'Robin C.',
        autherText: `Jag är väldigt nöjd med renoveringen av min lägenhet. Fick en bra offert som
        stämde överens med slutpriset, blev tillochmed lite billigare än väntat. Har
        inget att anmärka på, mycket seriösa!`,
        starsCount: 4,
    },
];

//carousel script
let div1 = document.createElement('div');
div1.setAttribute('class', 'container-fluid');
bodys[0].appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('class', 'row sliderBlock');
div1.appendChild(div2);

let div3 = document.createElement('div');
div3.setAttribute('class', 'col-lg-12 col-md-12 sliderTitle');
div2.appendChild(div3);

let h2 = document.createElement('h2');
h2.setAttribute('class', 'title text-center mt-3');
h2.innerText = 'Våra kunder';
div3.appendChild(h2);
div3.innerHTML += `<hr/>`;

div3 = document.createElement('div');
div3.setAttribute('class', 'col-lg-12 col-md-12 sliderItems');
div2.appendChild(div3);

//for desktop version
let div4 = document.createElement('div');
div4.setAttribute('class', 'carousel slide responsiveCarousel');
div4.setAttribute('id', 'carouselExampleIndicators');
div4.setAttribute('data-ride', 'carousel');
div3.appendChild(div4);
div4.innerHTML += `
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
    </ol>`;

let div5 = document.createElement('div');
div5.setAttribute('class', 'carousel-inner');
div5.setAttribute('id', 'responsiveCarousel');
div4.appendChild(div5);

for (let i = 1, start = 0, end = 3, className = 'carousel-item active'; i <= 3; i++, start += 3, end += 3) {
    if (i != 1) {
        className = 'carousel-item';
    }
    let div6 = document.createElement('div');
    div6.setAttribute('class', className);
    div5.appendChild(div6);

    let div7 = document.createElement('div');
    div7.setAttribute('class', 'row d-flex justify-content-center');
    div6.appendChild(div7);

    for (let j = start; j < end; j++) {
        let div8 = document.createElement('div');
        div8.setAttribute('class', 'col-lg-3 col-md-4 flex-column sliderItem');
        div7.appendChild(div8);
        let div9 = document.createElement('div');
        div9.setAttribute('class', 'd-flex flex-row mt-3');
        div8.appendChild(div9);
        for (let z = 0; z < dataC[j].starsCount; z++) {
            div9.innerHTML += `<i class="fa fa-star"></i>`;
        }
        div9 = document.createElement('div');
        div8.appendChild(div9);
        div9.innerHTML += `
            <p>
                <span>&#8220;</span>
                    ${dataC[j].autherText}
                <span>&#8221;</span>
            </p>
            <p><i class="auther">${dataC[j].autherName}</i></p>`;
    }
}

div5.innerHTML += `<a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button">
<span aria-hidden="true" class="carousel-control-prev-icon"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button">
<span aria-hidden="true" class="carousel-control-next-icon"></span>
<span class="sr-only">Next</span>
</a>`;

//for mobile version
div4 = document.createElement('div');
div4.setAttribute('class', 'carousel slide mobileCarousel');
div4.setAttribute('id', 'carouselExampleIndicators');
div4.setAttribute('data-ride', 'carousel');
div3.appendChild(div4);
div4.innerHTML += `
    <ol class="carousel-indicators">
        <li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
        <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
    </ol>`;

div5 = document.createElement('div');
div5.setAttribute('class', 'carousel-inner');
div5.setAttribute('id', 'mobileCarousel');
div4.appendChild(div5);

for (let i = 0, className = 'carousel-item active'; i < 3; i++) {
    if (i != 0) {
        className = 'carousel-item';
    }

    let div6 = document.createElement('div');
    div6.setAttribute('class', className);
    div5.appendChild(div6);

    let div7 = document.createElement('div');
    div7.setAttribute('class', 'row d-flex justify-content-center');
    div6.appendChild(div7);

    let div8 = document.createElement('div');
    div8.setAttribute('class', 'col-md-8 col-sm-8 col-12 flex-column sliderItem');
    div7.appendChild(div8);

    let div9 = document.createElement('div');
    div9.setAttribute('class', 'd-flex flex-row mt-3 justify-content-center');
    div8.appendChild(div9);

    for (let j = 0; j < dataC[i].starsCount; j++) {
        div9.innerHTML += `<i class="fa fa-star"></i>`;
    }

    div9 = document.createElement('div');
    div8.appendChild(div9);
    div9.innerHTML += `
    <p>
        <span>&#8220;</span>
            ${dataC[i].autherText}
        <span>&#8221;</span>
    </p>
    <p><i>${dataC[i].autherName}</i></p>`;
}
//ending carousel

//starting firms
let dataFirms = [
    {
        imageAlt: 'Becker',
        imageSrc: 'images/nordsjo.jpg',
        imageWidth: '80%'
    },
    {
        imageAlt: 'Caporal',
        imageSrc: 'images/two.png',
        imageWidth: '80%'
    },
    {
        imageAlt: 'Flugger',
        imageSrc: 'images/three.png',
        imageWidth: '80%'
    },
    {
        imageAlt: 'Alcro',
        imageSrc: 'images/flugger2.png',
        imageWidth: '80%'
    },
    {
        imageAlt: 'Jotun',
        imageSrc: 'images/jotun.png',
        imageWidth: '80%'
    },
    {
        imageAlt: 'Nordsjo',
        imageSrc: 'images/one.png',
        imageWidth: '70%'
    },
];

div1 = document.createElement('div');
div1.setAttribute('class', 'container');
bodys[0].appendChild(div1);

div2 = document.createElement('div');
div2.setAttribute('class', 'row');
div2.setAttribute('style', 'justify-content: center; align-items: center;');
div1.appendChild(div2);

for (let i = 0; i < 6; i++) {
    div3 = document.createElement('div');
    div3.setAttribute('class', 'col-lg-2 col-md-2 col-sm-4 col-4');
    div2.appendChild(div3);
    div3.innerHTML += `<img alt="${dataFirms[i].imageAlt}" class="img-fluid" src="${dataFirms[i].imageSrc}" width="${dataFirms[i].imageWidth}"/>`;
}
//ending firms

//starting footer
let dataFooter = [
    {
        elementHref: 'https://www.facebook.com/malarestockholm/',
        elementIcon: 'fa fa-facebook'
    },
    {
        elementHref: '#',
        elementIcon: 'fa fa-twitter'
    },
    {
        elementHref: 'https://www.instagram.com/vvlmalerifirma/?igshid=yqrip5ns7ydr&fbclid=IwAR2nzMDgyLJ1E2cXuU0ERC2of-lBsvXV8fQfALx-8fRlWEfkXHyFVAxf5gw',
        elementIcon: 'fa fa-instagram'
    }
];
let footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
bodys[0].appendChild(footer);

div1 = document.createElement('div');
div1.setAttribute('class', 'footerSection');
footer.appendChild(div1);

let ul = document.createElement('ul');
ul.setAttribute('class', 'icons');
div1.appendChild(ul);

for (let j = 0; j < 3; j++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    let a = document.createElement('a');
    a.setAttribute('href', dataFooter[j].elementHref);
    li.appendChild(a);
    let i = document.createElement('i');
    i.setAttribute('class', dataFooter[j].elementIcon);
    if (i) {
        i.setAttribute('aria-hidden', 'true');
    }
    a.appendChild(i);
}

let li = document.createElement('li');
li.innerHTML += `
    <a onclick="openGlobe()">
        <i class="fa fa-globe"></i>
        <div class="overlay" id="myGlobe" onclick="closeGlobe()">
            <div class="overlay-content">
                <p class="closeButton">
                    &times;
                </p>
                <div class="globeCont">
                    <a href="malare_akersberga.html">
                        Målare i Åkersberga
                    </a>
                    <a href="malare_lidingo.html">
                        Målare i Lidingö
                    </a>
                    <a href="malare_bromma.html">
                        Målare i Bromma
                    </a>
                    <a href="malare_taby.html">
                        Målare i Täby
                    </a>
                    <a href="malare_danderyd.html">
                        Målare i Danderyd
                    </a>
                    <a href="malare_solna.html">
                        Målare i Solna
                    </a>
                    <a href="malare_spanga.html">
                        Målare i Spånga
                    </a>
                    <a href="malare_upplands_vasby.html">
                        Målare i Upplands Väsby
                    </a>
                    <a href="malare_vallentuna.html">
                        Målare i Vallentuna
                    </a>
                    <a href="malare_sigtuna.html">
                        Målare i Sigtuna
                    </a>
                    <a href="malare_jakobsberg.html">
                        Målare i Jakobsberg
                    </a>
                    <a href="malare_barkarby.html">
                        Målare i Barkarby
                    </a>
                    <a href="malare_kallhall.html">
                        Målare i Kallhäll
                    </a>
                    <a href="malare_upplands_bro.html">
                        Målare i Upplands Bro
                    </a>
                    <a href="malare_kungsangen.html">
                        Målare i Kungsängen
                    </a>
                    <a href="malare_balsta.html">
                        Målare i Bålsta
                    </a>
                    <a href="malare_hasselby.html">
                        Målare i Hässelby
                    </a>
                    <a href="malare_vallingby.html">
                        Målare i Vällingby
                    </a>
                    <a href="malare_ekero.html">
                        Målare i Ekerö
                    </a>
                    <a href="malare_vaxholm.html">
                        Målare i Vaxholm
                    </a>
                    <a href="malare_sundbyberg.html">
                        Målare i Sundbyberg
                    </a>
                    <a href="malare_ostermalm.html">
                        Målare i Östermalm
                    </a>
                    <a href="malare_alvsjo.html">
                        Målare i Älvsjö
                    </a>
                    <a href="malare_farsta.html">
                        Målare i Farsta
                    </a>
                    <a href="malare_vasastan.html">
                        Målare i Vasastan
                    </a>
                    <a href="malare_skarholmen.html">
                        Målare i Skärholmen
                    </a>
                    <a href="malare_bredang.html">
                        Målare i Bredäng
                    </a>
                    <a href="malare_kungsholmen.html">
                        Målare i Kungsholmen
                    </a>
                    <a href="malare_kista.html">
                        Målare i Kista
                    </a>
                    <a href="malare_hagersten.html">
                        Målare i Hägersten
                    </a>
                    <a href="malare_liljeholmen.html">
                        Målare i Liljeholmen
                    </a>
                    <a href="malare_enskede.html">
                        Målare i Enskede
                    </a>
                    <a href="malare_arsta.html">
                        Målare i Årsta
                    </a>
                    <a href="malare_skarpnack.html">
                        Målare i Skarpnäck
                    </a>
                    <a href="malare_salem.html">
                        Målare i Salem
                    </a>
                    <a href="malare_nynashamn.html">
                        Målare i Nynäshamn
                    </a>
                    <a href="malare_norrtalje.html">
                        Målare i Norrtälje
                    </a>
                    <a href="malare_nacka.html">
                        Målare i Nacka
                    </a>
                    <a href="malare_huddinge.html">
                        Målare i Huddinge
                    </a>
                    <a href="malare_haninge.html">
                        Målare i Haninge
                    </a>
                    <a href="malare_botkyrka.html">
                        Målare i Botkyrka
                    </a>
                    <a href="malare_osteraker.html">
                        Målare i Österåker
                    </a>
                    <a href="malare_varmdo.html">
                        Målare i Värmdö
                    </a>
                    <a href="malare_knivsta.html">
                        Målare i Knivsta
                    </a>
                    <a href="fasadmalning_jarfalla.html">
                        Fasadmålning i Järfälla
                    </a>
                </div>
            </div>
        </div>
    </a>
`;
ul.appendChild(li);

//starting copyRight
div1 = document.createElement('div');
div1.setAttribute('class', 'container-fluid');
bodys[0].appendChild(div1);

div2 = document.createElement('div');
div2.setAttribute('style', 'display:flex;justify-content: center; align-items: center;height: 70px;background-color: #f1f1f1');
div2.innerText += '© 2020 | VVL Målerifirma |';
div1.appendChild(div2);