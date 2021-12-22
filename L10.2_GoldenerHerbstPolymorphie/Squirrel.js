"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Squirrel extends L10_2_GoldenerHerbst.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbst.Vector(100, 0);
        }
        draw() {
            console.log("Create Squirrel");
            //body
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.save();
            L10_2_GoldenerHerbst.crc2.fillStyle = "#8B4513";
            L10_2_GoldenerHerbst.crc2.arc(130, 19, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(135, 18, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(140, 17, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(145, 16, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(150, 14, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(155, 11, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(160, 9, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(165, 6, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(168, 4, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(170, 3, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(173, 2, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(175, 0, 12, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(100, 50, 13, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(99, 17, 35, 0, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(59, 21, 12, 15.7, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(85, -30, 24, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(85, -50, 14, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.closePath();
            L10_2_GoldenerHerbst.crc2.fill();
            //ears
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.fillStyle = "#CD853F";
            L10_2_GoldenerHerbst.crc2.arc(85, -50, 9, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.closePath();
            L10_2_GoldenerHerbst.crc2.fill();
            //eyes+mouth
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.fillStyle = "black";
            L10_2_GoldenerHerbst.crc2.arc(76, -29, 4, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(73, -12, 1, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.arc(75, -15, 1, -5, 2 * Math.PI);
            L10_2_GoldenerHerbst.crc2.closePath();
            L10_2_GoldenerHerbst.crc2.fill();
            L10_2_GoldenerHerbst.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Sqirrel");
        }
    }
    L10_2_GoldenerHerbst.Squirrel = Squirrel;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map