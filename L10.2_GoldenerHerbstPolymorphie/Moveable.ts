namespace L10_2_GoldenerHerbst {

    export class Moveable {

        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) { //const. bekommt keinen rückgabewert
            //console.log("Move Constructor");
            //position
            if (_position)
                this.position = _position.copy(); //position, wie deklaiert
            else
                this.position = new Vector(0, 0); //position, wenn kein Vektor angegeben ist

            //geschwindigkeit
            this.velocity = new Vector(0, 0); //Geschwindigkeit

        }

        move(_timeslice: number): void {
            //console.log("Moveable move");

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