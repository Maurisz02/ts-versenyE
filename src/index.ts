
import { Results } from "./result";
import { Football } from "./football";
import { Marathon } from "./marathon";
import { CalvinBall } from "./calvinBall";


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