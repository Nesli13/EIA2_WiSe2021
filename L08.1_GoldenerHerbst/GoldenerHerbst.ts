/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum: 25.11.21
Quellen: Zusammenarbeit mit Verena Rothweiler .*/
namespace GenerativeKunst {
    interface Vector {
        x: number;
        y: number;

    }
    let crc2: CanvasRenderingContext2D;
    // let pattern: CanvasRenderingContext2D;
    let golden: number = 0.65; //Goldener-Schnitt


    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);


        crc2 = canvas.getContext("2d")!;
        console.log(crc2);


        //Farbverlauf
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 10, 400);

        gradient.addColorStop(0, "blue");
        gradient.addColorStop(.7, "lightblue");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "lightgreen");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 1000);

        let horizon: number = crc2.canvas.height * golden;
        drawSun({ x: 400, y: 65 });
        createClouds({ x: 600, y: 125 }, { x: 250, y: 75 });
        createClouds({ x: 200, y: 200 }, { x: 250, y: 75 });
        createClouds({ x: 50, y: 50 }, { x: 250, y: 75 });
        createStars({ x: 0, y: 300 }, { x: 900, y: 300 });
        drawMountains({ x: 0, y: horizon }, 55, 150, "grey", "white");
        drawTree(75, 380); //high triangle
        drawTree(75, 440); //middle triangle
        drawTree(75, 500); //low triangle
        drawAnotherTree({ x: 590, y: 500 }, { x: 20, y: 500 }, "#A0522D");
        //createSquirrel({ x: 450, y: 530 }, "#8B4513");
        //createSquirrel({ x: 230, y: 430 },  "#8B4513");

        createRoundLeafs({ x: 0, y: 600 }, { x: 900, y: 300 }, "#6B8E23");
        createRoundLeafs({ x: 0, y: 600 }, { x: 900, y: 300 }, "#FF8C00");
        createRoundLeafs({ x: 0, y: 600 }, { x: 900, y: 300 }, "#FF4500");


        /*for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * 600;
            let y: number = Math.random() * 800;
            drawLines(x, y);
        }*/
        for (let index: number = 0; index < 4; index++) {
            createSquirrel(({ x: Math.random() * 1100, y: 300 + Math.random() * 250 }), "#8B4513");
        }
    }

    function createStars(_position: Vector, _size: Vector): void {
        console.log("Stars", _position, _size);

        let nParticles: number = 100;
        let radiusParticle: number = 3;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let x: number = 0;
        let y: number = 0;
        let drawn: number = 0;
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        do {

            crc2.save();
            x = (Math.random() - 0.1) * _size.x;
            y = -(Math.random() * _size.y);
            crc2.translate(x, y),
                crc2.fill(particle); //Pfad particle wurde oben erstellt
            crc2.restore();
            drawn++;
            crc2.lineTo(x, y);
        } while (drawn < nParticles);


        crc2.restore();
    }

    function drawTree(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "brown";
        crc2.fillRect(150, 500, 50, 600);
        crc2.fillStyle = "#FF4500";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();

    }

    function drawAnotherTree(_position: Vector, _size: Vector, _fillColor: string): void {

        //Baum1 hellgrün
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(650, 500, 50, 600);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#6B8E23";
        crc2.arc(_position.x + 75, _position.y + -120, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 130, _position.y + -80, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 120, _position.y + -20, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 40, _position.y + -20, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 40, _position.y + -80, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 30, _position.y + -80, 50, -5, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();

        //Baum2 orange

        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#800000";
        crc2.fillRect(430, 500, 50, -70);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_position.x + -175, _position.y + -160, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -160, _position.y + -170, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -100, _position.y + -160, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -100, _position.y + -110, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -140, _position.y + -200, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -165, _position.y + -110, 50, -5, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();


    }
    function createRoundLeafs(_position: Vector, _size: Vector, _fillColor: string): void {
        console.log("createLeaf", _position, _size);

        let nParticles: number = 10;
        let radiusParticle: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.scale(1, 2);

        crc2.rotate(20 * Math.PI / 270);

        crc2.fillStyle = _fillColor;


        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.1) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y),
                crc2.fill(particle); //Pfad particle wurde oben erstellt
            crc2.restore();
        }

        crc2.restore();


    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 45;
        let stepMax: number = 150;
        let x: number = 0;
        let y: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + (stepMax - stepMin);
            y = -_min - .6 * (_max - _min);
            crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - .7 * (_max - _min);
            crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.3 * (_max - _min);
            crc2.lineTo(x, y);
            x += stepMin + (stepMax - stepMin);
            y = -_min - 1.1 * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);    //unten
        gradient.addColorStop(0.7, _colorHigh);   //oben

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }



    /*function drawLines(_x: number, _y: number): void {
        console.log(_x);
        crc2.beginPath();
        crc2.translate(400, 300);
        crc2.moveTo(25, 20);
        crc2.lineTo(20, 10);
        crc2.lineTo(20, 10);
        crc2.lineTo(100, 75);
        crc2.closePath();

        crc2.fillStyle = "red";
        crc2.stroke();



    }*/
    function createClouds(_position: Vector, _size: Vector): void {

        crc2.beginPath();
        let radiusParticle: number = 3000;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.7)");
        crc2.fillStyle = gradient;

        crc2.arc(_position.x + 10, _position.y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_position.x + 50, _position.y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_position.x + 90, _position.y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_position.x + 130, _position.y + 20, 25, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
    }

    function createSquirrel(_position: Vector, _fillColor: string): void {


        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_position.x + 130, _position.y + 19, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 135, _position.y + 18, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 140, _position.y + 17, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 145, _position.y + 16, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 150, _position.y + 14, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 155, _position.y + 11, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 160, _position.y + 9, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + 6, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 168, _position.y + 4, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 170, _position.y + 3, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 173, _position.y + 2, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 175, _position.y + 0, 12, 0, 2 * Math.PI);
        crc2.arc(_position.x + 100, _position.y + 50, 13, 0, 2 * Math.PI);
        crc2.arc(_position.x + 99, _position.y + 17, 35, 0, 2 * Math.PI);
        crc2.arc(_position.x + 59, _position.y + 21, 12, 15.7, 2 * Math.PI);

        crc2.arc(_position.x + 85, _position.y + -30, 24, -5, 2 * Math.PI);
        crc2.arc(_position.x + 85, _position.y + -50, 14, -5, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#CD853F";
        crc2.arc(_position.x + 85, _position.y + -50, 9, -5, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_position.x + 76, _position.y + -29, 4, -5, 2 * Math.PI);
        crc2.arc(_position.x + 73, _position.y + -12, 1, -5, 2 * Math.PI);
        crc2.arc(_position.x + 75, _position.y + -15, 1, -5, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();



    }


    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 40;
        let r2: number = 120;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

}