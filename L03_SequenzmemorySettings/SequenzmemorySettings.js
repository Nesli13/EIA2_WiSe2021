"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Datum:
Quellen: Zusammenarbeit mit Verena Rothweiler
Leider funktioniert noch nicht alles.. tut uns leid.*/
var Sequenzmemory;
(function (Sequenzmemory) {
    let choosenInput; //Karteninhalt
    let choosenInputArray = [];
    let showLetter = 0;
    let showLetterArray = [];
    let checkLastCard = [];
    let formData;
    let size;
    let backgroundColor;
    let cardColor;
    let font;
    let fontColor;
    let gameField;
    let _input;
    window.addEventListener("load", handleload);
    function handleload(_event) {
        console.log("handleload");
        choosenInput = document.getElementById("Textinput");
        choosenInput.addEventListener("click", chooseInput);
        // nach der Eingabe verschwindet die div mit der id="form" und  id="memory" erscheint
        const formDiv = document.getElementById("form");
        const memoryDiv = document.getElementById("memory");
        const btn = document.getElementById("Textinput");
        const text = document.getElementById("title");
        btn.onclick = function () {
            if (formDiv.style.display !== "none") {
                formDiv.style.display = "none";
                text.style.display = "none";
                memoryDiv.style.display = "block";
            }
            else {
                formDiv.style.display = "block";
                text.style.display = "block";
                memoryDiv.style.display = "none";
            }
        };
        let game = document.querySelector(".start");
        game.addEventListener("click", startGame);
        function startGame(_event) {
            shuffleArray(choosenInputArray);
            for (let i = 0; i < choosenInputArray.length; i++) {
                let user = document.getElementById("user");
                user.appendChild(choosenInputArray[i]);
            }
            // tslint:disable-next-line: no-unused-expression
            createGame;
        }
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
        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);
    }
    function createGame(_event) {
        for (let index = 0; index < choosenInputArray.length; index++) {
            gameField = document.createElement("div");
            gameField.style.backgroundColor = formData.get("background")?.toString();
            let card = document.createElement("div");
            card.className = "cards";
            card.id = String(index);
            gameField.appendChild(card);
            card.innerHTML = _input;
            card.classList.add("card");
            card.classList.add("hidden");
            choosenInputArray.push(card);
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
        if (showLetterArray[0].innerHTML == choosenInputArray[0].innerHTML) {
            for (let i = 0; i < choosenInputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("done");
            }
        }
        else {
            for (let i = 0; i < choosenInputArray.length; i++) {
                showLetterArray[i].classList.remove("open");
                showLetterArray[i].classList.add("hidden");
            }
        }
        choosenInputArray = [];
        showLetter = 0;
        //checkWin();
    }
    // tslint:disable-next-line: no-any
    function shuffle(array) {
        // tslint:disable-next-line: no-any
        var choosenInput = array.length, temporaryValue, randomIndex;
        while (0 !== choosenInput) {
            randomIndex = Math.floor(Math.random() * choosenInput);
            choosenInput -= 1;
            temporaryValue = array[choosenInput];
            array[choosenInput] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function chooseInput(_event) {
        var choosenInput = prompt("type a message", "");
        if (choosenInput != null) {
            //console.log(arr);
            let choosenInputArray = choosenInput.split("");
            shuffle(choosenInputArray);
            // document.getElementById("para").innerHTML = choosenInputArray;  
            // document.getElementById("para").innerText = arr;
            console.log(choosenInputArray);
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
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=SequenzmemorySettings.js.map