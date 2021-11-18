"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    let crc2;
    // let pattern: CanvasRenderingContext2D;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Farbverlauf
        let gradient = crc2.createLinearGradient(0, 0, 10, 400);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(.7, "lightblue");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "lightgreen");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 1000);
        drawCloud({ x: 600, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 200, y: 200 }, { x: 250, y: 75 });
        particles({ x: 0, y: 200 }, { x: 800, y: 300 });
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 70;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y),
                crc2.fill(particle); //Pfad particle wurde oben erstellt
            crc2.restore();
        }
        crc2.restore();
    }
    function particles(_position, _size) {
        console.log("Particles", _position, _size);
        let nParticles = 100;
        let radiusParticle = 3;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.1) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y),
                crc2.fill(particle); //Pfad particle wurde oben erstellt
            crc2.restore();
        }
        crc2.restore();
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map