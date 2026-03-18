class Figura {

 constructor(x, y, tam, col) {

  this.x = x;

  this.y = y;

  this.tam = tam;

  this.col = col;

 }



 display() {

  fill(this.col);

  rect(this.x, this.y, this.tam);

 }

}



let figuras = [];



function setup() {

 createCanvas(500, 300);

 noStroke();



 figuras = [

  new Figura(80, 98, 90, '#0800fb'),

  new Figura(90, 108, 100, '#00ff5e'),

  new Figura(100, 118, 200, '#ffcc00')

 ];

}



function draw() {

 background(200, 67, 170);



 for (const figura of figuras) {

  figura.display();

 }

}