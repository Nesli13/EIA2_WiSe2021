"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    window.addEventListener("load", hndLoad);
    let canvas;
    let moveables = [];
    let golden = 0.65; //Goldener-Schnitt
    function hndLoad(_event) {
        canvas = document.querySelector("canvas");
        console.log(canvas);
        L10_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
        console.log(L10_2_GoldenerHerbst.crc2);
        let horizon = L10_2_GoldenerHerbst.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new L10_2_GoldenerHerbst.Vector(400, 65));
        drawMountains(new L10_2_GoldenerHerbst.Vector(0, horizon), 55, 150, "grey", "white");
        createStars(new L10_2_GoldenerHerbst.Vector(0, 300), new L10_2_GoldenerHerbst.Vector(900, 300));
        drawTree(new L10_2_GoldenerHerbst.Vector(75, 380)); //high triangle
        drawTree(new L10_2_GoldenerHerbst.Vector(75, 440)); //middle triangle
        drawTree(new L10_2_GoldenerHerbst.Vector(75, 500)); //low triangle
        drawAnotherTree(new L10_2_GoldenerHerbst.Vector(590, 500), (new L10_2_GoldenerHerbst.Vector(20, 500)), "#A0522D");
    }
    function drawBackground() {
        let gradient = L10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 10, 400);
        gradient.addColorStop(0, "HSLA(225, 100%, 73%, 1)");
        gradient.addColorStop(.7, "HSLA(219, 100%, 89%, 1)");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "HSLA(102, 64%, 40%, 1)");
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.fillRect(0, 0, 1000, 1000);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 40;
        let r2 = 120;
        let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 45;
        let stepMax = 150;
        let x = 0;
        let y = 0;
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.moveTo(0, 0);
        L10_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + (stepMax - stepMin);
            y = -_min - .6 * (_max - _min);
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - .7 * (_max - _min);
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.3 * (_max - _min);
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.1 * (_max - _min);
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L10_2_GoldenerHerbst.crc2.canvas.width);
        L10_2_GoldenerHerbst.crc2.lineTo(x, 0);
        L10_2_GoldenerHerbst.crc2.closePath();
        let gradient = L10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow); //unten
        gradient.addColorStop(0.7, _colorHigh); //oben
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
    function createStars(_position, _size) {
        console.log("Stars", _position, _size);
        let nParticles = 100;
        let radiusParticle = 3;
        let particle = new Path2D();
        let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x = 0;
        let y = 0;
        let drawn = 0;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        do {
            L10_2_GoldenerHerbst.crc2.save();
            x = (Math.random() - 0.1) * _size.x;
            y = -(Math.random() * _size.y);
            L10_2_GoldenerHerbst.crc2.translate(x, y),
                L10_2_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
            L10_2_GoldenerHerbst.crc2.restore();
            drawn++;
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (drawn < nParticles);
        L10_2_GoldenerHerbst.crc2.restore();
    }
    //Baum dunkelorange
    function drawTree(_position) {
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.fillStyle = "brown";
        L10_2_GoldenerHerbst.crc2.fillRect(150, 500, 50, 600);
        L10_2_GoldenerHerbst.crc2.fillStyle = "#FF4500";
        L10_2_GoldenerHerbst.crc2.moveTo(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.lineTo(_position.x + 100, _position.y - 100);
        L10_2_GoldenerHerbst.crc2.lineTo(_position.x + 200, _position.y);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
    }
    function drawAnotherTree(_position, _size, _fillColor) {
        //Baum1 hellgrün
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.fillStyle = _fillColor;
        L10_2_GoldenerHerbst.crc2.fillRect(650, 500, 50, 600);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.fillStyle = "#6B8E23";
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 75, _position.y + -120, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 130, _position.y + -80, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 120, _position.y + -20, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 40, _position.y + -20, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 40, _position.y + -80, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + 30, _position.y + -80, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
        //Baum2 orange
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.fillStyle = "#800000";
        L10_2_GoldenerHerbst.crc2.fillRect(430, 500, 50, -70);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.fillStyle = "#FF8C00";
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -175, _position.y + -160, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -160, _position.y + -170, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -100, _position.y + -160, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -100, _position.y + -110, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -140, _position.y + -200, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.arc(_position.x + -165, _position.y + -110, 50, -5, 2 * Math.PI);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map