

//class Animal{
//	constructor(especie,edad,color){
//		this.especie = especie;
//		this.edad = edad;
//		this.color = color
//		this.info = `Soy ${this.especie}, tengo ${this.edad} años
//		soy de color ${this.color}`;
//	}	
//	verInfo(){
//		document.write(this.info)
//	}	
//}
//
//class Perro extends Animal{
//	constructor(especie,edad,color,raza){
//		super(especie,edad,color);
//		this.raza = raza;
//	}
//	ladrar(){
//		alert("wawaaw")
//	}
//}
//
//let perroo = new Perro("perro",5,"rojo","chiguagua");
//let pajaro = new Animal("pajaro",3,"verde");
//let gato = new Animal("gato",4,"blanco");
//perroo.ladrar()
//gato.verInfo()
//pajaro.verInfo()
//documnet.write(perro.info)


//numero = Math.random()*100;
//numero = Math.round(numero);
//document.write(numero)

const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true")