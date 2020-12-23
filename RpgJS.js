var MatthieuLeBoss =    {name:"MatthieuLeBoss", health:400, mana:100, attack:12, defense:5 , lastAction:null};
var MiniLaink =    {name:"MiniLaink", health:800, mana:40, attack:10, defense:10, lastAction:null};
var MuscleTom =      {name:"MuscleTom",   health:500, mana:100, attack:8, defense:5, lastAction:null};
var Bouclette =      {name:"Bouclette",   health:400, mana:70, attack:20, defense:3, lastAction:null};

var pumpkin =   {element:null, class:"Monster", health:100, attack:8};
var AlienCaptain =   {element:null, class:"Monster", health:200, attack:10};
var SkullDemon =   {element:null, class:"Monster", health:400, attack:15};

var stage = 0;
var tour = 0;
var dialogue = document.getElementById('Dialogue');

var monstersElements = document.getElementsByClassName("Monstre1");
var monstersElements = document.getElementsByClassName("Monstre2");
var monstersElements = document.getElementsByClassName("Monstre3");

var monsters = [pumpkin, AlienCaptain, SkullDemon];
for (var i = 0; i < monstersElements.length; i++)
{
  monsters[i].element = monstersElements[i];
  monstersElements[i].addEventListener('mouseover', MontrerInfoBulle);
  monstersElements[i].addEventListener('click', VoirAutreMonstre);
  monstersElements[i].addEventListener('mouseout', CacherInfobulle);
}
var target = monsters[0];
var characters = [MatthieuLeBoss, MiniLaink, MuscleTom, Bouclette];

function MontrerInfoBulle(e) {
  if (e.target.id == "Monstre1") {
    e.target.children[0].style.visibility = "visible";
  }
}

function CacherInfobulle(e) {
  if (e.target.id == "Monstre1") {
    e.target.children[0].style.visibility = "hidden";
  }
}

function MontrerInfoBulle(e) {
  if (e.target.id == "Monstre2") {
    e.target.children[0].style.visibility = "visible";
  }
}

function CacherInfobulle(e) {
  if (e.target.id == "Monstre2") {
    e.target.children[0].style.visibility = "hidden";
  }
}

function MontrerInfoBulle(e) {
  if (e.target.id == "Monstre3") {
    e.target.children[0].style.visibility = "visible";
  }
}

function CacherInfobulle(e) {
  if (e.target.id == "Monstre3") {
    e.target.children[0].style.visibility = "hidden";
  }
}

function VoirAutreMonstre(e) {
  if (e.target.id == "Monstre1") {
    for (var i = 0; i < monstersElements.length; i++)
    {
      if (monstersElements[i] == e.target) {
        target = monsters[i];
      }
    }
    updateUI();
  }
}

function VoirAutreMonstre(e) {
  if (e.target.id == "Monstre2") {
    for (var i = 0; i < monstersElements.length; i++)
    {
      if (monstersElements[i] == e.target) {
        target = monsters[i];
      }
    }
    updateUI();
  }
}

function VoirAutreMonstre(e) {
  if (e.target.id == "Monstre3") {
    for (var i = 0; i < monstersElements.length; i++)
    {
      if (monstersElements[i] == e.target) {
        target = monsters[i];
      }
    }
    updateUI();
  }
}

function win() {
  dialogue.innerHTML = "You Win !";
  alert("You Win !");
}

function lose() {
  dialogue.innerHTML = "You lose !";
  alert("You lose!");
}

function nextRound(){
	var charactersAlive = false;
	for (var i=0; i<characters.length; i++){
		if (characters[i].health > 0){
			charactersAlive = true; 
		}
	}
	if (!charactersAlive){
		lose();
	}
	monsterStage()
	nextStage();
}

function attaque() {
  target.health -= characters[stage].attack;
  console.log(target.health);
  characters[stage].lastAction = "attaque";
  nextStage();
}

function defense() {
  characters[stage].lastAction = "defense";
}
 
function AtkSpecial() {
  if (stage == 0) {
	target.health -= characters[stage].attack * 2;
	characters[stage].mana -= 15;
  } else if (stage == 1) {
	var injured = characters[0]; 
	for (var i=0;i < characters.length; i++){
		if (characters[i].health < injured.health && characters[i].health > 0){
			injured = characters[i];
		}
	}
	injured.health += 20;
	characters[stage].mana -= 25;
  } else if (stage == 2) {
    for (var i = 0; i < monsters.length; i++)
    {
      monsters[i].health -= 15;
    }
    characters[stage].mana -= 20;
  } else if (stage == 3) {
	for (var i=0; i < 4; i++){
		monsters[Math.floor((Math.random() * 100)) % monsters.length].health -= Math.floor(characters[stage].attack * 0.5) ;
	}
	characters[stage].mana -= 10;
  }
  characters[stage].lastAction = "special";
  nextStage();
}