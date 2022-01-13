namespace L11_1_GoldenerHerbst {

    export abstract class Moveable {

        public position: Vector;
        public velocity: Vector;
        public size: number;
        public expendable: boolean;
        protected eatRadius: number;

        constructor(_position: Vector) { //const. bekommt keinen rückgabewert
            //console.log("Move Constructor");
            //position
            if (_position)
                this.position = _position.copy(); //position, wie deklaiert
            else
                this.position = new Vector(0, 0); //position, wenn kein Vektor angegeben ist

            //geschwindigkeit
            this.velocity = new Vector(0, 0); //Geschwindigkeit

        }
        public isEatenBy(_spuirrel: Moveable): boolean {
            let difference: Vector = Vector.getDifference(this.position, _spuirrel.position);
            if (this.eatRadius + _spuirrel.eatRadius < difference.length)
                return false;

            return true;
        }

        public eat(): void {
            console.log("Eat", this);
            this.expendable = true;
        }

        public move(_timeslice: number): void {
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
        public abstract draw(): void;


    }

}