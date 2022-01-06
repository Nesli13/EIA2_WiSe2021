"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Moveable {
        position;
        velocity;
        size;
        constructor(_position) {
            //console.log("Move Constructor");
            //position
            if (_position)
                this.position = _position.copy(); //position, wie deklaiert
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0); //Geschwindigkeit
        }
        move(_timeslice) {
            //console.log("Moveable move");
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