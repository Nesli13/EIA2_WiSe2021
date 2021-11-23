namespace GenerativeKunst {
    interface Vector {
        x: number;
        y: number;

    }
    let crc2: CanvasRenderingContext2D;
    // let pattern: CanvasRenderingContext2D;
    let golden: number = 0.62; //Goldener-Schnitt


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

        drawCloud({ x: 600, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 200, y: 200 }, { x: 250, y: 75 });
        createStars({ x: 0, y: 200 }, { x: 800, y: 300 });
        drawMountains({ x: 0, y: horizon }, 55, 150, "grey", "white");
        drawTree(30, 370); //high triangle
        drawTree(30, 430); //middle triangle
        drawTree(30, 500); //low triangle
        draw(550, 600, 80, 0);

        createleaf({ x: 0, y: 600 }, { x: 800, y: 300 });
        

    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 70;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y),
                crc2.fill(particle); //Pfad particle wurde oben erstellt
            crc2.restore();
        }

        crc2.restore();


    }

    function createStars(_position: Vector, _size: Vector): void {
        console.log("Particles", _position, _size);

        let nParticles: number = 100;
        let radiusParticle: number = 3;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

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

    function drawTree(_x: number, _y: number): void {

        crc2.save();
        crc2.fillStyle = "brown";
        crc2.fillRect(110, 450, 40, 800);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.fill();



    }
    function createleaf(_position: Vector, _size: Vector): void {
        console.log("createLeaf", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = "brown";

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
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

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


    function draw(startX: number, startY: number, len: number, angle: number): void {
        crc2.beginPath();
        crc2.save();
        crc2.translate(startX, startY);
        crc2.rotate(angle * Math.PI / 200);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -len);
        crc2.stroke();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "bold";
        crc2.shadowBlur = 20;
        crc2.shadowColor = "rgba(10,10,0,0.7)";


        if (len < 6) {
            crc2.beginPath();
            crc2.arc(0, -len, 15, 0, Math.PI / 2);
            crc2.fill();
            crc2.restore();
            return;
        }
        draw(0, -len, len * 0.8, angle + 20);
        draw(0, -len, len * 0.8, angle - 20);

        crc2.restore();

    }


}