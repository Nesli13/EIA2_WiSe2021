namespace L09_Asteroids {
    export class Projectile extends Moveable {
        lifetime: number = 2;

        constructor(_position: Vector, _velocity: Vector) { // ?, bedeutet kann da sein muss aber nicht
            super(_position);

            console.log("Projectile constructor");
            this.velocitiy = this.velocitiy.copy();
        }

        draw(): void {
            //console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-2, -2, 2, 2);
            crc2.restore();

        }
        move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
}