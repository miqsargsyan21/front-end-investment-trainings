function sortByDefault () {
    for (let i = 0; i < learnersData.length; i++) {
        document.getElementsByClassName(('col' + String(i + 1)))[0].innerText = learnersData[i].name;
        document.getElementsByClassName(('col' + String(i + 1)))[1].innerText = learnersData[i].surname;
        document.getElementsByClassName(('col' + String(i + 1)))[2].innerText = learnersData[i].age;
        document.getElementsByClassName(('col' + String(i + 1)))[3].innerText = learnersData[i].grade;
    } 
}

function sortFunc (propertyName) {
    let dataCopy = learnersData.slice();
    dataCopy.sort(dynamicSort(propertyName));
    printChange(dataCopy);
}

function printChange (dataCopy) {
    for (let i = 0; i < dataCopy.length; i++) {
        document.getElementsByClassName(('col' + String(i + 1)))[0].innerText = dataCopy[i].name;
        document.getElementsByClassName(('col' + String(i + 1)))[1].innerText = dataCopy[i].surname;
        document.getElementsByClassName(('col' + String(i + 1)))[2].innerText = dataCopy[i].age;
        document.getElementsByClassName(('col' + String(i + 1)))[3].innerText = dataCopy[i].grade;
    }
}

function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}