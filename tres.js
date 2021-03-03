/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años 
 el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
	let nombre;
	let estadoCivil;
	let edad;
	let temperatura;
	let sexo;
	let seguir;
	let precio;
	let contMV = 0;
	let acumMJ= 0;
	let edadmin;
	let flag = 1;
	let acumEdadJ = 0;
	let importe;
	let subtotal = 0;
	let importeFinal;
	let descuento;

	do{
		nombre=prompt("Ingrese nombre: ");
		estadoCivil=prompt("Ingrese estado civil (soltero, casado, viudo)");
		while(estadoCivil!="soltero"||estadoCivil!="casado"||estadoCivil!="viudo"){
			estadoCivil=prompt("Error.Ingrese estado civil (soltero, casado, viudo)");
		}
		temperatura=parseFloat(prompt("Ingrese temperatura: "));
		while(isNaN(temperatura)){
			temperatura=parseFloat(prompt("Error. Ingrese temperatura: "));
		}
		edad=parseInt(prompt("Ingrese edad: (solo mayores de edad)"));
   		while(edad<17||isNaN(edad)){
    		edad=parseInt(prompt("Error. Ingrese edad: "));
		}
		sexo=prompt("Ingrese sexo: (F/M").toLowerCase();
    	while(sexo!='f'&&sexo!='m'){
      		sexo=prompt("Error. Ingrese sexo: (F/M").toLowerCase();
		}
		precio=parseInt(prompt("El precio por pasajero: ($600)"));
		while(precio!=600||isNaN(precio)){
				precio=parseInt(prompt("Error. El precio por pasajero: ($600)"));
		}

		if(estadoCivil=="viudo"&&edad>=60){
			contMV++
		}
		if( flag || estadoCivil=="soltero" || edad<edadmin){
			acumMJ=nombre;
			acumEdadJ=edad;
			flag=0;
		}
		importe = 1 * precio;
		subtotal = subtotal + importe;
		seguir=prompt("Quiere ingresar otro pasajero? ");
	}while (seguir == 's');
	

	console.log(" La cantidad de personas con estado viudo de mas de 60 años."+contMV);
	console.log(" el nombre: "+acumMJ+" y edad de la mujer soltera mas joven.: "+acumEdadJ);
	console.log("El viaje total sin descuento cuesta: $"+subtotal);
	
	if(edad>=60){ 
	descuento=0.25;
	importeFinal=subtotal-(subtotal*descuento);
	console.log("El viaje le costara: $"+importeFinal);
	}else {
		console.log("no hay mayores de 60");
	}

}
/*) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años 
 el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/