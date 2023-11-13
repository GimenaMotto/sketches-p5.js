function setup() {
    createCanvas(700, 700);
}
function draw() {
    background(0); //triángulos arriba
    fill("#393839");
    noStroke();
    triangle(0, 0, 100, 0, 0, 100);
    fill("#4C9BD6");
    triangle(100, 0, 300, 0, 200, 100);
    fill("#35955A");
    triangle(300, 0, 500, 0, 400, 100);
    fill("#FF6629");
    triangle(500, 0, 710, 0, 600, 100); //rombos 1
    fill("#435CB7");
    stroke(0);
    strokeWeight(0.5);
    quad(100, 0, 200, 100, 100, 200, 0, 100);
    fill("#42B46C");
    triangle(300, 0, 300, 200, 200, 100);
    fill("#FF6629");
    triangle(300, 0, 400, 100, 300, 200);
    fill("#B43737");
    quad(500, 0, 600, 100, 500, 200, 400, 100); //triángulos derecha
    fill("#6C4D86");
    noStroke();
    triangle(600, 100, 710, 0, 700, 200);
    fill("#35955A");
    stroke(0);
    strokeWeight(0.5);
    triangle(700, 200, 700, 400, 600, 300);
    fill("#FF8758");
    triangle(700, 400, 700, 600, 600, 500);
    fill("#435CB7");
    triangle(700, 600, 700, 700, 600, 700); //triangulos abajo
    fill("#B43737");
    triangle(500, 600, 600, 700, 400, 700);
    fill("#38478B");
    triangle(300, 600, 400, 700, 300, 700);
    fill("#35955A");
    triangle(300, 600, 300, 700, 200, 700);
    fill("#FF6F36");
    triangle(100, 600, 200, 700, -10, 700); //triangulos izq
    fill("#933AA5");
    triangle(0, 500, 100, 600, 0, 695);
    fill("#B43737");
    triangle(0, 300, 100, 400, 0, 500);
    fill("#393839");
    triangle(0, 100, 100, 200, 0, 300); //rombos 2
    fill("#B43737");
    quad(200, 100, 300, 200, 200, 300, 100, 200);
    fill("#478FC4");
    quad(400, 100, 500, 200, 400, 300, 300, 200);
    fill("#296A40");
    triangle(600, 100, 700, 200, 500, 200);
    fill("#933AA5");
    triangle(500, 200, 700, 200, 600, 300); //rombos 3
    fill("#FF6F36");
    quad(0, 300, 100, 200, 200, 300, 100, 400);
    fill("#F7F7ED");
    quad(300, 200, 400, 300, 300, 400, 200, 300);
    fill("#435CB7");
    quad(500, 200, 600, 300, 500, 400, 400, 300); //rombos 4
    fill("#3E3E3C");
    quad(200, 300, 300, 400, 200, 500, 100, 400);
    quad(400, 300, 500, 400, 400, 500, 300, 400);
    fill("#6C4D86");
    noStroke();
    triangle(500, 400, 600, 300, 600, 500);
    fill("#A375AD");
    triangle(600, 300, 700, 400, 600, 500); //rombos 5
    fill("#5A77D3");
    stroke(0);
    strokeWeight(0.5);
    triangle(0, 500, 100, 400, 100, 600);
    fill("#438DC4");
    triangle(100, 400, 200, 500, 100, 600);
    fill("#F7F7ED");
    quad(300, 400, 400, 500, 300, 600, 200, 500);
    fill("#438DC4");
    quad(500, 400, 600, 500, 500, 600, 400, 500); //rombos 6
    fill("#D85391");
    quad(200, 500, 300, 600, 200, 700, 100, 600);
    fill("#FA6D3A");
    triangle(400, 500, 500, 600, 300, 600);
    fill("#6CACDB");
    triangle(300, 600, 500, 600, 400, 700);
    fill("#35955A");
    quad(600, 500, 700, 600, 600, 700, 500, 600); //figuras arriba
    //violetas
    fill("#933AA5");
    noStroke();
    quad(53, 53, 147, 53, 147, 150, 53, 150);
    quad(600, 520, 680, 600, 600, 680, 520, 600); //azules
    fill("#5A77D3");
    quad(200, 120, 280, 200, 200, 280, 120, 200);
    fill("#405BB9");
    ellipse(500, 100, 125, 125); //verdes
    fill("#35955A");
    stroke(0);
    strokeWeight(0.2);
    triangle(320, 190, 440, 155, 410, 280);
    fill("#296A40");
    noStroke();
    quad(110, 220, 165, 305, 90, 385, 40, 290); //rojo fucsia violeta
    fill("#B43737");
    triangle(490, 220, 580, 310, 455, 345);
    fill("#C93161");
    quad(405, 500, 500, 450, 595, 500, 500, 550);
    fill("#6C4D86");
    ellipse(200, 600, 125, 125); //negros
    // Figura 1
    if (
        mouseX > 290 &&
        mouseX < 380 &&
        mouseY > 235 &&
        mouseY < 545
    ) {
        fill(random(255), random(255), random(255));
    } else {
        fill("#3E3E3C");
    }
    quad(290, 235, 380, 290, 310, 360, 215, 310);

    // Figura 2
    if (
        mouseX > 215 &&
        mouseX < 345 &&
        mouseY > 415 &&
        mouseY < 545
    ) {
        fill(random(255), random(255), random(255));
    } else {
        fill("#3E3E3C");
    }
    triangle(215, 510, 305, 415, 345, 545);

    // Figura 3
    if (
        mouseX > 400 &&
        mouseX < 450 &&
        mouseY > 305 &&
        mouseY < 495
    ) {
        fill(random(255), random(255), random(255));
    } else {
        fill("#F7F7ED");
    }
    quad(400, 305, 450, 400, 400, 495, 350, 400);

    // Figura 4
    if (
        mouseX > 140 &&
        mouseX < 260 &&
        mouseY > 320 &&
        mouseY < 480
    ) {
        fill(random(255), random(255), random(255));
    } else {
        fill("#F7F7ED");
    }
    quad(190, 320, 260, 390, 210, 480, 140, 410);
}