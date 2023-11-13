let xcuad1, ycuad1, xcuad2, ycuad2;
let fondo, loop, azul;
let rojo, verde, amarillo;

function setup() {
    createCanvas(690, 730);
    xcuad1 = 185;
    ycuad1 = 265;
    xcuad2 = 345;
    ycuad2 = 305;
    fondo = color(252, 252, 247);
    loop = color(49, 49, 52);
    azul = color(64, 88, 219);
    rojo = color(222, 103, 103);
    verde = color(91, 188, 121);
    amarillo = color(240, 245, 111);
}
function draw() {

    background(fondo); //loop ellipses
    for (let x = 125; x < 570; x = x + 40)
        for (let y = 125; y < 610; y = y + 40) {
            noStroke();
            fill(loop);
            ellipse(x, y, 37, 37);
        } //rect color fondo y line
    stroke(fondo);
    strokeWeight(10);
    noFill();
    rect(140, 150, 410, 430); //grande
    strokeWeight(15);
    rect(266, 145, 157, 440); //rectángulo
    strokeWeight(13);
    rect(xcuad1, ycuad1, 160, 160); //cuadrado1
    rect(xcuad2, ycuad2, 160, 160); //cuadrado1
    line(0, 305, 185, 305); //line izq
    line(505, 425, width, 425); //line der
    //rect and arc color
    noStroke();
    fill(azul);
    rect(xcuad1 + 7, ycuad1 + 7, 147, 147); //azul
    fill(loop);
    rect(xcuad2 + 7, ycuad2 + 7, 147, 147); //negro
    arc(
        xcuad1 + 102.5,
        ycuad1 + 80,
        146,
        146,
        QUARTER_PI,
        PI + HALF_PI + QUARTER_PI,
        CHORD
    );
    fill(azul);
    arc(
        xcuad2 + 58.5,
        ycuad2 + 80,
        146,
        146,
        PI + QUARTER_PI,
        TWO_PI + HALF_PI + QUARTER_PI,
        CHORD
    );
}
function mouseMoved() {




    if (mouseX > 100 && mouseX < 260 && mouseY > 100 && mouseY < 525) {
        xcuad1 = mouseX;
        ycuad1 = mouseY;
        xcuad2 = mouseX + 160;
        ycuad2 = mouseY + 40;
        azul = rojo;
    } else if (mouseX > 260 && mouseX < 425 && mouseY > 100 && mouseY < 400) {
        xcuad1 = mouseX;
        ycuad1 = mouseY;
        xcuad2 = mouseX;
        ycuad2 = mouseY + 160;
        azul = verde;
    } else if (mouseX > 350 && mouseX < 485 && mouseY > 100 && mouseY < 480) {
        xcuad1 = mouseX;
        ycuad1 = mouseY;
        xcuad2 = mouseX - 170;
        ycuad2 = mouseY + 80;
        azul = amarillo;
    } else {
        xcuad1 = 185;
        ycuad1 = 265;
        xcuad2 = 345;
        ycuad2 = 305;
        azul = color(64, 88, 219);
    }
}
function mousePressed() {
    let randomColor = color(random(200), random(200), random(200));
    azul = randomColor;
    if (mouseButton == RIGHT) {
        fondo = color(49, 49, 52);
        loop = color(252, 252, 247);
    }
}
function mouseReleased() {
    azul = color(64, 88, 219);
    fondo = color(252, 252, 247);
    loop = color(49, 49, 52);
}
