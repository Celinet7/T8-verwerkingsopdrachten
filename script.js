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

  show() {
    noStroke();

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
    if ((
      this.x < andereMens.x + andereMens.breedte &&
      this.x + this.breedte > andereMens.x &&
      this.y < andereMens.y + andereMens.breedte &&
      this.y + this.breedte > andereMens.y)

    ) {

      overlappend = true;
    }

    // stuur de teruggeefwaarde terug
    return overlappend;
  }

}

class Kat {
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
    this.breedte = 10;

  }

  show() {
    noStroke();

    if (this.isBesmet === true) {
      fill(255, 155, 0); //oranje
    } else {
      fill(0, 0, 255); //blauw
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

  isOverlappend(andereKat) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;

    // zet teruggeefwaarde op true als er een overlap is
    if ((
      this.x < andereKat.x + andereKat.breedte &&
      this.x + this.breedte > andereKat.x &&
      this.y < andereKat.y + andereKat.breedte &&
      this.y + this.breedte > andereKat.y)

    ) {

      overlappend = true;
    }

    // stuur de teruggeefwaarde terug
    return overlappend;
  }

}

var actoren = [];



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
    actoren.push(nieuwMens);
  }

  actoren[0].isBesmet = true;

  // maak 10 katten
  for (var teller = 0; teller < 10; teller++) {
    var ruimteTotRand = 50;

    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-2, 2);
    var randomSpeedY = random(-2, 2);

    // maak nieuw mensobject
    var nieuwKat = new Kat(randomX, randomY, randomSpeedX, randomSpeedY);

    // voeg mensobject toe aan array
    actoren.push(nieuwKat);
  }
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);


  for (var i = 0; i < actoren.length; i++) {
    // teken
    noStroke;
    fill(0, 0, 0);

    var mens = actoren[i];

    mens.show();

    actoren[i].update();
  }

  // ga alle mensen langs
  for (var i = 0; i < actoren.length; i++) {
    var mensA = actoren[i];
    // ga met mensA opnieuw alle mensen langs om te checken op overlap, behalve met zichzelf
    for (var j = 0; j < actoren.length; j++) {
      var mensB = actoren[j];
      if (mensA != mensB) {
        // check overlap
        var actorenOverlappen = mensA.isOverlappend(mensB);
        if (actorenOverlappen) {
          // check of er een besmetting optreedt
          if (mensA.isBesmet || mensB.isBesmet) {
            // als er één besmet is, wordt ze allebei besmet
            // als ze allebei besmet zijn, verandert deze code niets.
            mensA.isBesmet = true;
            mensB.isBesmet = true;
          }
        }
      }
    }
  }



}
