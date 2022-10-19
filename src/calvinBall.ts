
import { Results } from "./result";


export class CalvinBall implements Results{

    #winner: string;

    #score : number;

    constructor(winner : string){
        this.#winner = winner;
        this.#score = Math.floor(Math.random() * (100 - 10) ) + 10;
    }

    get winner(){
        return this.#winner;
    }

    set winner(winner : string){

        if(winner == "Calvin" || winner == "Hobbes"){

            this.#winner = winner;

        }else{
            console.log("Hiba történt");
        }
    }

    get date() {
        return this.date;
    }

    set date(date : Date){
        this.date = date;
    }

    result(): string {
        return "CalvinBall: " + this.#score + " points"
    }

    kiir() : void{
        console.log(this.result());
    }
}