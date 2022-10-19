import { Results } from "./result";


export class Football implements Results{

    winner : string;

    #score : string;

    constructor(winner : string, score : string){
        this.winner = winner;
        this.#score = score;
        
    }

    get date() {
        return this.date;
    }

    set date(date : Date){
        this.date = date;
    }

    result(): string {
        return "Football match: " + this.#score;
    }
    
    kiir() : void{
        console.log(this.result());
    }

}