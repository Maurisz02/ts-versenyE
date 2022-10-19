"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CalvinBall_winner, _CalvinBall_score;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalvinBall = void 0;
class CalvinBall {
    constructor(winner) {
        _CalvinBall_winner.set(this, void 0);
        _CalvinBall_score.set(this, void 0);
        __classPrivateFieldSet(this, _CalvinBall_winner, winner, "f");
        __classPrivateFieldSet(this, _CalvinBall_score, Math.floor(Math.random() * (100 - 10)) + 10, "f");
    }
    get winner() {
        return __classPrivateFieldGet(this, _CalvinBall_winner, "f");
    }
    set winner(winner) {
        if (winner == "Calvin" || winner == "Hobbes") {
            __classPrivateFieldSet(this, _CalvinBall_winner, winner, "f");
        }
        else {
            console.log("Hiba történt");
        }
    }
    get date() {
        return this.date;
    }
    set date(date) {
        this.date = date;
    }
    result() {
        return "CalvinBall: " + __classPrivateFieldGet(this, _CalvinBall_score, "f") + " points";
    }
    kiir() {
        console.log(this.result());
    }
}
exports.CalvinBall = CalvinBall;
_CalvinBall_winner = new WeakMap(), _CalvinBall_score = new WeakMap();
