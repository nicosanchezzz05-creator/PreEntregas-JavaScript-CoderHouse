let openStore = true
let compraTotal = 0
const precioJuegoPc1 = 45
const precioJuegoPc2 = 28
const precioJuegoPc3 = 55
const nombreJuegoPc1 = "S.T.A.L.K.E.R Shadow of Chernobyl"
const nombreJuegoPc2 = "DayZ"
const nombreJuegoPc3 = "Hell leet loose"

const precioJuegoPlay1 = 20
const precioJuegoPlay2 = 35
const precioJuegoPlay3 = 80
const nombreJuegoPlay1 = "Call of duty Black Ops 4"
const nombreJuegoPlay2 = "God of War"
const nombreJuegoPlay3 = "Dead by daylight"

const descuentoEfectivoA = (compraTotal, descuento) => compraTotal - ((compraTotal * descuento) / 100)

function saludar(nombre){
	alert("Bienvenido a CheckOut Games " + nombre + "! Ingresa tu nombre y mira lo disponible")
}

function juegoComprado(juego, compraTotal){
	alert("Compraste " + juego + ". Tu compra va sumando: " + compraTotal + " USD.")
}

function sumarCarrito(compra, juego){
	return compra += juego
}

function validar(respuesta, argumento1, argumento2,mensaje){
	while (respuesta != argumento1 && respuesta != argumento2){
		respuesta = prompt(mensaje)
	}
}

function validarNombre(nombreCliente){
	while (nombreCliente == null || nombreCliente.length < 4)
		nombreCliente = prompt("Por favor, escribi un nombre que contenga mas de 4 letras...")
}

let nombreCliente = prompt("Bienvenido a CheckOut Games, Decinos tu nombre")
validarNombre(nombreCliente)
console.log("Cliente registrado: "+ nombreCliente)
saludar(nombreCliente)

let consola = parseInt(prompt("Juegos de que platafoma buscabas?\n1. PC \n2. PlaySation"))

while(openStore == true){
	if (consola == 1){
		let juegosPc = parseInt(prompt("Juegos disponibles para PC\n1. S.T.A.L.K.E.R Shadow of Chernobyl - 45 USD\n2. DayZ - 28USD\n3. Hell leet loose - 55USD\n4. Salir del menu de PC"))

		switch (juegosPc){
			case 1:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPc1)
				juegoComprado(nombreJuegoPc1, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 2:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPc2)
				juegoComprado(nombreJuegoPc2, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 3:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPc3)
				juegoComprado(nombreJuegoPc3, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 4:
				break
			default:
				console.log("Opcion incorrecta, volve a intentarlo")
		}

	}else if (consola == 2){
		let juegosPlay = parseInt(prompt("Juegos disponibles para PlayStation\n1. Call of duty Black Ops 4 - 20 USD\n2. God of War - 35USD\n3. Dead by daylight - 80USD\n4. Salir del menu de PlayStation"))
		
		switch (juegosPlay){
			case 1:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPlay1)
				juegoComprado(nombreJuegoPlay1, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 2:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPlay2)
				juegoComprado(nombreJuegoPlay2, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 3:
				compraTotal = sumarCarrito(compraTotal, precioJuegoPlay3)
				juegoComprado(nombreJuegoPlay3, compraTotal)
				console.log("Compra total: " + compraTotal + " USD")
				break
			case 4:
				break
			default:
				console.log("Opcion incorrecta, volve a intentarlo")
		}

	}else{
		console.log("Opcion incorrecta")
	}
	
	let respuesta = prompt("Desea continuar en la tienda? 1. Si | 2. No")
	validar(respuesta, "1", "2", "Opcion no valida. Quiere seguir en la tienda? 1. Si | 2. No")

	if (respuesta == 2){
		alert("Gracias por visitar la tienda de CheckOut Games " + nombreCliente + "!. Tu compra total es de " + compraTotal + " USD, pasa a retirarlo al local de 10:00hs a 19:00hs.\n¡IMPORTANTE!\nSi pagas en efectivo, tenes un descuento del 10%, te quedaria a abonar el total de: " + descuentoEfectivoA(compraTotal, 10) + " USD, yo que vos lo pienso...")
		console.log("TICKET DE COMPRA\nNombre del cliente: " + nombreCliente + "\nCompra total sin descuento: " + compraTotal + "\nCompra total con descuento del 10%: " + descuentoEfectivoA(compraTotal, 10))
		openStore = false

	}else if(respuesta == 1){
		consola = parseInt(prompt("Elegi la plataforma | 1. PC - 2. PlaySatation"))
	}

}