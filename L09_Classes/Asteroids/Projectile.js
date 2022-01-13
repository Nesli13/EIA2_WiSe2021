"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Projectile extends L09_Asteroids.Moveable {
        static maxLifetime = 2;
        lifetime = Projectile.maxLifetime;
        constructor(_position, _velocity) {
            super(_position);
            console.log("Projectile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            // console.log("Projectile draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.strokeRect(-2, -2, 2, 2);
            L09_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L09_Asteroids.Projectile = Projectile;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Projectile.js.map