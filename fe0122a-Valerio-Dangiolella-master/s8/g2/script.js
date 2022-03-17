
/*Scrivere un programma che crei due classi SonAccount e MotherAccount per la gestione di due conto correnti,
che esegua le medesime operazioni di versamento e prelievo,
con in aggiunta il calcolo dell'interesse del conto corrente presente nella classe MotherAccount,
stampando il saldo attuale di entrambi i conto correnti.

Dati:

proprietà:

balanceInit:number=0  // saldo attuale 0

metodi:

oneDeposit:number // versamento
oneWithDraw // prelievo
twoDeposit:number // versamento
twoWithDraw // prelievo
addInterest// interesse MotherAccount 10%*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) {
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
        this.primaOperazione = primaOperazione;
        this.secondaOperazione = secondaOperazione;
        this.terzaOperazione = terzaOperazione;
        this.quartaOperazione = quartaOperazione;
    }
    SonAccount.prototype.oneDeposit = function (sommaAggiunta) {
        this.primaOperazione = this.balanceInit + sommaAggiunta;
        return this.balanceInit += sommaAggiunta;
    };
    SonAccount.prototype.oneWithDraw = function (sommPrelevata) {
        this.secondaOperazione = this.balanceInit + sommPrelevata;
        return this.balanceInit -= sommPrelevata;
    };
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2;
        return this.balanceInit += sommaAggiunta2;
    };
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2;
        return this.balanceInit -= sommaPrelevata2;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione, interest) {
        var _this = _super.call(this, balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione) || this;
        _this.interest = interest;
        return _this;
    }
    MotherAccount.prototype.addInterest = function (i) {
        i = this.interest;
        i = this.balanceInit;
        var operazione = i * 10 / 100;
        return this.interest = this.balanceInit + operazione;
    };
    return MotherAccount;
}(SonAccount));
