let l = window.location.href;
let cityName='';

for(let i=l.indexOf('?')+6; i<l.length; i++){
  cityName=cityName+l[i];
}

const malningArea = document.getElementsByClassName('area');
var metaTag = document.getElementsByTagName('meta')[2];
var metaOg = document.getElementsByTagName('meta')[2].content;

console.log(metaOg);

switch(cityName) {
  case "Stockholm":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Stockholm";
    }

    metaTag.removeAttribute('content');
    metaOg = "Målare Stockholm | Fasadmålning, Golvläggning, Köksrenovering";
    metaTag.setAttribute('content', metaOg);

    break;

  case "Lidingö":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Lidingö";
    }

    metaTag.removeAttribute('content');
    metaOg = "Målare Lidingö | Fasadmålning, Golvläggning, Köksrenovering";
    metaTag.setAttribute('content', metaOg);

    break;

  case "Bromma":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Bromma";

      metaTag.removeAttribute('content');
      metaOg = "Målare Bromma | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Täby":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Täby";

      metaTag.removeAttribute('content');
      metaOg = "Målare Täby | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Danderyd":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Danderyd";

      metaTag.removeAttribute('content');
      metaOg = "Målare Danderyd | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Solna":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Solna";

      metaTag.removeAttribute('content');
      metaOg = "Målare Solna | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Spånga":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Spånga";

      metaTag.removeAttribute('content');
      metaOg = "Målare Spånga | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Upplands Väsby":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Upplands Väsby";

      metaTag.removeAttribute('content');
      metaOg = "Målare Upplands Väsby | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Vallentuna":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Vallentuna";

      metaTag.removeAttribute('content');
      metaOg = "Målare Vallentuna | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Sigtuna":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Sigtuna";

      metaTag.removeAttribute('content');
      metaOg = "Målare Sigtuna | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;
  case "Jakobsberg":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Jakobsberg";

      metaTag.removeAttribute('content');
      metaOg = "Målare Jakobsberg | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Barkarby":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Barkarby";

      metaTag.removeAttribute('content');
      metaOg = "Målare Barkarby | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Kallhäll":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Kallhäll";

      metaTag.removeAttribute('content');
      metaOg = "Målare Kallhäll | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Upplands Bro":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Upplands Bro";

      metaTag.removeAttribute('content');
      metaOg = "Målare Upplands Bro | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Kungsängen":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Kungsängen";

      metaTag.removeAttribute('content');
      metaOg = "Målare Kungsängen | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Bålsta":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Bålsta";

      metaTag.removeAttribute('content');
      metaOg = "Målare Bålsta | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Hässelby":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Hässelby";

      metaTag.removeAttribute('content');
      metaOg = "Målare Hässelby | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Vällingby":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Vällingby";

      metaTag.removeAttribute('content');
      metaOg = "Målare Vällingby | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Ekerö":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Ekerö";

      metaTag.removeAttribute('content');
      metaOg = "Målare Ekerö | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Märsta":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Märsta";

      metaTag.removeAttribute('content');
      metaOg = "Målare Märsta | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Vaxholm":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Vaxholm";

      metaTag.removeAttribute('content');
      metaOg = "Målare Vaxholm | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Sundbyberg":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Sundbyberg";

      metaTag.removeAttribute('content');
      metaOg = "Målare Sundbyberg | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Östermalm":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Östermalm";

      metaTag.removeAttribute('content');
      metaOg = "Målare Östermalm | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Älvsjö":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Älvsjö";

      metaTag.removeAttribute('content');
      metaOg = "Målare Älvsjö | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Farsta":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Farsta";

      metaTag.removeAttribute('content');
      metaOg = "Målare Farsta | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Vasastan":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Vasastan";

      metaTag.removeAttribute('content');
      metaOg = "Målare Vasastan | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Skärholmen":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Skärholmen";

      metaTag.removeAttribute('content');
      metaOg = "Målare Skärholmen | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Bredäng":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Bredäng";

      metaTag.removeAttribute('content');
      metaOg = "Målare Bredäng | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Kungsholmen":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Kungsholmen";

      metaTag.removeAttribute('content');
      metaOg = "Målare Kungsholmen | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Kista":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Kista";

      metaTag.removeAttribute('content');
      metaOg = "Målare Kista | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Hägersten":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Hägersten";

      metaTag.removeAttribute('content');
      metaOg = "Målare Hägersten | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Liljeholmen":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Liljeholmen";

      metaTag.removeAttribute('content');
      metaOg = "Målare Liljeholmen | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Enskede":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Enskede";

      metaTag.removeAttribute('content');
      metaOg = "Målare Enskede | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Årsta":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Årsta";

      metaTag.removeAttribute('content');
      metaOg = "Målare Årsta | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Skarpnäck":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Skarpnäck";

      metaTag.removeAttribute('content');
      metaOg = "Målare Skarpnäck | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Salem":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Salem";

      metaTag.removeAttribute('content');
      metaOg = "Målare Salem | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Nynäshamn":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Nynäshamn";

      metaTag.removeAttribute('content');
      metaOg = "Målare Nynäshamn| Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Norrtälje":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Norrtälje";

      metaTag.removeAttribute('content');
      metaOg = "Målare Norrtälje | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Nacka":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Nacka";

      metaTag.removeAttribute('content');
      metaOg = "Målare Nacka | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Huddinge":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Huddinge";

      metaTag.removeAttribute('content');
      metaOg = "Målare Huddinge | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Haninge":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Haninge";

      metaTag.removeAttribute('content');
      metaOg = "Målare Haninge | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Botkyrka":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Botkyrka";

      metaTag.removeAttribute('content');
      metaOg = "Målare Botkyrka | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Österåker":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Österåker";

      metaTag.removeAttribute('content');
      metaOg = "Målare Österåker | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Värmdö":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Värmdö";

      metaTag.removeAttribute('content');
      metaOg = "Målare Värmdö | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Knivsta":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Knivsta";

      metaTag.removeAttribute('content');
      metaOg = "Målare Knivsta | Fasadmålning, Golvläggning, Köksrenovering";
      metaTag.setAttribute('content', metaOg);
    }
    break;

  case "Fasadmålning i Järfälla":
    for(let i=0; i<3;i++) {
      malningArea[i].innerHTML = "Fasadmålning i Järfälla";
    }
    break;
}
console.log(metaOg);



