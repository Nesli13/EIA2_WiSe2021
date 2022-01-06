namespace L10_2_GoldenerHerbst {

    export class Cloud extends Moveable {

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(20, 100);

            this.velocity = new Vector(100, 0);
            this.size = _size;
        }
        draw(): void {

            let radiusParticle: number = 3000;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            crc2.save();
            crc2.translate(-100+ this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            crc2.arc(130, 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.restore();

            //zweite Wolke
            crc2.beginPath();
            gradient.addColorStop(0, "HSLA(0, 0%, 98%, 1)");
            gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0.7)");
            crc2.save();
            crc2.translate( 300 + this.position.x, 50 + this.position.y);
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.arc(10, 30, 25, 0, 2 * Math.PI);
            crc2.arc(50, 25, 40, 0, 2 * Math.PI);
            crc2.arc(90, 20, 35, 0, 2 * Math.PI);
            crc2.arc(130, 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
            crc2.restore();

        }

    }
}
