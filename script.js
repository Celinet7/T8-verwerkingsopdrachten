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

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }

}

const BREEDTE = 20;
var mensen;



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

  /*xPositions = [random(0, 1280 - BREEDTE), random(0, 1280 - BREEDTE), random(0, 1280 - BREEDTE), random(0, 1280 - BREEDTE), random(0, 1280 - BREEDTE)];
  yPositions = [random(0, 720 - BREEDTE), random(0, 720 - BREEDTE), random(0, 720 - BREEDTE), random(0, 720 - BREEDTE), random(0, 720 - BREEDTE)];
  speedX = [random(-5, 5), random(-5, 5), random(-5, 5), random(-5, 5), random(-5, 5)];
  speedY = [random(-5, 5), random(-5, 5), random(-5, 5), random(-5, 5), random(-5, 5)];*/

  mensen = [{
    x: 300,
    y: 600,
    speedX: 4,
    speedY: -4
  },
  {
    x: 400,
    y: 200,
    speedX: -4,
    speedY: 4
  },
  {
    x: 500,
    y: 300,
    speedX: -4,
    speedY: 4
  },
  {
    x: 700,
    y: 200,
    speedX: -4,
    speedY: 4
  },
  {
    x: 1000,
    y: 500,
    speedX: -4,
    speedY: 4
  }
  ];
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  //loop
  /*for (var i = 0; i < xPositions.length; i++) {
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(xPositions[i], yPositions[i], BREEDTE, BREEDTE);

    // update positie
    xPositions[i] = xPositions[i] + speedX[i];
    yPositions[i] = yPositions[i] + speedY[i];

    // stuiter evt. tegen de kanten
    if (xPositions[i] <= 0 || xPositions[i] + BREEDTE >= width) {
      speedX[i] = speedX[i] * -1;
    }

    if (yPositions[i] <= 0 || yPositions[i] + BREEDTE >= height) {
      speedY[i] = speedY[i] * -1;
    }
  }*/

  for (var i = 0; i < mensen.length; i++) {
    // teken
    noStroke;
    fill(255, 255, 255);
    rect(mensen[i].x, mensen[i].y, BREEDTE, BREEDTE);

    // update positie
    /*mensen[i].x = mensen[i].x + mensen[i].speedX;
    mensen[i].y = mensen[i].y + mensen[i].speedY;*/
    

    // stuiter evt. tegen de kanten
    if (mensen[i].x <= 0 || mensen[i].x + BREEDTE >= width) {
      mensen[i].speedX = mensen[i].speedX * -1;
    }
    if (mensen[i].y <= 0 || mensen[i].y + BREEDTE >= height) {
      mensen[i].speedY = mensen[i].speedY * -1;
    }

    mensen[i].update();
  }

  

}
