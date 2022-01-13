"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid extends L09_Asteroids.Moveable {
        size;
        type;
        constructor(_size, _position) {
            super(_position);
            console.log("Asteroid constructor");
            this.velocity = L09_Asteroids.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
            this.hitRadius = 50 * _size;
        }
        draw() {
            // console.log("Asteroid draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.lineWidth = L09_Asteroids.linewidth / this.size;
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]);
            L09_Asteroids.crc2.restore();
        }
        hit() {
            super.hit();
            let event = new CustomEvent(L09_Asteroids.ASTEROID_EVENT.ASTEROID_HIT, { detail: { asteroid: this } });
            L09_Asteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map