namespace L09_Asteroids {
    export class Moveable {
        position: Vector;
        velocitiy: Vector;
        expendable: boolean = false;

        constructor(_position?: Vector) { // ?, bedeutet kann da sein muss aber nicht
            //console.log("Moveable constructor");

            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocitiy = new Vector(0, 0);


        }
        move(_timeslice: number): void {
            //console.log("Moveable move");
            let offset: Vector = this.velocitiy.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        draw(): void {
            //console.log("Moveable move");
        }
    }
}