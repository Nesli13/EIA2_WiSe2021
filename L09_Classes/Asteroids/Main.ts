namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let linewidth: number = 2;
    let moveables: Moveable[] = [];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = linewidth;

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        createAstroids(5);
        //createShip();
        createUfo();

        canvas.addEventListener("ufoShoots", handleUfoShot);
        canvas.addEventListener("mouseup", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress);
        //canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20);
    }
    function shootProjectile(_origin: Vector): void {
        console.log("Shoot Projectile");
        let velocity: Vector = Vector.getRandom(100, 100);
        let projectile: Projectile = new Projectile(_origin, velocity);
        moveables.push(projectile);

    }
    function handleUfoShot(_event: Event): void {
        let ufo: Ufo = (<CustomEvent>_event).detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        console.log(asteroidHit);
        if (asteroidHit)
            breakAsteroid(asteroidHit);
    }
    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let moveable of moveables) {
            if (moveable instanceof Asteroid && moveable.isHit(_hotspot))
                return moveable;
        }
        return null;
    }
    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocitiy.add(_asteroid.velocitiy);
                moveables.push(fragment);
            }
        }
        _asteroid.expendable = true;

    }

    function createAstroids(_nAsteroids: number): void { // diese Funktion läuft 5 mal durch, siehe zeile 27
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            moveables.push(asteroid);

        }
    }
    function createUfo(): void {
        console.log("Create ufo");
        let ufo: Ufo = new Ufo();
        moveables.push(ufo);

    }
    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

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
        handleCollisions();
        console.log("Moveable length: ", moveables.length);
    }
    function deleteExpandables(): void {
        for (let i: number = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expendable)
                moveables.splice(i, 1);
        }
    }
    function handleCollisions(): void {
        for (let i: number = 0; i < moveables.length; i++)
            for (let j: number = i + 1; j < moveables.length; j++) {
                let a: Moveable = moveables[i];
                let b: Moveable = moveables[j];
                if (a.isHitBy(b)){
                    a.hit();
                    b.hit();
                }
        }

    }
}