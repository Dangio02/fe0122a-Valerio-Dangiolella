function n(dato){ 
  document.getElementById("operazioni").value+=dato;
}

function operazione() { 
document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value); 
}

function cancella() { 
document.getElementById("operazioni").value=""; 
}

alert("Benvenuto nella mia prima calcolatrice esegui i tuoi calcoli qui ;)")