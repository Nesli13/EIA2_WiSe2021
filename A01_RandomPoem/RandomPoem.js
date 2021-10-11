"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", " zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subjekte, praedikate, objekte);
    for (let index = 6 - 1; index >= 1; index--) {
        //console.log(index);
        let werteAusgeben = getVerse(subjekte, praedikate, objekte);
        console.log(werteAusgeben);
    }
    function getVerse(subjekte, praedikate, objekte) {
        let wert1 = Math.floor(Math.random() * subjekte.length);
        let wert2 = Math.floor(Math.random() * praedikate.length);
        let wert3 = Math.floor(Math.random() * objekte.length);
        let werte = subjekte[wert1] + "  " + praedikate[wert2] + "  " + objekte[wert3];
        subjekte.splice(wert1, 1);
        praedikate.splice(wert2, 1);
        objekte.splice(wert3, 1);
        return werte;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map