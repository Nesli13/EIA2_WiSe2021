namespace L09_Asteroids {
    export abstract class Moveable {
        public position: Vector;
        public velocitiy: Vector;
        public expendable: boolean = false;
        protected hitRadius: number = 0;

        constructor(_position?: Vector) { // ?, bedeutet kann da sein muss aber nicht
            //console.log("Moveable constructor");

            if (_position)
                this.position = _position.copy(); //neuen Vector mit den gleichen Werten
            else
                this.position = new Vector(0, 0);

            this.velocitiy = new Vector(0, 0);


        }
        public isHitBy(_partner: Moveable): boolean {
            let difference: Vector = Vector.getDifference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;

            return true;

        }
        public hit(): void {
            console.log("Hit", this);
            this.expendable = true;
        }

        public move(_timeslice: number): void {
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
        public abstract draw(): void;
    }
}