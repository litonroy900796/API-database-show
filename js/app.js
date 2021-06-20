fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json").then(res => res.json()).then((data) => {
    let index = 0;

    let datalength = data.length;
    while (index < datalength) {
        document.getElementById('countries').innerHTML += ` <option value="${index}">${data[index].name}</option><br/>`
        ++index;
    }
console.log(data);
})
document.getElementById('countries').addEventListener('change', function () {
    let countryId = this.value;
    fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json").then(res => res.json()).then((data) => {
        let index = 0;

        let datalength = data[countryId].states.length;
        document.getElementById('state').innerHTML=""
        while (index < datalength) {
            document.getElementById('state').innerHTML += ` <option value="${index}">${data[countryId].states[index].name}</option><br/>`
            ++index;
        }

    })
})
document.getElementById('state').addEventListener('change', function (){ 
      document.getElementById('cities').innerHTML=""
    let stateId = this.value;
    fetch("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json").then(res => res.json()).then((data) => {
        let index = 0;
let countryID=document.getElementById('countries').value;
        let datalength = data[countryID].states[stateId].cities.length;
        
     
        while (index < datalength) {
            document.getElementById('cities').innerHTML += ` <option value="${index}">${data[countryID].states[stateId].cities[index].name}</option><br/>`
            ++index;
        }

    }) 
})
