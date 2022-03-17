/*Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale,
             ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random()
   che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido
   per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai
  arrontondarlo usando Math.floor()*/
/*let giocatore_2 = (Math.random() * (100-1) + 1)
 
 let generatoreNumero = (Math.random() * (100-1) + 1)

 if(giocatore_1 == generatoreNumero){
     console.log('vincitore giocatore 1')
 }else if(giocatore_2 == generatoreNumero){
     console.log('vince giocatore 2')
 }else {
     console.log('non ha vinto nessuno')
 }*/
var giocatore1 = 1;
var giocatore2 = 2;
function confronto(num1, num2) {
    var numero = Math.floor((Math.random() * (100 - 1)) + 1);
    var differenza1 = Math.abs(numero - num1), differenza2 = Math.abs(numero - num1);
    console.log('Numero casuale generato = ', numero);
    if (numero === num1) {
        console.log('Il giocatore n1 ha indovinato \n');
    }
    else if (numero === num2) {
        console.log('Il giocatore n2 ha indovinato \n');
    }
    else if (differenza1 < differenza2) {
        console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 1 si è avvicinato di più!');
    }
    else {
        console.log('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
    }
}
confronto(giocatore1, giocatore2);
