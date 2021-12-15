"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
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
        createAstroids(5);
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        console.log("Shoot laser");
        let origin = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        let velocity = new L09_Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L09_Asteroids.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        let hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L09_Asteroids.Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocitiy.add(_asteroid.velocitiy);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function createAstroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L09_Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        //console.log("Update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let moveable of moveables) { //Wenn aus dem Array ein Objekt gelöscht wird rutscht Array zsm.
            //, wenn aber das gelöschte Objekt ein expendable war existiert es immernoch, daher eine neue for-schleife
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        //ship.draw();
        //handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map