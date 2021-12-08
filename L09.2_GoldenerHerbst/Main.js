"use strict";
var L09_2_Classes;
(function (L09_2_Classes) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        L09_2_Classes.crc2 = canvas.getContext("2d");
        console.log(L09_2_Classes.crc2);
        //Farbverlauf
        let gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 10, 400);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(.7, "lightblue");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "lightgreen");
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.fillRect(0, 0, 1000, 1000);
        //Sonne
        L09_2_Classes.drawSun({ x: 400, y: 65 });
        L09_2_Classes.createClouds({ x: 600, y: 125 }, { x: 250, y: 75 });
        L09_2_Classes.createClouds({ x: 200, y: 200 }, { x: 250, y: 75 });
        L09_2_Classes.createClouds({ x: 50, y: 50 }, { x: 250, y: 75 });
    }
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=Main.js.map