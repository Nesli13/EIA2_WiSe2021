namespace L11_1_GoldenerHerbst {

    export class Squirrel extends Moveable {
        private static speed: number = 50;
        constructor(_size: number, _position: Vector) {
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Squirrel.speed);
            this.size = _size;
        }
        public draw(): void {
            //console.log("Create Squirrel");
            //body
            crc2.beginPath();
            crc2.save();
            crc2.translate(-170 + this.position.x, this.position.y);
            crc2.fillStyle = "#8B4513";
            crc2.arc(130, 19, 12, 0, 2 * Math.PI);
            crc2.arc(135, 18, 12, 0, 2 * Math.PI);
            crc2.arc(140, 17, 12, 0, 2 * Math.PI);
            crc2.arc(145, 16, 12, 0, 2 * Math.PI);
            crc2.arc(150, 14, 12, 0, 2 * Math.PI);
            crc2.arc(155, 11, 12, 0, 2 * Math.PI);
            crc2.arc(160, 9, 12, 0, 2 * Math.PI);
            crc2.arc(165, 6, 12, 0, 2 * Math.PI);
            crc2.arc(168, 4, 12, 0, 2 * Math.PI);
            crc2.arc(170, 3, 12, 0, 2 * Math.PI);
            crc2.arc(173, 2, 12, 0, 2 * Math.PI);
            crc2.arc(175, 0, 12, 0, 2 * Math.PI);
            crc2.arc(100, 50, 13, 0, 2 * Math.PI);
            crc2.arc(99, 17, 35, 0, 2 * Math.PI);
            crc2.arc(59, 21, 12, 15.7, 2 * Math.PI);
            crc2.arc(85, -30, 24, -5, 2 * Math.PI);
            crc2.arc(85, -50, 14, -5, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();


            //ears
            crc2.beginPath();
            crc2.fillStyle = "#CD853F";
            crc2.arc(85, -50, 9, -5, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();


            //eyes+mouth
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(76, -29, 4, -5, 2 * Math.PI);
            crc2.arc(73, -12, 1, -5, 2 * Math.PI);
            crc2.arc(75, -15, 1, -5, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.restore();

        }
        /*private goEat(): void {
            console.log("Eat");
        }*/

    }
}