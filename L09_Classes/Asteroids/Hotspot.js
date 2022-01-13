"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Hotspot extends L09_Asteroids.Projectile {
        static maxLifetime = 0.5;
        constructor(_position) {
            super(_position, new L09_Asteroids.Vector(0, 0));
            this.lifetime = Hotspot.maxLifetime;
            this.hitRadius = 25;
        }
        draw() {
            let ratio = this.lifetime / Hotspot.maxLifetime;
            if (ratio < 0)
                return;
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.beginPath();
            L09_Asteroids.crc2.fillStyle = "HSL(180, 100%, 70%, " + 0.7 * ratio + ")";
            L09_Asteroids.crc2.arc(0, 0, this.hitRadius * (1 - ratio), 0, 2 * Math.PI);
            L09_Asteroids.crc2.arc(0, 0, this.hitRadius, 2 * Math.PI, 0, true);
            L09_Asteroids.crc2.fill();
            L09_Asteroids.crc2.restore();
        }
        hit() {
            this.lifetime -= Hotspot.maxLifetime / 3;
            this.expendable = this.lifetime < 0;
            console.log("Hotspot hit, remaining range: ", this.lifetime);
        }
    }
    L09_Asteroids.Hotspot = Hotspot;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Hotspot.js.map