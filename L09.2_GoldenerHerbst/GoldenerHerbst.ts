namespace L09_2_Classes {
    
    export function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 40;
        let r2: number = 120;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    export function createClouds(_position: Vector, _size: Vector): void {

        crc2.beginPath();
        let radiusParticle: number = 3000;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.7)");
        crc2.save();
        crc2.fillStyle = gradient;

        crc2.arc(_position.x + 10, _position.y + 30, 25, 0, 2 * Math.PI);
        crc2.arc(_position.x + 50, _position.y + 25, 40, 0, 2 * Math.PI);
        crc2.arc(_position.x + 90, _position.y + 20, 35, 0, 2 * Math.PI);
        crc2.arc(_position.x + 130, _position.y + 20, 25, 0, 2 * Math.PI);

        crc2.closePath();
        crc2.fill();
        crc2.restore();
    }
}