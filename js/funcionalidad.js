const coleccion=document.getElementsByClassName('titulo3');
for(let i =0;i<coleccion.length ;i++){
    coleccion[i].addEventListener('mouseover', function(){
        coleccion[i].style.color='red';
    });
};
for(let i =0;i<coleccion.length ;i++){
    coleccion[i].addEventListener('mouseout', function(){
        coleccion[i].style.color='orange';
    });
};

document.querySelector('html').ondblclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}

function alerta()
    {
    var mensaje= "Gracias por su atención, espero formar parte del equipo de la empresa" ;
	document.getElementById("ejemplo").innerHTML = mensaje;
}

