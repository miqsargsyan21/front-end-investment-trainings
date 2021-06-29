let myObj = {
    name: {
        common:"Armenia",
        official:"Republic of Armenia",
        nativeName:{
            hye:{             
                official:"Հայաստանի Հանրապետություն",
                common:"Հայաստան"
            }
        }
    },
    tld: [".am"],
    currencies: {
        AMD:{ 
            name:"Armenian dram",
            symbol:"֏"
        }
    },
    idd:{
        root:"+3",
        suffixes:["74"]
    },
    capital: ["Yerevan"],
    altSpellings: ["AM","Hayastan","Republic of Armenia","Հայաստանի Հանրապետություն"],
    region: "Asia"
}

console.log(myObj.name.official.split(" ")[1]);
console.log(Object.keys(myObj.name.nativeName.hye)[1]);
console.log(myObj.tld[0][0]);
console.log(myObj.currencies.AMD.symbol);
console.log(myObj.idd.root[0]);
console.log(myObj.idd.suffixes[0]);
console.log(myObj.altSpellings[1].split("a")[2]);
console.log(myObj.altSpellings[3].split(" ")[1]);
console.log(myObj.altSpellings[1].split("a")[myObj.altSpellings[1].split("a").indexOf("st")]);