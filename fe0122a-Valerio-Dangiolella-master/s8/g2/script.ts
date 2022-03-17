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

class SonAccount {

    public balanceInit: number = 0
    public primaOperazione: number
    public secondaOperazione: number
    public terzaOperazione : number
    public quartaOperazione : number
    
    constructor(balanceInit: number, primaOperazione: number, secondaOperazione: number, terzaOperazione: number, quartaOperazione : number) {
        this.balanceInit = balanceInit
        this.primaOperazione = primaOperazione
        this.secondaOperazione = secondaOperazione
        this.terzaOperazione = terzaOperazione
        this.quartaOperazione = quartaOperazione
    }
    oneDeposit(sommaAggiunta: number): number {
        this.primaOperazione = this.balanceInit + sommaAggiunta
        return this.balanceInit += sommaAggiunta;
    }
    oneWithDraw(sommPrelevata: number): number {
        this.secondaOperazione = this.balanceInit + sommPrelevata
        return this.balanceInit -= sommPrelevata;
    }
    twoDeposit(sommaAggiunta2: number): number {
        this.terzaOperazione = this.balanceInit + sommaAggiunta2
        return this.balanceInit += sommaAggiunta2
    }
    twoWithDraw(sommaPrelevata2: number): number {
        this.quartaOperazione = this.balanceInit + sommaPrelevata2
        return this.balanceInit -= sommaPrelevata2
    }
} 
class MotherAccount extends SonAccount {
   public interest : number
    constructor (balanceInit: number, primaOperazione: number, secondaOperazione: number, terzaOperazione: number, quartaOperazione : number, interest: number){
    super(balanceInit, primaOperazione, secondaOperazione, terzaOperazione, quartaOperazione);
    this.interest = interest 
    } 
   addInterest(i: number): number {
    i = this.interest 
    i = this.balanceInit
    let operazione = i*10/100
    return this.interest = this.balanceInit + operazione
    }
} 
