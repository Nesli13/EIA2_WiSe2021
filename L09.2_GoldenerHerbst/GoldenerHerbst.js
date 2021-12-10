"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    class GoldenerHerbst {
        constructor() {
            //Farbverlauf
            let golden = 0.65; //Goldener-Schnitt
            let horizon = L09_2_Classes.crc2.canvas.height * golden;
            this.drawBackground();
            this.drawSun({ x: 400, y: 65 });
            this.createStars({ x: 0, y: 300 }, { x: 900, y: 300 });
            this.drawMountains({ x: 0, y: horizon }, 55, 150, "grey", "HSLA(0,20%,78%,1");
            this.drawTree(75, 380); //high triangle
            this.drawTree(75, 440); //middle triangle
            this.drawTree(75, 500); //low triangle
            this.drawAnotherTree({ x: 590, y: 500 }, { x: 20, y: 500 }, "#A0522D");
            this.drawFlower({ x: 100, y: 400 }, "#F4DC21");
            this.drawFlower({ x: 330, y: 400 }, "pink");
            for (let index = 0; index < 4; index++) {
                this.createSquirrel(({ x: Math.random() * 1100, y: 300 + Math.random() * 250 }), "#8B4513");
            }
        }
        createSquirrel(_position, _fillColor) {
            console.log("Create Squirrel");
            //body
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = _fillColor;
            L09_2_Classes.crc2.arc(_position.x + 130, _position.y + 19, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 135, _position.y + 18, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 140, _position.y + 17, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 145, _position.y + 16, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 150, _position.y + 14, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 155, _position.y + 11, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 160, _position.y + 9, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 165, _position.y + 6, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 168, _position.y + 4, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 170, _position.y + 3, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 173, _position.y + 2, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 175, _position.y + 0, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 100, _position.y + 50, 13, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 99, _position.y + 17, 35, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 59, _position.y + 21, 12, 15.7, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 85, _position.y + -30, 24, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 85, _position.y + -50, 14, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            //ears
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.fillStyle = "#CD853F";
            L09_2_Classes.crc2.arc(_position.x + 85, _position.y + -50, 9, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            //eyes+mouth
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.fillStyle = "black";
            L09_2_Classes.crc2.arc(_position.x + 76, _position.y + -29, 4, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 73, _position.y + -12, 1, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 75, _position.y + -15, 1, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
        drawBackground() {
            let gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 10, 400);
            gradient.addColorStop(0, "HSLA(225, 100%, 73%, 1)");
            gradient.addColorStop(.7, "HSLA(219, 100%, 89%, 1)");
            gradient.addColorStop(0.9, "white");
            gradient.addColorStop(1, "HSLA(102, 64%, 40%, 1)");
            L09_2_Classes.crc2.fillStyle = gradient;
            L09_2_Classes.crc2.fillRect(0, 0, 1000, 1000);
        }
        drawSun(_position) {
            console.log("Sun", _position);
            let r1 = 40;
            let r2 = 120;
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(58, 100%, 66%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            L09_2_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
        createStars(_position, _size) {
            console.log("Stars", _position, _size);
            let nParticles = 100;
            let radiusParticle = 3;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            let x = 0;
            let y = 0;
            let drawn = 0;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            do {
                L09_2_Classes.crc2.save();
                x = (Math.random() - 0.1) * _size.x;
                y = -(Math.random() * _size.y);
                L09_2_Classes.crc2.translate(x, y),
                    L09_2_Classes.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L09_2_Classes.crc2.restore();
                drawn++;
                L09_2_Classes.crc2.lineTo(x, y);
            } while (drawn < nParticles);
            L09_2_Classes.crc2.restore();
        }
        drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            let stepMin = 45;
            let stepMax = 150;
            let x = 0;
            let y = 0;
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.moveTo(0, 0);
            L09_2_Classes.crc2.lineTo(0, -_max);
            do {
                x += stepMin + (stepMax - stepMin);
                y = -_min - .6 * (_max - _min);
                L09_2_Classes.crc2.lineTo(x, y);
                x += stepMin + (stepMax - stepMin);
                y = -_min - .7 * (_max - _min);
                L09_2_Classes.crc2.lineTo(x, y);
                x += stepMin + (stepMax - stepMin);
                y = -_min - 1.3 * (_max - _min);
                L09_2_Classes.crc2.lineTo(x, y);
                x += stepMin + (stepMax - stepMin);
                y = -_min - 1.1 * (_max - _min);
                L09_2_Classes.crc2.lineTo(x, y);
            } while (x < L09_2_Classes.crc2.canvas.width);
            L09_2_Classes.crc2.lineTo(x, 0);
            L09_2_Classes.crc2.closePath();
            let gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow); //unten
            gradient.addColorStop(0.7, _colorHigh); //oben
            L09_2_Classes.crc2.fillStyle = gradient;
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
        drawTree(_x, _y) {
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = "HSLA(32, 55%, 30%, 1)";
            L09_2_Classes.crc2.fillRect(150, 500, 50, 600);
            L09_2_Classes.crc2.fillStyle = ("HSLA(10, 100%, 38%, 1)");
            L09_2_Classes.crc2.moveTo(_x, _y);
            L09_2_Classes.crc2.lineTo(_x + 100, _y - 100);
            L09_2_Classes.crc2.lineTo(_x + 200, _y);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
        }
        drawAnotherTree(_position, _size, _fillColor) {
            //Baum1 hellgrün
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = _fillColor;
            L09_2_Classes.crc2.fillRect(650, 500, 50, 600);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = "#6B8E23";
            L09_2_Classes.crc2.arc(_position.x + 75, _position.y + -120, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 130, _position.y + -80, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 120, _position.y + -20, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 40, _position.y + -20, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 40, _position.y + -80, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + 30, _position.y + -80, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
            //Baum2 orange
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = "#800000";
            L09_2_Classes.crc2.fillRect(430, 500, 50, -70);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = "#FF8C00";
            L09_2_Classes.crc2.arc(_position.x + -175, _position.y + -160, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + -160, _position.y + -170, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + -100, _position.y + -160, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + -100, _position.y + -110, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + -140, _position.y + -200, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(_position.x + -165, _position.y + -110, 50, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
        // Blume
        drawFlower(_position, fillColor) {
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.strokeStyle = "darkgreen";
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.moveTo(200, 100);
            L09_2_Classes.crc2.lineTo(200, 180);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.stroke();
            L09_2_Classes.crc2.fillStyle = "#361E12";
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.stroke();
            L09_2_Classes.crc2.fillStyle = fillColor;
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(200, 130, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(200, 70, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(170, 100, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(230, 100, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(175, 80, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(222, 79, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(177, 123, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.ellipse(225, 122, 20, 20, 0, 0, 100);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
    }
    L09_2_Classes.GoldenerHerbst = GoldenerHerbst;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=GoldenerHerbst.js.map