function calcular(valor){
    var precio = parseFloat( document.getElementById("billprice").value);
    var personas = parseInt( document.getElementById("numOfPeople").value);

    if (personas!==0 && document.getElementById("numOfPeople").value!=""){
        var tipTotal = parseFloat(valor)*(precio/100);
        var tipPers = tipTotal/personas;

        var total = precio+tipTotal;
        var totPers = total/personas;


        document.getElementById("tipersona").innerText = '$' + tipPers.toFixed(2);
        document.getElementById("totpersona").innerText = '$' + totPers.toFixed(2);
    }else{
        document.getElementById("numOfPeople").classList.remove('personas');
        document.getElementById("numOfPeople").classList.add('peligro');
        document.getElementById("cantzero").innerText = "Can't be zero";
    }
}

function resetear(){
    document.getElementById("tipersona").innerText = '$0.00';
    document.getElementById("totpersona").innerText = '$0.00';
    document.getElementById("billprice").value = "";
    document.getElementById("numOfPeople").value = "";
    document.getElementById("customPerc").value = "";

    document.getElementById("botonReset").className = "btn rounded-3 muy-grueso mediano-pequeno col-12 boton-reset";
    document.getElementById("botonReset"). disabled = true;
}

function cambiarCSS(){
    document.getElementById("botonReset"). disabled = false;
    document.getElementById("botonReset").className = "bg-verde-claro texto-verde btn rounded-3 muy-grueso mediano-pequeno col-12";
}

function revisarCero(){
    var personas = parseInt( document.getElementById("numOfPeople").value);
    if (personas!==0) {
        document.getElementById("cantzero").innerText = "";
        document.getElementById("numOfPeople").classList.remove('peligro');
        document.getElementById("numOfPeople").classList.add('personas');
    }
}

function revisarCustom(){
    var customPerc = parseFloat( document.getElementById("customPerc").value);
    document.getElementById("customPerc").value = parseFloat( document.getElementById("customPerc").value) + '%';
    calcular(customPerc);
}