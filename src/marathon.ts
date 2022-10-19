
import { Results } from "./result";


export class Marathon implements Results{

    winner: string;

    #second : number;

    constructor(winner : string, second : number){

        this.winner = winner;
        this.#second = second;

    }

    get date() {
        return this.date;
    }

    set date(date : Date){
        this.date = date;
    }

    result(): string {
        //return "Marathon: " + this.date.getMinutes()+ " min " + this.date.getSeconds() + " s";
        return "Marathon: " + this.#second + " minitues";
    }

    kiir() : void{
        console.log(this.result());
    }
}