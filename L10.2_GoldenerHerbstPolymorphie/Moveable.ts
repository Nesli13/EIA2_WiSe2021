namespace L10_2_GoldenerHerbst {
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector, _velocity: Vector) { //const. bekommt keinen rückgabewert
            console.log("Move Constructor");

            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            if (_velocity)
                this.velocity = _velocity.copy();
            else
                this.velocity = new Vector(0, 0);



        }


        move(_timeslice: number): void {
            console.log("Moveable move");
            let offset: Vector = this.velocity.copy();
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
            console.log("Moveable move");
        }

    }

}