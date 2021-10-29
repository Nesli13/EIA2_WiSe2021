"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    //console.log("Start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mouse0 = document.querySelector("#div0");
        let mouse1 = document.querySelector("#div1");
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
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let mousePosition = document.querySelector("span");
        let mouse0 = _event.target;
        mousePosition.innerHTML = "target: " + mouse0 + "" + "<br>" + "x: " + x + "<br>" + "y: " + y;
        mousePosition.style.left = x + 3 + "px";
        mousePosition.style.top = y + 5 + "px";
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map