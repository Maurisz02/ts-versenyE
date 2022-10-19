

interface Results{

    winner : string;

    date : Date;

    result() : string;

}


class Football implements Results{

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

}


class Marathon implements Results{

    winner: string;

    date: Date;

    constructor(winner : string, date : Date){

        this.winner = winner;
        this.date = date;

    }

    result(): string {
        return "Marathon: " + this.date.getMinutes()+ " min " + this.date.getSeconds() + " s";
    }
}


class CalvinBall implements Results{

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

    

}