"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    let ASTEROID_EVENT;
    (function (ASTEROID_EVENT) {
        ASTEROID_EVENT["UFO_SHOOTS"] = "ufoShoots";
        ASTEROID_EVENT["ASTEROID_HIT"] = "asteroidHit";
    })(ASTEROID_EVENT = L09_Asteroids.ASTEROID_EVENT || (L09_Asteroids.ASTEROID_EVENT = {}));
    window.addEventListener("load", handleLoad);
    L09_Asteroids.linewidth = 2;
    let moveables = [];
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "white";
        L09_Asteroids.crc2.lineWidth = L09_Asteroids.linewidth;
        L09_Asteroids.createPaths();
        console.log("Asteroids paths: ", L09_Asteroids.asteroidPaths);
        createAsteroids(5);
        // createShip();
        createUfo();
        createUfo();
        createUfo();
        canvas.addEventListener(ASTEROID_EVENT.UFO_SHOOTS, handleUfoShot);
        canvas.addEventListener(ASTEROID_EVENT.ASTEROID_HIT, breakAsteroid);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_origin) {
        console.log("Shoot projectile");
        let velocity = L09_Asteroids.Vector.getRandom(200, 200);
        let projectile = new L09_Asteroids.Projectile(_origin, velocity);
        // move projectile away from ufo to prevent suicide
        projectile.move(0.15);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let position = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        let hotspot = new L09_Asteroids.Hotspot(position);
        moveables.push(hotspot);
    }
    function breakAsteroid(_event) {
        let asteroid = _event.detail.asteroid;
        if (asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L09_Asteroids.Asteroid(asteroid.size / 2, asteroid.position);
                fragment.velocity.add(asteroid.velocity);
                moveables.push(fragment);
            }
        }
        asteroid.expendable = true;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L09_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L09_Asteroids.Ufo();
        moveables.push(ufo);
    }
    function update() {
        // console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        // ship.draw();
        handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    function handleCollisions() {
        for (let i = 0; i < moveables.length; i++) {
            let a = moveables[i];
            for (let j = i + 1; j < moveables.length; j++) {
                let b = moveables[j];
                if (a instanceof L09_Asteroids.Asteroid && b instanceof L09_Asteroids.Asteroid)
                    continue;
                if (a.expendable || b.expendable)
                    continue;
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
        }
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map