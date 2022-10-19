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
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("fHozzaad")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let winner = document.getElementById('name');
        let score = document.getElementById('score');
        let foci = new football_1.Football(winner.value, score.value);
        sportok.push(foci);
        foci.kiir();
        for (let s of sportok) {
            s.kiir();
        }
    });
});
