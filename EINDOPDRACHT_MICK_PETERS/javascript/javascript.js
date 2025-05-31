const serienummers = ["images/SERIE_R.png", "images/SERIE_G.png", "images/SERIE_B.png" ];
let bom_r = false
let bom_g = false
let bom_b = false
let is_r_cut = false
let is_g_cut = false
let is_b_cut = false
let rood_knop = document.querySelector("#draad_r");
let geel_knop = document.querySelector("#draad_g");
let blauw_knop = document.querySelector("#draad_b");
let is_e_druk = false
let is_g_druk = false
let is_a_druk = false
let is_f_druk = false
let knop_e = document.querySelector("#knop_e");
let knop_g = document.querySelector("#knop_g");
let knop_a = document.querySelector("#knop_a");
let knop_f = document.querySelector("#knop_f");
let tijd = 180;
let even = false
let oneven = false
let win = false
let knipgeluid = new Audio("audio/SNIP.mp3") /*https://stackoverflow.com/questions/9419263/how-to-play-audio BRON*/ /*https://pixabay.com/sound-effects/scissors-quick-cut-100455/ BRON GELUID*/
let bomgeluid = new Audio("audio/EXPLOSIE.mp3") /*https://pixabay.com/sound-effects/explosion-fx-343683/ BRON GELUID*/
let knopgeluid = new Audio("audio/KNOP.mp3")/*https://pixabay.com/sound-effects/microwave-button-82493/ BRON GELUID*/

function roodcut(){
  document.querySelector("#draad_r").src = "images/ROODCUT.png";
}
function geelcut(){
  document.querySelector("#draad_g").src = "images/GEELCUT.png";
}
function blauwcut(){
  document.querySelector("#draad_b").src = "images/BLAUWCUT.png";
}

function cut_r(){
  is_r_cut = true;
  checkWin();
  knipgeluid.play();
}
function cut_g(){
  is_g_cut = true;
  checkWin();
  knipgeluid.play();
}
function cut_b(){
  is_b_cut = true;
  checkWin();
  knipgeluid.play();
}

function knop_e_klik(){
  is_e_druk = true;
  is_g_druk = false;
  is_a_druk = false;
  is_f_druk = false;
  knopgeluid.play();
}
function knop_g_klik(){
  is_g_druk = true;
  is_e_druk = false;
  is_a_druk = false;
  is_f_druk = false;
  knopgeluid.play();
}
function knop_a_klik(){
  is_a_druk = true;
  is_g_druk = false;
  is_e_druk = false;
  is_f_druk = false;
  knopgeluid.play();
}
function knop_f_klik(){
  is_f_druk = true;
  is_g_druk = false;
  is_a_druk = false;
  is_e_druk = false;
  knopgeluid.play();
}
function checkWin() {
  if (bom_r == true && is_r_cut == true && is_f_druk == true) {
    achtergrond_win();
  } else if (bom_g == true && is_g_cut == true && even == true) {
    achtergrond_win();
  } else if (bom_b == true && is_b_cut == true && is_a_druk == true) {
    achtergrond_win();
  } else {
    achtergrond_lose();
  }
}

function tijd_update() {
  minuten = Math.floor(tijd / 60);
  seconden = tijd % 60;

  if (minuten < 10){ 
    minuten = (`0${minuten}`); 
  }
  if (seconden < 10){
    seconden = (`0${seconden}`);
  }

  document.querySelector("p").textContent = (`${minuten}:${seconden}`);

  if ((tijd % 10)% 2 == 0) {
    even = true
  } else {
    even = false
  }
  
  tijd--;

  if (tijd >= 0){
    setTimeout(tijd_update, 1000);
  } 
  else {
    document.querySelector("p").textContent = "00:00";
  }
  if (tijd === 0 && win == false){
    achtergrond_lose();
  }
}

function achtergrond_win (){
  document.querySelector("#gewonnen").style.display = "block";
  document.querySelector("#glitter").style.display = "block";
  document.querySelector("#opnieuw").style.display = "block";
  document.querySelector("#clear").style.display = "block";
  win = true;
}
function achtergrond_lose (){
  tijd = 0;
  document.querySelector("p").textContent = "00:00";
  document.querySelector("#explosie").style.display = "block";
  document.querySelector("#clear").style.display = "block";
  document.querySelector("#opnieuw").style.display = "block";
  bomgeluid.play();
}
function refresh(){
   location.reload();
}

rood_knop.addEventListener("click",roodcut);
rood_knop.addEventListener("click",cut_r);
geel_knop.addEventListener("click",geelcut);
geel_knop.addEventListener("click",cut_g);
blauw_knop.addEventListener("click",blauwcut);
blauw_knop.addEventListener("click",cut_b);

knop_e.addEventListener("click",knop_e_klik);
knop_g.addEventListener("click",knop_g_klik);
knop_a.addEventListener("click",knop_a_klik);
knop_f.addEventListener("click",knop_f_klik);

opnieuw.addEventListener("click", refresh);

serie_kies = Math.random() * 3;
serie_keuze = Math.floor(serie_kies);
document.querySelector("#random_serie").src = serienummers[serie_keuze];

if (serie_keuze == 0){
  bom_r = true;
}
if (serie_keuze == 1){
  bom_g = true;
}
if (serie_keuze == 2){
  bom_b = true;
}





tijd_update();





document.querySelector("#opnieuw");
