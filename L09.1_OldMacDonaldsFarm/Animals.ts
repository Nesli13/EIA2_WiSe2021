/*Aufgabe: L.03_SequenmemorySettings
Name: Neslisah Koc
Matrikel: 270155
Quellen: Zusammenarbeit mit Verena Rothweiler .*/
namespace L09_1_Animals {

    export class Animals {
        name: string;
        type: string;
        food: string;
        foodAmount: number;
        sound: string;

        constructor(_name: string, _type: string, _food: string, _foodAmount: number, _sound: string) {
            console.log("constructor");
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }

        eatFood(_food: string, _foodAmount: number): void {
            console.log("The Animal eat: " + this.foodAmount + " kg of " + this.food);
        }

        singSong(_sound: string): void {
            console.log("Animal sings:" + this.sound);
        }
    }
}