/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar()
{
  
  let nombre;
  let tipo;
  let cantidad;
  let sexo;
  let nota;
  let edad;
  let seguir;
  let mejorProm;
  let nombreMejor;
  let flagN = 1;
  let flagJ = 1;
  let flagM = 1;
  let nombreJoven;
  let edadJoven;
  let acumM = 0;
  let acumF = 0;
  let acumNB = 0;
  let contM = 0;
  let contF = 0;
  let contNB = 0;
  let promM;
  let promF;
  let promNB;
  let maxCant;
  let nombreCant;
  let edadCant;




  do{
    nombre=prompt("Ingrese nombre: ");
    tipo=prompt("Ingrese tipo cursada: (libre, remota o presencial)").toLowerCase();
    while(tipo!="libre"&&tipo!="presencial"&&tipo!="remota"){
      tipo=prompt("Error. Ingrese tipo cursada: (libre, remota o presencial)").toLowerCase();
    }
    cantidad=parseInt(prompt("Ingrese cantidad de materias: (hasta 8)"));
    while(cantidad<0||cantidad>8||isNaN(cantidad)){
      cantidad=parseInt(prompt("Error. Ingrese cantidad de materias: (hasta 8)"));
    }
    sexo=prompt("Ingrese sexo: (F/M/No binario").toLowerCase();
    while(sexo!='f'&&sexo!='m'&&sexo!="no binario"){
      sexo=prompt("Error. Ingrese sexo: (F/M/No binario").toLowerCase();
    }
    nota=parseInt(prompt("Ingrese nota promedio: (0-10)"));
    while(nota<0||nota>10||isNaN(nota)){
      nota=parseInt(prompt("Error. Ingrese nota promedio: (0-10)"));
    }
    edad=parseInt(prompt("Ingrese edad: "));
    while(isNaN(edad)){
      edad=parseInt(prompt("Ingrese edad: "));
    }
    if(flagN||sexo!='m'||nota>mejorProm){
      mejorProm=nota;
      nombreMejor=nombre;
      flagN=0;
    }
    if(flagJ||tipo=="libre"||edad<edadJoven){
      edadJoven=edad;
      nombreJoven=nombre;
      flagJ=0;
    }
   switch(sexo){
    case 'm':
       acumM+=nota;
       contM++;
       promM=acumM/cont++;
    break;
    case 'f':
      acumF+=nota;
      contF++;
      promF=acumF/contF;
    break;
    case "no binario":
      acumNB+=nota;
      contNB++
      promNB=acumNB/contNB;
    break;
   }
   if(flagM||cantidad>maxCant||tipo!="remota"){
     maxCant=cantidad;
     nombreCant=nombre;
     edadCant=edad;
     flagM=0;
   }

    seguir=prompt("Quiere ingresar otro alumno? ");
  }while(seguir=='s');
  console.log("La chica con mejor promedio es "+nombreMejor+", con un promedio de "+mejorProm);
  console.log("El mas joven de los que dan libre es "+nombreJoven+" con "+edadJoven+" años");
  console.log("El promedio de nota de m es "+promM+", el de f es "+promF+" y el de no binario es "+promNB);
  console.log("El que cursa mas mateias de form remota es "+nombreCant+" teniendo "+edadCant+ " años, y "+maxCant+" materias.");
}
/*a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/