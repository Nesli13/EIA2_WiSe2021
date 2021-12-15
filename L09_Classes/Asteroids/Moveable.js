"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Moveable {
        position;
        velocitiy;
        expendable = false;
        constructor(_position) {
            //console.log("Moveable constructor");
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new L09_Asteroids.Vector(0, 0);
            this.velocitiy = new L09_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocitiy.copy();
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
            //console.log("Moveable move");
        }
    }
    L09_Asteroids.Moveable = Moveable;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map