/* Opdracht Objectgeorienteerd programmeren
   Informatica - Emmauscollege Rotterdam
*/

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
class Mens {
  x;
  y;
  speedX;
  speedY;
  breedte;
  isBesmet;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
    this.isBesmet = false;
    this.breedte = 20;
    
  }

  show () {
    noStroke ();

    if (this.isBesmet === true) {
      fill(255, 0, 0); //rood
    } else {
      fill(255, 255, 255); //wit
    }
    
    rect(this.x, this.y, this.breedte, this.breedte);
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;

    // stuiter evt. tegen de kanten
    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }
    if (this.y <= 0 || this.y + this.breedte >= height) {
      this.speedY = this.speedY * -1;
    }
  }

  isOverlappend(andereMens) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;
  
    // zet teruggeefwaarde op true als er een overlap is
    if ( (this.x >= andereMens.x &&
          this.x <= andereMens.x + andereMens.breedte &&
          this.y >= andereMens.y &&
          this.y <= andereMens.y + andereMens.breedte)
  
          /* VUL HIER ZELF LATER AAN VOOR DE ANDERE HOEKEN*/
        ) {
  
      overlappend = true;
    }
  
    // stuur de teruggeefwaarde terug
    return overlappend;
  }

}

var mensen = [];



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


  // maak 25 random mensen
  for (var teller = 0; teller < 25; teller++) {
    var ruimteTotRand = 50;

    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-5, 5);
    var randomSpeedY = random(-5, 5);

    // maak nieuw mensobject
    var nieuwMens = new Mens(randomX, randomY, randomSpeedX, randomSpeedY);

    // voeg mensobject toe aan array
    mensen.push(nieuwMens);
  }

  mensen[0].isBesmet = true;
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);


  for (var i = 0; i < mensen.length; i++) {
    // teken
    noStroke;
    fill(0, 0, 0);
    /*rect(mensen[i].x, mensen[i].y, BREEDTE, BREEDTE);

    // update positie
    mensen[i].x = mensen[i].x + mensen[i].speedX;
    mensen[i].y = mensen[i].y + mensen[i].speedY;*/
    var mens = mensen [i];

    mens.show();

    mensen[i].update();
  }



}
