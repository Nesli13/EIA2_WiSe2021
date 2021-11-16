namespace Canvas {
    let crc2: CanvasRenderingContext2D;
    let pattern: CanvasRenderingContext2D;

    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);


        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        crc2.fillStyle = "#FF0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);

        crc2.closePath();
        crc2.stroke();

        //Farbverlauf
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

        gradient.addColorStop(0, "black");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);

        //Füllmuster
        pattern = document.createElement("canvas").getContext("2d");
        crc2 = canvas.getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Dreieck
        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * 400;
            let y: number = Math.random() * 300;
            drawTriangle(x, y);
        }
    }

    function drawTriangle(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 70);
        crc2.lineTo(_x + 40, _y + 35);
        crc2.closePath();

        crc2.fillStyle = "#ff0000";
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
    }



}