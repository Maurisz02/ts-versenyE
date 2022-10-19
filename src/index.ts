

interface Results{

    winner : string;

    date : Date;

    result() : string;

    kiir() : void;

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
    
    kiir() : void{
        console.log(this.result());
    }

}


class Marathon implements Results{

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

    kiir() : void{
        console.log(this.result());
    }
}

let sportok : Results[] = [

    new Football("Spain", "3-0"),
    new Football("Italy", "1-0"),
    new Marathon("Maurisz", 30),
    new Marathon("JamableBee", 50),
    new CalvinBall("AAQA"),
    new CalvinBall("BADJDA"),

];

for (let s of sportok){
    s.kiir();
}