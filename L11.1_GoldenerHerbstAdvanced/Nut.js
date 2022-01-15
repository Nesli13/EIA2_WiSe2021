"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Nut extends L11_1_GoldenerHerbst.Moveable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(this.position.x, this.position.y, 6, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Nut = Nut;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Nut.js.map