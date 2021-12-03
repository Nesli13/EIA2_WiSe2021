"use strict";
/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler .*/
var L09_1_Animals;
(function (L09_1_Animals) {
    class Animals {
        name;
        type;
        food;
        foodAmount;
        sound;
        constructor(_name, _type, _food, _foodAmount, _sound) {
            console.log("constructor");
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        eatFood(_food, _foodAmount) {
            console.log("The Animal eat: " + this.foodAmount + " kg of " + this.food);
        }
        singSong(_sound) {
            console.log("Animal sings:" + this.sound);
        }
    }
    L09_1_Animals.Animals = Animals;
})(L09_1_Animals || (L09_1_Animals = {}));
//# sourceMappingURL=Animals.js.map