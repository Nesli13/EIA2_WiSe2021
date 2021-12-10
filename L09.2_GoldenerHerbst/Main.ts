namespace L09_2_Classes {
    window.addEventListener("load", hndLoad);


    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null;
    let imgData: ImageData;
    let bigClouds: Cloud[] = [];
    let orangeLeafs: Leafs[] = [];
    let redLeafs: Leafs[] = [];
    let greenLeafs: Leafs[] = [];


    function hndLoad(_event: Event): void {
        canvas = document.querySelector("canvas")!;
        console.log(canvas);

        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        //Klasse GoldenerHerbst wird aufgerufen
        let background: GoldenerHerbst = new GoldenerHerbst;
        console.log(background);

        //Speichern des Canvas als Bild 
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //  Wolken platzieren:
        for (let i: number = 0; i < 10; i++) {
            let oneCloud: Cloud = new Cloud();
            oneCloud.x = Math.random() * crc2.canvas.width;
            oneCloud.y = Math.random() * crc2.canvas.height - 350; // Obere Hälfte
            oneCloud.speedCloud = (Math.random() + 1) * 0.1;
            bigClouds.push(oneCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.

        }
        window.setTimeout(animate, 8);

        // orange Blätter platzieren:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 20; i++) {
            let oneLeaf: Leafs = new Leafs();
            oneLeaf.x = Math.random() * crc2.canvas.width;
            oneLeaf.y = Math.random() * crc2.canvas.height + 250; // Obere Hälfte
            oneLeaf.speedLeafs = (Math.random() + 1) * 0.2;
            orangeLeafs.push(oneLeaf); // orange Blätter wird ins Array gepusht um beim animieren auf sie zugreifen zu können.

        }
        window.setTimeout(animate, 8);

        // rote Blätter platzieren:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 20; i++) {
            let oneLeaf: Leafs = new Leafs();
            oneLeaf.x = Math.random() * crc2.canvas.width;
            oneLeaf.y = Math.random() * crc2.canvas.height + 250; // Obere Hälfte
            oneLeaf.speedLeafs = (Math.random() + 1) * 0.2;
            redLeafs.push(oneLeaf); // rote Blätter wird ins Array gepusht um beim animieren auf sie zugreifen zu können.

        }
        window.setTimeout(animate, 8);

        // grüne Blätter platzieren:
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 20; i++) {
            let oneLeaf: Leafs = new Leafs();
            oneLeaf.x = Math.random() * crc2.canvas.width;
            oneLeaf.y = Math.random() * crc2.canvas.height + 230; // Obere Hälfte
            oneLeaf.speedLeafs = (Math.random() + 1) * 0.2;

            greenLeafs.push(oneLeaf); // grüne Blätter wird ins Array gepusht um beim animieren auf sie zugreifen zu können.

        }
        window.setTimeout(animate, 8);
    }

    function animate(): void {

        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bigClouds.length; i++) {

            bigClouds[i].moveForward();

            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (bigClouds[i].x > + 850) {
                bigClouds[i].x = canvas.width - 950;
            }
        }
        drawClouds();
        window.setTimeout(animate, 8);

        //Leafs:
        for (let i: number = 0; i < orangeLeafs.length; i++) {

            orangeLeafs[i].moveLeafs();
            //Damit die Blätter in den Bild kommen
            if (orangeLeafs[i].x > + 850) {
                orangeLeafs[i].x = canvas.width - 950;
            }

            redLeafs[i].moveLeafs1();
            //Damit die Blätter in den Bild kommen
            if (redLeafs[i].x > + 850) {
                redLeafs[i].x = canvas.width - 950;
            }

            greenLeafs[i].moveLeafs2();
            //Damit die Blätter in den Bild kommen
            if (greenLeafs[i].x < - 10) {
                greenLeafs[i].x = canvas.width + 0;
            }
        }
        drawLeafs();

        window.setTimeout(animate, 8);


    }

    function drawClouds(): void {

        for (let i: number = 0; i < bigClouds.length; i++)
            bigClouds[i].createClouds();

    }


    function drawLeafs(): void {
        for (let i: number = 0; i < orangeLeafs.length; i++)
            orangeLeafs[i].createRoundLeafs();
        for (let i: number = 0; i < redLeafs.length; i++)
            redLeafs[i].createRoundLeafs2();
        for (let i: number = 0; i < greenLeafs.length; i++)
            greenLeafs[i].createRoundLeafs3();
    }


}

