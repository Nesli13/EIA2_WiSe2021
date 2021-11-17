namespace L08_1_GenerativeKunst {

    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        circle();


    }

    function circle(): void {
        for (let i: number = 0; i < 250; i++) {

            let red: number = Math.floor(Math.random() * 300);
            let green: number = Math.floor(Math.random() * 400);
            let blue: number = Math.floor(Math.random() * 300);

            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1000) + 3), Math.floor(Math.random() * (1000) + 5), Math.floor(Math.random() * (50) + 2), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            // color
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();

        }

        //triangle1
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;
            drawTriangle(x, y);
        }
        //triangle2
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * 600;
            let y: number = Math.random() * 800;
            drawTriangle2(y, x);
        }
    }

    function drawTriangle(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 100);
        crc2.lineTo(_x + 60, _y + 50);
        crc2.closePath();

        crc2.fillStyle = "lightgrey";
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();


    }

    function drawTriangle2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 100);
        crc2.lineTo(_x - 60, _y - 50);
        crc2.closePath();

        crc2.fillStyle = "orange";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.fill();
    }
}