let x, y, paso;
let cambioColorProbabilidad  // Ajusta la probabilidad de cambio de color

function setup() {
    x = 250;
    y = 250;
    paso = 10;
    cambioColorProbabilidad = 0.5;
    createCanvas(500, 500);
    background(0);
    noStroke();
    fill(255);
}

function draw() {
    // Deja un rastro suave
    fill(0, 5);
    rect(0, 0, width, height);

    // Cambia a colores random con una cierta probabilidad
    if (random() < cambioColorProbabilidad) {
        fill(random(30, 255), random(30, 255), random(30, 255));
    } else {
        fill(255);
    }

    ellipse(x, y, 10, 10);

    // Elegimos hacia dónde se mueve
    let choice = int(random(4));
    switch (choice) {
        case 0:
            x = x + paso;
            break;
        case 1:
            x = x - paso;
            break;
        case 2:
            y = y + paso;
            break;
        case 3:
            y = y - paso;
            break;
    }

    // Toroidal: Cuando sale por un borde, reaparece en el lado opuesto
    if (x > width) x = 0;
    if (x < 0) x = width;
    if (y < 0) y = height;
    if (y > height) y = 0;
}




