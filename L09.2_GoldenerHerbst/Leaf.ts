namespace L09_2_Classes {
    export class Leafs {
        x: number;
        y: number;
        size: number;
        speedLeafs: number;
        

       /* constructor(_x: number, _y: number, _fillColor: string) {
            this.createRoundLeafs();
            this.createRoundLeafs2();
            this.createRoundLeafs3();
            this.x = _x;
            this.y = _y;
            this.fillColor = _fillColor;



        }*/
        createRoundLeafs(): void {
            let nParticles: number = 10;
            let radiusParticle: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "orange");

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate(20 * Math.PI / 270);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.restore();
                let x: number = (Math.random() - 0.9) * this.size;
                let y: number = -(Math.random() * this.size);

                crc2.translate(x, y),
                    crc2.fill(particle); //Pfad particle wurde oben erstellt
                crc2.restore();
            }

            crc2.restore();

        }

        createRoundLeafs2(): void {
            let nParticles: number = 10;
            let radiusParticle: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "red");

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate(20 * Math.PI / 270);
            crc2.fillStyle = gradient;


            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.9) * this.size;
                let y: number = -(Math.random() * this.size);

                crc2.translate(x, y),
                    crc2.fill(particle); //Pfad particle wurde oben erstellt
                crc2.restore();
            }

            crc2.restore();


        }
        createRoundLeafs3(): void {
            let nParticles: number = 10;
            let radiusParticle: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "green");

            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.rotate((Math.PI / 90) * 25);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.9) * this.size;
                let y: number = -(Math.random() * this.size);

                crc2.translate(x, y),
                    crc2.fill(particle); //Pfad particle wurde oben erstellt
                crc2.restore();
            }

            crc2.restore();
        }

        moveLeafs(): void {
            this.x += this.speedLeafs * (+0.5); // - nach links und + nach rechts           
        }
        moveLeafs1(): void {
            this.x += this.speedLeafs * (+1.0); // - nach links und + nach rechts           
        }
        moveLeafs2(): void {
            this.x += this.speedLeafs * (-0.2); // - nach links und + nach rechts           
        }
    }
}