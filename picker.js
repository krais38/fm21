
let btnRandom = document.getElementById('genCountry');
let result = document.getElementById('countryName');

let btnTeam = document.getElementById('genTeam');
let teamResult = document.getElementById('teamName');
 
 
let country = ['CzechRepublic', 'Germany'/*, 'England', 'France', 'Italy', 'Spain'*/];

 
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, country.length-1);
    result.innerText = country[index];
});

/*let team = ['Praha', 'Madrid', 'Berlin', 'London', 'Paris', 'Roma', 'Barcelona'];*/
var CzechRepublic = ['Praha', 'Brno', 'Boleslav', 'Plzeň', 'Liberec', 'Jablonec', 'Teplice'];
var Germany = ['Berlin', 'Gladbach', 'Dortmund', 'Hannover', 'Leverkusen', 'Munich', 'Dresden'];

function getRandomTeam(min1, max1) {
    let step1 = max1 - min1 + 1;
    let step2 = Math.random() * step1;
    let teamResult = Math.floor(step2) + min1;
 
    return teamResult;
}
 
btnTeam.addEventListener('click', () => {
    let index = getRandomTeam(0, team.length-1);
    teamResult.innerText = team[index];
});

