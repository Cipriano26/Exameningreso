/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let inflamable;
	let marca;
	let acumAlc = 0;
	let acumIac = 0;
	let acumQuat = 0;
	let contAlc = 0;
	let contIac = 0;
	let contQuat = 0;
	let acumInif = 0;
	let acumComb = 0;
	let acumExp = 0;
	let promAlc;
	let promIac;
	let promQuat;
	let InflamableMax;//con mas unidades...
	let flagIac = 1;
	let flagCaro = 1;
	let precioMin = 0;
	let cantIacBarato;
	let marcaMax;
	let tipoMaxC;
	let precioMax//mas caro

	for(let i=0;i<5;i++){
		tipo=prompt("Ingrese tipo: (alcohol ,iac o quat)").toLowerCase();
		while(tipo!="alcohol"&&tipo!="iac"&&tipo!="quat"){
			tipo=prompt("Error. Reingrese tipo: (alcohol ,iac o quat)").toLowerCase();
			}
		precio=parseInt(prompt("Ingrese precio: (entre 100 y 300)"));
		while(precio<100||precio>300||isNaN(precio)){
			precio=parseInt(prompt("Error. Reingrese precio: (entre 100 y 300)"));
		}
		cantidad=parseInt(prompt("Ingrese cantidad: (hasta 1000)"));
		while(cantidad<0||cantidad>1000||isNaN(cantidad)){
			cantidad=parseInt(prompt("Error. Reingrese cantidad: (hasta 1000)"));
		}
		inflamable=prompt("Ingrese el tipo de inflamable: (inifugo, combustible, explosivo)").toLowerCase();
		while(inflamable!="inifugo"&&inflamable!="combustible"&&inflamable!="explosivo"){
			inflamable=prompt("Error. Reingrese el tipo de inflamable: (ignifugo, combustible, explosivo)").toLowerCase();
		}
		marca=prompt("Ingrese marca: ")
	
		}
		switch(inflamable){
			case "combustible":
				acumComb+=cantidad;
			break;
			case "explosivo":
				acumExp+=cantidad;
			break;
			case "inifugo":
				acumInif+=cantidad;
			break;
		}
		if(acumComb>acumExp&&acumComb>acumInif){
			InflamableMax="combustible";
		}else if(acumExp>=acumExp&&acumExp>acumInif){
			InflamableMax="Explosivo";
		}else{
			InflamableMax="Inifugo";
		}

		if(tipo=="iac"){
			acumIac+=cantidad;
			contIac++
			promIac=acumIac/contIac;
			if (flagIac || 200 < precioMin){
				precioMin = precio;
				cantIacBarato = cantidad;
				flagIac = 0;			
			}else if (tipo=="alcohol"){
				acumAlc+=cantidad;
				contAlc++;
				promAlc=acumAlc/contAlc;
			}else{
				acumQuat+=cantidad;
				contQuat++;
				promQuat=acumQuat/contQuat;
			}
		}
		if( flagCaro || precio > precioMax){
			precioMax = precio;
			marcaMax = marca;
			tipoMaxC = tipo;
			flagAlc = 0;
		}
	console.log("a) El promedio de cantidad de Alcohol es "+promAlc+", el de iac es "+promIac+" y el de quat es "+promQuat);
	console.log("El tipo de inflamable con mas cantidad es "+InflamableMax);
	console.log("La cantidad de iac con precios menores a 200 son: "+cantIacBarato+ " valiendo $"+precioMin);
	console.log("El tipo mas caro es "+tipoMaxC+" de "+marcaMax);
}