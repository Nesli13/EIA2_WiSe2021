namespace L11_1_GoldenerHerbst {

    export class Nut extends Moveable {

        
        constructor(_position: Vector) {
            super(_position);
        }


        public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y , 6, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();
        }
    }
}

