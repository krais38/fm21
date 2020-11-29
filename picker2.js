


 
var country = ['Czech Republic', 'Germany'/*, 'England', 'France', 'Italy', 'Spain'*/];
var CzechRepublic = ['Praha', 'Brno', 'Boleslav', 'Plzeň', 'Liberec', 'Jablonec', 'Teplice'];
var Germany = ['Berlin', 'Gladbach', 'Dortmund', 'Hannover', 'Leverkusen', 'Munich', 'Dresden'];
 
function Country () {
    var randomItem = country[Math.floor(Math.random()*country.length)];
    document.getElementById("countryName").innerHTML = randomItem
}
  
  
  
function City () {
    if (randomItem === 'Czech Republic'){
        function Czech () {
            var mesto = CzechRepublic[Math.floor(Math.random()*CzechRepublic.length)];
        }
      
        document.getElementById("teamName").innerHTML = mesto
    }
    if (randomItem === 'Germany'){
        function Ger () {
            var mesto = Germany[Math.floor(Math.random()*Germany.length)];
        }
        
      
        document.getElementById("teamName").innerHTML = mesto
    }

    
}
 


/*let team = ['Praha', 'Madrid', 'Berlin', 'London', 'Paris', 'Roma', 'Barcelona'];*/



