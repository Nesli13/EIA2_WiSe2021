namespace L10_2_GoldenerHerbst {

    export class Leaf extends Moveable {


        constructor(_size: number, _position: Vector, _velocity: Vector) { // ?, bedeutet kann da sein muss aber nicht
            super( _position);

            console.log("Leaf constructor");

            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.size = _size;
        }

        draw(): void {
            let nParticles: number = 10;
            let radiusParticle: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 0.6 * Math.PI);
            gradient.addColorStop(0, "orange");

            crc2.save();
            crc2.translate(0, 0);
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
        move(_timeslice: number): void {
            console.log("move Leaf");
        }
    }
}