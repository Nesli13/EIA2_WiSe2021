namespace GenerativeKunst {
    interface Vector {
        x: number;
        y: number;

    }
    let crc2: CanvasRenderingContext2D;
    // let pattern: CanvasRenderingContext2D;

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

        drawCloud({ x: 600, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 200, y: 200 }, { x: 250, y: 75 });
        particles({ x: 0, y: 200 }, { x: 800, y: 300 });

        drawTree(30, 210); //red triangle

        drawTree(30, 280); //blue triangle

        drawTree(30, 340); //green triangle


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

    function particles(_position: Vector, _size: Vector): void {
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


        crc2.fillStyle = "brown";
        crc2.fillRect(110, 260, 40, 400);
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 100, _y - 100);
        crc2.lineTo(_x + 200, _y);
        crc2.fill();



    }


}