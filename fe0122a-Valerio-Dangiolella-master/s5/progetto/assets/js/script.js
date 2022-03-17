 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}


/*let pulsante = document.querySelector("#add_btn")

pulsante.addEventListener("click", function(){

    let testoinput = document.querySelector("tas_txt").value;
    let checklist = document.querySelector("#tasks_list_html")
    let pointlist = document.createElement("li")

    pointlist.innerHTML = testoinput 

    pointlist.classList.add("pointer")

    checklist.append(pointlist)
})*/
var bottone = document.getElementById("add_btn");
bottone.addEventListener('click', function(){
    var aggiunta = document.querySelector("#task_txt").value
    var lista = document.querySelector("#tasks_list_html")

    let li = document.createElement('li')
    li.innerHTML = aggiunta
o
    li.addEventListener('click', function(){
        li.remove()
    })

    lista.append(li)

    document.querySelector('#task_txt').value = ''

    salvaDatiNelDb(aggiunta)
})

