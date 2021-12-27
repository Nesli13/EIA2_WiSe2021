"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Cloud extends L10_2_GoldenerHerbst.Moveable {
        constructor(_size, _position) {
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbst.Vector(20, 100);
            this.velocity = new L10_2_GoldenerHerbst.Vector(30, 0);
            this.size = _size;
        }
        draw() {
            let radiusParticle = 3000;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            L10_2_GoldenerHerbst.crc2.save();
            L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(130, 20, 25, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.closePath();
            L10_2_GoldenerHerbst.crc2.fill();
            L10_2_GoldenerHerbst.crc2.restore();
        }
    }
    L10_2_GoldenerHerbst.Cloud = Cloud;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map