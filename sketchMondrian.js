let horizontalOffset = 0;
let verticalOffset = 0;
function setup() {
    createCanvas(400, 450);
}
function draw() {
    background(242, 240, 223);
    fill("#CB3E4A"); //fucsia
    noStroke();
    rect(105, 0, 50, 16);
    fill("#C15106"); //naranja
    rect(250, 0, 40, 8);
    fill("#C15106"); //naranja
    rect(200, 45, 55, 55);
    fill("#2F438E"); //azul
    rect(185, 15, 42, 42);
    fill("#2F438E"); //azul2
    rect(285, 70, 40, 40);
    fill("#CB3E4A"); //fucsia2
    rect(310, 45, 45, 45);
    fill("#C15106"); //cuadraditos naranjas juntos 1
    rect(20, 75, 38, 38);
    fill("#2F438E"); //azul3 fondo
    rect(93, 98, 52, 52);
    fill("#C15106"); //cuadraditos naramjas juntos 2
    rect(75, 80, 38, 38);
    fill("#CB3E4A"); //fucsia 3 grande
    rect(158, 113, 67, 67);
    fill("#2F438E"); //(azul apaisado)
    rect(35, 210, 60, 34);
    fill("#C15106"); //naranja encima azul apaisado
    rect(90, 180, 47, 47);
    fill("#C15106"); //naranja al lado de fucsia grande
    rect(230, 165, 40, 40);
    fill("#2F438E"); //azul4
    rect(300, 150, 40, 43);
    fill("#CB3E4A"); //fucsia pegado a naranjas
    rect(230, 203, 42, 45);
    fill("#C15106"); //naranja largo
    rect(270, 210, 42, 75);
    fill("#C15F02"); //naranja pegado a azul
    rect(340, 165, 38, 38);
    fill("#2F438E"); //azul arriba de naranja
    rect(370, 130, 40, 43);
    fill("#2F438E"); //azul6
    rect(330, 225, 40, 40);
    fill("#CB3E4A"); //fucsia suelto
    rect(70, 270, 45, 45);
    fill("#C15106"); //naranja suelto
    rect(159, 293, 45, 45);
    fill("#CB3E4A"); //fuscisa fondo
    rect(142, 355, 45, 45);
    fill("#C15106"); //naranja encima fucsia
    rect(112, 340, 45, 45);
    fill("#2F438E"); //azul suelto
    rect(213, 265, 44, 44);
    fill("#C15106"); //naranja ultimo
    rect(225, 380, 45, 45); // Estilos de líneas
    stroke(0);
    strokeWeight(8);
    strokeCap(SQUARE); // Líneas horizontales
    line(107 + horizontalOffset, 23, 125 + horizontalOffset, 23);
    line(72 + horizontalOffset, 72, 88 + horizontalOffset, 72);
    line(250 + horizontalOffset, 65, 262 + horizontalOffset, 65);
    line(205 + horizontalOffset, 180, 240 + horizontalOffset, 180);
    line(370 + horizontalOffset, 207, 390 + horizontalOffset, 207);
    line(100 + horizontalOffset, 235, 125 + horizontalOffset, 235);
    line(150 + horizontalOffset, 260, 172 + horizontalOffset, 260);
    line(338 + horizontalOffset, 308, 360 + horizontalOffset, 308);
    line(75 + horizontalOffset, 395, 95 + horizontalOffset, 395);
    line(175 + horizontalOffset, 430, 195 + horizontalOffset, 430); // Líneas verticales
    line(198 + verticalOffset, 48, 198 + verticalOffset, 65);
    line(141 + verticalOffset, 90, 141 + verticalOffset, 110);
    line(235 + verticalOffset, 92, 235 + verticalOffset, 112);
    line(215 + verticalOffset, 138, 215 + verticalOffset, 165); // Sobre fucsia grande
    line(20 + verticalOffset, 170, 20 + verticalOffset, 185);
    line(83 + verticalOffset, 180, 83 + verticalOffset, 195);
    line(150 + verticalOffset, 159, 150 + verticalOffset, 177);
    line(343 + verticalOffset, 155, 343 + verticalOffset, 175); // Pegada a azul
    line(272 + verticalOffset, 193, 272 + verticalOffset, 210); // Pegada a rectángulo naranja
    line(325 + verticalOffset, 223, 325 + verticalOffset, 242); // A la izquierda de azul
    line(67 + verticalOffset, 235, 67 + verticalOffset, 254); // Abajo rectángulo azul
    line(141 + verticalOffset, 217, 141 + verticalOffset, 235);
    line(227 + verticalOffset, 233, 227 + verticalOffset, 251);
    line(264 + verticalOffset, 270, 264 + verticalOffset, 288);
    line(13 + verticalOffset, 300, 13 + verticalOffset, 318);
    line(152 + verticalOffset, 348, 152 + verticalOffset, 362);
    line(250 + verticalOffset, 343, 250 + verticalOffset, 360);
    line(273 + verticalOffset, 371, 273 + verticalOffset, 386);
    line(355 + verticalOffset, 360, 355 + verticalOffset, 375);
}
function mouseMoved() {
    horizontalOffset = mouseX;
    verticalOffset = mouseY;
}