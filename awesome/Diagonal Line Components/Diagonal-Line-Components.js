let canvas = {
    widthRatio: 1,
    heightRatio: 1.5,
    borderRatio: 0.1,
    colour: {
        h: 200,
        s: 0.8,
        v: 0.1
    },
    width: 1,
    height: 1
}

let grid = {
    rows: 9,
    columns: 6,
    colour: {
        h: 200,
        s: 0.8,
        v: 0.4
    },
    cellWidth: 1,
    cellHeight: 1
}

let backgroundSettings = {
    colour: {
        h: 200,
        s: 0.5,
        v: 0.1
    }
}

let drawingCommands = {
    redraw: function () {
        drawArt();
    },
    regenerate: function () {
        generateComponents();
        drawArt();
    }
}

//! dat.GUI Code !//
let gui = new dat.GUI();

let backgroundFolder = gui.addFolder("Background");
backgroundFolder.addColor(backgroundSettings, 'colour').name("Colour");

let canvasFolder = gui.addFolder("Canvas");
canvasFolder.add(canvas, "widthRatio", 0.1, 20).name("Width");
canvasFolder.add(canvas, "heightRatio", 0.1, 20).name("Height");
canvasFolder.add(canvas, "borderRatio", 0, 1).name("Border");
canvasFolder.addColor(canvas, 'colour').name("Colour");

let gridFolder = gui.addFolder("Grid");
gridFolder.add(grid, "rows").name("Rows");
gridFolder.add(grid, "columns").name("Columns");
gridFolder.addColor(grid, 'colour').name("Colour");

//gui.add(drawingCommands, "redraw").name("Redraw");
gui.add(drawingCommands, "regenerate").name("Generate New");

//! Components Code !//
let gridComponents = [];

let BlockComponent = function (row, col, width, height, colour) {
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.draw = function () {
        if (this.col < grid.columns && this.row < grid.rows) {
            fill(this.colour.h, this.colour.s, this.colour.v);
            push();
            translate(windowWidth / 2, windowHeight / 2);
            let canvasX = -canvas.width / 2 + this.col * grid.cellWidth;
            let canvasY = -canvas.height / 2 + this.row * grid.cellHeight;

            if (this.col + this.width >= grid.columns) {
                this.width = grid.columns - this.col;
            }
            if (this.row + this.height >= grid.rows) {
                this.height = grid.rows - this.row;
            }

            rect(canvasX, canvasY, grid.cellWidth * this.width, grid.cellHeight * this.height);
            pop();
        }
    }
}

let TriangleComponent = function (row, col, width, height, colour) {
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.draw = function () {
        if (this.col < grid.columns && this.row < grid.rows) {
            fill(this.colour.h, this.colour.s, this.colour.v);
            push();

            translate(windowWidth / 2, windowHeight / 2);
            let canvasX = -canvas.width / 2 + this.col * grid.cellWidth;
            let canvasY = -canvas.height / 2 + this.row * grid.cellHeight;

            if (this.col + this.width >= grid.columns) {
                this.width = grid.columns - this.col;
            }
            if (this.row + this.height >= grid.rows) {
                this.height = grid.rows - this.row;
            }

            triangle(canvasX, canvasY,
                canvasX + grid.cellWidth * this.width, canvasY + grid.cellHeight * this.height,
                canvasX, canvasY + grid.cellHeight * this.height);
            pop();
        }
    };
}

let LinedBlockComponent = function (position, size, colour, angle, numberOfLines) {
    this.row = position.row;
    this.col = position.col;
    this.colour = colour;
    this.angle = angle;
    this.numberOfLines = numberOfLines;

    this.findWidth = function (width) {
        if (this.col + width >= grid.columns) {
            return grid.columns - this.col;
        } else {
            return width;
        }
    }

    this.findHeight = function (height) {
        if (this.row + height >= grid.rows) {
            return grid.rows - this.row;
        } else {
            return height;
        }
    }

    this.width = this.findWidth(size.width);
    this.height = this.findHeight(size.height);

    this.draw = function () {

        if (this.col >= grid.columns || this.row >= grid.rows) {
            return; //The component is outside the canvas, don't draw it.
        }

        push();
        translate(windowWidth / 2, windowHeight / 2);

        let boundaries = {
            minX: 0,
            minY: 0,
            maxX: this.width * grid.cellWidth,
            maxY: this.height * grid.cellHeight
        }

        let l = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            gradient: tan(this.angle)
        }

        let linesOnSideOfComponent = this.numberOfLines * this.height;
        let linesOnBottomOfComponent = this.numberOfLines * (grid.cellWidth / grid.cellHeight) * this.width * l.gradient;

        for (let i = 0; i < linesOnSideOfComponent; i++) {
            l.x1 = boundaries.minX;
            l.y1 = boundaries.minY + grid.cellHeight * this.height / linesOnSideOfComponent * i;

            //Assuming that the line crosses the y limit first, 
            l.y2 = boundaries.minY;
            l.x2 = -(l.y2 - l.y1) / l.gradient;

            if (l.x2 > boundaries.maxX) {
                l.x2 = boundaries.maxX;
                l.y2 = l.y1 - l.gradient * l.x2;
            }

            stroke(this.colour.h, this.colour.s, this.colour.v);

            push();
            translate(-canvas.width / 2 + this.col * grid.cellWidth, -canvas.height / 2 + this.row * grid.cellHeight);
            line(l.x1, l.y1, l.x2, l.y2);
            pop();
        }

        for (let i = 0; i < linesOnBottomOfComponent; i++) {
            l.y1 = boundaries.maxY;
            l.x1 = boundaries.minX + grid.cellWidth * this.width / linesOnBottomOfComponent * i;

            //Assuming that the line crosses the y limit first, 
            l.y2 = boundaries.minY;
            l.x2 = l.x1 + l.y1 / l.gradient;

            if (l.x2 > boundaries.maxX) {
                l.x2 = boundaries.maxX;
                l.y2 = l.y1 + (l.gradient * (l.x1 - l.x2)); //Thank you, GCSE Mathematics. (y0 - y1) = m * (x0 - x1) 
            }

            stroke(this.colour.h, this.colour.s, this.colour.v);

            push();
            translate(-canvas.width / 2 + this.col * grid.cellWidth, -canvas.height / 2 + this.row * grid.cellHeight);
            line(l.x1, l.y1, l.x2, l.y2);
            pop();
        }

        pop();
    };
}

//! Generative Art Code !//
function drawArt() {
    drawBackground();
    drawCanvas();
    drawGrid();
    drawComponents();
}

function drawCanvas() {
    noStroke();
    fill(canvas.colour.h,
        canvas.colour.s,
        canvas.colour.v);

    updateCanvasHeightAndWidth();

    push();
    translate(windowWidth / 2, windowHeight / 2);
    rect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    pop();
}

function updateCanvasHeightAndWidth() {
    if (canvas.widthRatio > canvas.heightRatio) {
        canvas.width = windowWidth - windowWidth * canvas.borderRatio;
        canvas.height = canvas.width * canvas.heightRatio / canvas.widthRatio;
        if (canvas.height > windowHeight - windowHeight * canvas.borderRatio) {
            canvas.height = windowHeight - windowHeight * canvas.borderRatio;
            canvas.width = canvas.height * canvas.widthRatio / canvas.heightRatio;
        }
    } else {
        canvas.height = windowHeight - windowHeight * canvas.borderRatio;
        canvas.width = canvas.height * canvas.widthRatio / canvas.heightRatio;
        if (canvas.width > windowWidth - windowWidth * canvas.borderRatio) {
            canvas.width = windowWidth - windowWidth * canvas.borderRatio;
            canvas.height = canvas.width * canvas.widthRatio / canvas.heightRatio;
        }
    }
}

function drawBackground() {
    background(
        backgroundSettings.colour.h,
        backgroundSettings.colour.s,
        backgroundSettings.colour.v);
}

function drawGrid() {
    stroke(
        grid.colour.h,
        grid.colour.s,
        grid.colour.v);

    grid.cellWidth = canvas.width / grid.columns;
    grid.cellHeight = canvas.height / grid.rows;

    push();
    translate(windowWidth / 2, windowHeight / 2);
    //Top left is now at -canvas.width/2, -canvas.height/2

    for (let col = 0; col <= grid.columns; col++) {
        let x = -canvas.width / 2 + col * grid.cellWidth;
        line(x, -canvas.height / 2, x, canvas.height / 2);
    }

    for (let row = 0; row <= grid.rows; row++) {
        let y = -canvas.height / 2 + row * grid.cellHeight;
        line(-canvas.width / 2, y, canvas.width / 2, y);
    }

    pop();
}

function drawComponents() {
    for (let comp = 0; comp < gridComponents.length; comp++) {
        gridComponents[comp].draw();
    }
}

function generateComponents() {

    gridComponents = [];

    for (let i = 0; i < 10; i++) {
        let position = {
            row: i,
            col: randInt(0, grid.columns)
        };

        let size = {
            height: randInt(1, 4),
            width: randInt(1, 4)
        };

        let colour = {
            h: randInt(160, 210),
            s: 0.8,
            v: 1
        };

        let angle = random(PI / 2 - 0.6) + 0.3;

        let lines = randInt(3, 10);

        gridComponents.push(
            new LinedBlockComponent(position, size, colour, angle, lines)
        );
    }
}

function randInt(min, max) {
    return Math.floor(random(max - min)) + min;
}

//! P5JS Functions !//
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 1, 1, 1);
    generateComponents();
    drawArt();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawArt();
}

/*
function draw(){
}
*/