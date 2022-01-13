"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Leaf extends L11_1_GoldenerHerbst.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new L11_1_GoldenerHerbst.Vector(0, 0);
            this.velocity = L11_1_GoldenerHerbst.Vector.getRandom(100, 200);
        }
        draw() {
            let nParticles = 10;
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "orange");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst.crc2.rotate(20 * Math.PI / 270);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst.crc2.save();
                L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
                L11_1_GoldenerHerbst.crc2.restore();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbst.crc2.translate(x, y),
                    L11_1_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L11_1_GoldenerHerbst.crc2.restore();
            }
            L11_1_GoldenerHerbst.crc2.restore();
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "red");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.y, this.position.x);
            L11_1_GoldenerHerbst.crc2.rotate(20 * Math.PI / 270);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst.crc2.save();
                L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
                L11_1_GoldenerHerbst.crc2.restore();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbst.crc2.translate(x, y),
                    L11_1_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L11_1_GoldenerHerbst.crc2.restore();
            }
            L11_1_GoldenerHerbst.crc2.restore();
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.beginPath();
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "green");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(100 + this.position.x, 200 + this.position.y);
            L11_1_GoldenerHerbst.crc2.rotate(20 * Math.PI / 270);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst.crc2.save();
                L11_1_GoldenerHerbst.crc2.translate(this.position.y, this.position.x);
                L11_1_GoldenerHerbst.crc2.restore();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbst.crc2.translate(x, y),
                    L11_1_GoldenerHerbst.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L11_1_GoldenerHerbst.crc2.restore();
            }
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Leaf = Leaf;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map