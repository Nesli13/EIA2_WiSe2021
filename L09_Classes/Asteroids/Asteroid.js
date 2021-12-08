"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        position;
        velocitiy;
        type;
        size;
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new L09_Asteroids.Vector(0, 0);
            this.velocitiy = new L09_Asteroids.Vector(0, 0);
            this.velocitiy.random(100, 200);
            this.type = Math.floor(Math.random() * 4); //math.floor gibt gerade Zahlen aus
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Asteroid move");
            let offset = new L09_Asteroids.Vector(this.velocitiy.x, this.velocitiy.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Asteroids.crc2.canvas.height)
                this.position.y -= L09_Asteroids.crc2.canvas.height;
        }
        draw() {
            console.log("Asteroid draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]);
            L09_Asteroids.crc2.restore();
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map