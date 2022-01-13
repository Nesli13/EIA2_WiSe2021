"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Moveable {
        position;
        velocity;
        size;
        expendable;
        eatRadius;
        constructor(_position) {
            //console.log("Move Constructor");
            //position
            if (_position)
                this.position = _position.copy(); //position, wie deklaiert
            else
                this.position = new L11_1_GoldenerHerbst.Vector(0, 0); //position, wenn kein Vektor angegeben ist
            //geschwindigkeit
            this.velocity = new L11_1_GoldenerHerbst.Vector(0, 0); //Geschwindigkeit
        }
        isEatenBy(_spuirrel) {
            let difference = L11_1_GoldenerHerbst.Vector.getDifference(this.position, _spuirrel.position);
            if (this.eatRadius + _spuirrel.eatRadius < difference.length)
                return false;
            return true;
        }
        eat() {
            console.log("Eat", this);
            this.expendable = true;
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L11_1_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L11_1_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L11_1_GoldenerHerbst.crc2.canvas.height;
        }
    }
    L11_1_GoldenerHerbst.Moveable = Moveable;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map