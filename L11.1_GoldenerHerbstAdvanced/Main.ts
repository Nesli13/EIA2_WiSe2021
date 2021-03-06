/*Aufgabe: L.11.1_GoldenerHerbstAdvanced
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler 
*/
namespace L11_1_GoldenerHerbst {

    window.addEventListener("load", hndLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null;
    let moveables: Moveable[] = [];
    export let nutPosition: Vector[] = [];

    let imgData: ImageData;
    let golden: number = 0.65; //Goldener-Schnitt

    function hndLoad(_event: Event): void {

        canvas = document.querySelector("canvas")!;
        //console.log(canvas);

        crc2 = canvas.getContext("2d")!;
        //console.log(crc2);

        canvas.addEventListener("click", createNut);

        let horizon: number = crc2.canvas.height * golden;
        drawBackground();
        drawSun(new Vector(400, 65));
        drawMountain(new Vector(0, horizon), 55, 150, "grey", "white");
        createStars(new Vector(0, 300), new Vector(900, 300));
        drawPineTree(new Vector(75, 380)); //high triangle
        drawPineTree(new Vector(75, 440)); //middle triangle
        drawPineTree(new Vector(75, 500)); //low triangle
        drawMapleTree(new Vector(590, 500), (new Vector(20, 500)), "#A0522D");
        drawFlower(new Vector(100, 400), "#F4DC21");
        drawFlower(new Vector(330, 400), "pink");

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        createClouds();
        createSquirrel();
        createLeaf();

        window.setInterval(update, 50);

    }

    function update(): void {
        //console.log("update moveables"); //wirdausgegeben
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

    }
    function startTimer(duration: number, display: Element): void {
        // tslint:disable-next-line: typedef
        let timer: number = duration, minutes, seconds;
        setInterval(
            function (): void {
                minutes = parseInt(String(timer / 60));
                seconds = parseInt(String(timer % 60));

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
                if (timer == 0) {
                    let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
                    body.removeChild(canvas);

                }

            }, 1000);
    }
   
    window.onload = function (): void {
        let fiveMinutes: number = 10 * 1,
            display: Element = document.querySelector("#time");

        startTimer(fiveMinutes, display);

    };

    //Inspiriert von Ey??p ??cal
    function createNut(_event: MouseEvent): void {
        console.log(_event);
        // tslint:disable-next-line: typedef
        let nut = new Nut(new Vector(_event.clientX, _event.clientY));
        moveables.push(nut);
        let nutSpot: Vector = new Vector(_event.clientX, _event.clientY);
        nutPosition.push(nutSpot);
        console.log(nutPosition);

    }
    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud(.8);
            moveables.push(cloud);
            console.log(moveables);
        }
    }

    function createSquirrel(): void {
        for (let i: number = 0; i < 1; i++) {
            let squirrel: Squirrel = new Squirrel(0.9, new Vector(300, 500));
            moveables.push(squirrel);
            console.log(squirrel);

        }

    }
    function createLeaf(): void {
        for (let i: number = 0; i < 10; i++) {
            let leaf: Leaf = new Leaf(0.9);
            moveables.push(leaf);
            console.log(leaf);


        }
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 10, 400);
        gradient.addColorStop(0, "HSLA(225, 100%, 73%, 1)");
        gradient.addColorStop(.7, "HSLA(219, 100%, 89%, 1)");
        gradient.addColorStop(0.9, "white");
        gradient.addColorStop(1, "HSLA(102, 64%, 40%, 1)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 1000);
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

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountain");
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
    //Baum dunkelorange
    function drawPineTree(_position: Vector): void {

        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "brown";
        crc2.fillRect(150, 500, 50, 600);
        crc2.fillStyle = "#FF4500";
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 100, _position.y - 100);
        crc2.lineTo(_position.x + 200, _position.y);
        crc2.closePath();
        crc2.fill();

    }

    function drawMapleTree(_position: Vector, _size: Vector, _fillColor: string): void {

        //Baum1 hellgr??n
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(650, 500, 50, 600);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#6B8E23";
        crc2.arc(_position.x + 75, _position.y + -120, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 130, _position.y + -80, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 120, _position.y + -20, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 40, _position.y + -20, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 40, _position.y + -80, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + 30, _position.y + -80, 50, -5, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
        crc2.restore();

        //Baum2 orange
        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#800000";
        crc2.fillRect(430, 500, 50, -70);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

        crc2.beginPath();
        crc2.save();
        crc2.fillStyle = "#FF8C00";
        crc2.arc(_position.x + -175, _position.y + -160, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -160, _position.y + -170, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -100, _position.y + -160, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -100, _position.y + -110, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -140, _position.y + -200, 50, -5, 2 * Math.PI);
        crc2.arc(_position.x + -165, _position.y + -110, 50, -5, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

    }
    // Blume
    function drawFlower(_position: Vector, fillColor: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = "darkgreen";

        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 180);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#361E12";

        crc2.beginPath();
        crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = fillColor;

        crc2.beginPath();
        crc2.ellipse(200, 130, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(200, 70, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(170, 100, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(230, 100, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(175, 80, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(222, 79, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(177, 123, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.ellipse(225, 122, 20, 20, 0, 0, 100);
        crc2.closePath();
        crc2.fill();

        crc2.restore();

    }

}