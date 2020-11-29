


 
var country = ["Czech Republic", 'Germany', 'England', 'France', 'Italy', 'Spain'];
var CZdivision =["First","Second"]
var GERdivision =["First","Second"]
var ENdivision =["First","Second"]
var FRdivision =["First","Second"]
var ITdivision =["First","Second"]
var ESdivision =["First","Second"]
var CzechRepublic = ['SK Slavia Praha',
'AC Sparta Praha',
'SK Sigma Olomouc',
'FC Viktoria Plzeň',
'FC Fastav Zlín',
'1.FC Slovácko',
'FK Pardubice',
'FK Jablonec',
'FC Slovan Liberec',
'MFK Karviná',
'Bohemians Praha 1905',
'SK Dynamo Č. Budějovice',
'FC Baník Ostrava',
'FK Mladá Boleslav',
'FK Teplice',
'FC Zbrojovka Brno',
'SFC Opava',
'1.FK Příbram',


    ];
var CzechRepublic2 = ['FC Hradec Králové',
'SK Líšeň 2019',
'FK Viktoria Žižkov',
'1.SK Prostějov',
'FK Ústí nad Labem',
'MFK Chrudim',
'FC Sellier & Bellot Vlašim',
'FK Dukla Praha',
'FK Fotbal Třinec',
'FK Varnsdorf',
'FC Vysočina Jihlava',
'FK Blansko',
'FC MAS Táborsko',
'FC Slavoj Vyšehrad',
   
        ];
var Germany1 = ['FC Bayern München',
'RB Leipzig',
'Bayer 04 Leverkusen',
'Borussia Dortmund',
'VfL Wolfsburg',
'1. FC Union Berlin',
'Borussia Mönchengladbach',
'FC Augsburg',
'Eintracht Frankfurt',
'VfB Stuttgart',
'SV Werder Bremen',
'TSG Hoffenheim',
'Hertha Berlin',
'Sport-Club Freiburg',
'1. FC Köln',
'1. FSV Mainz 05',
'DSC Arminia Bielefeld',
'FC Schalke 04',
];

var Germany2 = ['Greuther Fürth ',
'Hamburger SV ',
'Holstein Kiel ',
'Osnabrück ',
'Erzgebirge Aue ',
'Paderborn ',
'Bochum ',
'Karlsruher SC ',
'Heidenheim ',
'Jahn Regensburg ',
'Darmstadt 98 ',
'Fortuna Düsseldorf ',
'Nürnberg ',
'Hannover 96 ',
'Sandhausen ',
'Eintracht Braunschweig ',
'St. Pauli ',
'Würzburger Kickers ',
];

var England1 = ['Liverpool',
'Tottenham Hotspur',
'Chelsea',
'Leicester City',
'Southampton',
'Everton',
'Manchester United',
'Aston Villa',
'Manchester City',
'West Ham United',
'Wolverhampton Wanderers',
'Leeds United',
'Newcastle United',
'Arsenal',
'Crystal Palace',
'Brighton and Hove Albion',
'West Bromwich Albion',
'Burnley',
'Fulham',
'Sheffield United',
];
var England2 = ['Norwich City',
'Bournemouth',
'Watford',
'Swansea City',
'Reading',
'Bristol City',
'Brentford',
'Stoke City',
'Blackburn Rovers',
'Middlesbrough',
'Millwall',
'Luton Town',
'Huddersfield Town',
'Cardiff City',
'Queens Park Rangers',
'Barnsley',
'Birmingham City',
'Preston North End',
'Rotherham United',
'Coventry City',
'Nottingham Forest',
'Wycombe Wanderers',
'Sheffield Wednesday *',
'Derby County',

];

var France1 = ['Paris Saint-Germain',
'Lyon',
'Monaco',
'Montpellier',
'Lille',
'Marseille',
'Rennes',
'Angers',
'RC Lens',
'Brest',
'Nice',
'Metz',
'Bordeaux',
'Nantes',
'Nimes',
'St Etienne',
'Reims',
'Lorient',
'Strasbourg',
'Dijon',

];
var France2 = [' Paris FC',
' Grenoble',
' Troyes',
' Caen',
' Clermont',
' Auxerre',
' Toulouse',
' Sochaux',
' Niort',
' USL Dunkerque',
' Valenciennes',
' Le Havre',
' Guingamp',
' Amiens',
' Chateauroux',
' Ajaccio',
' Nancy',
' Rodez Aveyron',
' Pau FC',
' Chambly',


];

var Italy1 = ['AC Milan',
'Inter Milan',
'Sassuolo',
'Roma',
'Juventus',
'Verona',
'Napoli',
'Atalanta',
'Lazio',
'Bologna',
'Sampdoria',
'Cagliari',
'Udinese',
'Benevento',
'Spezia',
'Fiorentina',
'Parma',
'Torino',
'Genoa',
'Crotone',


];
var Italy2 = [' Lecce',
' Empoli',
' Venezia',
' Frosinone',
' SPAL',
' Cittadella',
' Salernitana',
' Chievo',
' Monza',
' Pordenone',
' Brescia',
' Cosenza',
' Reggiana',
' Vicenza',
' Reggina',
' Pisa',
' Ascoli',
' Virtus Entella',
' Cremonese',
' Pescara',



];

var Spain1 = ['Real Sociedad',
'Atletico Madrid',
'Villarreal',
'Real Madrid',
'Sevilla',
'Cadiz',
'Barcelona',
'Granada',
'Elche',
'Alaves',
'Athletic Bilbao',
'Valencia',
'Getafe',
'Real Betis',
'Osasuna',
'Eibar',
'Real Valladolid',
'Levante',
'SD Huesca',
'Celta Vigo',



];
var Spain2 = ['Espanyol',
'Mallorca',
'Leganes',
'Sporting Gijón',
'Almería',
'Rayo Vallecano',
'Mirandés',
'UD Logroñés',
'Fuenlabrada',
'Málaga',
'Lugo',
'Ponferradina',
'Real Oviedo',
'Girona',
'Las Palmas',
'FC Cartagena',
'Tenerife',
'Alcorcón',
'Castellón',
'Real Zaragoza',
'Sabadell',
'Albacete',





];

function ani(){
    document.getElementById('h1').className ='animation';
  }


/*Země*/ 
function Country () {
    var randomItem = country[Math.floor(Math.random()*country.length)];
    document.getElementById("countryName").innerHTML = randomItem
    
    if (randomItem ==="Czech Republic") {document.getElementById("genCzech").style.display = "block";} else {document.getElementById("genCzech").style.display = "none";};
    if (randomItem ==="Germany") {document.getElementById("genGerman").style.display = "block";} else{document.getElementById("genGerman").style.display = "none";};
    if (randomItem ==="England") {document.getElementById("genEnglish").style.display = "block";} else{document.getElementById("genEnglish").style.display = "none";};
    if (randomItem ==="France") {document.getElementById("genFrench").style.display = "block";} else{document.getElementById("genFrench").style.display = "none";};
    if (randomItem ==="Italy") {document.getElementById("genItalian").style.display = "block";} else{document.getElementById("genItalian").style.display = "none";};
    if (randomItem ==="Spain") {document.getElementById("genSpanish").style.display = "block";} else{document.getElementById("genSpanish").style.display = "none";};
    
    
    document.getElementById("genCountry").disabled = true;
    
}

/*Divize*/
function CzechDiv () {
    {
        var divize = CZdivision[Math.floor(Math.random()*CZdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genCzech1").style.display = "block";} else {document.getElementById("genCzech1","genCzech2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genCzech2").style.display = "block";} else {document.getElementById("genCzech2","genCzech1").style.display = "none";};

        document.getElementById("again1").style.display ="block";
    }
}
function GerDiv () {
    {
        var divize = GERdivision[Math.floor(Math.random()*GERdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genGer1").style.display = "block";} else {document.getElementById("genGer1","genGer2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genGer2").style.display = "block";} else {document.getElementById("genGer2","genGer1").style.display = "none";}
        
        document.getElementById("again1").style.display ="block";;
    }
}
function EngDiv () {
    {
        var divize = ENdivision[Math.floor(Math.random()*ENdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genEng1").style.display = "block";} else {document.getElementById("genEng1","genEng2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genEng2").style.display = "block";} else {document.getElementById("genEng2","genEng1").style.display = "none";};

        document.getElementById("again1").style.display ="block";
    }
}

function FraDiv () {
    {
        var divize = FRdivision[Math.floor(Math.random()*FRdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genFra1").style.display = "block";} else {document.getElementById("genFra1","genFra2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genFra2").style.display = "block";} else {document.getElementById("genFra2","genFra1").style.display = "none";};

        document.getElementById("again1").style.display ="block";
    }
}

function ItaDiv () {
    {
        var divize = ITdivision[Math.floor(Math.random()*ITdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genIta1").style.display = "block";} else {document.getElementById("genIta1","genIta2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genIta2").style.display = "block";} else {document.getElementById("genIta2","genIta1").style.display = "none";};

        document.getElementById("again1").style.display ="block";
    }
}

function SpaDiv () {
    {
        var divize = ESdivision[Math.floor(Math.random()*ESdivision.length)];
        document.getElementById("divName").innerHTML = divize
        if (divize ==="First") {document.getElementById("genSpa1").style.display = "block";} else {document.getElementById("genSpa1","genSpa2").style.display = "none";} ;
        if (divize ==="Second") {document.getElementById("genSpa2").style.display = "block";} else {document.getElementById("genSpa2","genSpa").style.display = "none";};

        document.getElementById("again1").style.display ="block";
    }
}

/*Týmy*/
function CzechTeam1 () {
    {
        var team = CzechRepublic[Math.floor(Math.random()*CzechRepublic.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}
function CzechTeam2 () {
    {
        var team = CzechRepublic2[Math.floor(Math.random()*CzechRepublic2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}
function GerTeam1 () {
    {
        var team = Germany1[Math.floor(Math.random()*Germany1.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function GerTeam2 () {
    {
        var team = Germany2[Math.floor(Math.random()*Germany2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function EngTeam1 () {
    {
        var team = England1[Math.floor(Math.random()*England1.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function EngTeam2 () {
    {
        var team = England2[Math.floor(Math.random()*England2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function FraTeam1 () {
    {
        var team = France1[Math.floor(Math.random()*France1.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function FraTeam2 () {
    {
        var team = France2[Math.floor(Math.random()*France2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function ItaTeam1 () {
    {
        var team = Italy1[Math.floor(Math.random()*Italy1.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function ItaTeam2 () {
    {
        var team = Italy2[Math.floor(Math.random()*Italy2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function SpaTeam1 () {
    {
        var team = Spain1[Math.floor(Math.random()*Spain1.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}

function SpaTeam2 () {
    {
        var team = Spain2[Math.floor(Math.random()*Spain2.length)];
        document.getElementById("teamName").innerHTML = team

        document.getElementById("again2").style.display ="block";
        
    }
}


/*function City () {
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

    
}*/
 


/*let team = ['Praha', 'Madrid', 'Berlin', 'London', 'Paris', 'Roma', 'Barcelona'];*/



