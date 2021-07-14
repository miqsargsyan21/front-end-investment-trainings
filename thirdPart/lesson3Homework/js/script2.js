/* Karen Petrosyan */
let data = {
    valk: {
      title: "Välkommen till VVL Målerifirma, din lokala målare i Järfälla",
      Text: "       Vi erbjuder i princip alla förekommande måleritjänster i samband med\n" +
        "            målning av bostäder, offentliga byggnader, affärslokaler och\n" +
        "            inudstrfastigheter - allt du kan tänka dig från en målare! Vi har\n" +
        "            lång erfarenhet och bred kunskap inom branschen. Vi utför alltid ett\n" +
        "            noggrant arbete för att du som kund skall känna dig trygg och för\n" +
        "            att slutresultatet ska bli så gott och hållbart som möjligt. Vi\n" +
        "            målar såväl invändigt som utvändigt och arbetar mot både\n" +
        "            privatpersoner och företag. Inget jobb är för stort eller för litet\n" +
        "            för oss! Vill du ha en erfaren målare i Järfälla så är du varmt\n" +
        "            välkommen att kontakta oss!",
    },
  
    title: "VÅRA TJÄNSTER",
    cardsInfo: [
      { image: "./images/malning.jpg", name: "MÅLNING" },
      { image: "./images/tapetsering.jpg", name: "TAPETSERING" },
      { image: "./images/3.jpg", name: "FASADMÅLNING" },
      { image: "./images/parket.png", name: "GOLVLÄGGNING" },
      { image: "./images/kitchen.png", name: "KÖKSRENOVERING" },
      { image: "images/cleaning.png", name: "FLYTTSTÄDNING" },
    ],
    paints: [
      {  image: "./images/nordsjo.jpg",},
      {image: "./images/two.png",},
      { image: "./images/three.png",},
      {image: "./images/flugger2.png",},
      {image: "./images/jotun.png",},
      {image: "./images/one.png"},
    ]
  };
  
  let display = document.getElementById("VälkoId");
  let row = document.createElement('div');
  row.setAttribute("class", "row justify-content-center text-center");
  
  let col = document.createElement("div");
  col.setAttribute("class", "col-lg-11 col-md-11 col-sm-11 col-11");
  
  let headline = document.createElement("h2");
  headline.setAttribute("class", "title");
  headline.innerHTML = `${data.valk.title}<hr>` ;
  let text  = document.createElement("p");
  text.setAttribute("class", "text");
   text.innerHTML = `${data.valk.Text}`;
  
  col.appendChild(headline);
  col.appendChild(text);
  row.appendChild(col);
  display.appendChild(row);
  
  let container = document.getElementById("varaId");
  
  let row1 = document.createElement("div");
  row1.setAttribute("class", "row justify-content-center");
  
  let col1 = document.createElement("div");
  col1.setAttribute("class", "col-lg-12 col-md-12 col-sm-12 col-12");
  
  col1.innerHTML = `<h2 class="title" style="text-align: center">${data.title}</h2>
  <hr/>`;
  
  row.appendChild(col1);
  container.appendChild(row1);
  
  let cardsRow = document.createElement("div");
  cardsRow.setAttribute("class", "row justify-content-center");
  
  for (let i = 0; i < 6; i++) {
    cardsRow.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-8 col-10 mx-2 portfolio-item">
    <a href="malning.html">
      <img alt="Image" class="img-fluid" src="${data.cardsInfo[i].image}"> 
      <div class="card-body for-varaBlock">
          <h4 class="card-title">
              <span class="title vara">${data.cardsInfo[i].name}</span>
          </h4>  
      </div>
    </a> 
  </div>`;
  }
  
  container.appendChild(cardsRow);
  