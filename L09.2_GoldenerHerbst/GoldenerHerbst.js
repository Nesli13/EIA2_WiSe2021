"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 40;
        let r2 = 120;
        let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    L09_2_Classes.drawSun = drawSun;
    function createClouds(_position, _size) {
        L09_2_Classes.crc2.beginPath();
        let radiusParticle = 3000;
        let particle = new Path2D();
        let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.7)");
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.arc(_position.x + 10, _position.y + 30, 25, 0, 2 * Math.PI);
        L09_2_Classes.crc2.arc(_position.x + 50, _position.y + 25, 40, 0, 2 * Math.PI);
        L09_2_Classes.crc2.arc(_position.x + 90, _position.y + 20, 35, 0, 2 * Math.PI);
        L09_2_Classes.crc2.arc(_position.x + 130, _position.y + 20, 25, 0, 2 * Math.PI);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    L09_2_Classes.createClouds = createClouds;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=GoldenerHerbst.js.map