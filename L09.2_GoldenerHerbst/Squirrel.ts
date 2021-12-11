namespace L09_2_Classes {

    export class Squirrel {
        x: number;
        y: number;
        speedSquirrel: number;
        

        createSquirrel(): void {
            console.log("Create Squirrel");

            //body
            crc2.beginPath();
            crc2.save();
            crc2.fillStyle = "#8B4513";
            crc2.arc(this.x + 130, this.y + 19, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 135, this.y + 18, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 140, this.y + 17, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 145, this.y + 16, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 150, this.y + 14, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 155, this.y + 11, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 160, this.y + 9, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 165, this.y + 6, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 168, this.y + 4, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 170, this.y + 3, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 173, this.y + 2, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 175, this.y + 0, 12, 0, 2 * Math.PI);
            crc2.arc(this.x + 100, this.y + 50, 13, 0, 2 * Math.PI);
            crc2.arc(this.x + 99, this.y + 17, 35, 0, 2 * Math.PI);
            crc2.arc(this.x + 59, this.y + 21, 12, 15.7, 2 * Math.PI);
            crc2.arc(this.x + 85, this.y + -30, 24, -5, 2 * Math.PI);
            crc2.arc(this.x + 85, this.y + -50, 14, -5, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();

            //ears
            crc2.beginPath();
            crc2.fillStyle = "#CD853F";
            crc2.arc(this.x + 85, this.y + -50, 9, -5, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //eyes+mouth
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(this.x + 76, this.y + -29, 4, -5, 2 * Math.PI);
            crc2.arc(this.x + 73, this.y + -12, 1, -5, 2 * Math.PI);
            crc2.arc(this.x + 75, this.y + -15, 1, -5, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.restore();

        }
        moveSquirrel(): void {
            this.x += this.speedSquirrel * (-0.2); // - nach links und + nach rechts     
        }
    }
}
