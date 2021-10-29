namespace L02_EventInspector {
    //console.log("Start");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let mouse0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        let mouse1: HTMLElement = <HTMLElement>document.querySelector("#div1");

        mouse0.addEventListener("keyup", logInfo);
        mouse0.addEventListener("click", logInfo);

        mouse1.addEventListener("keyup", logInfo);
        mouse1.addEventListener("click", logInfo);

        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);

        document.body.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);


    }

    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.pageX;
        let y: number = _event.pageY;

        let mousePosition: HTMLElement = <HTMLElement>document.querySelector("span");
        let mouse0: HTMLElement = <HTMLElement>_event.target;
        mousePosition.innerHTML = "<br>" + "target: " + mouse0 + "" + "<br>" + "x: " + x + "<br>" + "y: " + y;

        mousePosition.style.left = x + 3 + "px";
        mousePosition.style.top = y + 5 + "px";


    }

    function logInfo(_event: Event): void {
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
}