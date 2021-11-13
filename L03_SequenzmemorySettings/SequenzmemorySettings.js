"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum:
Quellen: Zusammenarbeit mit Verena Rothweiler */
var Sequenzmemory;
(function (Sequenzmemory) {
    window.addEventListener("load", handleload);
    let input; //Karteninhalt
    let inputArray = [];
    let showLetter = 0;
    let showLetterArray = [];
    let checkLastCard = [];
    let gameField;
    function handleload(_event) {
        console.log("handleload");
        input = document.getElementById("Textinput");
        input.addEventListener("click", promptInput);
        const targetDiv = document.getElementById("form");
        const otherDiv = document.getElementById("#memory");
        const btn = document.getElementById("Textinput");
        const text = document.getElementById("title");
        btn.onclick = function () {
            if (targetDiv.style.display !== "none") {
                targetDiv.style.display = "none";
                text.style.display = "none";
            }
            else {
                targetDiv.style.display = "block";
                text.style.display = "block";
                if (otherDiv.style.display == "none") {
                    otherDiv.style.display = "block";
                }
                else {
                    otherDiv.style.display = "none";
                }
            }
        };
        let createGame = document.querySelector(".start");
        createGame.addEventListener("click", main);
        let fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
    }
    let formData;
    let size;
    let backgroundColor;
    let cardColor;
    let font;
    let fontColor;
    function createCard(_input) {
        gameField = document.createElement("div");
        gameField.style.backgroundColor = formData.get("background")?.toString();
        let card = document.createElement("span");
        let body = document.querySelector("body");
        body.appendChild(gameField);
        card.innerHTML = _input;
        card.classList.add("card");
        card.classList.add("hidden");
        inputArray.push(card);
        checkLastCard.push(card);
        card.addEventListener("click", clickCards);
        card.style.width = size + "px";
        card.style.height = size + "px";
        if (backgroundColor) {
            card.style.backgroundColor = backgroundColor.toString();
        }
        if (cardColor) {
            card.style.background = cardColor.toString();
        }
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        if (font) {
            card.style.fontFamily = font.toString();
        }
    }
    function clickCards(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            showLetter++;
            if (!(showLetter > 2) && target.classList.contains("hidden") && target != showLetterArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("choosenCard");
                    showLetterArray.push(target);
                }
            }
            else {
                showLetter--;
            }
            if (showLetter == 2) {
                setTimeout(checkCards, 500);
            }
        }
    }
    function checkCards() {
        if (showLetterArray[0].innerHTML == inputArray[0].innerHTML) {
            for (let i = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("done");
            }
        }
        else {
            for (let i = 0; i < inputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("hidden");
            }
        }
        inputArray = [];
        showLetter = 0;
        //checkWin();
    }
    // tslint:disable-next-line: no-any
    function shuffle(array) {
        // tslint:disable-next-line: no-any
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function promptInput(_event) {
        var a = prompt("type a message", "");
        if (a != null) {
            //console.log(arr);
            // document.getElementById("para").innerText = a;  
            let arr = a.split("");
            shuffle(arr);
            // document.getElementById("para").innerText = arr;
            console.log(arr);
        }
    }
    function shuffleArray(_arr) {
        for (var i = _arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _arr[i];
            _arr[i] = _arr[j];
            _arr[j] = temp;
        }
        return _arr;
    }
    function main(_event) {
        shuffleArray(inputArray);
        for (let i = 0; i < inputArray.length; i++) {
            let user = document.getElementById("user");
            user.appendChild(inputArray[i]);
        }
    }
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=SequenzmemorySettings.js.map