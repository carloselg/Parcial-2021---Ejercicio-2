/**
 * Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota 

  CARLOS LOPEZ DIVISION G
  
 */
function mostrar()
{
  //Declaraciones
	var cursada;
	var nombreIngresado;
	var cantidadMaterias;
	var sexoIngresado;
	var notaPromedio;
	var edadIngresada;
	var respuesta;

  //Acumulador
  var acumuladorNotaMasculino=0;
	var acumuladorNotaFemenino=0;
	var acumuladorNotaNoBinario=0;

  //Contador
  var contadorMasculino=0;
	var contadorFemenino=0;
	var contadorNoBinario=0;

  //Mayor
  var mayorCantidadMaterias;
	var edadMayorCantidadMaterias;
	var nombreMayorCantidadMaterias;

	var flag1=0;
	var nombreMejorPromedio;
	var mejorPromedioFemeninoONoBinario;

	var flag2=0;
	var nombreMasJoven;
	var edadMasJoven;
	
	var promedio;

	var flag3=0;
	
	do {
    
        do {
          nombreIngresado=prompt("Ingrese su nombre");
        } while (isNaN(nombreIngresado)==false);

        do {
          cursada=prompt("Ingrese la manera de presentar (libre-presencial-remota)");
        } while (cursada != "libre" && cursada != "presencial" && cursada != "remota");

        do {
          cantidadMaterias = parseInt(prompt("Ingrese cuantas materias va a ver"));
        } while (isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8);

        do {
          sexoIngresado=prompt("Ingrese sexo (masculino-femenio-no binario)");
        } while (sexoIngresado != "femenino" && sexoIngresado != "no binario" && sexoIngresado != "masculino");
        
        do {
          notaPromedio = parseInt(prompt("Ingrese su nota(entre 0 y 10)"));
        } while (isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10);

        do {
          edad = parseInt(prompt("Ingrese su edad"));
        } while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada >50);

		switch (sexoIngresado) 
    {
			case "masculino":
				contadorMasculino++;
				acumuladorNotaMasculino = acumuladorNotaMasculino + notaPromedio;
				break;

      case "femenino":
          contadorFemenino++;
          acumuladorNotaFemenino = acumuladorNotaFemenino + notaPromedio;
          break;		
          
			case "no binario":
				contadorNoBinario++;
				acumuladorNotaNoBinario = acumuladorNotaNoBinario + notaPromedio;
				break;
		}

		if(flag1 == 0 && sexoIngresado != "masculino")
    {
			flag1++;
			mejorPromedioFemeninoONoBinario = notaPromedio;
			nombreMejorPromedio = nombreIngresado;
		}
	  	else if(notaPromedio > mejorPromedioFemeninoONoBinario && sexoIngresado != "masculino")
    {
			mejorPromedioFemeninoONoBinario = notaPromedio;
			nombreMejorPromedio = nombreIngresado;
		}

		if(flag2 == 0 && cursada == "libre")
    {
			flag2++;
			nombreMasJoven=nombreIngresado;
			edadMasJoven = edadIngresada;
		}
		  else if(edadIngresada < edadMasJoven && cursada == "libre")
    {
			nombreMasJoven=nombreIngresado;
			edadMasJoven = edadIngresada;
		}

		if(flag3 == 0 && cursada != "remota")
    {
			flag3++;
			edadMayorCantidadMaterias = edadIngresada;
			nombreMayorCantidadMaterias = nombreIngresado;
			mayorCantidadMaterias = cantidadMaterias;
		}
		  else if (cantMaterias > mayorCantidadMaterias && cursada != "remota")
    {
			edadMayorCantidadMaterias = edadIngresada;
			nombreMayorCantidadMaterias = nombreIngresado;
			mayorCantidadMaterias = cantidadMaterias;
		}

	} while (respuesta=confirm("Quiere ingresar otro alumno?"));

	if(flag1 != 0)
  {
		document.write("El nombre del mejor promedio que no es un masculino es : "+nombreMejorPromedio+"<br>");
	}

  	if(flag2 != 0)
  {
		document.write("El nombre del mas joven entre los que presentan libre es :"+nombreMasJoven+"<br>");
	}

	  if(contadorMasculino != 0)
  {
		promedio = acumuladorNotaMasculino / contadorMasculino;
		document.write("El promedio de nota de los masculino es : "+promedio+"<br>");
	}

  	else if(contadorFemenino!= 0)
  {
		promedio = acumuladorNotaFemenino/ contadorFemenino;
		document.write("El promedio de nota de las femeninas es : "+promedio+"<br>");
	}

  	else if(contadorNoBinario != 0)
  {
		promedio = acumuladorNotaNoBinario / contadorNoBinario;
		document.write("El promedio de nota de los no binario es : "+promedio+"<br>");
	}

  	if (flag3 != 0)
  {
		document.write("El que cursa mas materias de forma NO remota su edad es: "+edadMayorCantidadMaterias+" y su nombre es :"+nombreMayorCantidadMaterias);
	}
}
