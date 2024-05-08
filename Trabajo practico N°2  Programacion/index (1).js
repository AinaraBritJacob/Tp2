//1)
let numero1= Number (prompt("Dime un numero"))
let numero2= 75
if (numero1>=75) {
    alert("Tu numero es mayor")
} else {
    alert("Tu numero es menor")
    
}
//2)
let Numero= Number (prompt("Di un numero cualquiera"))
if ((Numero>=1) || (Numero<=0 )) {
    alert(Numero + "Tu numero es positivo") || alert("Tu numero es negativo")
} else {
    alert("Tu numero es cero")
}
//3)
let ParImpar= Number(prompt("Ingresa un numero"))
let resultado= ParImpar/2
if (resultado==0) {
    alert("Es par")
} else {
    alert("es impar")
}
//4)
let usuario= prompt("¿Cual es tu edad?")
if (usuario>=18) {
    alert("eres mayor de edad")
} else {
    alert("eres menro de edad")
    
}

//5)
let pregunta= Number(prompt("Dime un numero del 1 al 7"))

if (pregunta= 1) {
    alert ("Lunes")

} else if (pregunta==2){
    alert("Martes")
}else if (pregunta==3){
    alert("Miercoles")
}else if (pregunta==4){
    alert("Jueves")
}else if (pregunta==5){
    alert("Viernes")
}else if (pregunta==6){
    alert("Sabado")
}else {
alert("Domingo")
}

//6)
let numero6= Number(prompt("Dime un numero"))
let resultado1= numero6/3
let resultado2= numero6/5
if ((resultado1==0) && (resultado2==0)) {
    alert("tu numero es divisible por 3 y 5")
} else {
    alert("Tu numero no es divisible por 3 y 5")
}

 //7)
 let numero100 = Number(prompt("Ingresa un numero ")) 
if ((numero100>=1) || (numero100<=0) &&( numero100<=100)) {
    alert("Tu numero es positivo y menor a 100 ")
} else {
    alert("Tu numero no es positivo o es mayor a 100")
}

//8)
let edad =Number(prompt("Ingresa tu edad"))
let genero=prompt("Ingrese su genero")
if ((edad>=65) && (genero=="Masculino")) {
    alert()
} else {
    alert("No podes jubilarte")
} if ((edad=60) && (genero= "femenino")){
    alert("podes jubilarte")
}else{
    alert("no podes jubilarte")
}

//9)
let numeroA= Number(prompt("Escribe un numero"))
let numeroB= Number(prompt("Escribe un numero"))
let numeroC= Number(prompt("Escribe un numero"))
if (numeroA==numeroB) {
    alert(numeroA + "y"+ numeroB + "son iguales")
} else if (numeroB==numeroC) {
    alert(numeroB + "y" + numeroC + "son iguales")
}else{
    alert(numeroA + "y" + numeroC + "son iguales")
}

//10)
let numeroD=Number(prompt("Ingrese un numero"))
let resultadoA= numeroD/4
let resultadoB= numeroD/6
let resultadoC=numeroD/9
let resultadoD= numeroD/12
if ((resultadoA==0)  && (resultadoB==0) && (resultadoC==0) && (resultadoD==0)) {
    alert("tu numero es divisible por 4,6,9 y 12")
} else {
    alert("Tu numero no es divisible por 4,6,9 y 12")
}

//11)
let edad2=Number(prompt("Escribe tu edad"))
let edad3 = Number(prompt("Escribe otra edad"))
let edad4= Number(prompt("Estribe una ultima edad"))
if ((edad2>=18) && (edad3>=18) || (edad4>=18)) {
    alert("Es mayor de edad")
} else {
    alert("no es mayor de edad")
}