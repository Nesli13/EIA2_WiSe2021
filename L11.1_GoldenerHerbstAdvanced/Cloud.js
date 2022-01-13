"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Cloud extends L11_1_GoldenerHerbst.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_1_GoldenerHerbst.Vector(20, 100);
            this.velocity = new L11_1_GoldenerHerbst.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            let radiusParticle = 3000;
            let particle = new Path2D();
            let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
            //zweite Wolke
            L11_1_GoldenerHerbst.crc2.beginPath();
            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(300 + this.position.x, 50 + this.position.y);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Cloud = Cloud;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map