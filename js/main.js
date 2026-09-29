let openStore = true
let acumuladoEnCarrito = 0
let carrito = []

class BibliotecaDeJuegos{
	constructor(nombreJuego, categoria, precio, stock){
		this.nombreJuego = nombreJuego,
		this.categoria = categoria,
		this.precio = precio,
		this.stock = stock
	}
}

const juego1 = new BibliotecaDeJuegos("Stalker", "Accion", 60.00, 4)
const juego2 = new BibliotecaDeJuegos("Dayz", "Supervivencia", 39.00, 6)
const juego3 = new BibliotecaDeJuegos("Silent Hill", "Terror", 50.00, 2)
const juego4 = new BibliotecaDeJuegos("The path in to the abyss", "Accion", 120.00, 2)
let juegosPc = [juego1, juego2, juego3, juego4]

function validarNombre(nombre){
	while (nombre == null || nombre.length < 4)
		nombre = prompt("------------ ✖️ Opcion no valida ✖️ ------------\n\nPor favor, escribí un nombre que contenga mas de 4 letras...")
	return nombre
}

function validarOpcionBiblioteca(opcion, desde, hasta, mensaje){
	while (opcion < desde || opcion > hasta)
		opcion = prompt("------------ ✖️ Opcion no valida ✖️ ------------\n\nPor favor, elegi " + mensaje + " entre el " + desde + " y el " + hasta + "\n" + recorrerJuegosPc(juegosPc)) 
	return opcion
}            

function validarOpcionMenu(opcion, desde, hasta, mensaje){
	while (opcion < desde || opcion > hasta)
		opcion = parseInt(prompt("------------ ✖️ Opcion no valida ✖️ ------------\n\nPor favor, elegi una opcion entre el " + desde + " y el " + hasta + "\n" + mensaje))
	return opcion
}

function nombresEnMinusculaBusqueda(juegosPc){
	let juegosMinuscula = []
	for(const juegoPc of juegosPc){
		let nombreJuego = juegoPc.nombreJuego.toLowerCase()
		juegosMinuscula.push(nombreJuego)
	}
	return juegosMinuscula
}

function buscadorDeJuego(nombreJuego){
	let juegosPcMin = nombresEnMinusculaBusqueda(juegosPc)
	let juegoBuscadoMin = nombreJuego.toLowerCase()

	if (juegosPcMin.includes(juegoBuscadoMin) == true){
		alert("------------ 🗣️ ¡Juego encontrado! 🗣️ ------------\n\nEl titulo " + nombreJuego + " se cuentra en nuestra biblioteca!") 
	}else{
		alert("------------ 😒 Lo sentimos... 😒 ------------\n\nEl titulo de " + nombreJuego + " no se encuentra disponible en nuestra biblioteca en estos momentos")
	}
}

function recorrerJuegosPc(juegosPc){
	mensajeFinal = []
	for(const juegoPc of juegosPc){
		let posicionJuego = juegosPc.indexOf(juegoPc) + 1
		let titulo = "\nTitulo " + posicionJuego + ": 🏷️ " + juegoPc.nombreJuego + " | Precio: $" + juegoPc.precio + " | Stock: " + juegoPc.stock
		mensajeFinal += titulo
	}
	return mensajeFinal
}

function agregarVenta(juegosPc, añadirAlCarrito){
	if (juegosPc[añadirAlCarrito - 1].stock == 0){
		alert("Lo sentimos " + nombreCliente + ", aun no tenemos stock dispobible del titulo " + juegosPc[añadirAlCarrito - 1].nombreJuego)
	}else{
		acumuladoEnCarrito += juegosPc[añadirAlCarrito - 1].precio
		juegosPc[añadirAlCarrito - 1].stock -= 1
		carrito.push(juegosPc[añadirAlCarrito - 1])

	}return carrito
}

function quitarVenta(quitarDelCarrito, carrito){
	acumuladoEnCarrito -= carrito[quitarDelCarrito - 1].precio
	carrito[quitarDelCarrito - 1].stock += 1
	carrito.splice(quitarDelCarrito - 1, 1)
	return carrito
}

function recorrerCarrito(carrito){
	let mensajeFinal = ""
	let posicionJuego = 0
	for(const item of carrito){
		posicionJuego += 1
		let titulo = "\nItem " + posicionJuego + ": 🏷️ " + item.nombreJuego + " | Precio: $" + item.precio
		mensajeFinal += titulo
	}return mensajeFinal
}

//CODIGO DE DESCUENTO DEL 10%
const codigoDeDescuento = "COMPRAGAMER10"

function descuento(acumuladoEnCarrito){
	acumuladoEnCarrito -= (acumuladoEnCarrito * 10) / 100
	return acumuladoEnCarrito
}

function finalzarCompra(acumuladoEnCarrito){
	if (acumuladoEnCarrito > 0){
		let finalizar = parseInt(prompt("Tenes un carrito de un total de " + acumuladoEnCarrito + "\nSi tenes un cupon de descuento, podes aplicarlo al total de tu compra! \n1. Tengo descuento! \n2. No tengo cupon"))
		finalizar = validarOpcionMenu(finalizar, 1, 2, "\n1. Tengo descuento! \n2. No tengo cupon")
		switch (finalizar){
			case 1:
				let ingresarDescuento = prompt("Ingresa tu cupon de descuento")
				ingresarDescuento = validarNombre(ingresarDescuento)
				if (codigoDeDescuento == ingresarDescuento){
					alert("Se agrego el descuento del 10% con tu cupon " + codigoDeDescuento + " en tu total de $" + acumuladoEnCarrito + ". Solo te queda por pagar $" + descuento(acumuladoEnCarrito) + "\nQue disfrutes tu juego" + nombreCliente +  "! Hasta luego👋\nDetalle de compra:\n" + recorrerCarrito(carrito) + "\nTotal: $" + acumuladoEnCarrito + "\nDescuento del 10%: $" + (acumuladoEnCarrito*10)/100 + "\nPrecio final a pagar: $" + descuento(acumuladoEnCarrito))
					openStore = false
				}else{
					alert("El codigo de descuento no existe")
				}
				break
			case 2:
				alert("Ya procesamos tu compra de un total de $" + acumuladoEnCarrito  + "\nQue disfrutes tu juego " + nombreCliente +  "! Hasta luego 👋\nDetalle de compra:\n" + recorrerCarrito(carrito) + "\nPrecio final a pagar: $" + acumuladoEnCarrito)
				openStore = false
				break
				
		}
	}else{
		alert("------------ 👋 CheckOut Games 👋 ------------\n\nGracias por visitar la tienda de CheckOut Games " + nombreCliente + "! Hasta pronto")
		openStore = false
	}			
}

let nombreCliente = prompt("------------ 🎮 CheckOut Games 🎮 ------------\n\nBienvenido a CheckOut Games! Decinos tu nombre")
nombreCliente = validarNombre(nombreCliente)
alert("Buenas " + nombreCliente + "!!! Bienvenido a CheckOut Games ")

while(openStore == true){
	let opcionMenu = parseInt(prompt("------------ 🎮 CheckOut Games 🎮 ------------\n\nSelecciona la opción deseada\n1. Buscar un juego de la biblioteca 🔎\n2. Ver biblioteca de juegos disponibles 📚\n3. Comprar Juego\n4. Ver mi carrito\n5. Finalizar compra\n6. Salir ↘️"))
	switch (opcionMenu){
		// Buscar un juego de la biblioteca
		case 1:
			let buscarJuego = prompt("------------ 🔍 CheckOut Games 🔎 ------------\n\nIngresa el nombre del juego que estas buscando")
			buscarJuego = validarNombre(buscarJuego)
			buscadorDeJuego(buscarJuego)
			break
		// Ver biblioteca de juegos disponibles
		case 2:
			alert("----------- 📚 Biblioteca de juego 📚 ------------\n\n" + recorrerJuegosPc(juegosPc))
			break
		// Comprar Juego
		case 3:
			let añadirAlCarrito = parseInt(prompt("------------  Zona de compra  ------------\n" + recorrerJuegosPc(juegosPc) + "\nQue titulo deseas comprar? Ingresa su numero"))
			añadirAlCarrito = validarOpcionBiblioteca(añadirAlCarrito, 1, 4, "un titulo")
			agregarVenta(juegosPc, añadirAlCarrito)
			if (juegosPc[añadirAlCarrito - 1].stock !== 0)
				alert("Se añadio al carrito " + juegosPc[añadirAlCarrito - 1].nombreJuego + "\nTotal acumulado: $" + acumuladoEnCarrito) 
			break
		// Ver mi carrito
		case 4:
			if (acumuladoEnCarrito > 0){
				let modificarCarrito = parseInt(prompt("Tu carrito lleva un total acumulado de : $" + acumuladoEnCarrito + "\n Tus compras fueron:\n" + recorrerCarrito(carrito) + "\nDeseas quitar algun item?\n1. Si\n2. No"))
				modificarCarrito = validarOpcionMenu(modificarCarrito, 1, 2, "\nDeseas quitar algun item?\n1. Si\n2. No")
				if (modificarCarrito == 1){
					let eliminarItemDelCarrito = parseInt(prompt("Que item deseas eliminar?\n" + recorrerCarrito(carrito)))
					quitarVenta(eliminarItemDelCarrito, carrito)
				}

			}else{
				alert("Aun no tenes nada agregado al carrito!")
			}
			break
		// Finalizar compra
		case 5:
			finalzarCompra(acumuladoEnCarrito)
			break
		// Salir
		case 6:
			if (acumuladoEnCarrito > 0){
				let salir = parseInt(prompt("Estas por salir con juegos en tu carrito, deseas salir sin finalizar tu compra?\n1. Si\n2. No"))
				salir = validarOpcionMenu(salir, 1 , 2, "\nDeseas salir sin finalizar tu compra?\n1. Si\n2. No")
				if (salir == 1){
					alert("------------ 👋 CheckOut Games 👋 ------------\n\nGracias por visitar la tienda de CheckOut Games " + nombreCliente + "! Hasta pronto")
					openStore = false
					break
				}else{
					break
				}
			}else{
				alert("------------ 👋 CheckOut Games 👋 ------------\n\nGracias por visitar la tienda de CheckOut Games " + nombreCliente + "! Hasta pronto")
				openStore = false
				break
			}
		default:
			alert("------------ ✖️ Opcion no valida ✖️ ------------")
			break
	}
}