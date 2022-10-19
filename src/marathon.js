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
var _Marathon_second;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, second) {
        _Marathon_second.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Marathon_second, second, "f");
    }
    get date() {
        return this.date;
    }
    set date(date) {
        this.date = date;
    }
    result() {
        //return "Marathon: " + this.date.getMinutes()+ " min " + this.date.getSeconds() + " s";
        return "Marathon: " + __classPrivateFieldGet(this, _Marathon_second, "f") + " minitues";
    }
    kiir() {
        console.log(this.result());
    }
}
exports.Marathon = Marathon;
_Marathon_second = new WeakMap();
