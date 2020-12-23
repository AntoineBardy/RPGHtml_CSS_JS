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
  monstersElements[i].addEventListener('click', changeDefClick);
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