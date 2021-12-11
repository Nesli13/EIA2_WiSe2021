"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    class Squirrel {
        x;
        y;
        speedSquirrel;
        createSquirrel() {
            console.log("Create Squirrel");
            //body
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.fillStyle = "#8B4513";
            L09_2_Classes.crc2.arc(this.x + 130, this.y + 19, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 135, this.y + 18, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 140, this.y + 17, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 145, this.y + 16, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 150, this.y + 14, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 155, this.y + 11, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 160, this.y + 9, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 165, this.y + 6, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 168, this.y + 4, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 170, this.y + 3, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 173, this.y + 2, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 175, this.y + 0, 12, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 100, this.y + 50, 13, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 99, this.y + 17, 35, 0, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 59, this.y + 21, 12, 15.7, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 85, this.y + -30, 24, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 85, this.y + -50, 14, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            //ears
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.fillStyle = "#CD853F";
            L09_2_Classes.crc2.arc(this.x + 85, this.y + -50, 9, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            //eyes+mouth
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.fillStyle = "black";
            L09_2_Classes.crc2.arc(this.x + 76, this.y + -29, 4, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 73, this.y + -12, 1, -5, 2 * Math.PI);
            L09_2_Classes.crc2.arc(this.x + 75, this.y + -15, 1, -5, 2 * Math.PI);
            L09_2_Classes.crc2.closePath();
            L09_2_Classes.crc2.fill();
            L09_2_Classes.crc2.restore();
        }
        moveSquirrel() {
            this.x += this.speedSquirrel * (-0.2); // - nach links und + nach rechts     
        }
    }
    L09_2_Classes.Squirrel = Squirrel;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=Squirrel.js.map