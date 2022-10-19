"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const football_1 = require("./football");
const marathon_1 = require("./marathon");
const calvinBall_1 = require("./calvinBall");
let sportok = [
    new football_1.Football("Spain", "3-0"),
    new football_1.Football("Italy", "1-0"),
    new marathon_1.Marathon("Maurisz", 30),
    new marathon_1.Marathon("JamableBee", 50),
    new calvinBall_1.CalvinBall("AAQA"),
    new calvinBall_1.CalvinBall("BADJDA"),
];
for (let s of sportok) {
    s.kiir();
}
