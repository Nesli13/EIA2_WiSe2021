namespace L09_2_Classes {

    export class Cloud {
        x: number;
        y: number;
        speedCloud: number;
       
        createClouds(): void {

            crc2.beginPath();
            let radiusParticle: number = 3000;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            crc2.save();
            crc2.fillStyle = gradient;

            crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.restore();
           
        }
        moveForward(): void {
            this.x += this.speedCloud * (+0.3) ; // - nach links und + nach rechts           
        }
    }
}