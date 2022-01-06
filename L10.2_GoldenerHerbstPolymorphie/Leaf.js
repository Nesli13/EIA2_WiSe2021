"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Leaf extends L10_2_GoldenerHerbst.Moveable {
        constructor(_size, _position, _velocity) {
            super(_position);
            console.log("Leaf constructor");
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        draw() {
            let nParticles = 10;
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "orange");
            L10_2_GoldenerHerbst.crc2.save();
            L10_2_GoldenerHerbst.crc2.translate(0, 0);
            L10_2_GoldenerHerbst.crc2.rotate(20 * Math.PI / 270);
            L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbst.crc2.save();
                L10_2_GoldenerHerbst.crc2.restore();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L10_2_GoldenerHerbst.crc2.translate(x, y),
                    L10_2_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L10_2_GoldenerHerbst.crc2.restore();
            }
            L10_2_GoldenerHerbst.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Leaf");
        }
    }
    L10_2_GoldenerHerbst.Leaf = Leaf;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map