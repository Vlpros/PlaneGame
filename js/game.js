var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var plane = new Image();
var bg = new Image();
var fg = new Image();
var palka = new Image();
var palkaTop = new Image();

plane.src = "img/plane.png";
bg.src = "img/sky.png";
fg.src = "img/ground.png";
palka.src = "img/palka.png";
palkaTop.src = "img/palkaTop.png";

// Sound

var fly = new Audio()
var score = new Audio()
fly.src = "audio/fly.mp3"
score.src = "audio/score.mp3"


var gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp() {

    yPos -= 30;
    
}

//Блоки
var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}




//Самолет
var xPos = 10;
var yPos = 150;
var grav = 1.0;
var score = 0;

function draw() {

    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(palkaTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(palka, pipe[i].x, pipe[i].y + palkaTop.height + gap);

        pipe[i].x--;


        if (pipe[i].x == 200) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * palkaTop.height) - palkaTop.height

            })


        }

        if (xPos + plane.width >= pipe[i].x
            && xPos <= pipe[i].x + palkaTop.width
            && (yPos <= pipe[i].y + palkaTop.height
                || yPos + plane.height >= pipe[i].y + palkaTop.height + gap) || yPos + plane.height >= cvs.height - fg.height) {
            location.reload()

        }
        if (pipe[i].x == 5) {
            score++;
            

        }


    }


    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(plane, xPos, yPos);
    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет:" + score, 10, cvs.height - 25);
    yPos += grav;
    requestAnimationFrame(draw)

}
palka.onload = draw;

