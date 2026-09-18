// Nota al margen: Decidi cambiar la estructura de mi proyecto, para no hacerlo tan rebuscado en cuanto a algunas tareas que quiero que pueda realizar, donde seguro mas adelante con los herramientas aprendidas pueda aplicarlo mejor. Como por ej. calcular descuentos de un determinado producto, con su determinado precio, de su determinada plataforma en casos de juegos, etc.
let openStore = true
let juegosPc = ["Stalker", "DayZ", "Hell let loose", "Silent Hill", "The path in to the Abyss"]

// Agrego un elemento al array al principio
juegosPc.unshift("Hell let loose: Vietnam")
// Agrego un elemento al array al final
juegosPc.push("Watch Dogs")

// validarNombre: Validar un nombre para evitar espacios vacios, puede usarse para nombres de clientes, o nombres de juegos
function validarNombre(nombre){
	while (nombre == null || nombre.trim().length < 4)
		nombre = prompt("------------ ✖️ Opcion no valida ✖️ ------------\n\nPor favor, escribí un nombre que contenga mas de 4 letras...")
	return nombre
}

// nombresEnMinusculaBusqueda: La idea de esto es generar un array completo en minuscula, para la hora de buscar un juego o x cosa, que el nombre se pueda tomar sin necesidad de tener las mayusculas
function nombresEnMinusculaBusqueda(juegosPc){
	let juegosMinuscula = []
	for(const juegoPc of juegosPc){
		let nombreJuego = juegoPc.toLowerCase()
		juegosMinuscula.push(nombreJuego)
	}
	return juegosMinuscula
}

// BuscadorDeJuego: Busca el juego mediante el parametro, utiliza la funcion nombresEnMinusculaBusqueda para evitar errores de busqueda. Por ejemplo buscar dayz o DAYZ cuando el juego en el array se llama "DayZ". Por otra parte mediante un if/else busca el juego
function buscadorDeJuego(nombreJuego){
	let juegosPcMin = nombresEnMinusculaBusqueda(juegosPc)
	let juegoBuscadoMin = nombreJuego.toLowerCase()

	if (juegosPcMin.includes(juegoBuscadoMin) == true){
		let posicion = juegosPcMin.indexOf(juegoBuscadoMin) + 1
		alert("------------ 🗣️ ¡Juego encontrado! 🗣️ ------------\n\nEl titulo " + nombreJuego + " se cuentra en la posición Nro: " + posicion + " de nuestra biblioteca!") 
	}else{
		alert("------------ 😒 Lo sentimos... 😒 ------------\n\nEl titulo de " + nombreJuego + " no se encuentra disponible en nuestra biblioteca en estos momentos")
	}
}

// Recorrer juegos Pc: Esta funcion sirve para recorrer el array de juegos dando un salto en blanco para cada uno, creo el array mensajeFinal para que al mostrarlo se vea como si fuese una columna
function recorrerJuegosPc(juegosPc){
	let mensajeFinal = ""
	for(const juegoPc of juegosPc){
		let posicionJuego = juegosPc.indexOf(juegoPc) + 1
		console.log("Titulo " + posicionJuego + ": " + juegoPc)
		mensajeFinal += "\nTitulo " + posicionJuego + ": 🏷️ " + juegoPc
	}
	return mensajeFinal
}

// Edita el array de juegos, lo intente hacer lo mas interactivo y demostrativo posible, para preguntar si esta seguro el usuario de realizar un cambio y demotrar que se modifico
function editorDeBiblioteca(juegoPc){
	let nroTituloAEditar = parseInt(prompt("Biblioteca de juegos" + recorrerJuegosPc(juegoPc) + "\n Que titulo deseas editar?"))

	let actual = juegoPc[nroTituloAEditar - 1]
	let reemplazo = prompt("Porque titulo vas a reemplazar a " + juegoPc[nroTituloAEditar - 1] + "?")
	reemplazo = validarNombre(reemplazo)

	let opcion = parseInt(prompt("Estas por reemplazar el titulo de " + juegoPc[nroTituloAEditar - 1] + " por " + reemplazo + ", deseaas continuar?\n\n1. Si\n2. No"))

	switch (opcion){
		case 1:
			juegoPc.splice(nroTituloAEditar - 1, 1, reemplazo)
			console.log(juegoPc)
			break
		case 2:
			break
		default:
			alert("------------ ✖️ Opcion no valida ✖️ ------------")
			break
	}
	alert("Modificación exitosa! " + reemplazo + " ahora se encuentra en el lugar de " + actual)
	return juegoPc
}

let nombreCliente = prompt("------------ 🎮 CheckOut Games 🎮 ------------\n\nBienvenido a CheckOut Games! Decinos tu nombre")
nombreCliente = validarNombre(nombreCliente)

alert("------------ 🎮 CheckOut Games 🎮 ------------\n\nBuenas " + nombreCliente + "! A continuación de brindamos nuestra biblioteca de juegos.\n\n👌¡BUENAS NOTICIAS! Llego " + juegosPc[0] + " a CheckOut Games!\n😤 Malas noticias... Se agoto del stock el titulo " + juegosPc[juegosPc.length - 1] + ", pronto lo tendremos de vuelta...")

// Quito un elemento del final de array, como si se hubiera agotado del stock
juegosPc.pop()

// while de menu con un flag llamada openStore, cundo la bandera esta en V, la tienda sigue abierta. Dentro hay un switch, lo use porque me parecia mas prolijo que un if, else, else if. Achique mi menu como me recomendaron en la anterior devolucion, y lo simplifique un poco para poder darle mas forma cuando aprendamos cosas mas complejas
while(openStore == true){
	let opcionMenu = parseInt(prompt("------------ 🎮 CheckOut Games 🎮 ------------\n\nSelecciona la opción deseada\n1. Buscar un juego de la biblioteca 🔎\n2. Ver biblioteca de juegos disponibles 📚\n3. Editar biblioteca ✏️\n4. Salir ↘️"))
	switch (opcionMenu){
		case 1:
			let buscarJuego = prompt("------------ 🔍 CheckOut Games 🔎 ------------\n\nIngresa el nombre del juego que estas buscando")
			buscarJuego = validarNombre(buscarJuego)
			buscadorDeJuego(buscarJuego)
			break
		case 2:
			alert("----------- 📚 Biblioteca de juego 📚 ------------\n\n" + recorrerJuegosPc(juegosPc))
			break
		case 3:
			juegosPc = editorDeBiblioteca(juegosPc)
			break
		case 4:
			alert("------------ 👋 CheckOut Games 👋 ------------\n\nGracias por visitar la tienda de CheckOut Games " + nombreCliente + "! Hasta pronto")
			openStore = false
			break
		default:
			alert("------------ ✖️ Opcion no valida ✖️ ------------")
	}
}