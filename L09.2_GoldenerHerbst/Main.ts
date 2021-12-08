namespace L09_2_Classes {
    window.addEventListener("load", hndLoad);

    export let crc2: CanvasRenderingContext2D;
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
        
        //Sonne
        drawSun({ x: 400, y: 65 });
        createClouds({ x: 600, y: 125 }, { x: 250, y: 75 });
        createClouds({ x: 200, y: 200 }, { x: 250, y: 75 });
        createClouds({ x: 50, y: 50 }, { x: 250, y: 75 });
    }

}
