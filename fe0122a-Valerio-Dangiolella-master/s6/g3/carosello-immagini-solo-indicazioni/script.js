// quando il documento è pronto...(forma breve)...

    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).
    

    // gestisco il click event handler per il pulsante sinistro.
    
        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        

        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"
    

    // gestisco il click event handler per il pulsante destro
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left

    let carosello = $('ul')
    let prop = '-=300px'
    let prop2 = '+=300px'


    $(document).ready(function(){
        $('#l-btn').on('click', function(){
            console.log('funziona se clicco')
            carosello.animate({
                left : prop2, 
                
            })
        })
    })
    $(document).ready(function(){
        $('#r-btn').on('click',function(){
            console.log('funziona se clicco')
            carosello.animate({
            left : prop}, 
               {easing : 'swing',
               duration : 2000
                
            })
        })
    })
     