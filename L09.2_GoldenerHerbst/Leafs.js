"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    class Leafs {
        x;
        y;
        size;
        fillColor;
        speedLeafs;
        radiusParticle;
        /* constructor(_x: number, _y: number, _fillColor: string) {
             this.createRoundLeafs();
             this.createRoundLeafs2();
             this.createRoundLeafs3();
             this.x = _x;
             this.y = _y;
             this.fillColor = _fillColor;
 
 
 
         }*/
        createRoundLeafs() {
            let nParticles = 10;
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "orange");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(this.x, this.y);
            L09_2_Classes.crc2.rotate(20 * Math.PI / 270);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                L09_2_Classes.crc2.restore();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L09_2_Classes.crc2.translate(x, y),
                    L09_2_Classes.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        }
        createRoundLeafs2() {
            let nParticles = 10;
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "red");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(this.x, this.y);
            L09_2_Classes.crc2.rotate(20 * Math.PI / 270);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L09_2_Classes.crc2.translate(x, y),
                    L09_2_Classes.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        }
        createRoundLeafs3() {
            let nParticles = 10;
            let radiusParticle = 10;
            let particle = new Path2D();
            let gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "green");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(this.x, this.y);
            L09_2_Classes.crc2.rotate((Math.PI / 90) * 25);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                let x = (Math.random() - 0.9) * this.size;
                let y = -(Math.random() * this.size);
                L09_2_Classes.crc2.translate(x, y),
                    L09_2_Classes.crc2.fill(particle); //Pfad particle wurde oben erstellt
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        }
        moveLeafs() {
            this.x += this.speedLeafs * (+0.5); // - nach links und + nach rechts           
        }
        moveLeafs1() {
            this.x += this.speedLeafs * (+1.0); // - nach links und + nach rechts           
        }
        moveLeafs2() {
            this.x += this.speedLeafs * (-0.2); // - nach links und + nach rechts           
        }
    }
    L09_2_Classes.Leafs = Leafs;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=Leafs.js.map