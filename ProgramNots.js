
profe = prompt("Añade un 1 si eres Profesor y Añade un 2 si eres un Alumno")

alert("IMPORTANTE: La nota que recibiras es la nota de una asignatura y deberas completar la información que se te pide orientada a una asignatura. EL PROGRAMA NO ACEPTA DECIMALES. Presiona Aceptar Para Continuar.");
pregunta = prompt("Añade Una Asignatura");


const nota1 = (num1)=>{
	return parseInt(num1 );
}


const nota2 = (num1,num2)=>{
	result = parseInt(num1) + parseInt(num2);
	result1 = result / 2;
	return result1
}

const nota3 = (num1,num2,num3)=>{
	result = parseInt(num1) + parseInt(num2) + parseInt(num3);
	result1 = result / 3;
	return result1
}

const nota4 = (num1,num2,num3,num4)=>{
	result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
	result1 = result / 4;
	return result1
}

const nota5 = (num1,num2,num3,num4,num5)=>{
	result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
	result1 = result / 5;
	return result1
}

const nota6 = (num1,num2,num3,num4,num5,num6)=>{
	result = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6);
	result1 = result / 6;
	return result1
}

operacion = prompt("Cuantos Examenes has hecho en el trimestre (AÑADE SOLO UN NUMERO): 1 examen, 2 examenes, 3 examenes, 4 examenes, 5 examenes, 6 examenes");

if (operacion == 1){
	numero1 = prompt("Primera nota del examen");
	resultado = nota1(numero1);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else if (operacion == 2){
	numero1 = prompt("Primera nota del examen");
	numero2 = prompt("Segunda nota del examen");
	resultado = nota2(numero1,numero2);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else if (operacion == 3){
	numero1 = prompt("Primera nota del examen");
	numero2 = prompt("Segunda nota del examen");
	numero3 = prompt("Tercera nota del examen");
	resultado = nota3(numero1,numero2,numero3);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else if (operacion == 4){
	numero1 = prompt("Primera nota del examen");
	numero2 = prompt("Segunda nota del examen");
	numero3 = prompt("Tercera nota del examen");
	numero4 = prompt("Cuarta nota del examen");
	resultado = nota2(numero1,numero2,numero3,numero4);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else if (operacion == 5){
	numero1 = prompt("Primera nota del examen");
	numero2 = prompt("Segunda nota del examen");
	numero3 = prompt("Cuarta nota del examen");
	numero4 = prompt("Quinta nota del examen");
	numero5 = prompt("Quinta nota del examen");
	resultado = nota2(numero1,numero2,numero3,numero4,numero5);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else if (operacion == 6){
	numero1 = prompt("Primera nota del examen");
	numero2 = prompt("Segunda nota del examen");
	numero3 = prompt("Tercera nota del examen");
	numero4 = prompt("Cuarta nota del examen");
	numero5 = prompt("Quinta nota del examen");
	numero6 = prompt("Sexta nota del examen");
	resultado = nota2(numero1,numero2,numero3,numero4,numero5,numero6);
	document.write(`RESULTADO: ${pregunta}: ${resultado}`);
}

else {
	alert("No se a añadido la cifra correspondiente, Por Favor Intentalo de Nuevo!");
}

comportamiento = prompt("Como te has portado en el trimestre DEL 1 Al 5:")

if (comportamiento==5){
	document.write(" + 1")
}

else if (comportamiento==4){
	document.write(" + 0.75")
}

else if (comportamiento==3){
	document.write(" + 0.5")
}

else if (comportamiento==2){
	document.write(" + 0.25")
}

else if (comportamiento==1){
	document.write(" + 0")
}

else {
	alert("No se a agregado la cifra correspondiente, Por Favor Intentalo de Nuevo!");
	document.write("--RESULTADO: Vuelvelo a Intentar añadiendo lo que se pide en las instrucciones");
}



if (profe == 2){
	alert("LA RESPUESTA SE ENCONTRARÁ (en la sección resultado) ESPERO QUE APRUEBES :)")
}

if (profe == 1){
	alert("LA RESPUESTA SE ENCONTRARÁ (en la sección resultado) Profesor lee el apartado (Función del Programa) te interesará :)")
}