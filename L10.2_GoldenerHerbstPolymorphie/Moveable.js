"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Moveable {
        position;
        velocity;
        constructor(_position, _velocity) {
            console.log("Move Constructor");
            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0);
            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L10_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L10_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L10_2_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L10_2_GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            console.log("Moveable move");
        }
    }
    L10_2_GoldenerHerbst.Moveable = Moveable;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map