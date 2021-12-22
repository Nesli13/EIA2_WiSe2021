namespace L10_2_GoldenerHerbst {
    window.addEventListener("load", hndLoad);


    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null;
    let moveables: Moveable[] = [];

    let golden: number = 0.65; //Goldener-Schnitt
    function hndLoad(_event: Event): void {
        
        canvas = document.querySelector("canvas")!;
        console.log(canvas);

        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        let horizon: number = crc2.canvas.height * golden;
        drawBackground();
        createClouds();
        //window.setInterval(update, 20);
        //createSquirrel(new Vector(500, 200));
        drawSun(new Vector(400, 65));
        drawMountains(new Vector(0, horizon), 55, 150, "grey", "white");
        createStars(new Vector(0, 300), new Vector(900, 300));
        drawTree(new Vector(75, 380)); //high triangle
        drawTree(new Vector(75, 440)); //middle triangle
        drawTree(new Vector(75, 500)); //low triangle
        drawAnotherTree(new Vector(590, 500), (new Vector(20, 500)), "#A0522D");
        drawFlower(new Vector(100, 400), "#F4DC21");
        drawFlower(new Vector(330, 400), "pink");
       
       
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
    function drawTree(_position: Vector): void {

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
    function drawAnotherTree(_position: Vector, _size: Vector, _fillColor: string): void {

        //Baum1 hellgrün
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


    function createClouds(): void {
        let cloud: Cloud = new Cloud(0.9);
        moveables.push(cloud);
        console.log("Clouds ");

    }
    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        console.log("Moveable length: ", moveables.length);

    }
    /*function createSquirrel(_position: Vector): void {
        let velocitiy: Vector = new Vector(0, 0);
        velocitiy.random(100, 200);
        let squirrel: Moveable = new Squirrel(new Vector(500, 300));
        moveables.push(squirrel);
        update();
        console.log("Squirrel ");

    }*/

}