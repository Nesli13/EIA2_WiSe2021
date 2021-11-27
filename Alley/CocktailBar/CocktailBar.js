"use strict";
var CocktailBar;
(function (CocktailBar) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        let inputs = document.querySelectorAll("input");
        console.log(inputs);
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(CocktailBar || (CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map