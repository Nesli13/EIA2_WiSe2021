"use strict";
/*Aufgabe: L.11.1_GoldenerHerbstAdvanced
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler
*/
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    window.addEventListener("load", hndLoad);
    let canvas;
    let moveables = [];
    L11_1_GoldenerHerbst.nutPosition = [];
    let imgData;
    let golden = 0.65; //Goldener-Schnitt
    function hndLoad(_event) {
        canvas = document.querySelector("canvas");
        //console.log(canvas);
        L11_1_GoldenerHerbst.crc2 = canvas.getContext("2d");
        //console.log(crc2);
        canvas.addEventListener("click", createNut);
        let horizon = L11_1_GoldenerHerbst.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new L11_1_GoldenerHerbst.Vector(400, 65));
        drawMountain(new L11_1_GoldenerHerbst.Vector(0, horizon), 55, 150, "grey", "white");
        createStars(new L11_1_GoldenerHerbst.Vector(0, 300), new L11_1_GoldenerHerbst.Vector(900, 300));
        drawPineTree(new L11_1_GoldenerHerbst.Vector(75, 380)); //high triangle
        drawPineTree(new L11_1_GoldenerHerbst.Vector(75, 440)); //middle triangle
        drawPineTree(new L11_1_GoldenerHerbst.Vector(75, 500)); //low triangle
        drawMapleTree(new L11_1_GoldenerHerbst.Vector(590, 500), (new L11_1_GoldenerHerbst.Vector(20, 500)), "#A0522D");
        drawFlower(new L11_1_GoldenerHerbst.Vector(100, 400), "#F4DC21");
        drawFlower(new L11_1_GoldenerHerbst.Vector(330, 400), "pink");
        imgData = L11_1_GoldenerHerbst.crc2.getImageData(0, 0, L11_1_GoldenerHerbst.crc2.canvas.width, L11_1_GoldenerHerbst.crc2.canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();
        window.setInterval(update, 50);
    }
    function update() {
        //console.log("update moveables"); //wirdausgegeben
        L11_1_GoldenerHerbst.crc2.fillRect(0, 0, L11_1_GoldenerHerbst.crc2.canvas.width, L11_1_GoldenerHerbst.crc2.canvas.height);
        L11_1_GoldenerHerbst.crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function startTimer(duration, display) {
        // tslint:disable-next-line: typedef
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(String(timer / 60));
            seconds = parseInt(String(timer % 60));
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
            if (timer == 0) {
                let body = document.querySelector("body");
                body.removeChild(canvas);
            }
        }, 1000);
    }
    window.onload = function () {
        let fiveMinutes = 10 * 1, display = document.querySelector("#time");
        startTimer(fiveMinutes, display);
    };
    //Inspiriert von Ey??p ??cal
    function createNut(_event) {
        console.log(_event);
        // tslint:disable-next-line: typedef
        let nut = new L11_1_GoldenerHerbst.Nut(new L11_1_GoldenerHerbst.Vector(_event.clientX, _event.clientY));
        moveables.push(nut);
        let nutSpot = new L11_1_GoldenerHerbst.Vector(_event.clientX, _event.clientY);
        L11_1_GoldenerHerbst.nutPosition.push(nutSpot);
        console.log(L11_1_GoldenerHerbst.nutPosition);
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L11_1_GoldenerHerbst.Cloud(.8);
            moveables.push(cloud);
            console.log(moveables);
        }
    }
    function createSquirrel() {
        for (let i = 0; i < 1; i++) {
            let squirrel = new L11_1_GoldenerHerbst.Squirrel(0.9, new L11_1_GoldenerHerbst.Vector(300, 500));
            moveables.push(squirrel);
            console.log(squirrel);
        }
    }
    function createLeaf() {
        for (let i = 0; i < 10; i++) {
            let leaf = new L11_1_GoldenerHerbst.Leaf(0.9);
            moveables.push(leaf);
            console.log(leaf);
        }
    }
    function drawBackground() {
        let gradient = L11_1_GoldenerHerbst.crc2.createLinearGradient(0, 0, 10, 400);
        gradient.addColorStop(0, "HSLA(225, 100%, 73%, 1)");
        gradient.addColorStop(.7, "HSLA(219, 100%, 89%, 1)");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "HSLA(102, 64%, 40%, 1)");
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.fillRect(0, 0, 1000, 1000);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 40;
        let r2 = 120;
        let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountain");
        let stepMin = 45;
        let stepMax = 150;
        let x = 0;
        let y = 0;
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.moveTo(0, 0);
        L11_1_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + (stepMax - stepMin);
            y = -_min - .6 * (_max - _min);
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - .7 * (_max - _min);
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.3 * (_max - _min);
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.1 * (_max - _min);
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L11_1_GoldenerHerbst.crc2.canvas.width);
        L11_1_GoldenerHerbst.crc2.lineTo(x, 0);
        L11_1_GoldenerHerbst.crc2.closePath();
        let gradient = L11_1_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow); //unten
        gradient.addColorStop(0.7, _colorHigh); //oben
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    function createStars(_position, _size) {
        console.log("Stars", _position, _size);
        let nParticles = 100;
        let radiusParticle = 3;
        let particle = new Path2D();
        let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x = 0;
        let y = 0;
        let drawn = 0;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
        do {
            L11_1_GoldenerHerbst.crc2.save();
            x = (Math.random() - 0.1) * _size.x;
            y = -(Math.random() * _size.y);
            L11_1_GoldenerHerbst.crc2.translate(x, y),
                L11_1_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
            L11_1_GoldenerHerbst.crc2.restore();
            drawn++;
            L11_1_GoldenerHerbst.crc2.lineTo(x, y);
        } while (drawn < nParticles);
        L11_1_GoldenerHerbst.crc2.restore();
    }
    //Baum dunkelorange
    function drawPineTree(_position) {
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = "brown";
        L11_1_GoldenerHerbst.crc2.fillRect(150, 500, 50, 600);
        L11_1_GoldenerHerbst.crc2.fillStyle = "#FF4500";
        L11_1_GoldenerHerbst.crc2.moveTo(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.lineTo(_position.x + 100, _position.y - 100);
        L11_1_GoldenerHerbst.crc2.lineTo(_position.x + 200, _position.y);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
    }
    function drawMapleTree(_position, _size, _fillColor) {
        //Baum1 hellgr??n
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = _fillColor;
        L11_1_GoldenerHerbst.crc2.fillRect(650, 500, 50, 600);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = "#6B8E23";
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 75, _position.y + -120, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 130, _position.y + -80, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 120, _position.y + -20, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 40, _position.y + -20, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 40, _position.y + -80, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + 30, _position.y + -80, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
        //Baum2 orange
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = "#800000";
        L11_1_GoldenerHerbst.crc2.fillRect(430, 500, 50, -70);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.fillStyle = "#FF8C00";
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -175, _position.y + -160, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -160, _position.y + -170, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -100, _position.y + -160, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -100, _position.y + -110, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -140, _position.y + -200, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.arc(_position.x + -165, _position.y + -110, 50, -5, 2 * Math.PI);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
    // Blume
    function drawFlower(_position, fillColor) {
        L11_1_GoldenerHerbst.crc2.save();
        L11_1_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_1_GoldenerHerbst.crc2.strokeStyle = "darkgreen";
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.moveTo(200, 100);
        L11_1_GoldenerHerbst.crc2.lineTo(200, 180);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.stroke();
        L11_1_GoldenerHerbst.crc2.fillStyle = "#361E12";
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.stroke();
        L11_1_GoldenerHerbst.crc2.fillStyle = fillColor;
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(200, 130, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(200, 70, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(170, 100, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(230, 100, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(175, 80, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(222, 79, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(177, 123, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.beginPath();
        L11_1_GoldenerHerbst.crc2.ellipse(225, 122, 20, 20, 0, 0, 100);
        L11_1_GoldenerHerbst.crc2.closePath();
        L11_1_GoldenerHerbst.crc2.fill();
        L11_1_GoldenerHerbst.crc2.restore();
    }
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map