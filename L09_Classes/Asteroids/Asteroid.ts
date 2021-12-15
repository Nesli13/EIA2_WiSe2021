namespace L09_Asteroids {
    export class Asteroid extends Moveable {
        
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) { // ?, bedeutet kann da sein muss aber nicht
            super(_position);

            console.log("Asteroid constructor");

            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocitiy = new Vector(0, 0);
            this.velocitiy.random(100, 200);

            this.type = Math.floor(Math.random() * 4); //math.floor gibt gerade Zahlen aus
            this.size = _size;
        }
    
        draw(): void {
            //console.log("Asteroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = linewidth / this.size;
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();

        }

        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 50 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}