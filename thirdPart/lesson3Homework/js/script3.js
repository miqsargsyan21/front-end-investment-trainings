/* Grigor Sarukhanyan */
let coment=[
    {
        icon:'<i aria-hidden="true" class="fa fa-thumbs-up thumb"></i>',
        title:"Kvalitet",
        Text: `Vi använder bara de bästa specialisterna, för att säkerställa att vi kan ge de bästa
         resultaten, högsta kvalitet på arbetet och kvalitetskomponenter för ditt projekt.`
    },
    {
        icon:'<i aria-hidden="true" class="fa fa-star-o star"></i>', 
        title:"Erfarenhet",
        Text: `Vi har omfattande kunskap om alla aspekter av fastighetsrenoveringar, utvecklad
         och polerad under de senaste 10 åren i branschen.`
    },
    {
        icon: '<i aria-hidden="true" class="fa fa-users user"></i>', 
        title:"Professionalism",
        Text:`Vi tror att förtroende, tillförlitlighet och utmärkt kommunikation är centralt för ett
         lyckat projekt.` 
    }
];
let contains=document.getElementById('myid');
let comentrow = document.createElement('div');
comentrow.setAttribute('class', 'row justify-content-center');
for (let i = 0; i < 3; i++) {
    comentrow.innerHTML+=`
        <div class="col-lg-3 col-md-4 col-sm-9 col-11 portfolio-item mb-0">
            <div class="h-100">
                <div class="for-kvalitetBG" ">
                    <h4 class="card-title">
                        <div class="for-icon">
                            ${coment[i].icon}
                            <h2 class="title">${coment[i].title }</h2>
                        </div>
                        <hr/>
                        <p>
                            ${coment[i].Text}
                        </p>
                    </h4>
                </div>
            </div>
        </div>
    `;
}

contains.appendChild(comentrow);
let mycom=[ 
    {
        title:"Varför anlita oss",
        Text: `Vi realiserar och levererar dina planer, drömmar och visioner, och ger dig utmärkt 
         kvalitet och värde för pengarna. Vi förstår att det inte finns två kunder eller projekt 
         som är likadana och vi behandlar varje möte med samma passion och energi. Hos 
         “VVL Målerifirma” strävar vi efter att göra ditt bostadsutrymme till ditt drömutrymme.`
    },
];

comentrow.innerHTML += `
    <div class="col-lg-9 col-md-9 col-sm-9 col-11 portfolio-item mb-0"> 
        <div class="h-100">
            <div class="for-kvalitetBG">
                <h4 class="title mt-1 p-0">${mycom[0].title }</h4>
                <hr/>
                <p>
                    ${mycom[0].Text }
                </p>
            </div>
        </div>
    </div>`;