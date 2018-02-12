
//PUNTOS EXTRA 1
var nombre = prompt ("Ingrese su nombre:");

console.log("Bienvenido " + nombre);

document.write("Bienvenido " + nombre);



//PUNTOS EXTRA 2
/* if nos sirve si queremos comprobar que un valor es verdadero, por ejemplo
yo vivo en la casa 2 */


var casa = 2;

if(casa == 2){
	document.write("Casa de Gustavo Oliva");
}

/*if else nos serviria para verificar si el valor asignado es o no es el de mi casa*/

if(casa == 2){
	document.write("Casas de Gustavo Oliva");
}else{
	document.write("Esta no es la casa de Gustavo Oliva");
}


/* if else nos serviria en el caso que quisieramos identificar a mas de un vecino*/
/*
  CASA 2 = GUSTAVO OLIVA
  CASA 3 = SOFY
  */
if(casa == 2){
	document.write("Casa de Gustavo Oliva");
}else if(casa==3){
	document.write("Casa de Sofy");
}else{
	document.write("No pertenece a este sector")
}


/*Switch case nos sirve cuando tenemos bastantes opciones por elegir*/
/* Switch case nos serviria para averiguar en donde vive cualquier vecino de la colonia*/
/*CASA 1 = BIBI
  CASA 2 = GUSTAVO OLIVA
  CASA 3 = SOFY
  CASA 4 = ERICK*/

  var numeroCasa = prompt("Ingrese el numero de casa:");
  var n = parseInt(numeroCasa);

  switch (n){
  	case 1:
  	alert("En la casa 1 vive Bibi");
  	break;
  	case 2:
  	alert("En la casa 2 vive Gustav Oliva");
  	break;
  	case 3:
  	alert("En la casa 3 vive Sofy");
  	break;
  	case 3:
  	alert("En la casa 4 vive Erick");
  	break;
  	default:
  	alert("No vive en la colonia");
  	break;
  }



//ACTIVIDAD 3


mes = 10;

switch (mes){
	case 1:
	case 2:
	case 12:
	alert("Es invierno");
	break;

	case 3:
	case 4:
	case 5:
	alert("Es primavera");
	break;

	case 6:
	case 7:
	case 8:
	alert("Es verano");
	break;

	case 9:
	case 10:
	case 11:
	alert("Es otono");

	default: 
	alert("Gustavo Adolfo Oliva Campos 18003951");
	break;
}





