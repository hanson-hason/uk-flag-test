//Flag of those funny white dudes who colonized haldf od the world and got hated bny everyone

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 300;

//Blue Background

ctx.fillStyle = "rgb(1, 33, 105)";
ctx.fillRect(0, 0, 600, 300);

//White Cross

//Top Left - Bottom Right

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.beginPath();
ctx.moveTo(0, 0); //Top Left
ctx.lineTo(75, 0); //Top Left Top
ctx.lineTo(600, 270); //Bottom Right Right
ctx.lineTo(600, 300); //Bottom Right
ctx.lineTo(525, 300); //Bottom Right Bottom
ctx.lineTo(0, 30); //Top Left Left
ctx.fill();

//Top Right - Bottom Left

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.beginPath();
ctx.moveTo(600, 0); //Top Left
ctx.lineTo(525, 0); //Top Left Top
ctx.lineTo(0, 270); //Bottom Right Right
ctx.lineTo(0, 300); //Bottom Right
ctx.lineTo(75, 300); //Bottom Right Bottom
ctx.lineTo(600, 30); //Top Left Left
ctx.fill();

//Red Saltire Top Left

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.beginPath();
ctx.moveTo(0, 0); //Top Left CORNER
ctx.lineTo(300, 150); //Bottom Right CORNER
ctx.lineTo(260, 150); //Bottom
ctx.lineTo(0, 20); //Top
ctx.fill();

//Red Saltire Top Right

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.beginPath();
ctx.moveTo(600, 0); //Top Right CORNER
ctx.lineTo(300, 150); //Bottom Left CORNER
ctx.lineTo(300, 130); //Left
ctx.lineTo(550, 0); //Top
ctx.fill();

//Red Saltire Bottom Left

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.beginPath();
ctx.moveTo(0, 300); //Bottom Left CORNER
ctx.lineTo(300, 150); //Top Left CORNER
ctx.lineTo(300, 170); //Right
ctx.lineTo(50, 300); //Bottom
ctx.fill();

//Red Saltire Bottom Right

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.beginPath();
ctx.moveTo(600, 300); //Bottom Left CORNER
ctx.lineTo(300, 150); //Top Left CORNER
ctx.lineTo(350, 150); //Top
ctx.lineTo(600, 280); //Right
ctx.fill();

// White Cross (v, h)

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(250, 0, 100, 300);

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 100, 600, 100);


//Red Cross (v, h)

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.fillRect(270, 0, 60, 300);

ctx.fillStyle = "rgb(200, 16, 46)";
ctx.fillRect(0, 120, 600, 60);

//Cross Line

//Black Cross

// ctx.lineWidth = 3;
// ctx.strokeStyle = "rgb(0, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(600, 300);
// ctx.stroke();

// ctx.lineWidth = 3;
// ctx.strokeStyle = "rgb(0, 0, 0)";
// ctx.beginPath();
// ctx.moveTo(600, 0);
// ctx.lineTo(0, 300);
// ctx.stroke();

// //Gray Cross

// ctx.lineWidth = 3;
// ctx.strokeStyle = "rgb(128, 128, 128)";
// ctx.beginPath();
// ctx.moveTo(0, 30);
// ctx.lineTo(525, 300);
// ctx.stroke();

// ctx.lineWidth = 3;
// ctx.strokeStyle = "rgb(128, 128, 128)";
// ctx.beginPath();
// ctx.moveTo(75, 0);
// ctx.lineTo(600, 270);
// ctx.stroke();





//"Stars"
